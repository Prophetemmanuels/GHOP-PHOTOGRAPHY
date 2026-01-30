let history = JSON.parse(localStorage.getItem("ghop_history")) || [];
let outcomes = JSON.parse(localStorage.getItem("ghop_outcomes")) || [];

const MAX_HISTORY = 20;
const MAX_OUTCOMES = 15;

/* Countdown timer */
let time = 10;
setInterval(() => {
  time--;
  if (time <= 0) time = 10;
  document.getElementById("countdown").textContent = time;
}, 1000);

function addMultiplier() {
  const input = document.getElementById("multiplierInput");
  const value = parseFloat(input.value);
  if (!value || value <= 0) return;

  history.push(value);
  if (history.length > MAX_HISTORY) history.shift();

  localStorage.setItem("ghop_history", JSON.stringify(history));
  input.value = "";

  analyze();
  renderHistory();
}

/* PATTERN ANALYSIS */
function analyze() {
  if (history.length < 5) return;

  const recent = history.slice(-10);
  const avg = recent.reduce((a, b) => a + b, 0) / recent.length;

  const lows = recent.filter(x => x < 2).length;
  const highs = recent.filter(x => x >= 10).length;

  let bias = "NEUTRAL";
  if (lows >= 6) bias = "REBOUND ZONE";
  if (highs >= 2) bias = "COOL DOWN";

  const volatility = standardDeviation(recent);
  const volText =
    volatility < 2 ? "LOW" :
    volatility < 5 ? "NORMAL" : "HIGH";

  const min = Math.max(1.1, avg - volatility);
  const max = Math.min(12, avg + volatility * 1.5);

  document.getElementById("range").textContent =
    `${min.toFixed(2)}x – ${max.toFixed(2)}x`;

  document.getElementById("bias").textContent = bias;
  document.getElementById("volatility").textContent = volText;
  document.getElementById("confidence").textContent =
    Math.min(85, 40 + history.length) + "%";
}

function standardDeviation(arr) {
  const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
  return Math.sqrt(
    arr.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / arr.length
  );
}

/* HISTORY UI */
function renderHistory() {
  const ul = document.getElementById("history");
  ul.innerHTML = "";
  history.slice().reverse().forEach(m => {
    const li = document.createElement("li");
    li.textContent = m.toFixed(2) + "x";
    ul.appendChild(li);
  });
}

/* ABOVE / BELOW 2x TRACKER */
function recordOutcome(isAbove) {
  outcomes.push(isAbove ? 1 : 0);
  if (outcomes.length > MAX_OUTCOMES) outcomes.shift();

  localStorage.setItem("ghop_outcomes", JSON.stringify(outcomes));

  drawChart();
  evaluateDecision();
}

function evaluateDecision() {
  if (outcomes.length < 5) return;

  let belowStreak = 0;
  for (let i = outcomes.length - 1; i >= 0; i--) {
    if (outcomes[i] === 0) belowStreak++;
    else break;
  }

  let decision = "WAIT ⏸️";
  if (belowStreak >= 4) decision = "CONSIDER BETTING ✅";

  document.getElementById("decisionText").textContent = decision;
}

/* CHART */
function drawChart() {
  const canvas = document.getElementById("patternChart");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const above = outcomes.filter(x => x === 1).length;
  const below = outcomes.filter(x => x === 0).length;
  const max = Math.max(above, below, 1);

  const barWidth = 60;

  ctx.fillStyle = "#22c55e";
  ctx.fillRect(50, 140, barWidth, -(above / max) * 100);

  ctx.fillStyle = "#ef4444";
  ctx.fillRect(150, 140, barWidth, -(below / max) * 100);

  ctx.fillStyle = "#e5e7eb";
  ctx.fillText("ABOVE", 55, 145);
  ctx.fillText("BELOW", 155, 145);
}

/* INIT */
renderHistory();
analyze();
drawChart();
evaluateDecision();
