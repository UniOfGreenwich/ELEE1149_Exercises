# Detailed COCOMO Cost Drivers and Multipliers

Detailed COCOMO (COCOMO II) adds more precision to the estimation process by considering each phase of the software development lifecycle (Design, Code, Test, etc.). It includes additional cost drivers and refines the effort estimation based on these phases.

## Cost Drivers for Detailed COCOMO

Detailed COCOMO uses more comprehensive cost drivers. Some of these cost drivers overlap with the intermediate model, but others are introduced to account for modern development practices.

### 1. Product Attributes

| Cost Driver                        | Very Low | Low   | Nominal | High  | Very High | Extra High |
|-------------------------------------|----------|-------|---------|-------|-----------|------------|
| **Required Software Reliability (RELY)**   | 0.75     | 0.88  | 1.00    | 1.15  | 1.40      | -          |
| **Database Size (DATA)**            | -        | 0.94  | 1.00    | 1.08  | 1.16      | -          |
| **Product Complexity (CPLX)**       | 0.70     | 0.85  | 1.00    | 1.15  | 1.30      | 1.65       |
| **Documentation Match to Life Cycle Needs (DOCU)** | 0.81     | 0.91  | 1.00    | 1.11  | 1.23      | -          |
| **Architecture/Risk Resolution (RESL)** | -        | -     | 1.00    | 1.10  | 1.26      | 1.55       |

### 2. Platform Attributes

| Cost Driver                        | Very Low | Low   | Nominal | High  | Very High | Extra High |
|-------------------------------------|----------|-------|---------|-------|-----------|------------|
| **Platform Volatility (PVOL)**      | -        | -     | 1.00    | 1.07  | 1.15      | 1.30       |

### 3. Personnel Attributes

| Cost Driver                        | Very Low | Low   | Nominal | High  | Very High | Extra High |
|-------------------------------------|----------|-------|---------|-------|-----------|------------|
| **Analyst Capability (ACAP)**       | 1.42     | 1.17  | 1.00    | 0.86  | 0.71      | -          |
| **Programmer Capability (PCAP)**    | 1.34     | 1.15  | 1.00    | 0.88  | 0.76      | -          |
| **Personnel Continuity (PCON)**     | 1.29     | 1.12  | 1.00    | 0.90  | 0.81      | -          |
| **Application Experience (AEXP)**   | 1.22     | 1.10  | 1.00    | 0.88  | 0.81      | -          |
| **Platform Experience (PEXP)**      | 1.19     | 1.09  | 1.00    | 0.91  | 0.85      | -          |
| **Language and Tool Experience (LTEX)** | 1.20     | 1.09  | 1.00    | 0.91  | 0.84      | -          |

### 4. Project Attributes

| Cost Driver                        | Very Low | Low   | Nominal | High  | Very High | Extra High |
|-------------------------------------|----------|-------|---------|-------|-----------|------------|
| **Use of Software Tools (TOOL)**    | 1.17     | 1.09  | 1.00    | 0.90  | 0.78      | -          |
| **Multi-Site Development (SITE)**   | 1.22     | 1.09  | 1.00    | 0.93  | 0.86      | 0.80       |
| **Required Development Schedule (SCED)** | 1.43     | 1.14  | 1.00    | 1.00  | 1.00      | 1.00       |

### Additional Cost Drivers in Detailed COCOMO:
- **Precedentedness (PREC)**: Reflects the familiarity of the project team with similar projects.
- **Development Flexibility (FLEX)**: Measures how much flexibility is allowed in meeting the software requirements.
- **Team Cohesion (TEAM)**: Considers how well the project team works together.

## Example of Calculating EAF in Detailed COCOMO:

Assume the following cost drivers:
- **Required Software Reliability (RELY)** = 1.15 (High)
- **Database Size (DATA)** = 1.00 (Nominal)
- **Programmer Capability (PCAP)** = 0.88 (High)
- **Use of Software Tools (TOOL)** = 0.90 (High)
- **Multi-Site Development (SITE)** = 0.93 (High)

Then, the **EAF** would be:

