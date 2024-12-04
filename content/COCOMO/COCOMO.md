# COCOMO (Constructive Cost Model) Overview

COCOMO is an algorithmic software cost estimation model developed by Barry Boehm in 1981. It estimates the effort, cost, and development time required to build software systems. COCOMO has several variations, each improving the estimation process for different types and sizes of software projects.

## COCOMO Models

### 1. **Basic COCOMO**
The **Basic COCOMO** model is the simplest form of COCOMO, providing a rough estimate of software development effort based primarily on the size of the software in terms of **KLOC** (thousands of lines of code).

#### Basic Effort Equation:

\\[
\text{Effort (person-months)} = a \times (KLOC)^b
\\]

Where:
- **a** and **b** are constants based on the project type (Organic, Semi-Detached, Embedded).
- **KLOC** is the size of the software in thousands of lines of code.

#### Project Types:
- **Organic**: Small teams working on well-understood, relatively simple projects.
- **Semi-Detached**: Medium-sized teams working on moderately complex projects.
- **Embedded**: Large teams working on complex, tightly constrained systems (e.g., real-time systems).

-----------

### 2. **Intermediate COCOMO**

The **Intermediate COCOMO** model introduces cost drivers that adjust the estimation based on various factors such as project complexity, team experience, and hardware constraints. These cost drivers produce an **Effort Adjustment Factor (EAF)**.

#### Intermediate Effort Equation:

\\[
\text{Effort (person-months)} = a \times (KLOC)^b \times EAF
\\]

