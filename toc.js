// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="Introduction.html">Introduction</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Workshops/Labs/Quizzes</li><li class="chapter-item expanded "><a href="Lab_1/Lab_1.html"><strong aria-hidden="true">1.</strong> Lab 1</a></li><li class="chapter-item expanded "><a href="Lab_2/Lab_2.html"><strong aria-hidden="true">2.</strong> Lab 2</a></li><li class="chapter-item expanded "><a href="Lab_3/Lab_3.html"><strong aria-hidden="true">3.</strong> Lab 3</a></li><li class="chapter-item expanded "><a href="Lab_4/Lab_4.html"><strong aria-hidden="true">4.</strong> Lab 4</a></li><li class="chapter-item expanded "><a href="Lab_5/Lab_5.html"><strong aria-hidden="true">5.</strong> Lab 5</a></li><li class="chapter-item expanded "><a href="Lab_6/Lab_6.html"><strong aria-hidden="true">6.</strong> Lab 6</a></li><li class="chapter-item expanded "><a href="Lab_7/Lab_7.html"><strong aria-hidden="true">7.</strong> Lab 7</a></li><li class="chapter-item expanded "><a href="Lab_8/Lab_8.html"><strong aria-hidden="true">8.</strong> Lab 8</a></li><li class="chapter-item expanded "><a href="Lab_9/Lab_9.html"><strong aria-hidden="true">9.</strong> Lab 9</a></li><li class="chapter-item expanded "><a href="Lab_10/Lab_10.html"><strong aria-hidden="true">10.</strong> Lab 10</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="UML-Interaction-Diagrams/UML-Interaction-Diagrams.html"><strong aria-hidden="true">10.1.</strong> UML - Interaction Diagrams</a></li><li class="chapter-item expanded "><a href="UML-Class-Diagrams/UML-Class-Diagrams.html"><strong aria-hidden="true">10.2.</strong> UML - Class Diagrams</a></li><li class="chapter-item expanded "><a href="UML-Case-Diagrams/UML-Case-Diagrams.html"><strong aria-hidden="true">10.3.</strong> UML - Case Diagrams</a></li></ol></li><li class="chapter-item expanded "><a href="Lab_11/Lab_11.html"><strong aria-hidden="true">11.</strong> Lab 11</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="UML-Activity-Diagrams/UML-Activity-Diagrams.html"><strong aria-hidden="true">11.1.</strong> UML - Activity Diagrams</a></li><li class="chapter-item expanded "><a href="UML-State-Diagrams/UML-State-Diagrams.html"><strong aria-hidden="true">11.2.</strong> UML - State Diagrams</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">12.</strong> Lab 12</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">13.</strong> Lab 13</div></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Git</li><li class="chapter-item expanded "><a href="myFirstRepository/myFirstRepository.html"><strong aria-hidden="true">14.</strong> My First Repository</a></li><li class="chapter-item expanded "><a href="BashAliases/BashAliases.html"><strong aria-hidden="true">15.</strong> Bash Aliases</a></li><li class="chapter-item expanded "><a href="BranchingModel/BranchingModel.html"><strong aria-hidden="true">16.</strong> Branching-Strategy</a></li><li class="chapter-item expanded "><a href="OneFlow/OneFlow.html"><strong aria-hidden="true">17.</strong> Git Oneflow</a></li><li class="chapter-item expanded "><a href="AntiPatterns/AntiPatterns.html"><strong aria-hidden="true">18.</strong> Anti Patterns</a></li><li class="chapter-item expanded "><a href="ContinousDeployment/ContinousDeployment.html"><strong aria-hidden="true">19.</strong> Continous Deployment</a></li><li class="chapter-item expanded "><a href="ReleaseDeployment/ReleaseDeployment.html"><strong aria-hidden="true">20.</strong> Release Deployment</a></li><li class="chapter-item expanded "><a href="Migration/Migration.html"><strong aria-hidden="true">21.</strong> Migration</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
