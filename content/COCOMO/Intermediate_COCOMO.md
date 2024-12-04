
# Intermediate COCOMO Cost Drivers and Multipliers

In Intermediate COCOMO, the **Effort Adjustment Factor (EAF)** is calculated based on 15 cost drivers. Each driver has a rating that corresponds to a multiplier. These cost drivers are categorized into four groups.

## 1. Product Attributes

| Cost Driver                    | Very Low | Low   | Nominal | High  | Very High | Extra High |
|---------------------------------|----------|-------|---------|-------|-----------|------------|
| **Required Software Reliability (RELY)** | 0.75     | 0.88  | 1.00    | 1.15  | 1.40      | -          |
| **Database Size (DATA)**        | -        | 0.94  | 1.00    | 1.08  | 1.16      | -          |
| **Product Complexity (CPLX)**   | 0.70     | 0.85  | 1.00    | 1.15  | 1.30      | 1.65       |

## 2. Hardware Attributes

| Cost Driver                    | Very Low | Low   | Nominal | High  | Very High | Extra High |
|---------------------------------|----------|-------|---------|-------|-----------|------------|
| **Execution Time Constraint (TIME)** | -        | -     | 1.00    | 1.11  | 1.30      | 1.66       |
| **Main Storage Constraint (STOR)** | -        | -     | 1.00    | 1.06  | 1.21      | 1.56       |
| **Virtual Machine Volatility (VIRT)** | 0.87     | 0.94  | 1.00    | 1.10  | 1.15      | -          |
| **Turnaround Time (TURN)**      | -        | 0.87  | 1.00    | 1.07  | 1.15      | -          |

## 3. Personnel Attributes

| Cost Driver                    | Very Low | Low   | Nominal | High  | Very High | Extra High |
|---------------------------------|----------|-------|---------|-------|-----------|------------|
| **Analyst Capability (ACAP)**   | 1.46     | 1.19  | 1.00    | 0.86  | 0.71      | -          |
| **Programmer Capability (PCAP)** | 1.42     | 1.17  | 1.00    | 0.86  | 0.70      | -          |
| **Application Experience (AEXP)** | 1.29     | 1.13  | 1.00    | 0.91  | 0.82      | -          |
| **Platform Experience (PEXP)**  | 1.19     | 1.09  | 1.00    | 0.91  | 0.85      | -          |
| **Language and Tool Experience (LTEX)** | 1.20     | 1.09  | 1.00    | 0.91  | 0.84      | -          |

## 4. Project Attributes

| Cost Driver                    | Very Low | Low   | Nominal | High  | Very High | Extra High |
|---------------------------------|----------|-------|---------|-------|-----------|------------|
| **Use of Modern Software Practices (MODP)** | 1.24     | 1.10  | 1.00    | 0.91  | 0.82      | -          |
| **Use of Software Tools (TOOL)** | 1.24     | 1.10  | 1.00    | 0.91  | 0.83      | -          |
| **Required Development Schedule (SCED)** | 1.23     | 1.08  | 1.00    | 1.04  | 1.10      | -          |

## Example of Calculating EAF:

For example, assume the following ratings for the cost drivers:
- **Required Software Reliability (RELY)** = 1.15 (High)
- **Database Size (DATA)** = 1.00 (Nominal)
- **Product Complexity (CPLX)** = 1.15 (High)
- **Programmer Capability (PCAP)** = 0.86 (High)
- **Use of Software Tools (TOOL)** = 0.91 (High)

The **EAF** is calculated by multiplying the values of these drivers:

\\[
\text{EAF} = 1.15 	\cdot 1.00 	\cdot 1.15 	\cdot 0.86 	\cdot 0.91 \approx 1.01
\\]


----


## Questions

~~~admonish question title='### Question 1: Small Organic Project'

You are tasked with estimating the effort for a small **Organic** software project with an estimated size of **10 KLOC** (thousand lines of code).

**Cost Drivers:**
- **Required Software Reliability (RELY)**: 1.15 (High)
- **Programmer Capability (PCAP)**: 0.86 (High)
- **Use of Software Tools (TOOL)**: 0.91 (High)

The **Effort Adjustment Factor (EAF)** is calculated as:

\\[\text{EAF} = 1.15 \cdot 0.86 \cdot 0.91 \approx 0.90\\]

\\(
\text{Effort (person-months)} = a \cdot (KLOC)^b \cdot EAF
\\)

Constants for Organic projects:
- a = 2.4
- b = 1.05

~~~

**Tasks:**

~~~admonish success collapsible=true title='Calculate the effort (in person-months).'

**Effort (in person-months):**

\\[\text{Effort} = 2.4 \cdot (10)^{1.05} \cdot 0.90 \approx 22.8 \text{ person-months}\\]

~~~

~~~admonish success collapsible=true title='Estimate the development time (in months).'
 
**Development Time:**

\\[\text{Development Time} = 2.5 \cdot (22.8)^{0.38} \approx 10.4 \text{ months}\\]

~~~

---

~~~admonish question title='### Question 2: Medium Semi-Detached Project'

A medium-sized **Semi-Detached** project is estimated to have **50 KLOC**.

**Cost Drivers:**
- **Product Complexity (CPLX)**: 1.30 (Very High)
- **Analyst Capability (ACAP)**: 0.86 (High)
- **Required Development Schedule (SCED)**: 1.10 (Very High)

The **EAF** is calculated as:

\\[\text{EAF} = 1.30 \cdot 0.86 \cdot 1.10 \approx 1.23\\]

