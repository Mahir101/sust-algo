const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/universal-narrator-D55Th27_.js", "assets/main-DaT4__Z1.js"]))) => i.map(i => d[i]);
import { E as p, _ as P } from "./main-DaT4__Z1.js"; class B { constructor(e = {}) { var t, i, s, r, n, o, a, l, d, c, g, h, v, b, m, f, x, y, w, k, S, C, L, z, E; this.meta = { id: e.id || "", title: e.title || "", examType: ((t = e.meta) == null ? void 0 : t.examType) || "DS_MID", difficulty: ((i = e.meta) == null ? void 0 : i.difficulty) || "Medium", tags: ((s = e.meta) == null ? void 0 : s.tags) || [] }, this.pedagogy = { question: ((r = e.pedagogy) == null ? void 0 : r.question) || e.problem || "", breakdown: ((n = e.pedagogy) == null ? void 0 : n.breakdown) || e.breakdown || [], key_mapping: ((o = e.pedagogy) == null ? void 0 : o.key_mapping) || e.keyDetails || {}, concept_selection: { selected: ((l = (a = e.pedagogy) == null ? void 0 : a.concept_selection) == null ? void 0 : l.selected) || e.baseAlgorithm || "", reason: ((c = (d = e.pedagogy) == null ? void 0 : d.concept_selection) == null ? void 0 : c.reason) || "" }, structural_plan: { default_algo: ((h = (g = e.pedagogy) == null ? void 0 : g.structural_plan) == null ? void 0 : h.default_algo) || e.baseAlgorithm || "", modifications: ((b = (v = e.pedagogy) == null ? void 0 : v.structural_plan) == null ? void 0 : b.modifications) || e.modifications || [] } }, this.simulation = { narrative_steps: ((m = e.simulation) == null ? void 0 : m.narrative_steps) || e.narrativeSteps || [], sample_io: { input: ((x = (f = e.simulation) == null ? void 0 : f.sample_io) == null ? void 0 : x.input) || "", expected_output: ((w = (y = e.simulation) == null ? void 0 : y.sample_io) == null ? void 0 : w.expected_output) || e.expectedOutput || "" }, key_takeaways: ((k = e.simulation) == null ? void 0 : k.key_takeaways) || e.keyTakeaways || [] }, this.code = { cpp: ((S = e.code) == null ? void 0 : S.cpp) || e.cppCode || "", java: ((S = e.code) == null ? void 0 : S.java) || e.javaCode || "", python: ((C = e.code) == null ? void 0 : C.python) || e.pythonCode || "", javascript: ((L = e.code) == null ? void 0 : L.javascript) || e.jsCode || "" }, this.visualizer = { type: ((z = e.visualizer) == null ? void 0 : z.type) || e.visualType || "none", initialState: ((E = e.visualizer) == null ? void 0 : E.initialState) || null } } validate() { const e = []; return this.meta.id || e.push("Missing solution ID"), this.pedagogy.question || e.push("Missing question text"), this.pedagogy.breakdown.length === 0 && e.push("Missing breakdown steps"), { isValid: e.length === 0, errors: e } } getCode(e = "cpp") { return this.code[e] || "" } } const I = `
<style id="deep-dive-styles">
    .deep-dive-card {
        background: var(--bg-secondary);
        border-radius: 16px;
        border: 1px solid var(--border-color);
        padding: 2rem;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        max-width: 800px;
        margin: 0 auto;
    }

    .deep-dive-header {
        margin-bottom: 2rem;
    }

    /* Step Indicator */
    .step-indicator {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
        gap: 0.5rem;
    }

    .step-dot {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: var(--bg-tertiary);
        color: var(--text-muted);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 0.85rem;
        transition: all 0.3s ease;
        border: 2px solid transparent;
    }

    .step-dot.active {
        background: rgba(139, 92, 246, 0.1);
        color: #8b5cf6;
        border-color: #8b5cf6;
        transform: scale(1.1);
    }

    .step-dot.completed {
        background: #10b981;
        color: white;
    }

    .step-line {
        flex: 1;
        height: 2px;
        background: var(--bg-tertiary);
        max-width: 50px;
    }

    .step-title {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .step-icon {
        font-size: 1.5rem;
    }

    .step-title h3 {
        margin: 0;
        font-size: 1.25rem;
        color: var(--text-primary);
    }

    /* Body Content */
    .deep-dive-body {
        min-height: 200px;
        margin-bottom: 2rem;
    }

    .step-intro {
        color: var(--text-secondary);
        font-size: 0.95rem;
        margin-bottom: 1.5rem;
    }

    /* Breakdown List */
    .breakdown-list {
        list-style: none;
        padding: 0;
    }

    .breakdown-item {
        display: flex;
        gap: 1rem;
        padding: 0.75rem;
        background: var(--bg-primary);
        border-radius: 8px;
        margin-bottom: 0.75rem;
        border-left: 4px solid #8b5cf6;
    }

    .breakdown-item .bullet {
        color: #8b5cf6;
        font-weight: 700;
    }

    /* Details Table */
    .details-table-wrapper {
        overflow-x: auto;
        border-radius: 12px;
        border: 1px solid var(--border-color);
    }

    .details-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.9rem;
    }

    .details-table th {
        background: var(--bg-tertiary);
        padding: 1rem;
        text-align: left;
        color: var(--text-muted);
        font-weight: 600;
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 0.05em;
    }

    .details-table td {
        padding: 1rem;
        border-top: 1px solid var(--border-color);
        color: var(--text-primary);
    }

    .details-table .keyword {
        font-family: 'JetBrains Mono', monospace;
        color: #8b5cf6;
        font-weight: 600;
    }

    /* Concept Card */
    .concept-card {
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(167, 139, 250, 0.05));
        border: 1px solid rgba(139, 92, 246, 0.2);
        border-radius: 12px;
        padding: 1.5rem;
    }

    .concept-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1rem;
    }

    .concept-label {
        color: var(--text-muted);
        font-size: 0.85rem;
    }

    .concept-value {
        font-weight: 700;
        color: #8b5cf6;
        font-size: 1.1rem;
    }

    .concept-rationale {
        font-size: 0.9rem;
        line-height: 1.6;
        color: var(--text-secondary);
    }

    /* Planning Grid */
    .planning-grid {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    .planning-box {
        flex: 1;
        background: var(--bg-primary);
        border-radius: 12px;
        border: 1px solid var(--border-color);
        overflow: hidden;
    }

    .planning-box .box-header {
        padding: 0.75rem;
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
        background: var(--bg-tertiary);
    }

    .planning-box .box-content {
        padding: 1.5rem;
        text-align: center;
        font-weight: 600;
    }

    .planning-box.modified {
        border-color: rgba(16, 185, 129, 0.3);
    }

    .planning-box.modified .box-header {
        background: rgba(16, 185, 129, 0.1);
        color: #10b981;
    }

    .mod-list {
        padding: 1rem 1rem 1rem 2rem;
        margin: 0;
        font-size: 0.85rem;
        line-height: 1.5;
    }

    .planning-arrow {
        font-size: 1.5rem;
        color: var(--text-muted);
    }

    /* Footer */
    .deep-dive-footer {
        display: flex;
        justify-content: flex-end;
    }

    .deep-dive-btn {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1.5rem;
        border-radius: 10px;
        border: none;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .next-btn {
        background: var(--bg-tertiary);
        color: var(--text-primary);
    }

    .next-btn:hover {
        background: var(--bg-hover);
        transform: translateX(5px);
    }

    .complete-btn {
        background: linear-gradient(135deg, #8b5cf6, #7c3aed);
        color: white;
        box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
    }

    .complete-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
    }

    @media (max-width: 600px) {
        .planning-grid {
            flex-direction: column;
        }
        .planning-arrow {
            transform: rotate(90deg);
        }
    }
</style>
`; typeof document < "u" && !document.getElementById("deep-dive-styles") && document.head.insertAdjacentHTML("beforeend", I); class j {
    constructor(e = {}) { this.narrativeSteps = [], this.currentStepIndex = 0, this.isPlaying = !1, this.isPaused = !1, this.codeContainer = e.codeContainer || null, this.visualizerContainer = e.visualizerContainer || null, this.controlsContainer = e.controlsContainer || null, this.codeLines = e.codeLines || [], this.currentLang = e.lang || "java", this.onStepChange = e.onStepChange || null, this.onComplete = e.onComplete || null, this.onPlay = e.onPlay || null, this.onPause = e.onPause || null, p.voice || p.init() } load(e, t = []) { this.narrativeSteps = e || [], this.codeLines = t, this.currentStepIndex = 0, this.isPlaying = !1, this.isPaused = !1, this.renderControls(), this.renderCodeView(), this.renderVisualizerView() } play() { this.narrativeSteps.length !== 0 && (p.unlock(), this.isPlaying = !0, this.isPaused = !1, this.onPlay && this.onPlay(), this.updateControlsUI(), this.executeCurrentStep()) } pause() { this.isPlaying = !1, this.isPaused = !0, p.stop(), this.onPause && this.onPause(), this.updateControlsUI() } togglePlayPause() { this.isPlaying ? this.pause() : this.play() } nextStep() { this.currentStepIndex < this.narrativeSteps.length - 1 && (p.stop(), this.currentStepIndex++, this.isPlaying ? this.executeCurrentStep() : this.showStep(this.currentStepIndex)) } prevStep() { this.currentStepIndex > 0 && (p.stop(), this.currentStepIndex--, this.isPlaying ? this.executeCurrentStep() : this.showStep(this.currentStepIndex)) } reset() { this.pause(), this.currentStepIndex = 0, this.showStep(0), this.updateControlsUI() } executeCurrentStep() { const e = this.narrativeSteps[this.currentStepIndex]; if (!e) { this.onNarrativeComplete(); return } this.showStep(this.currentStepIndex), p.speak(e.text, () => { this.isPlaying && !this.isPaused && (this.currentStepIndex < this.narrativeSteps.length - 1 ? (this.currentStepIndex++, this.executeCurrentStep()) : this.onNarrativeComplete()) }) } showStep(e) { const t = this.narrativeSteps[e]; t && (this.highlightCodeLine(t.codeLine, t.action), this.showVisualizerAction(t), this.updateProgress(), this.onStepChange && this.onStepChange(t, e, this.narrativeSteps.length)) } onNarrativeComplete() { this.isPlaying = !1, this.isPaused = !1, this.updateControlsUI(), this.onComplete && this.onComplete() } highlightCodeLine(e, t = "highlight") { if (!this.codeContainer) return; const i = this.codeContainer.querySelectorAll(".nc-code-line"); if (i.forEach(s => { s.classList.remove("nc-highlight", "nc-whatif", "nc-intro", "nc-conclusion") }), e && e > 0 && e <= i.length) { const s = i[e - 1]; switch (t) { case "whatif": s.classList.add("nc-whatif"); break; case "intro": case "conclusion": s.classList.add("nc-" + t); break; default: s.classList.add("nc-highlight") }s.scrollIntoView({ behavior: "smooth", block: "center" }) } } showVisualizerAction(e) {
        if (!this.visualizerContainer) return; const i = { intro: "🎬", highlight: "🔦", formula: "📐", whatif: "⚠️", analysis: "🔍", conclusion: "✅", result: "🏆", divide: "✂️", conquer: "🔗", combine: "🧩", trace: "📊", warning: "⚠️", question: "❓" }[e.action] || "💡", s = e.action === "whatif"; this.visualizerContainer.innerHTML = `
            <div class="nc-action-display ${s ? "nc-whatif-action" : ""}">
                <div class="nc-action-icon">${i}</div>
                <div class="nc-action-text">${this.escapeHtml(e.text)}</div>
                ${s ? `
                    <div class="nc-whatif-badge">
                        <span>⚠️</span> What If Scenario
                    </div>
                `: ""}
                ${e.codeLine ? `
                    <div class="nc-code-ref">Line ${e.codeLine}</div>
                `: ""}
            </div>
        `} renderControls() {
        this.controlsContainer && (this.controlsContainer.innerHTML = `
            <div class="nc-controls">
                <div class="nc-progress-bar">
                    <div class="nc-progress-fill" style="width: 0%"></div>
                </div>
                <div class="nc-control-buttons">
                    <button class="nc-btn nc-prev-btn" title="Previous Step">
                        <span>⏮️</span>
                    </button>
                    <button class="nc-btn nc-play-btn nc-primary" title="Play/Pause">
                        <span>▶️</span>
                    </button>
                    <button class="nc-btn nc-next-btn" title="Next Step">
                        <span>⏭️</span>
                    </button>
                    <button class="nc-btn nc-reset-btn" title="Reset">
                        <span>🔄</span>
                    </button>
                </div>
                <div class="nc-step-info">
                    Step <span class="nc-current-step">1</span> / <span class="nc-total-steps">${this.narrativeSteps.length}</span>
                </div>
            </div>
        `, this.bindControlEvents())
    } bindControlEvents() { if (!this.controlsContainer) return; const e = this.controlsContainer.querySelector(".nc-play-btn"), t = this.controlsContainer.querySelector(".nc-prev-btn"), i = this.controlsContainer.querySelector(".nc-next-btn"), s = this.controlsContainer.querySelector(".nc-reset-btn"); e == null || e.addEventListener("click", () => this.togglePlayPause()), t == null || t.addEventListener("click", () => this.prevStep()), i == null || i.addEventListener("click", () => this.nextStep()), s == null || s.addEventListener("click", () => this.reset()) } updateControlsUI() { if (!this.controlsContainer) return; const e = this.controlsContainer.querySelector(".nc-play-btn span"); e && (e.textContent = this.isPlaying ? "⏸️" : "▶️"), this.updateProgress() } updateProgress() { if (!this.controlsContainer) return; const e = this.controlsContainer.querySelector(".nc-progress-fill"), t = this.controlsContainer.querySelector(".nc-current-step"), i = this.controlsContainer.querySelector(".nc-total-steps"); if (e) { const s = (this.currentStepIndex + 1) / this.narrativeSteps.length * 100; e.style.width = `${s}%` } t && (t.textContent = this.currentStepIndex + 1), i && (i.textContent = this.narrativeSteps.length) } renderCodeView() {
        !this.codeContainer || this.codeLines.length === 0 || (this.codeContainer.innerHTML = `
            <div class="nc-code-view">
                <div class="nc-code-header">
                    <span class="nc-code-icon">💻</span>
                    <span>Solution Code</span>
                </div>
                <div class="nc-code-body">
                    <div class="nc-line-numbers">
                        ${this.codeLines.map((e, t) => `<div class="nc-line-num">${t + 1}</div>`).join("")}
                    </div>
                    <div class="nc-code-content">
                        ${this.codeLines.map((e, t) => `
                            <div class="nc-code-line" data-line="${t + 1}">${this.escapeHtml(e)}</div>
                        `).join("")}
                    </div>
                </div>
            </div>
        `)
    } renderVisualizerView() {
        this.visualizerContainer && (this.visualizerContainer.innerHTML = `
            <div class="nc-visualizer-view">
                <div class="nc-visualizer-header">
                    <span class="nc-viz-icon">🎬</span>
                    <span>Narrative Visualizer</span>
                </div>
                <div class="nc-action-display nc-idle">
                    <div class="nc-action-icon">▶️</div>
                    <div class="nc-action-text">Click Play to start the narrative walkthrough</div>
                </div>
            </div>
        `)
    } escapeHtml(e) { return e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;") : "" } static parseCodeLines(e) {
        return e ? e.split(`
`).filter(t => t.trim() !== "") : []
    }
} const A = `
<style id="narrative-controller-styles">
/* ═══════════════════════════════════════════════════════════════════════════
   NARRATIVE CONTROLLER - PHASE 3 STYLES
   ═══════════════════════════════════════════════════════════════════════════ */

/* Split View Layout */
.nc-split-view {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    height: 100%;
}

/* Controls */
.nc-controls {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1rem;
    background: var(--bg-secondary);
    border-radius: 12px;
    border: 1px solid var(--border-color);
}

.nc-progress-bar {
    height: 6px;
    background: var(--bg-tertiary);
    border-radius: 3px;
    overflow: hidden;
}

.nc-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #8b5cf6, #a78bfa);
    border-radius: 3px;
    transition: width 0.3s ease;
}

.nc-control-buttons {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
}

.nc-btn {
    width: 44px;
    height: 44px;
    border: none;
    border-radius: 10px;
    background: var(--bg-tertiary);
    color: var(--text-primary);
    cursor: pointer;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
}

.nc-btn:hover {
    background: var(--bg-hover);
    transform: scale(1.05);
}

.nc-btn.nc-primary {
    width: 56px;
    height: 56px;
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
    color: white;
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
}

.nc-btn.nc-primary:hover {
    box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
}

.nc-step-info {
    text-align: center;
    font-size: 0.85rem;
    color: var(--text-muted);
}

.nc-current-step {
    font-weight: 700;
    color: #8b5cf6;
}

/* Code View */
.nc-code-view {
    background: var(--bg-primary);
    border-radius: 12px;
    border: 1px solid var(--border-color);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.nc-code-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(167, 139, 250, 0.1));
    border-bottom: 1px solid var(--border-color);
    font-weight: 600;
    color: var(--text-primary);
}

.nc-code-body {
    display: flex;
    flex: 1;
    overflow: auto;
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 0.85rem;
}

.nc-line-numbers {
    padding: 1rem 0.5rem;
    background: var(--bg-secondary);
    color: var(--text-muted);
    text-align: right;
    user-select: none;
    border-right: 1px solid var(--border-color);
}

.nc-line-num {
    padding: 0.2rem 0.5rem;
    line-height: 1.5;
}

.nc-code-content {
    flex: 1;
    padding: 1rem;
}

.nc-code-line {
    padding: 0.2rem 0.5rem;
    line-height: 1.5;
    border-radius: 4px;
    transition: all 0.3s ease;
    white-space: pre;
}

/* Highlight States */
.nc-code-line.nc-highlight {
    background: linear-gradient(90deg, rgba(139, 92, 246, 0.3), rgba(139, 92, 246, 0.1));
    border-left: 3px solid #8b5cf6;
    margin-left: -3px;
    animation: ncPulse 1s ease infinite;
}

.nc-code-line.nc-whatif {
    background: linear-gradient(90deg, rgba(245, 158, 11, 0.3), rgba(245, 158, 11, 0.1));
    border-left: 3px solid #f59e0b;
    margin-left: -3px;
}

.nc-code-line.nc-intro,
.nc-code-line.nc-conclusion {
    background: linear-gradient(90deg, rgba(16, 185, 129, 0.3), rgba(16, 185, 129, 0.1));
    border-left: 3px solid #10b981;
    margin-left: -3px;
}

@keyframes ncPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}

/* Visualizer View */
.nc-visualizer-view {
    background: var(--bg-primary);
    border-radius: 12px;
    border: 1px solid var(--border-color);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.nc-visualizer-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(167, 139, 250, 0.1));
    border-bottom: 1px solid var(--border-color);
    font-weight: 600;
    color: var(--text-primary);
}

.nc-action-display {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    text-align: center;
    gap: 1rem;
}

.nc-action-display.nc-idle {
    color: var(--text-muted);
}

.nc-action-icon {
    font-size: 3rem;
    animation: ncBounce 2s ease infinite;
}

@keyframes ncBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.nc-action-text {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--text-primary);
    max-width: 400px;
}

.nc-whatif-action {
    background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(217, 119, 6, 0.1));
    border: 1px solid rgba(245, 158, 11, 0.3);
    border-radius: 12px;
    margin: 1rem;
}

.nc-whatif-action .nc-action-text {
    color: #f59e0b;
}

.nc-whatif-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: linear-gradient(135deg, #f59e0b, #d97706);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
}

.nc-code-ref {
    font-size: 0.8rem;
    color: var(--text-muted);
    background: var(--bg-tertiary);
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
}

/* Responsive */
@media (max-width: 768px) {
    .nc-split-view {
        grid-template-columns: 1fr;
    }
}
</style>
`; typeof document < "u" && !document.getElementById("narrative-controller-styles") && document.head.insertAdjacentHTML("beforeend", A); class _ {
    constructor() { this.outputBuffer = [], this.startTime = null } start() { this.outputBuffer = [], this.startTime = Date.now() } bufferOutput(e) { e && this.outputBuffer.push(e) } validate(e) {
        const t = this.outputBuffer.join(`
`).trim(), i = (e || "").trim(); return { success: t === i, actual: t, expected: i }
    } renderComparison(e, t, i) {
        if (!e) return; const { success: s, actual: r, expected: n } = t, o = s ? "#10b981" : "#ef4444", d = `
            <div class="sv-validation-result fade-in" style="border-color: ${o}">
                <div class="sv-validation-header" style="background: ${o}20; color: ${o}">
                    <span class="icon">${s ? "✨" : "❌"}</span>
                    <span class="title">${s ? "Perfect Match!" : "Output Mismatch"}</span>
                    ${s ? '<button class="sv-summary-btn" id="svShowSummaryBtn">📜 View Cheat Sheet</button>' : ""}
                </div>
                <div class="sv-comparison-grid">
                    <div class="sv-output-box">
                        <div class="label">Expected Output</div>
                        <pre class="code-block">${n}</pre>
                    </div>
                    <div class="sv-output-box">
                        <div class="label">Your Output</div>
                        <pre class="code-block ${s ? "success" : "error"}">${r}</pre>
                    </div>
                </div>
            </div>
        `, c = document.createElement("div"); if (c.innerHTML = d, e.appendChild(c), s) { this.triggerSuccessEffect(); const g = c.querySelector("#svShowSummaryBtn"); g && i && g.addEventListener("click", () => this.renderCheatSheet(i)) }
    } renderCheatSheet(e) {
        var n, o, a; const t = document.createElement("div"); t.className = "sv-modal-overlay fade-in"; const i = ((n = e.simulation) == null ? void 0 : n.key_takeaways) || [], s = ((a = (o = e.pedagogy) == null ? void 0 : o.structural_plan) == null ? void 0 : a.modifications) || []; t.innerHTML = `
            <div class="sv-modal-content">
                <button class="sv-modal-close">&times;</button>
                <div class="sv-cheat-sheet" id="svCheatSheet">
                    <div class="cs-header">
                        <div class="cs-title">${e.meta.title}</div>
                        <div class="cs-subtitle">Algorithm Cheat Sheet</div>
                    </div>
                    
                    <div class="cs-section">
                        <h3>🧠 Key Takeaways</h3>
                        <ul>
                            ${i.map(l => `<li>${l}</li>`).join("")}
                        </ul>
                    </div>

                    <div class="cs-section">
                        <h3>⚡ Modifications</h3>
                        <ul>
                            ${s.map(l => `<li>${l}</li>`).join("")}
                        </ul>
                    </div>

                    <div class="cs-footer">
                        CSE Helper • Deep Dive Series
                    </div>
                </div>
                <div class="sv-modal-actions">
                    <button class="sv-btn-primary" onclick="window.print()">🖨️ Print / Save PDF</button>
                </div>
            </div>
        `, document.body.appendChild(t); const r = () => t.remove(); t.querySelector(".sv-modal-close").addEventListener("click", r), t.addEventListener("click", l => { l.target === t && r() })
    } triggerSuccessEffect() { const e = document.createElement("div"); e.style.position = "fixed", e.style.top = "0", e.style.left = "0", e.style.width = "100vw", e.style.height = "100vh", e.style.background = "rgba(16, 185, 129, 0.2)", e.style.pointerEvents = "none", e.style.zIndex = "9999", e.style.transition = "opacity 0.5s ease-out", document.body.appendChild(e), setTimeout(() => { e.style.opacity = "0", setTimeout(() => e.remove(), 500) }, 100), window.confetti ? window.confetti({ particleCount: 100, spread: 70, origin: { y: .6 } }) : console.log("🎉 Confetti! (Library not found, simulating log)") } injectStyles() {
        if (document.getElementById("sv-validator-styles")) return; document.head.insertAdjacentHTML("beforeend", `
            <style id="sv-validator-styles">
                .sv-validation-result {
                    margin-top: 2rem;
                    border: 1px solid;
                    border-radius: 12px;
                    overflow: hidden;
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(10px);
                }
                .sv-validation-header {
                    padding: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: bold;
                    font-size: 1.1rem;
                }
                .sv-summary-btn {
                    margin-left: auto;
                    background: rgba(255, 255, 255, 0.2);
                    border: none;
                    color: white;
                    padding: 0.5rem 1rem;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 0.9rem;
                    transition: background 0.2s;
                }
                .sv-summary-btn:hover { background: rgba(255, 255, 255, 0.3); }

                .sv-comparison-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1px;
                    background: rgba(255, 255, 255, 0.1); /* Divider color */
                }
                .sv-output-box {
                    background: rgba(0, 0, 0, 0.2);
                    padding: 1rem;
                }
                .sv-output-box .label {
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    opacity: 0.6;
                    margin-bottom: 0.5rem;
                }
                .sv-output-box pre {
                    margin: 0;
                    font-family: 'Fira Code', monospace;
                    white-space: pre-wrap;
                    color: #e4e4e4;
                }
                .sv-output-box pre.success { color: #10b981; }
                .sv-output-box pre.error { color: #ef4444; }
                
                /* Modal & Cheat Sheet */
                .sv-modal-overlay {
                    position: fixed;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                    backdrop-filter: blur(5px);
                }
                .sv-modal-content {
                    background: #1e1e1e;
                    border-radius: 16px;
                    padding: 2rem;
                    max-width: 600px;
                    width: 90%;
                    position: relative;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
                }
                .sv-modal-close {
                    position: absolute;
                    top: 1rem; right: 1rem;
                    background: none; border: none;
                    color: white; font-size: 1.5rem;
                    cursor: pointer;
                }
                .sv-cheat-sheet {
                    background: linear-gradient(135deg, #1e293b, #0f172a);
                    border: 1px solid #334155;
                    border-radius: 12px;
                    padding: 2rem;
                    color: white;
                    margin-bottom: 1.5rem;
                }
                .cs-header { text-align: center; margin-bottom: 2rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem; }
                .cs-title { font-size: 1.8rem; font-weight: bold; background: linear-gradient(90deg, #60a5fa, #a78bfa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                .cs-subtitle { font-size: 1rem; opacity: 0.7; letter-spacing: 2px; text-transform: uppercase; margin-top: 0.5rem; }
                .cs-section h3 { color: #94a3b8; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1rem; }
                .cs-section ul { padding-left: 1.5rem; margin-bottom: 2rem; }
                .cs-section li { margin-bottom: 0.5rem; color: #e2e8f0; line-height: 1.5; }
                .cs-footer { text-align: center; font-size: 0.8rem; opacity: 0.5; margin-top: 2rem; }
                
                .sv-btn-primary {
                    width: 100%;
                    padding: 1rem;
                    background: #3b82f6;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: background 0.2s;
                }
                .sv-btn-primary:hover { background: #2563eb; }

                .fade-in {
                    animation: fadeIn 0.5s ease-out forwards;
                    opacity: 0;
                }
                @keyframes fadeIn {
                    to { opacity: 1; }
                }

                @media print {
                    body * { visibility: hidden; }
                    .sv-cheat-sheet, .sv-cheat-sheet * { visibility: visible; }
                    .sv-cheat-sheet { position: absolute; left: 0; top: 0; width: 100%; margin: 0; border: none; box-shadow: none; }
                    .sv-modal-overlay { background: white; position: absolute; }
                    .sv-modal-content { box-shadow: none; padding: 0; }
                    .sv-modal-close, .sv-modal-actions { display: none; }
                }
            </style>
        `)
    }
} class $ {
    constructor(e) { this.container = e, this.svg = null, this.lines = [], this.interactions = new Set, this.init() } init() { this.injectStyles(), this.createGradients() } createGradients() { if (document.getElementById("sv-svg-defs")) return; const e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "defs"); t.id = "sv-svg-defs"; const i = document.createElementNS(e, "linearGradient"); i.id = "svLineGradient", i.setAttribute("x1", "0%"), i.setAttribute("y1", "0%"), i.setAttribute("x2", "100%"), i.setAttribute("y2", "0%"); const s = document.createElementNS(e, "stop"); s.setAttribute("offset", "0%"), s.setAttribute("stop-color", "#8b5cf6"), s.setAttribute("stop-opacity", "0.8"); const r = document.createElementNS(e, "stop"); r.setAttribute("offset", "100%"), r.setAttribute("stop-color", "#d946ef"), r.setAttribute("stop-opacity", "1"), i.appendChild(s), i.appendChild(r), t.appendChild(i); const n = document.createElementNS(e, "filter"); n.id = "svLineGlow", n.setAttribute("x", "-20%"), n.setAttribute("y", "-20%"), n.setAttribute("width", "140%"), n.setAttribute("height", "140%"); const o = document.createElementNS(e, "feGaussianBlur"); o.setAttribute("stdDeviation", "3"), o.setAttribute("result", "blur"); const a = document.createElementNS(e, "feMerge"), l = document.createElementNS(e, "feMergeNode"); l.setAttribute("in", "blur"); const d = document.createElementNS(e, "feMergeNode"); d.setAttribute("in", "SourceGraphic"), a.appendChild(l), a.appendChild(d), n.appendChild(o), n.appendChild(a), t.appendChild(n), this.svgDefs = t } renderDecomposition(e, t, i, s) {
        this.clear(), this.interactions.clear(), this.totalKeywords = Object.keys(i).length, this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.svg.classList.add("sv-logic-svg"), this.svgDefs && this.svg.appendChild(this.svgDefs), document.body.appendChild(this.svg), this.wrapKeywords(e, i), t.innerHTML = `
            <div class="sv-concept-cloud fade-in">
                ${[...new Set(Object.values(i))].map(r => `
                    <div class="sv-concept-node" data-concept="${r}">
                        <span class="node-icon">🧩</span>
                        <span class="node-text">${r}</span>
                    </div>
                `).join("")}
            </div>
        `, this.bindDecompositionEvents(e, t, i, s)
    } wrapKeywords(e, t) { const i = Object.keys(t).sort((r, n) => n.length - r.length); let s = e.innerHTML; i.forEach(r => { const n = new RegExp(`(${r})`, "gi"); s = s.replace(n, (o, a, l, d) => { const c = d.substring(0, l); return c.lastIndexOf("<") > c.lastIndexOf(">") ? o : `<span class="sv-keyword" data-target="${t[r]}">${a}</span>` }) }), e.innerHTML = s } bindDecompositionEvents(e, t, i, s) { const r = e.querySelectorAll(".sv-keyword"), n = t.querySelectorAll(".sv-concept-node"); r.forEach(o => { o.addEventListener("mouseenter", () => { const a = o.dataset.target, l = t.querySelector(`.sv-concept-node[data-concept="${a}"]`); l && (this.drawLine(o, l), l.classList.add("highlight")), this.interactions.add(o.textContent.trim().toLowerCase()), s && s(this.interactions.size, this.totalKeywords) }), o.addEventListener("mouseleave", () => { this.clearLines(), n.forEach(a => a.classList.remove("highlight")) }) }) } drawLine(e, t) { const i = e.getBoundingClientRect(), s = t.getBoundingClientRect(), r = i.right, n = i.top + i.height / 2, o = s.left, a = s.top + s.height / 2, l = document.createElementNS("http://www.w3.org/2000/svg", "path"), d = `M ${r} ${n} C ${r + 100} ${n}, ${o - 100} ${a}, ${o} ${a}`; l.setAttribute("d", d), l.setAttribute("stroke", "url(#svLineGradient)"), l.setAttribute("stroke-width", "4"), l.setAttribute("fill", "none"), l.setAttribute("filter", "url(#svLineGlow)"), l.classList.add("sv-connector-line"), this.svg.appendChild(l), this.lines.push(l) } clearLines() { this.lines.forEach(e => e.remove()), this.lines = [] } renderDiff(e, t, i) {
        this.clear(), e.innerHTML = `
            <div class="sv-diff-container fade-in">
                <div class="sv-diff-header">
                    <span class="diff-title">Algorithm Evolution</span>
                    <span class="diff-subtitle">${t} → Custom Solution</span>
                </div>
                <div class="sv-diff-view">
                    <div class="sv-diff-column standard">
                        <div class="column-label">Standard Logic</div>
                        <div class="sv-diff-box">
                            <div class="line">Initialize standard structures</div>
                            <div class="line">Standard traversal/loop</div>
                            <div class="line">Base condition checks</div>
                            <div class="line">Return default result</div>
                        </div>
                    </div>
                    <div class="sv-diff-arrow">
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M13,5L11,5L11,9L2,9L2,15L11,15L11,19L13,19L22,12L13,5Z" />
                        </svg>
                    </div>
                    <div class="sv-diff-column modified">
                        <div class="column-label">Problem-Specific Tweaks</div>
                        <div class="sv-diff-box">
                            <div class="line">Initialize standard structures</div>
                            ${i.map((s, r) => `
                                <div class="line addition" style="animation-delay: ${.2 + r * .1}s">
                                    <span class="diff-icon">+</span>
                                    <span class="diff-text">${s}</span>
                                </div>
                            `).join("")}
                            <div class="line">Standard traversal/loop</div>
                            <div class="line">Return custom result</div>
                        </div>
                    </div>
                </div>
            </div>
        `} clear() { this.svg && (this.svg.remove(), this.svg = null), this.lines = [] } injectStyles() {
        if (document.getElementById("sv-logic-styles")) return; document.head.insertAdjacentHTML("beforeend", `
            <style id="sv-logic-styles">
                .sv-logic-svg {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 10001;
                }

                .sv-connector-line {
                    stroke-dasharray: 1000;
                    stroke-dashoffset: 1000;
                    animation: svDrawLine 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards,
                               svPulseLine 2s infinite ease-in-out 0.6s;
                }

                @keyframes svDrawLine {
                    to { stroke-dashoffset: 0; }
                }

                @keyframes svPulseLine {
                    0%, 100% { stroke-width: 4; opacity: 1; }
                    50% { stroke-width: 6; opacity: 0.8; }
                }

                .sv-keyword {
                    background: rgba(139, 92, 246, 0.15);
                    border-bottom: 2px dashed #8b5cf6;
                    cursor: pointer;
                    padding: 0 4px;
                    margin: 0 1px;
                    border-radius: 4px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    display: inline-block;
                    position: relative;
                }

                .sv-keyword:hover {
                    background: rgba(139, 92, 246, 0.3);
                    border-bottom-style: solid;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.2);
                }

                .sv-concept-cloud {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1.5rem;
                    justify-content: center;
                    padding: 3rem;
                    perspective: 1000px;
                }

                .sv-concept-node {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(4px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 1.25rem 2rem;
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
                }

                .sv-concept-node .node-icon {
                    font-size: 1.5rem;
                    filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.5));
                }

                .sv-concept-node.highlight {
                    border-color: #d946ef;
                    background: rgba(217, 70, 239, 0.1);
                    transform: scale(1.1) translateZ(20px);
                    box-shadow: 0 15px 45px rgba(217, 70, 239, 0.3);
                }

                /* Enhanced Diff View */
                .sv-diff-container {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    padding: 1.5rem;
                    gap: 1.5rem;
                }

                .sv-diff-header {
                    text-align: center;
                }

                .diff-title {
                    display: block;
                    font-size: 1.2rem;
                    font-weight: 700;
                    background: linear-gradient(to right, #8b5cf6, #d946ef);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .diff-subtitle {
                    font-size: 0.8rem;
                    opacity: 0.5;
                }

                .sv-diff-view {
                    display: flex;
                    align-items: stretch;
                    gap: 1.5rem;
                    flex: 1;
                }

                .sv-diff-column {
                    flex: 1;
                    background: rgba(255, 255, 255, 0.02);
                    border-radius: 20px;
                    padding: 1.5rem;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .column-label {
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: rgba(255, 255, 255, 0.4);
                    font-weight: 700;
                }

                .sv-diff-box {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .sv-diff-box .line {
                    padding: 0.75rem 1rem;
                    background: rgba(255, 255, 255, 0.03);
                    border-radius: 12px;
                    font-size: 0.85rem;
                    border: 1px solid transparent;
                    transition: all 0.3s ease;
                }

                .sv-diff-box .line.addition {
                    background: rgba(16, 185, 129, 0.08);
                    border: 1px solid rgba(16, 185, 129, 0.2);
                    color: #34d399;
                    opacity: 0;
                    transform: translateX(-20px);
                    animation: svDiffSlideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }

                .sv-diff-box .line.removal {
                    background: rgba(239, 68, 68, 0.08);
                    border: 1px solid rgba(239, 68, 68, 0.2);
                    color: #f87171;
                    text-decoration: line-through;
                    opacity: 0.7;
                }

                .sv-diff-arrow {
                    display: flex;
                    align-items: center;
                    color: rgba(255, 255, 255, 0.1);
                }

                @keyframes svDiffSlideIn {
                    to { opacity: 1; transform: translateX(0); }
                }
            </style>
        `)
    }
} const M = Object.freeze(Object.defineProperty({ __proto__: null, LogicFlowRenderer: $ }, Symbol.toStringTag, { value: "Module" })); class q {
    constructor(e, t = {}) { typeof e == "string" ? this.container = document.getElementById(e) : this.container = e, this.options = t, this.solution = null, this.currentStep = "breakdown", this.lang = "java", this.injectStyles() } render(e) {
        if (this.solution = e, this.currentStep = "breakdown", !this.container) return; const t = document.getElementById("topRightControls"); t && (t.style.display = "none"), this.logicFlow = null, this.container.innerHTML = `
            <div class="sv-overlay fade-in">
                <div class="sv-glass-card">
                    <!-- Top Bar: Progress Indicator -->
                    <div class="sv-top-bar">
                        <div class="sv-progress-steps">
                            <div class="sv-step active" data-step="breakdown">
                                <span class="step-num">1</span>
                                <span class="step-label">Breakdown</span>
                            </div>
                            <div class="sv-step-line"></div>
                            <div class="sv-step" data-step="concept">
                                <span class="step-num">2</span>
                                <span class="step-label">Concept</span>
                            </div>
                            <div class="sv-step-line"></div>
                            <div class="sv-step" data-step="viz">
                                <span class="step-num">3</span>
                                <span class="step-label">Visualizer</span>
                            </div>
                            <div class="sv-step-line"></div>
                            <div class="sv-step" data-step="output">
                                <span class="step-num">4</span>
                                <span class="step-label">Output</span>
                            </div>
                        </div>
                        <button class="sv-close-btn" id="svCloseBtn">✕</button>
                    </div>

                    <!-- Main Content: Split View -->
                    <div class="sv-main-content">
                        <!-- Left Panel: Interactive Text/Code -->
                        <div class="sv-left-panel" id="svLeftPanel">
                            <!-- Populated dynamically -->
                        </div>

                        <!-- Right Panel: Visualizer -->
                        <div class="sv-right-panel">
                            <div class="sv-panel-header">
                                <span class="panel-icon">🎬</span>
                                <span>Visualizer</span>
                            </div>
                            <div class="sv-viz-container" id="svVizContainer">
                                <!-- Populated dynamically -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `, this.logicFlow = new $(this.container.querySelector("#svVizContainer")), this.bindEvents(), this.showStep("breakdown")
    } showStep(e) { this.currentStep = e, this.updateProgressUI(); const t = this.container.querySelector("#svLeftPanel"), i = this.container.querySelector("#svVizContainer"); if (!(!t || !i)) switch (this.logicFlow && this.logicFlow.clear(), e) { case "breakdown": this.renderBreakdown(t, i); break; case "concept": this.renderConcept(t, i); break; case "viz": this.renderVisualizer(t, i); break; case "output": this.renderOutput(t, i); break } } renderBreakdown(e, t) {
        e.innerHTML = `
            <div class="sv-content-section fade-in" id="svBreakdownSection">
                <h2>🔍 Problem Breakdown</h2>
                <div class="sv-problem-text">${this.solution.pedagogy.question}</div>
                <ul class="sv-list">
                    ${this.solution.pedagogy.breakdown.map(s => `<li>${s}</li>`).join("")}
                </ul>
                <div class="sv-hint-box">
                    <span class="hint-icon">💡</span>
                    <span id="svHintText">Hover over highlighted keywords to see their algorithmic mapping.</span>
                </div>
                <div class="sv-interaction-progress" id="svInteractionProgress">
                    <div class="progress-bar"><div class="fill" style="width: 0%"></div></div>
                    <span class="progress-text">Explore 0% of keywords</span>
                </div>
                <button class="sv-next-btn" id="svNextBtn">Next: Concept Selection →</button>
            </div>
        `, e.addEventListener("click", s => { s.target && s.target.id === "svNextBtn" && this.showStep("concept") }); const i = this.solution.pedagogy.key_mapping && Object.keys(this.solution.pedagogy.key_mapping).length > 0; if (!i) { const s = e.querySelector("#svNextBtn"), r = e.querySelector("#svInteractionProgress"), n = e.querySelector(".sv-hint-box"); s && (s.disabled = !1), r && (r.style.display = "none"), n && (n.style.display = "none") } this.logicFlow && i && this.logicFlow.renderDecomposition(e.querySelector("#svBreakdownSection"), t, this.solution.pedagogy.key_mapping, (s, r) => { const n = Math.min(s / r * 100, 100), o = e.querySelector("#svInteractionProgress .fill"), a = e.querySelector("#svInteractionProgress .progress-text"), l = e.querySelector("#svNextBtn"); o && (o.style.width = `${n}%`), a && (a.textContent = n >= 100 ? "Ready to proceed!" : `Explore ${Math.round(n)}% of keywords`), n >= 50 && l && l.classList.add("pulse") })
    } renderConcept(e, t) {
        e.innerHTML = `
            <div class="sv-content-section fade-in">
                <h2>💡 Concept Selection</h2>
                <div class="sv-concept-card">
                    <div class="label">Selected Algorithm:</div>
                    <div class="value">${this.solution.pedagogy.concept_selection.selected}</div>
                </div>
                <div class="sv-concept-reason">
                    ${this.solution.pedagogy.concept_selection.reason}
                </div>
                <h3>Structural Plan</h3>
                <ul class="sv-list">
                    ${this.solution.pedagogy.structural_plan.modifications.map(i => `<li>${i}</li>`).join("")}
                </ul>
                <button class="sv-next-btn" id="svNextBtn">Next: Start Visualizer →</button>
            </div>
        `, e.addEventListener("click", i => { i.target && i.target.id === "svNextBtn" && this.showStep("viz") }), this.logicFlow && this.logicFlow.renderDiff(t, this.solution.pedagogy.structural_plan.default_algo, this.solution.pedagogy.structural_plan.modifications)
    } renderVisualizer(e, t) {
        e.innerHTML = `
            <div class="sv-content-section fade-in">
                <h2>💻 Implementation</h2>
                <div class="sv-code-tabs">
                    <button class="sv-tab ${this.lang === "cpp" ? "active" : ""}" data-lang="cpp">C++</button>
                    <button class="sv-tab ${this.lang === "java" ? "active" : ""}" data-lang="java">Java</button>
                    <button class="sv-tab ${this.lang === "python" ? "active" : ""}" data-lang="python">Python</button>
                    <button class="sv-tab ${this.lang === "javascript" ? "active" : ""}" data-lang="javascript">JavaScript</button>
                </div>
                <div class="sv-code-block">
                    <pre><code id="svCodeArea" class="language-${this.lang}">${this.escapeHtml(this.solution.getCode(this.lang))}</code></pre>
                </div>
                <div id="svNarratorControls" class="sv-narrator-controls"></div>
            </div>
        `, e.querySelectorAll(".sv-tab").forEach(i => { i.addEventListener("click", s => this.setLang(s.target.dataset.lang)) }), this.initNarrator(e, t)
    } renderOutput(e, t) {
        e.innerHTML = `
            <div class="sv-content-section fade-in">
                <h2>🏆 Final Result</h2>
                <div id="svOutputComparator" class="sv-output-comparator"></div>
            </div>
        `, this.initComparator(e, t)
    } setLang(e) { this.lang = e, this.currentStep === "viz" && this.showStep("viz") } initNarrator(e, t) {
        const i = e.querySelector("#svNarratorControls"), s = e.querySelector("#svCodeArea"); if (!i || !s || !t) return; const r = j.parseCodeLines(this.solution.getCode(this.lang)); s.innerHTML = r.map((o, a) => `<div class="nc-code-line" data-line="${a + 1}">${this.escapeHtml(o)}</div>`).join(""); const n = e.querySelector(".sv-code-block"); n && (n.innerHTML = `
                <div class="nc-code-body" style="display:flex; font-family: monospace;">
                    <div class="nc-line-numbers" style="padding-right:10px; border-right:1px solid #333; margin-right:10px; color:#666;">
                        ${r.map((o, a) => `<div>${a + 1}</div>`).join("")}
                    </div>
                    <div class="nc-code-content" style="flex:1;">
                        ${r.map((o, a) => `<div class="nc-code-line" data-line="${a + 1}" style="white-space:pre;">${this.escapeHtml(o)}</div>`).join("")}
                    </div>
                </div>
            `), P(async () => { const { UniversalNarrator: o } = await import("./universal-narrator-D55Th27_.js"); return { UniversalNarrator: o } }, __vite__mapDeps([0, 1])).then(({ UniversalNarrator: o }) => { this.narrator = new o({ container: e, codeContainer: n, vizContainer: t, controlsContainer: i, onOutput: a => { this.validator && this.validator.updateCurrentOutput(a) }, onComplete: () => { this.showStep("output"), setTimeout(() => { this.validator && this.validator.validate() }, 500) } }), this.narrator.loadContext(this.solution) })
    } initComparator(e, t) { const i = e.querySelector("#svOutputComparator"); i && (this.validator = new _({ container: i, onComplete: s => { console.log("Validation Complete:", s) } }), this.validator.setExpectedOutput(this.solution.simulation.sample_io.expected_output)) } updateProgressUI() { this.container.querySelectorAll(".sv-step").forEach(t => { const i = t.dataset.step; t.classList.toggle("active", i === this.currentStep); const s = ["breakdown", "concept", "viz", "output"], r = s.indexOf(this.currentStep), n = s.indexOf(i); t.classList.toggle("completed", n < r) }) } escapeHtml(e) { return e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;") : "" } bindEvents() { const e = this.container.querySelector("#svCloseBtn"); e == null || e.addEventListener("click", () => this.close()) } close() { this.narrator && (this.narrator.pause(), this.narrator = null), this.container && (this.container.innerHTML = ""); const e = document.getElementById("topRightControls"); e && (e.style.display = ""), this.options.onClose && this.options.onClose() } injectStyles() {
        if (document.getElementById("sv-styles")) return; document.head.insertAdjacentHTML("beforeend", `
            <style id="sv-styles">
                .sv-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.4);
                    backdrop-filter: blur(8px);
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                }

                .sv-glass-card {
                    background: rgba(20, 25, 35, 0.95);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 24px;
                    width: 100%;
                    max-width: 1200px;
                    height: auto;
                    max-height: 90vh;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                    color: white;
                }

                .sv-top-bar {
                    padding: 1.5rem 2rem;
                    background: rgba(0, 0, 0, 0.2);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }

                .sv-progress-steps {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .sv-step {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    opacity: 0.5;
                    transition: all 0.3s ease;
                }

                .sv-step.active {
                    opacity: 1;
                    transform: scale(1.05);
                }

                .sv-step-num {
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    font-size: 0.8rem;
                }

                .sv-step.active .sv-step-num {
                    background: #8b5cf6;
                    box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
                }

                .sv-step-line {
                    width: 40px;
                    height: 2px;
                    background: rgba(255, 255, 255, 0.1);
                }

                .sv-main-content {
                    flex: 1;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    overflow: hidden;
                }

                .sv-left-panel {
                    padding: 2rem;
                    overflow-y: auto;
                    border-right: 1px solid rgba(255, 255, 255, 0.1);
                    background: rgba(0, 0, 0, 0.1);
                }

                .sv-right-panel {
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .sv-panel-header {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: 600;
                    opacity: 0.8;
                }

                .sv-viz-container {
                    flex: 1;
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 16px;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }

                /* Code Tabs */
                .sv-code-tabs {
                    display: flex;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                    background: rgba(0, 0, 0, 0.2);
                    padding: 0.25rem;
                    border-radius: 10px;
                    width: fit-content;
                }

                .sv-tab {
                    padding: 0.5rem 1rem;
                    background: none;
                    border: none;
                    color: rgba(255, 255, 255, 0.6);
                    cursor: pointer;
                    border-radius: 8px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    transition: all 0.2s;
                }

                .sv-tab.active {
                    background: rgba(255, 255, 255, 0.1);
                    color: white;
                }

                .sv-code-block {
                    background: rgba(0, 0, 0, 0.3);
                    border-radius: 12px;
                    padding: 1rem;
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.85rem;
                    line-height: 1.5;
                    overflow-x: auto;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    margin-bottom: 1rem;
                }

                .sv-code-block pre {
                    margin: 0;
                }

                .sv-narrator-controls {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 12px;
                    padding: 1rem;
                }

                .sv-next-btn {
                    margin-top: 2rem;
                    padding: 1rem 2rem;
                    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
                    border: none;
                    border-radius: 12px;
                    color: white;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .sv-next-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(139, 92, 246, 0.3);
                }

                .sv-close-btn {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                    opacity: 0.5;
                    transition: opacity 0.2s;
                }

                .sv-close-btn:hover {
                    opacity: 1;
                }

                .sv-interaction-progress {
                    margin-top: 1.5rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .sv-interaction-progress .progress-bar {
                    height: 6px;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 3px;
                    overflow: hidden;
                }

                .sv-interaction-progress .fill {
                    height: 100%;
                    background: linear-gradient(to right, #8b5cf6, #d946ef);
                    width: 0%;
                    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
                }

                .sv-interaction-progress .progress-text {
                    font-size: 0.75rem;
                    opacity: 0.6;
                    font-weight: 600;
                }

                .sv-next-btn.pulse {
                    animation: svBtnPulse 2s infinite;
                }

                @keyframes svBtnPulse {
                    0% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.4); }
                    70% { box-shadow: 0 0 0 15px rgba(139, 92, 246, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0); }
                }

                /* Animations */
                .fade-in {
                    animation: svFadeIn 0.5s ease-out;
                }

                @keyframes svFadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            </style>
        `)
    }
} typeof window < "u" && (window.solutionViewer = null); export { B as D, q as S, _ as a, M as l };
