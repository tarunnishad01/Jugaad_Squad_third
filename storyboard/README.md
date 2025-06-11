1. Story Outline
In this experiment, learners interact with a virtual simulation of a linearity and non-linearity test typically performed in Simulink. The user will analyze how system output responds to different input signals such as sine waves, step signals, and ramps. This enables them to visually identify whether a system behaves linearly or non-linearly based on output proportionality.

The simulation introduces a drag-and-drop block environment that mirrors Simulink's interface. It aims to teach students how to configure and test different systems for linearity, observe the input-output relationship using tools like the Scope block, and analyze changes in behavior when parameters are altered. This interactive module reinforces theoretical concepts by allowing hands-on practice with virtual models.

2. Story
The user is welcomed into a clean, intuitive simulation interface resembling Simulink’s workspace. The goal is to understand linear and non-linear system behaviors through experimentation. The experiment begins by letting the user choose a predefined system (linear or non-linear) or configure one using virtual blocks.

A guided prompt walks the user through adding blocks like Input Sources, Gain, Math Function, Sum, and Scope. Upon building the circuit, the user applies various input signals (sine, step, ramp) to observe output. The Scope displays the response, and the learner evaluates whether the output is proportional to input.

The simulation provides real-time hints, waveform overlays for comparison, and quizzes to solidify understanding. The learner can toggle between systems to visualize distinctions. The experiment concludes with performance metrics and feedback based on their accuracy and engagement.

2.1 Set the Visual Stage Description:
The simulator presents:
* A block diagram workspace with a toolbox (Input, Output, Math, Display blocks)

* Sidebar showing signal options (sine, step, ramp, pulse)

* Output plot window (Scope view)

* Control panel for run, reset, and parameter change

* Interactive guidance tool (highlight blocks, offer tips)

2.2 Set User Objectives & Goals:
* Understand the definition and properties of linear and non-linear systems.

* Learn to construct a basic system model using blocks.

* Apply different input signals and observe output using the Scope.

* Identify system behavior based on output proportionality.

* Differentiate between linear and non-linear system responses.

2.3 Set the Pathway Activities:
Step 1: Introduction screen with concept overview.

Step 2: Choose a system (linear/non-linear) or configure your own.

Step 3: Drag input source → connect to block → connect to output.

Step 4: Run simulation, observe output in Scope.

Step 5: Answer embedded MCQs or reflection prompts.

Step 6: Modify parameters to explore behavior.

Step 7: Submit observations and receive feedback.

2.4 Set Challenges and Questions/Complexity/Variations in Questions:
* Challenge: Determine system type (linear/non-linear) without prior label.

* Task: Apply all signal types and observe which produces a linear response.

* Variation: Add a Math block (e.g., square input) to see change in behavior.

MCQs appear at decision points (e.g., “What kind of behavior is this output showing?”).

2.5 Allow pitfalls:
* Misconnecting blocks (wrong configuration leads to null/invalid output).

* Choosing wrong signal types (e.g., using clock instead of sine for behavior test).

* Failing to analyze proportionality (Scope shows mismatch, prompts correction).

* Incorrect answers in quizzes trigger hint-based learning.

2.6 Conclusion:
At the end of the simulation, the user receives a dashboard:

* Score out of 5 (based on quiz answers)

* Total time taken

* System types correctly identified

* Feedback on missteps with explanation

* Certificate of completion or suggestion to retry

2.7 Equations/formulas: NA
(Behavior is visual, based on output vs. input proportionality. No complex math.)