\\[
\text{EAF} = 1.15 \times 1.00 \times 0.88 \times 0.90 \times 0.93 \approx 0.84
\\]

This **EAF** indicates that the actual effort required will be less than the nominal estimate.


----

## Questions

~~~admonish question title='### Question 1: Small Organic Project'

You are tasked with estimating the effort for a small **Organic** software project with an estimated size of **10 KLOC** (thousand lines of code). 

**Cost Drivers:**

- **Required Software Reliability (RELY)**: 1.15 (High)
- **Programmer Capability (PCAP)**: 0.86 (High)
- **Use of Software Tools (TOOL)**: 0.91 (High)

The **Effort Adjustment Factor (EAF)** is calculated as:

\\[\text{EAF} = 1.15 \times 0.86 \times 0.91 \approx 0.90\\]

\\(
\text{Effort (person-months)} = a \times (KLOC)^b
\\)

\\(
\text{Development Time (months)} = c \times (\text{Effort})^d
\\)

Constants for Organic projects:
- a = 2.4
- b = 1.05
- c = 2.5
- d = 0.38

~~~

**Tasks:**

~~~admonish success collapsible=true title='Calculate the effort (in person-months).'

**Effort (in person-months):**
\\[\text{Effort} = 2.4 \times (10)^{1.05} \times 0.90 \approx 22.8 \text{ person-months}\\]

~~~

~~~admonish success collapsible=true title='Estimate the development time (in months).'


**Development Time:**
\\[\text{Development Time} = 2.5 \times (22.8)^{0.38} \approx 10.4 \text{ months}\\]

~~~

---

~~~admonish question title='### Question 2: Medium Semi-Detached Project'

A medium-sized **Semi-Detached** project is estimated to have **50 KLOC**.

**Cost Drivers:**

- **Product Complexity (CPLX)**: 1.30 (Very High)
- **Analyst Capability (ACAP)**: 0.86 (High)
- **Required Development Schedule (SCED)**: 1.10 (Very High)

The **EAF** is calculated as:
\\[\text{EAF} = 1.30 \times 0.86 \times 1.10 \approx 1.23\\]

\\(
\text{Effort (person-months)} = a \times (KLOC)^b
\\)

\\(
\text{Development Time (months)} = c \times (\text{Effort})^d
\\)

Constants for Semi-Detached projects:
- a = 3.0
- b = 1.12
- c = 2.5
- d = 0.35

~~~

**Tasks:**

~~~admonish success collapsible=true title='Calculate the effort (in person-months).'

**Effort (in person-months):**
\\[\text{Effort} = 3.0 \times (50)^{1.12} \times 1.23 \approx 207.3 \text{ person-months}\\]

~~~

~~~admonish success collapsible=true title='Estimate the development time (in months).'

**Development Time:**
\\[\text{Development Time} = 2.5 \times (207.3)^{0.35} \approx 18.9 \text{ months}\\]

~~~

---

~~~admonish question title='### Question 3: Large Embedded Project'

A large **Embedded** project is estimated at **200 KLOC**.

**Cost Drivers:**
- **Platform Volatility (PVOL)**: 1.15 (Very High)
- **Programmer Capability (PCAP)**: 0.88 (High)
- **Application Experience (AEXP)**: 0.91 (High)

The **EAF** is calculated as:
\\[\text{EAF} = 1.15 \times 0.88 \times 0.91 \approx 0.92\\]

\\(
\text{Effort (person-months)} = a \times (KLOC)^b
\\)

\\(
\text{Development Time (months)} = c \times (\text{Effort})^d
\\)

Constants for Embedded projects:
- a = 3.6
- b = 1.20
- c = 2.5
- d = 0.32

~~~

**Tasks:**

~~~admonish success collapsible=true title='Calculate the effort (in person-months).'

**Effort (in person-months):**
\\[\text{Effort} = 3.6 \times (200)^{1.20} \times 0.92 \approx 1412.1 \text{ person-months}\\]

~~~

~~~admonish success collapsible=true title='Estimate the development time (in months).'

**Development Time:**
\\[\text{Development Time} = 2.5 \times (1412.1)^{0.32} \approx 32.3 \text{ months}\\]