\\(
\text{Effort (person-months)} = a \cdot (KLOC)^b  \cdot EAF
\\)


Constants for Semi-Detached projects:
- a = 3.0
- b = 1.12

~~~

**Tasks:**

~~~admonish success collapsible=true title='Calculate the effort (in person-months).'

**Effort (in person-months):**

\\[\text{Effort} = 3.0 \cdot (50)^{1.12} \cdot 1.23 \approx 207.3 \text{ person-months}\\]

~~~

~~~admonish success collapsible=true title='Estimate the development time (in months).'


**Development Time:**

\\[\text{Development Time} = 2.5 \cdot (207.3)^{0.35} \approx 18.9 \text{ months}\\]

~~~

---

~~~admonish question title='### Question 3: Large Embedded Project'

A large **Embedded** project is estimated at **200 KLOC**.

**Cost Drivers:**
- **Platform Volatility (PVOL)**: 1.15 (Very High)
- **Programmer Capability (PCAP)**: 0.88 (High)
- **Application Experience (AEXP)**: 0.91 (High)

The **EAF** is calculated as:

\\[\text{EAF} = 1.15 \cdot 0.88 \cdot 0.91 \approx 0.92\\]

\\(
\text{Effort (person-months)} = a \cdot (KLOC)^b  \cdot EAF
\\)

Constants for Embedded projects:
- a = 3.6
- b = 1.20

~~~

**Tasks:**

~~~admonish success collapsible=true title='Calculate the effort (in person-months).'

**Effort (in person-months):**

\\[\text{Effort} = 3.6 \cdot (200)^{1.20} \cdot 0.92 \approx 1412.1 \text{ person-months}\\]

~~~

~~~admonish success collapsible=true title='Estimate the development time (in months).'

**Development Time:**

\\[\text{Development Time} = 2.5 \cdot (1412.1)^{0.32} \approx 32.3 \text{ months}\\]

~~~

---

~~~admonish question title='### Question 4: Tiny Organic Project'

A tiny **Organic** project is estimated at **2 KLOC**.

**Cost Drivers:**
- **Required Software Reliability (RELY)**: 1.10 (High)
- **Use of Modern Software Tools (TOOL)**: 0.91 (High)
- **Team Cohesion (TEAM)**: 0.92 (High)

The **EAF** is calculated as:

\\[\text{EAF} = 1.10 \cdot 0.91 \cdot 0.92 \approx 0.92\\] 

\\(
\text{Effort (person-months)} = a \cdot (KLOC)^b  \cdot EAF
\\)

Constants for Organic projects:
- a = 2.4
- b = 1.05

~~~

**Tasks:**

~~~admonish success collapsible=true title='Calculate the effort (in person-months).'

**Effort (in person-months):**

\\[\text{Effort} = 2.4 \cdot (2)^{1.05} \cdot 0.92 \approx 4.8 \text{ person-months}\\]

~~~

~~~admonish success collapsible=true title='Estimate the development time (in months).'

**Development Time:**

\\[\text{Development Time} = 2.5 \cdot (4.8)^{0.38} \approx 6.3 \text{ months}\\]

~~~

---

~~~admonish question title='### Question 5: Medium Semi-Detached Project'

A **Semi-Detached** project has an estimated size of **30 KLOC**.

**Cost Drivers:**
- **Required Development Schedule (SCED)**: 1.04 (High)
- **Analyst Capability (ACAP)**: 0.86 (High)
- **Language and Tool Experience (LTEX)**: 0.91 (High)

The **EAF** is calculated as:

\\[\text{EAF} = 1.04 \cdot 0.86 \cdot 0.91 \approx 0.81\\]

\\(
\text{Effort (person-months)} = a \cdot (KLOC)^b  \cdot EAF
\\) 

Constants for Semi-Detached projects:
- a = 3.0
- b = 1.12

~~~

**Tasks:**

~~~admonish success collapsible=true title='Calculate the effort (in person-months).'

**Effort (in person-months):**

\\[\text{Effort} = 3.0 \cdot (30)^{1.12} \cdot 0.81 \approx 79.6 \text{ person-months}\\]

~~~

~~~admonish success collapsible=true title='Estimate the development time (in months).'

**Development Time:**

\\[\text{Development Time} = 2.5 \cdot (79.6)^{0.35} \approx 13.7 \text{ months}\\]

~~~

---

~~~admonish question title='### Question 6: Large Embedded Project'

An **Embedded** project has an estimated size of **150 KLOC**.

**Cost Drivers:**
- **Required Software Reliability (RELY)**: 1.15 (High)
- **Product Complexity (CPLX)**: 1.30 (Very High)
- **Programmer Capability (PCAP)**: 0.86 (High)

The **EAF** is calculated as:

\\[\text{EAF} = 1.15 \cdot 1.30 \cdot 0.86 \approx 1.28\\]

\\(
\text{Effort (person-months)} = a \cdot (KLOC)^b  \cdot EAF
\\)

Constants for Embedded projects:
- a = 3.6
- b = 1.20
~~~

**Tasks:**

~~~admonish success collapsible=true title='Calculate the effort (in person-months).'

**Effort (in person-months):**

\\[\text{Effort} = 3.6 \cdot (150)^{1.20} \cdot 1.28 \approx 1552.7 \text{ person-months}\\]

~~~

~~~admonish success collapsible=true title='Estimate the development time (in months).'

**Development Time:**

\\[\text{Development Time} = 2.5 \cdot (1552.7)^{0.32} \approx 33.5 \text{ months}\\]

~~~