📘 Introduction
In system modeling and control engineering, linearity is a fundamental concept that helps determine how a system behaves under different inputs. Using Simulink, an interactive simulation environment by MATLAB, we can model, simulate, and analyze both linear and non-linear systems.

The goal of this experiment is to test and differentiate linear and non-linear system behaviors using Simulink blocks and to analyze their response to various types of inputs (step, ramp, sine wave, etc.). Such understanding is vital for system design, stability analysis, and control strategy selection in real-world applications like robotics, electrical circuits, and mechanical systems.

🎯 Objectives
To simulate and observe the behavior of linear and non-linear systems in Simulink.

To apply superposition and homogeneity principles to identify linearity.

To input different signals (step, sine, ramp) and study their responses.

To understand the characteristics and implications of non-linear responses.

To analyze the system’s output using visual tools like Scopes and Signal Analyzers.

🧠 Key Concepts
1. Linear System
A linear system obeys the two main principles:

Superposition: The response to a sum of inputs equals the sum of individual responses.

𝑇
[
𝑎
1
𝑥
1
(
𝑡
)
+
𝑎
2
𝑥
2
(
𝑡
)
]
=
𝑎
1
𝑇
[
𝑥
1
(
𝑡
)
]
+
𝑎
2
𝑇
[
𝑥
2
(
𝑡
)
]
T[a 
1
​
 x 
1
​
 (t)+a 
2
​
 x 
2
​
 (t)]=a 
1
​
 T[x 
1
​
 (t)]+a 
2
​
 T[x 
2
​
 (t)]
Homogeneity (Scaling): If input is scaled, the output scales by the same factor.

Such systems are predictable, easy to analyze using Laplace/Z-transforms, and form the basis for classical control theory.

2. Non-linear System
A non-linear system does not obey superposition or homogeneity. The response changes disproportionately with respect to input. Features may include:

Output saturation or dead zones.

Hysteresis.

Discontinuous or piecewise behavior.

Non-linear systems are common in practical scenarios—e.g., mechanical friction, saturation in amplifiers, or biological systems.

3. Simulink Environment
Simulink is a visual programming platform for modeling, simulating, and analyzing dynamic systems. It uses block diagrams for simulation.

Key blocks for this experiment:

Input Sources: Step, Sine Wave, Ramp, Pulse Generator.

System Models: Transfer Function, Math Function, Gain, Sum.

Output Tools: Scope, Display, To Workspace.

4. Linearity Testing Method
Test Procedure:

Input a signal (e.g., sine or step) into the system model.

Observe the output using a Scope block.

Double the input and compare the new output to the original.

Sum two different inputs and observe if the output equals the sum of individual outputs.

If both conditions hold → System is linear.

If any condition fails → System is non-linear.

🧪 Example
Let’s consider a system with the transfer function:

𝐻
(
𝑠
)
=
1
𝑠
+
2
H(s)= 
s+2
1
​
 
For a linear system, input: A * sin(t), output should be proportional.

For a non-linear system like: 
𝑦
=
𝑥
2
y=x 
2
 , doubling input leads to quadrupling output.

📊 Observations
Input Type	System Type	Expected Behavior
Step	Linear	Proportional rise
Step	Non-linear	Saturation/clipping
Sine	Linear	Sine output (shifted/amplified)
Sine	Non-linear	Distorted waveform (harmonics)

🧠 Importance of This Experiment
Helps in identifying correct models for system simulation.

Crucial in control system design (linear controllers may fail for non-linear systems).

Aids in developing robust systems that can handle real-world non-linearities.

🔍 Applications
Electrical/electronic circuit modeling.

Robotic arm trajectory control.

Automotive engine simulation.

Biomedical systems analysis.

📘 Conclusion
Understanding the difference between linear and non-linear systems is crucial for accurate system analysis and controller design. Simulink provides an intuitive and flexible platform to test system responses, validate theoretical concepts, and prepare for real-world implementation.