~~~

---

~~~admonish question title='### Question 4: Tiny Organic Project'

A tiny **Organic** project is estimated at **2 KLOC**.

**Cost Drivers:**

- **Required Software Reliability (RELY)**: 1.10 (High)
- **Use of Modern Software Tools (TOOL)**: 0.91 (High)
- **Team Cohesion (TEAM)**: 0.92 (High)

The **EAF** is calculated as:
\\[\text{EAF} = 1.10 \times 0.91 \times 0.92 \approx 0.92\\]

\\(
\text{Effort (person-months)} = a \times (KLOC)^b
\\)

\\(
\text{Development Time (months)} = c \times (\text{Effort})^d
\\)

Constants for Organic projects:
- a = 2.4
- b = 1.05
- c = 2.5
- d = 0.38

~~~

**Tasks:**

~~~admonish success collapsible=true title='Calculate the effort (in person-months).'

**Effort (in person-months):**
\\[\text{Effort} = 2.4 \times (2)^{1.05} \times 0.92 \approx 4.8 \text{ person-months}\\]

~~~

~~~admonish success collapsible=true title='Estimate the development time (in months).'

**Development Time:**
\\[\text{Development Time} = 2.5 \times (4.8)^{0.38} \approx 6.3 \text{ months}\\]

~~~

---

~~~admonish question title='### Question 5: Medium Semi-Detached Project'

A **Semi-Detached** project has an estimated size of **30 KLOC**.

**Cost Drivers:**
- **Required Development Schedule (SCED)**: 1.04 (High)
- **Analyst Capability (ACAP)**: 0.86 (High)
- **Language and Tool Experience (LTEX)**: 0.91 (High)

The **EAF** is calculated as:
\\[\text{EAF} = 1.04 \times 0.86 \times 0.91 \approx 0.81\\]

\\(
\text{Effort (person-months)} = a \times (KLOC)^b
\\)

\\(
\text{Development Time (months)} = c \times (\text{Effort})^d
\\)

Constants for Semi-Detached projects:
- a = 3.0
- b = 1.12
- c = 2.5
- d = 0.35

~~~

**Tasks:**

~~~admonish success collapsible=true title='Calculate the effort (in person-months).'

**Effort (in person-months):**
\\[\text{Effort} = 3.0 \times (30)^{1.12} \times 0.81 \approx 79.6 \text{ person-months}\\]

~~~

~~~admonish success collapsible=true title='Estimate the development time (in months).'

**Development Time:**
\\[\text{Development Time} = 2.5 \times (79.6)^{0.35} \approx 13.7 \text{ months}\\]

~~~

---

~~~admonish question title='### Question 6: Large Embedded Project'

An **Embedded** project has an estimated size of **150 KLOC**.

**Cost Drivers:**
- **Required Software Reliability (RELY)**: 1.15 (High)
- **Product Complexity (CPLX)**: 1.30 (Very High)
- **Programmer Capability (PCAP)**: 0.86 (High)

The **EAF** is calculated as:

\\[\text{EAF} = 1.15 \times 1.30 \times 0.86 \approx 1.28\\]

\\(
\text{Effort (person-months)} = a \times (KLOC)^b
\\)

\\(
\text{Development Time (months)} = c \times (\text{Effort})^d
\\)

Constants for Embedded projects:
- a = 3.6
- b = 1.20
- c = 2.5
- d = 0.32

~~~

**Tasks:**

~~~admonish success collapsible=true title='Calculate the effort (in person-months).'

**Effort (in person-months):**
\\[\text{Effort} = 3.6 \times (150)^{1.20} \times 1.28 \approx 1552.7 \text{ person-months}\\]

~~~

~~~admonish success collapsible=true title='Estimate the development time (in months).'


**Development Time:**
\\[\text{Development Time} = 2.5 \times (1552.7)^{0.32} \approx 33.5 \text{ months}\\]

~~~

----

The Detailed COCOMO model is more comprehensive and refined than its predecessors, offering more accurate estimates as it accounts for modern software development challenges and practices.