Where:
- **EAF** is the product of 15 cost driver multipliers, categories below (full table [Intermediate COCOMO](http://127.0.0.1:8000/COCOMO/Intermediate_COCOMO.html#1-product-attributes)).

#### Cost Drivers:
- **Product Attributes**: Reliability, complexity, etc.
- **Hardware Attributes**: Time and storage constraints.
- **Personnel Attributes**: Experience, capability.
- **Project Attributes**: Tool use, team cohesion.

#### Example:
For a project with 25 KLOC and high reliability (RELY = 1.15), good programmer capability (PCAP = 0.86), and modern tools (TOOL = 0.91):

\\[
\text{EAF} = 1.15 \times 0.86 \times 0.91 = 0.90
\\]

\\[
Effort =  3.0 \times (25)^{1.12} \times 0.90 \approx 93.9 \text{ person-months} 
\\].


------

### 3. **Detailed COCOMO (COCOMO II)**

**COCOMO II** refines the estimation process by accounting for additional factors such as reuse, modern development practices, and the various phases of the software lifecycle (e.g., design, code, test). COCOMO II is designed to handle contemporary development environments, including object-oriented programming, reusable components, and prototyping.

#### Additional Features:
- **Early Design Model**: Used when only rough estimates are available.
- **Post-Architecture Model**: Used once the system design is more complete, providing more accurate estimates.

### Detailed COCOMO Effort Equation:

\\[
\text{Effort (person-months)} = a \times (KLOC)^b \times EAF
\\]

Where **EAF** is calculated based on additional factors like team cohesion, development flexibility, and architecture risk resolution.

------------

## Additional COCOMO Information:

- **Development Time**: The total time to develop the project is often calculated as:

\\[
\text{Development Time (months)} = c \times (\text{Effort})^d
\\]

Where **c** and **d** are constants based on the project type.

- **COCOMO II and Modern Practices**: COCOMO II introduces new parameters to adjust for code reuse, non-linear scaling factors, and new types of software practices (like Agile or DevOps).

- **Scalability**: COCOMO can be scaled to handle small projects with less than 2 KLOC as well as large, complex systems exceeding 100 KLOC. However, it's crucial to have accurate size estimations early on for the model to provide useful estimates.

### Advantages of COCOMO:
1. **Objective Estimation**: Based on historical data and mathematical models.
2. **Scalability**: Suitable for projects of various sizes.
3. **Customization**: Can be tailored to different types of projects.
4. **Transparency**: Helps identify factors that contribute to cost and effort.

### Limitations of COCOMO:
1. **Dependence on Accurate Size Estimates**: The model's accuracy is highly dependent on the precision of the size estimates, which can be difficult early in a project.
2. **Historical Data Dependency**: The constants are derived from historical project data, which may not fully reflect the nuances of modern development environments.
3. **Assumptions**: The model assumes that development practices remain constant throughout the project, which is often not the case in agile or iterative environments.

## Example Project Type Constants:
The constants **a**, **b**, **c**, and **d** are based on the project type:

| Project Type | a    | b     | c    | d    |
|--------------|------|-------|------|------|
| Organic      | 2.4  | 1.05  | 2.5  | 0.38 |
| Semi-detached| 3.0  | 1.12  | 2.5  | 0.35 |
| Embedded     | 3.6  | 1.20  | 2.5  | 0.32 |

------------
------------

## Questions

~~~admonish question title='### Question 1: Small Organic Project'


You are tasked with estimating the effort for a small **Organic** software project with an estimated size of **10 KLOC** (thousand lines of code).

Constants for Organic projects:
- a = 2.4
- b = 1.05
- c = 2.5
- d = 0.38

\\[
\text{Effort (person-months)} = a \times (KLOC)^b
\\]

\\[
\text{Development Time (months)} = c \times (\text{Effort})^d
\\]

~~~

**Tasks:**

~~~admonish success collapsible=true title='Calculate the effort (in person-months)'


**Effort (in person-months):**
\\[\text{Effort} = 2.4 \times (10)^{1.05} \approx 25.4 \text{ person-months}\\]

~~~

~~~admonish success collapsible=true title='Estimate the development time (in months)'

**Development Time (in months):**
\\[\text{Development Time} = 2.5 \times (25.4)^{0.38} \approx 10.9 \text{ months}\\]

~~~

------------

~~~admonish question title='### Question 2: Medium Semi-Detached Project'

A medium-sized **Semi-Detached** project is estimated to have **50 KLOC**. You are tasked with estimating the effort and development time.

Constants for Semi-Detached projects:
- a = 3.0
- b = 1.12
- c = 2.5
- d = 0.35


\\[
\text{Effort (person-months)} = a \times (KLOC)^b
\\]

\\[
\text{Development Time (months)} = c \times (\text{Effort})^d
\\]

~~~

**Tasks:**

~~~admonish success collapsible=true title='Calculate the effort (in person-months).'


    **Effort (in person-months):**
    \\[\text{Effort} = 3.0 \times (50)^{1.12} \approx 168.5 \text{ person-months}\\]

~~~

~~~admonish success collapsible=true title='Estimate the development time (in months).'

    **Effort (in person-months):**
    \\[\text{Development Time} = 2.5 \times (168.5)^{0.35} \approx 17.9 \text{ months}\\]

~~~

------------

~~~admonish question title='### Question 3: Large Embedded Project'

A large **Embedded** project is being developed, and its size is estimated at **200 KLOC**.

Constants for Embedded projects:
- a = 3.6
- b = 1.20
- c = 2.5
- d = 0.32

\\[
\text{Effort (person-months)} = a \times (KLOC)^b
\\]

\\[
\text{Development Time (months)} = c \times (\text{Effort})^d
\\]

~~~

**Tasks:**

~~~admonish success collapsible=true title='Calculate the effort (in person-months).'


**Effort (in person-months):**
\\[\text{Effort} = 3.6 \times (200)^{1.20} \approx 1535.2 \text{ person-months}\\]

~~~

~~~admonish success collapsible=true title='Estimate the development time (in months).'


**Effort (in person-months):**
\\[\text{Development Time} = 2.5 \times (1535.2)^{0.32} \approx 33.4 \text{ months}\\]

~~~

------------


~~~admonish question title='### Question 4: Tiny Organic Project'

A tiny **Organic** project is estimated to be **2 KLOC**. Calculate the effort and development time.

Constants for Organic projects:
- a = 2.4
- b = 1.05
- c = 2.5
- d = 0.38

\\[
\text{Effort (person-months)} = a \times (KLOC)^b
\\]

\\[
\text{Development Time (months)} = c \times (\text{Effort})^d
\\]

~~~


**Tasks:**

~~~admonish success collapsible=true title='Calculate the effort (in person-months).'


**Effort (in person-months):**
\\[\text{Effort} = 2.4 \times (2)^{1.05} \approx 5.0 \text{ person-months}\\]

~~~

~~~admonish success collapsible=true title='Estimate the development time (in months).'


**Effort (in person-months):**
\\[\text{Development Time} = 2.5 \times (5.0)^{0.38} \approx 6.4 \text{ months}\\]

~~~

------------


~~~admonish question title='### Question 5: Medium-Sized Semi-Detached Project'

A medium-sized **Semi-Detached** project is estimated at **30 KLOC**. Estimate the effort and development time.

Constants for Semi-Detached projects:
- a = 3.0
- b = 1.12
- c = 2.5
- d = 0.35

\\[
\text{Effort (person-months)} = a \times (KLOC)^b
\\]

\\[
\text{Development Time (months)} = c \times (\text{Effort})^d
\\]

~~~

**Tasks:**

~~~admonish success collapsible=true title='Calculate the effort (in person-months).'



**Effort (in person-months):**
\\[\text{Effort} = 3.0 \times (30)^{1.12} \approx 98.2 \text{ person-months}\\]

~~~

~~~admonish success collapsible=true title='Estimate the development time (in months).'


**Effort (in person-months):**
\\[\text{Development Time} = 2.5 \times (98.2)^{0.35} \approx 14.7 \text{ months}\\]

~~~

------

~~~admonish question title='### Question 6: Large Embedded Project'

An **Embedded** project has an estimated size of **150 KLOC**. Estimate the effort and development time.

Constants for Embedded projects:
- a = 3.6
- b = 1.20
- c = 2.5
- d = 0.32

\\[
\text{Effort (person-months)} = a \times (KLOC)^b
\\]

\\[
\text{Development Time (months)} = c \times (\text{Effort})^d
\\]

~~~


**Tasks:**

~~~admonish success collapsible=true title='Calculate the effort (in person-months).'


**Effort (in person-months):**
\\[\text{Effort} = 3.6 \times (150)^{1.20} \approx 1084.7 \text{ person-months}\\]

~~~

~~~admonish success collapsible=true title='Estimate the development time (in months).'

**Effort (in person-months):**
\\[\text{Development Time} = 2.5 \times (1084.7)^{0.32} \approx 30.1 \text{ months}\\]

~~~

----


## Conclusion

COCOMO remains one of the most widely referenced and influential cost estimation models in software engineering. With updates through COCOMO II, it continues to adapt to modern development environments and remains useful for providing project managers with cost and time estimates based on a variety of influencing factors.