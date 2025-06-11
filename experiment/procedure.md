### Procedure:
Here’s a step-by-step procedure to perform the linearity and non-linearity test using Simulink:

🧪 Step-by-Step Procedure:
1. Launch MATLAB & Simulink
*Open MATLAB.

* Launch Simulink by typing simulink in the MATLAB command window.

* Create a new model (File → New → Model).

2. Design a Linear System
* From the Simulink Library Browser, drag and drop the following blocks:

* Sine Wave / Step Input / Ramp (Input)

* Gain (for linear operation)

* Scope (to observe output)

Connect the blocks as:
* Input → Gain → Scope
3. Run and Observe (Linear Test)
* Set the Gain value (e.g., K = 2).

* Simulate the model.

* Observe the output in the Scope.

* Repeat the test with scaled inputs (e.g., multiply input amplitude) to verify homogeneity.

* Add multiple inputs and test additivity.

4. Design a Non-Linear System
* Modify the system by inserting a non-linear block, such as:

* Saturation, Relay, Dead Zone, Trigonometric Function, or Math Function (e.g., square, abs).

Updated structure example:
* Input → Math Function (e.g., square) → Scope
5. Run and Observe (Non-linear Test)
*Apply same input signals.

* Observe whether output fails superposition (not scaled or additive).

* Document differences between linear and non-linear responses.

6. Comparative Analysis
* Compare outputs from linear and non-linear systems.

Note:

* Linear systems maintain proportionality and additivity.

* Non-linear systems show distorted or nonlinear output behavior.

7. Save & Document
* Save the model files.

* Export scope data or plots if needed.

* Record waveforms, input-output relation graphs, and observations.
