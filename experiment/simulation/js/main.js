// Your JavaScript goes in here

// Setup variables
const ctx = document.getElementById('inputPlot').getContext('2d');

const timeSamples = 100;
const timeEnd = 2; // seconds duration
let time = [];
for (let i = 0; i < timeSamples; i++) {
    time.push((timeEnd / timeSamples) * i);
}

function degToRad(deg) {
    return deg * Math.PI / 180;
}

// Generate input signal: sine wave with amplitude, frequency, and phase
function generateInputSignal(A, f, phaseDeg) {
    let inputSignal = [];
    let phase = degToRad(phaseDeg);
    for (let t of time) {
        inputSignal.push(A * Math.sin(2 * Math.PI * f * t + phase));
    }
    return inputSignal;
}

const slider = document.getElementById('input-phase');
const display = document.getElementById('phase-value');

slider.addEventListener('input', () => {
    display.textContent = slider.value;
});

// Apply system with parameters and non-linearity
function applySystem(x, k, b, type) {
    let y = [];
    switch (type) {
        case 'linear':
            for (let val of x) {
                y.push(k * val + b);
            }
            break;
        case 'quadratic':
            for (let val of x) {
                y.push(k * val * val + b);
            }
            break;
        case 'saturation':
            for (let val of x) {
                let out = k * val + b;
                if (out > 1) out = 1;
                if (out < -1) out = -1;
                y.push(out);
            }
            break;
        case 'logarithmic':
            for (let val of x) {
                let shifted = val + 2; // ensure val+2 > 0
                y.push(k * Math.log(shifted) + b);
            }
            break;
        default:
            for (let val of x) {
                y.push(k * val + b);
            }
    }
    return y;
}

// Calculate linearity test: check additivity and homogeneity
function linearityTest(x1, x2, k, b, type) {
    let y1 = applySystem(x1, k, b, type);
    let y2 = applySystem(x2, k, b, type);

    let xSum = x1.map((val, i) => val + x2[i]);
    let ySum = applySystem(xSum, k, b, type);

    let threshold = 0.05; // tolerance level
    let additive = ySum.every((val, i) => Math.abs(val - (y1[i] + y2[i])) <= threshold);

    let alpha = 2;
    let xScaled = x1.map(v => alpha * v);
    let yScaledInput = applySystem(xScaled, k, b, type);
    let yScaledOutput = y1.map(v => alpha * v);

    let homogeneous = yScaledInput.every((val, i) => Math.abs(val - yScaledOutput[i]) <= threshold);

    return { additive, homogeneous };
}

// Setup Chart.js chart
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: time,
        datasets: [
            {
                label: 'Input Signal',
                data: [],
                borderColor: '#7f5af0',
                borderWidth: 2,
                fill: false,
                pointRadius: 0,
                tension: 0.3
            },
            {
                label: 'Output Signal',
                data: [],
                borderColor: '#ff6f61',
                borderWidth: 2,
                fill: false,
                pointRadius: 0,
                tension: 0.3
            },
            {
                label: 'Sum of Outputs y(x1)+y(x2)',
                data: [],
                borderColor: '#fbc02d',
                borderWidth: 2,
                borderDash: [5, 5],
                fill: false,
                pointRadius: 0,
                tension: 0.3
            },
            {
                label: 'Output y(x1 + x2)',
                data: [],
                borderColor: '#03a9f4',
                borderWidth: 2,
                borderDash: [10, 5],
                fill: false,
                pointRadius: 0,
                tension: 0.3
            }
        ]
    },
    options: {
        responsive: true,
        interaction: {
            intersect: false,
            mode: 'index',
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time (s)',
                    color: '#ccc'
                },
                ticks: {
                    color: '#ccc'
                },
                grid: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Amplitude',
                    color: '#ccc'
                },
                ticks: {
                    color: '#ccc'
                },
                grid: {
                    color: 'rgba(255,255,255,0.1)'
                },
                min: -3,
                max: 3
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#eee',
                    font: {
                        weight: 'bold'
                    }
                }
            },
            tooltip: {
                mode: 'nearest',
                intersect: false,
            }
        }
    }
});

// Run test logic
function runTest() {
    const A = parseFloat(document.getElementById('input-amplitude').value) || 1;
    const f = parseFloat(document.getElementById('input-frequency').value) || 1;
    const phase = parseFloat(document.getElementById('input-phase').value) || 0;

    const k = parseFloat(document.getElementById('sys-gain').value) || 1;
    const b = parseFloat(document.getElementById('sys-offset').value) || 0;

    const type = document.getElementById('non-linearity').value;

    let x1 = generateInputSignal(A, f, phase);
    let x2 = x1.map(v => v * 0.5);

    let y1 = applySystem(x1, k, b, type);
    let y2 = applySystem(x2, k, b, type);
    let ySum = y1.map((val, i) => val + y2[i]);

    let xSum = x1.map((val, i) => val + x2[i]);
    let ySumInput = applySystem(xSum, k, b, type);

    chart.data.datasets[0].data = x1;
    chart.data.datasets[1].data = y1;
    chart.data.datasets[2].data = ySum;
    chart.data.datasets[3].data = ySumInput;
    chart.update();

    let linearity = linearityTest(x1, x2, k, b, type);

    const resultDiv = document.getElementById('result');
    if (linearity.additive && linearity.homogeneous) {
        resultDiv.textContent = "System IS Likely LINEAR based on additivity and homogeneity tests.";
        resultDiv.style.color = '#b3ffb3';
    } else {
        let failText = [];
        if (!linearity.additive) failText.push("additivity");
        if (!linearity.homogeneous) failText.push("homogeneity");
        resultDiv.textContent = "System is NON-LINEAR: fails " + failText.join(" and ") + " test(s).";
        resultDiv.style.color = '#ff8a8a';
    }

    // Update dynamic message
    updateMessage();
}

// Reset function
function reset() {
    document.getElementById('input-amplitude').value = 1;
    document.getElementById('input-frequency').value = 1;
    document.getElementById('input-phase').value = 0;
    document.getElementById('sys-gain').value = 1;
    document.getElementById('sys-offset').value = 0;
    document.getElementById('non-linearity').value = 'linear';
    document.getElementById('dynamic-message').innerHTML = '';
    document.getElementById('result').textContent = '';
    chart.data.datasets.forEach(ds => ds.data = []);
    chart.update();
}

// Event listeners
document.getElementById('btn-run-test').addEventListener('click', runTest);
document.getElementById('btn-reset').addEventListener('click', reset);
document.getElementById('downloadBtn').addEventListener('click', function () {
    const canvas = document.getElementById('inputPlot');
    const link = document.createElement('a');
    link.download = 'system-response-graph.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
});

// Function to update the message
function updateMessage() {
    const gain = document.getElementById('sys-gain').value;
    const amplitude = document.getElementById('input-amplitude').value;
    const frequency = document.getElementById('input-frequency').value;
    const phase = document.getElementById('input-phase').value;

    document.getElementById('dynamic-message').innerHTML =
        `Selected values <br> Gain: ${gain} <br> Amplitude: ${amplitude} <br> Frequency: ${frequency}<br>
        Phase: ${phase}° <hr>
        <i>Your experiment was successfully run, and you have access to download the corresponding graph. This typically means the data from your experiment has been processed and visualized, allowing you to analyze the results.;</i>
        `;
}

// Initialize empty plot
reset();
