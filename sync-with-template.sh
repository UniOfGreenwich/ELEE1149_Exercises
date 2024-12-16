#!/usr/bin/env bash


# Variables for template repository details
SOURCE_REPO_URL="https://github.com/uniofgreenwich/MD_Book_Template.git"
SOURCE_BRANCH="main"
OLDVERSION=$(grep -w Version < README.md | cut -f 4 -d ' ')
NEWVERSION=''

# setup-config.sh
echo "Setting up the .git/config file with template repository..."

# Add 'template' remote if it doesn't exist
if ! git remote get-url template &>/dev/null; then
  echo "Adding 'template' remote to .git/config..."
  git remote add template "$SOURCE_REPO_URL"
  git config remote.template.fetch "+refs/heads/*:refs/remotes/template/*"
fi

# Fetch the latest changes from the template repository
echo "Fetching the latest changes from the template repository..."
git fetch template "$SOURCE_BRANCH"

# Create a temporary branch to avoid directly merging into the current branch
echo "Creating a temporary branch for selective merge..."
git checkout -b template-merge template/"$SOURCE_BRANCH"

# Reset HEAD to the original branch to begin selective merge
echo "Preparing for selective merge..."
git checkout -

# List of files and directories to merge
INCLUDE_FILES=(
  ".github/*"
  "README.md"
  "sync-with-template.sh"
  "theme/*"
)

# Merge or copy only specified files/directories from the template branch
for file in "${INCLUDE_FILES[@]}"; do
  echo "Processing $file..."
  if git diff --name-only template-merge -- "$file" &>/dev/null; then
    git checkout template-merge -- "$file"
  else
    echo "No changes for $file, skipping."
  fi
done

# Clean up the temporary branch
echo "Cleaning up temporary branch..."
git branch -D template-merge

# Stage and commit the merged changes
echo "Committing the merged changes..."
git add "${INCLUDE_FILES[@]}"

# Check if there are any changes to commit
if git diff --cached --quiet; then
  echo "No changes detected."
else
  # Grab the commit message from template Version: [0-9].[0-9].[0-9]
  NEWVERSION=$(grep -w Version < README.md | cut -f 4 -d ' ')

  # Message format works for upgrade and rollback
  git commit -m "template: from Version ${OLDVERSION:-0.0.0} to ${NEWVERSION}"
  echo "Changes committed."
fi

echo -e "Operation complete.\n"