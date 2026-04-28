<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>NEMESIS — Roadmap</title>
<style>
  /* ── CSS VARIABLES (same as nemesis site) ── */
  :root {
    --bg:       #090c12;
    --surface:  #0e1118;
    --border:   #1a2035;
    --text:     #d4d8e2;
    --dim:      #4a5268;
    --accent:   #3b82f6;
    --accent2:  #10b981;
    --warn:     #f59e0b;
    --danger:   #ef4444;
    --purple:   #a78bfa;
    --font:     'IBM Plex Mono', 'Fira Code', 'Courier New', monospace;
    --sans:     'IBM Plex Sans', 'Segoe UI', system-ui, sans-serif;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--sans);
    font-size: 14px;
    line-height: 1.6;
    min-height: 100vh;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }
  @keyframes status-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.4; transform: scale(0.7); }
  }
  @keyframes fadeSlideIn {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── LAYOUT ── */
  .page-wrap { max-width: 860px; margin: 0 auto; padding: 0 24px 80px; }

  /* ── HERO ── */
  .nemesis-hero {
    min-height: 58vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 56px 0 44px;
    border-bottom: 1px solid var(--border);
    margin-bottom: 48px;
  }

  .nemesis-label {
    font-size: 10px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--dim);
    margin-bottom: 22px;
    font-family: var(--font);
  }
  .nemesis-label::before { content: '> '; color: var(--accent); }

  .nemesis-typewriter {
    font-size: clamp(18px, 5.5vw, 62px);
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
    min-height: 2.5em;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 36px;
  }
  .tw-line {
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
  }
  @media (max-width: 600px) {
    .tw-line { white-space: normal; overflow: visible; flex-wrap: wrap; }
  }
  .tw-text { color: var(--accent); }
  .tw-text::after {
    content: '';
    display: inline-block;
    width: 3px;
    height: 0.85em;
    background: var(--accent);
    margin-left: 4px;
    vertical-align: middle;
    animation: blink 0.45s step-end infinite;
  }

  .page-subtitle-line {
    font-size: clamp(14px, 2vw, 18px);
    color: var(--dim);
    font-family: var(--font);
    margin-bottom: 32px;
  }
  .page-subtitle-line .hl  { color: var(--accent2); }
  .page-subtitle-line::before { content: '// '; color: var(--accent); }

  .nemesis-status {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    color: var(--warn);
    border: 1px solid rgba(245,158,11,0.35);
    padding: 5px 14px;
    margin-bottom: 32px;
    background: rgba(245,158,11,0.04);
    width: fit-content;
    font-family: var(--font);
  }
  .status-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--warn);
    animation: status-pulse 1.8s ease-in-out infinite;
  }

  .nemesis-subtitle {
    font-size: 13px;
    color: var(--dim);
    line-height: 1.9;
    max-width: 680px;
    border-left: 2px solid var(--accent);
    padding-left: 18px;
  }
  .nemesis-subtitle strong { color: var(--accent); font-weight: 700; }

  /* ── SECTION ── */
  .section { margin-bottom: 52px; }
  .section-title {
    font-size: 10px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--dim);
    font-family: var(--font);
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--border);
  }
  .section-title::before { content: '// '; color: var(--accent); }

  /* ── STATS GRID ── */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-bottom: 0;
  }
  .stat-card {
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 16px 14px;
    transition: border-color 0.15s;
  }
  .stat-card:hover { border-color: var(--accent); }
  .stat-label {
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--dim);
    font-family: var(--font);
    margin-bottom: 7px;
  }
  .stat-label::before { content: '# '; color: var(--accent); }
  .stat-value { font-size: 13px; color: var(--text); font-weight: 500; }

  /* ── TIMELINE ── */
  .timeline-wrap {
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 28px 24px;
    margin-bottom: 0;
    overflow-x: auto;
  }

  .tl-track {
    display: flex;
    align-items: flex-start;
    gap: 0;
    min-width: 580px;
    padding: 12px 0 4px;
  }

  .tl-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  /* connector line */
  .tl-item:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 14px;
    left: 50%;
    width: 100%;
    height: 2px;
    background: var(--border);
    z-index: 0;
  }
  .tl-item.done:not(:last-child)::after  { background: var(--accent2); }
  .tl-item.active:not(:last-child)::after { background: linear-gradient(to right, var(--accent), var(--border)); }

  .tl-dot {
    width: 28px; height: 28px;
    border-radius: 50%;
    border: 2px solid var(--border);
    background: var(--bg);
    display: flex; align-items: center; justify-content: center;
    font-size: 10px;
    font-family: var(--font);
    font-weight: 700;
    position: relative;
    z-index: 1;
    transition: border-color 0.2s;
  }
  .tl-item.done   .tl-dot { border-color: var(--accent2); color: var(--accent2); background: rgba(16,185,129,0.08); }
  .tl-item.active .tl-dot { border-color: var(--accent);  color: var(--accent);  background: rgba(59,130,246,0.12);
    box-shadow: 0 0 0 4px rgba(59,130,246,0.12);
    animation: status-pulse 2s ease-in-out infinite;
  }
  .tl-item.upcoming .tl-dot { color: var(--dim); }

  .tl-label {
    font-size: 9px;
    font-family: var(--font);
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--dim);
    margin-top: 9px;
    text-align: center;
  }
  .tl-item.done   .tl-label { color: var(--accent2); }
  .tl-item.active .tl-label { color: var(--accent); }

  .tl-phase {
    font-size: 8px;
    font-family: var(--font);
    color: var(--dim);
    margin-top: 3px;
    text-align: center;
    line-height: 1.3;
  }
  .tl-item.done   .tl-phase { color: rgba(16,185,129,0.6); }
  .tl-item.active .tl-phase { color: rgba(59,130,246,0.7); }

  .tl-legend {
    display: flex;
    gap: 20px;
    margin-top: 20px;
    padding-top: 14px;
    border-top: 1px solid var(--border);
  }
  .tl-legend-item {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--dim);
    font-family: var(--font);
  }
  .tl-legend-dot {
    width: 8px; height: 8px; border-radius: 50%;
  }

  /* ── MILESTONE CARDS ── */
  .milestone-list { display: flex; flex-direction: column; gap: 10px; }

  .milestone-card {
    background: var(--surface);
    border: 1px solid var(--border);
    transition: border-color 0.2s;
    overflow: hidden;
  }
  .milestone-card.done   { border-left: 3px solid var(--accent2); }
  .milestone-card.active { border-left: 3px solid var(--accent); }
  .milestone-card.upcoming { border-left: 3px solid var(--border); }

  .milestone-header {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 16px 18px;
    cursor: pointer;
    justify-content: space-between;
    user-select: none;
  }
  .milestone-header:hover { background: rgba(255,255,255,0.02); }

  .milestone-badge {
    font-family: var(--font);
    font-size: 11px;
    font-weight: 800;
    padding: 3px 10px;
    letter-spacing: 1px;
    flex-shrink: 0;
    border: 1px solid;
  }
  .badge-done     { color: var(--accent2); border-color: var(--accent2); background: rgba(16,185,129,0.07); }
  .badge-active   { color: var(--accent);  border-color: var(--accent);  background: rgba(59,130,246,0.09); }
  .badge-upcoming { color: var(--dim);     border-color: var(--border);  background: transparent; }
  .badge-warn     { color: var(--warn);    border-color: rgba(245,158,11,0.4); background: rgba(245,158,11,0.05); }
  .badge-purple   { color: var(--purple);  border-color: rgba(167,139,250,0.4); background: rgba(167,139,250,0.06); }
  .badge-danger   { color: var(--danger);  border-color: rgba(239,68,68,0.4); background: rgba(239,68,68,0.06); }

  .milestone-info { flex: 1; min-width: 0; }
  .milestone-name { font-size: 14px; font-weight: 600; color: var(--text); }
  .milestone-goal { font-size: 12px; color: var(--dim); margin-top: 3px; line-height: 1.4; }

  .milestone-meta {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }
  .duration-tag {
    font-size: 11px;
    font-family: var(--font);
    color: var(--dim);
    border: 1px solid var(--border);
    padding: 3px 8px;
    background: var(--bg);
  }

  .chevron {
    color: var(--dim);
    font-size: 12px;
    transition: transform 0.2s;
    flex-shrink: 0;
  }
  .chevron.open { transform: rotate(180deg); }

  .milestone-body {
    padding: 0 18px 18px;
    border-top: 1px solid var(--border);
    animation: fadeSlideIn 0.18s ease;
  }

  .body-label {
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--dim);
    font-family: var(--font);
    margin: 16px 0 10px;
  }
  .body-label::before { content: '> '; color: var(--accent); }

  .task-list { display: flex; flex-direction: column; gap: 6px; }
  .task-item {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    font-size: 12px;
    color: var(--dim);
    line-height: 1.55;
  }
  .task-item::before {
    content: '→';
    color: var(--accent);
    font-family: var(--font);
    flex-shrink: 0;
    margin-top: 1px;
  }
  .task-item.done-task { color: rgba(16,185,129,0.7); }
  .task-item.done-task::before { content: '✓'; color: var(--accent2); }

  .deliverable-box {
    background: rgba(59,130,246,0.05);
    border: 1px solid rgba(59,130,246,0.18);
    padding: 12px 14px;
    margin-top: 14px;
    font-size: 12px;
    color: var(--text);
    line-height: 1.5;
  }
  .deliverable-box .dl-label {
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--accent);
    font-family: var(--font);
    margin-bottom: 5px;
  }

  .risk-box {
    background: rgba(245,158,11,0.04);
    border: 1px solid rgba(245,158,11,0.22);
    padding: 12px 14px;
    margin-top: 8px;
    font-size: 12px;
    color: rgba(245,158,11,0.8);
    line-height: 1.5;
    display: flex;
    gap: 9px;
    align-items: flex-start;
  }
  .risk-box::before { content: '⚠'; flex-shrink: 0; }

  /* ── CURRENT FOCUS ── */
  .focus-block {
    background: var(--surface);
    border: 1px solid var(--border);
    border-left: 3px solid var(--accent);
    padding: 20px 22px;
  }
  .focus-title {
    font-size: 12px;
    font-weight: 700;
    color: var(--accent);
    font-family: var(--font);
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 14px;
  }
  .focus-title::before { content: '◆ '; }
  .focus-items { display: flex; flex-direction: column; gap: 8px; }
  .focus-item {
    display: flex;
    gap: 10px;
    font-size: 12px;
    color: var(--dim);
    line-height: 1.5;
  }
  .focus-item .fi-phase {
    font-family: var(--font);
    font-size: 10px;
    font-weight: 700;
    color: var(--accent);
    background: rgba(59,130,246,0.1);
    border: 1px solid rgba(59,130,246,0.2);
    padding: 1px 7px;
    flex-shrink: 0;
    height: fit-content;
    margin-top: 1px;
  }

  /* ── WIP BANNER ── */
  .wip-banner {
    border: 1px solid rgba(245,158,11,0.4);
    background: rgba(245,158,11,0.04);
    padding: 12px 18px;
    font-size: 12px;
    color: var(--warn);
    margin-bottom: 40px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-family: var(--font);
  }
  .wip-banner::before { content: '⚠'; flex-shrink: 0; }

  /* ── RESPONSIVE ── */
  @media (max-width: 700px) {
    .stats-grid { grid-template-columns: 1fr 1fr; }
    .nemesis-hero { min-height: 48vh; }
    .milestone-meta .duration-tag { display: none; }
  }
  @media (max-width: 440px) {
    .stats-grid { grid-template-columns: 1fr; }
  }
</style>
</head>
<body>
<div class="page-wrap">

  <!-- ── HERO ── -->
  <div class="nemesis-hero">
    <div class="nemesis-label">project — roadmap</div>

    <div class="nemesis-typewriter">
      <div class="tw-line">
        <span class="tw-text" id="tw-text"></span>
      </div>
    </div>
    <div class="page-subtitle-line">
      6 milestones · <span class="hl">M0 complete</span> · M1 active · 26–34 weeks total
    </div>

    <div class="nemesis-status">
      <span class="status-dot"></span>
      active development &nbsp;·&nbsp; M1 in progress
    </div>

    <div class="nemesis-subtitle">
      Phased implementation plan for <strong>NEMESIS</strong> — from data pipeline foundations
      to a fully benchmarked, publication-ready multi-agent early-warning system for
      banking supervision. Each milestone has <strong>clear deliverables</strong>, dependencies
      and risk mitigation strategies.
    </div>
  </div>

  <!-- ── WIP BANNER ── -->
  <div class="wip-banner">
    This roadmap is a living document updated as development progresses. Timelines are estimates; some tasks may be parallelised after M0.
  </div>

  <!-- ── OVERVIEW STATS ── -->
  <section class="section">
    <div class="section-title">project overview</div>
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">total milestones</div>
        <div class="stat-value">6 &nbsp;(M0 → M5)</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">estimated duration</div>
        <div class="stat-value">26–34 weeks</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">current status</div>
        <div class="stat-value" style="color:var(--accent)">M1 — Active</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">completed</div>
        <div class="stat-value" style="color:var(--accent2)">M0 ✓ Done</div>
      </div>
    </div>
  </section>

  <!-- ── TIMELINE ── -->
  <section class="section">
    <div class="section-title">timeline</div>
    <div class="timeline-wrap">
      <div class="tl-track">
        <!-- M0 -->
        <div class="tl-item done">
          <div class="tl-dot">✓</div>
          <div class="tl-label">M0</div>
          <div class="tl-phase">Foundation<br>&amp; Data</div>
        </div>
        <!-- M1 -->
        <div class="tl-item active">
          <div class="tl-dot">M1</div>
          <div class="tl-label">M1</div>
          <div class="tl-phase">RAG<br>Pipeline</div>
        </div>
        <!-- M2 -->
        <div class="tl-item upcoming">
          <div class="tl-dot">M2</div>
          <div class="tl-label">M2</div>
          <div class="tl-phase">Risk<br>Analyst</div>
        </div>
        <!-- M3 -->
        <div class="tl-item upcoming">
          <div class="tl-dot">M3</div>
          <div class="tl-label">M3</div>
          <div class="tl-phase">Multi-Agent<br>Orchestr.</div>
        </div>
        <!-- M4 -->
        <div class="tl-item upcoming">
          <div class="tl-dot">M4</div>
          <div class="tl-label">M4</div>
          <div class="tl-phase">API &amp;<br>Explain.</div>
        </div>
        <!-- M5 -->
        <div class="tl-item upcoming">
          <div class="tl-dot">M5</div>
          <div class="tl-label">M5</div>
          <div class="tl-phase">Benchmark<br>&amp; Paper</div>
        </div>
      </div>
      <div class="tl-legend">
        <div class="tl-legend-item">
          <div class="tl-legend-dot" style="background:var(--accent2)"></div>
          Completed
        </div>
        <div class="tl-legend-item">
          <div class="tl-legend-dot" style="background:var(--accent)"></div>
          In Progress
        </div>
        <div class="tl-legend-item">
          <div class="tl-legend-dot" style="background:var(--border)"></div>
          Upcoming
        </div>
      </div>
    </div>
  </section>

  <!-- ── CURRENT FOCUS ── -->
  <section class="section">
    <div class="section-title">current focus</div>
    <div class="focus-block">
      <div class="focus-title">What we are building right now</div>
      <div class="focus-items">
        <div class="focus-item">
          <span class="fi-phase">M1</span>
          Collecting and cleaning the regulatory corpus: CRR/CRD, SREP methodology, ECB guides and EBA guidelines (PDF → clean text)
        </div>
        <div class="focus-item">
          <span class="fi-phase">M1</span>
          Designing the optimal chunking strategy for legal/normative texts — evaluating chunk sizes (512 / 1024 tokens) with 10–20% overlap
        </div>
        <div class="focus-item">
          <span class="fi-phase">M1</span>
          Embedding model benchmarking: <code style="color:var(--accent); font-family:var(--font); font-size:11px">text-embedding-3-large</code> vs <code style="color:var(--accent); font-family:var(--font); font-size:11px">BGE-M3</code> vs <code style="color:var(--accent); font-family:var(--font); font-size:11px">E5-mistral</code>
        </div>
        <div class="focus-item">
          <span class="fi-phase">M1</span>
          Setting up Qdrant collections with structured payload (framework, article, year, language, KPI relevance)
        </div>
      </div>
    </div>
  </section>

  <!-- ── MILESTONES ── -->
  <section class="section">
    <div class="section-title">milestones</div>
    <div class="milestone-list" id="milestone-list"></div>
  </section>

</div>

<script>
const milestones = [
  {
    id: 0,
    phase: "M0",
    label: "Foundation & Data Pipeline",
    duration: "4–6 weeks",
    status: "done",      // done | active | upcoming
    badgeClass: "badge-done",
    statusLabel: "COMPLETE",
    goal: "Stable infrastructure with real (or realistic synthetic) data flowing end-to-end.",
    tasks: [
      { text: "Repo setup, CI/CD (GitHub Actions), Docker Compose for local dev", done: true },
      { text: "CASPER API integration (or mock with public ECB data: EBA transparency exercise)", done: true },
      { text: "TimescaleDB schema for banking time series (CET1, NPL ratio, LCR, NSFR, etc.)", done: true },
      { text: "Data quality scripts: validation, normalisation, missing value handling", done: true },
      { text: "First ETL pipeline: CASPER → TimescaleDB → API endpoint /data/{bank_id}", done: true },
      { text: "Basic test suite: unit tests on ingestion, integration tests on API", done: true },
    ],
    deliverable: "Functional, documented data pipeline with 3+ mock banks and 2+ years of time series data.",
    risk: "Real CASPER data access — always have a realistic synthetic dataset as fallback."
  },
  {
    id: 1,
    phase: "M1",
    label: "RAG Pipeline — Regulatory Intelligence",
    duration: "4–5 weeks",
    status: "active",
    badgeClass: "badge-active",
    statusLabel: "IN PROGRESS",
    goal: "Accurate retrieval system over ECB/EBA/BCBS documents with chunking optimised for legal texts.",
    tasks: [
      { text: "Corpus collection: CRR/CRD, SREP methodology, ECB guides, EBA guidelines (PDF → clean text)", done: false },
      { text: "Chunking strategy: experiment with chunk size (512/1024 tokens) + overlap (10–20%) on normative texts", done: false },
      { text: "Embedding selection & fine-tuning: compare text-embedding-3-large vs BGE-M3 vs E5-mistral", done: false },
      { text: "Qdrant setup: collection per document category, payload with metadata (framework, article, year, language)", done: false },
      { text: "DocRetrieverAgent with hybrid search (dense + sparse BM25)", done: false },
      { text: "RAG evaluation: RAGAS metrics (faithfulness, answer relevancy, context precision)", done: false },
      { text: "Retrieval benchmark: 50+ question-answer pairs on regulatory documents as golden set", done: false },
    ],
    deliverable: "RAG pipeline with RAGAS faithfulness ≥ 0.85 on the regulatory golden set.",
    risk: "Normative texts have complex structure (nested articles, paragraphs) — naive chunking severely degrades performance."
  },
  {
    id: 2,
    phase: "M2",
    label: "Risk Analyst Agent — Anomaly Detection",
    duration: "5–6 weeks",
    status: "upcoming",
    badgeClass: "badge-warn",
    statusLabel: "UPCOMING",
    goal: "Early-warning model that detects anomalies in banking KPIs with an interpretable risk score.",
    tasks: [
      { text: "Feature engineering: % delta over time windows (MoM, QoQ, YoY), rolling stats, per-bank z-scores", done: false },
      { text: "Baseline models: Isolation Forest, LSTM Autoencoder, Prophet for trend detection", done: false },
      { text: "Dataset labelling: use ECB supervisory thresholds as ground truth proxy", done: false },
      { text: "Scoring model: XGBoost with SHAP values for feature importance (native explainability)", done: false },
      { text: "Adaptive thresholds: calibrated by sector / country / bank size (no one-size-fits-all)", done: false },
      { text: "Integrate model as RiskAnalystAgent in LangGraph", done: false },
      { text: "Structured output: {score, anomaly_type, affected_kpis, shap_explanation, confidence_interval}", done: false },
    ],
    deliverable: "RiskAnalystAgent with AUC-ROC ≥ 0.82 on test dataset, SHAP explanation for every flag.",
    risk: "Label scarcity — anomalies are rare by definition. Use SMOTE or self-supervised pre-training to compensate."
  },
  {
    id: 3,
    phase: "M3",
    label: "Multi-Agent Orchestration",
    duration: "4–5 weeks",
    status: "upcoming",
    badgeClass: "badge-purple",
    statusLabel: "UPCOMING",
    goal: "The three agents collaborate in a stateful graph with feedback loops and graceful error handling.",
    tasks: [
      { text: "Implement the StateGraph in LangGraph: nodes = agents, edges = transition conditions", done: false },
      { text: "SupervisorAgent with router: decides next_agent based on current state", done: false },
      { text: "Human-in-the-loop: supervisor can interrupt the cycle and inject feedback", done: false },
      { text: "Failure handling: retry logic, conservative fallback on LLM error, max_iterations hard cap", done: false },
      { text: "LangSmith tracing: every run logged with inputs / outputs / latency / token usage", done: false },
      { text: "Audit trail: every agent decision written to PostgreSQL with timestamp and reasoning", done: false },
      { text: "End-to-end integration test: from CASPER input to explained flag in output", done: false },
    ],
    deliverable: "Functional end-to-end multi-agent pipeline with full audit trail and latency < 30s.",
    risk: "Infinite loops in the agent graph — define a hard max_iterations cap and an always_exit condition."
  },
  {
    id: 4,
    phase: "M4",
    label: "Explainability & API Layer",
    duration: "3–4 weeks",
    status: "upcoming",
    badgeClass: "badge-active",
    statusLabel: "UPCOMING",
    goal: "Every system output is explainable, citable and auditable. FastAPI exposes everything in a documented way.",
    tasks: [
      { text: "Explainability layer: generate NL narratives from SHAP values + retrieved docs", done: false },
      { text: "Citation system: every LLM assertion must cite a specific chunk with article and page", done: false },
      { text: "Confidence scoring: the system expresses uncertainty — 'high-confidence flag' vs. 'weak signal'", done: false },
      { text: "FastAPI endpoints: /analyze/{bank_id}, /flags, /explain/{flag_id}, /audit/{run_id}", done: false },
      { text: "API authentication: JWT + rate limiting (authenticated supervisors, protected audit access)", done: false },
      { text: "Auto-generated OpenAPI docs, Postman collection for testing", done: false },
      { text: "Minimal dashboard (Streamlit or React) to visualise flags + explanations", done: false },
    ],
    deliverable: "Swagger-documented API with explainability traceable to the source document chunk.",
    risk: "LLM may hallucinate explanations — grounding on retrieved chunks must be mandatory and verifiable."
  },
  {
    id: 5,
    phase: "M5",
    label: "Benchmark & Research Paper",
    duration: "6–8 weeks",
    status: "upcoming",
    badgeClass: "badge-danger",
    statusLabel: "UPCOMING",
    goal: "Rigorous, reproducible, publishable evaluation. Systematic comparison against strong baselines.",
    tasks: [
      { text: "Define benchmark protocol: metrics (AUC-PR, F2, RAGAS, human score), baselines, train/test splits", done: false },
      { text: "Public dataset collection: EBA stress test data, ECB SDMX, BIS statistics", done: false },
      { text: "Ablation study: component by component — what contributes and by how much?", done: false },
      { text: "Baseline comparison: static rules vs. ML only vs. RAG only vs. full NEMESIS", done: false },
      { text: "Human evaluation: 2–3 banking supervisors rate explanation quality (inter-rater agreement)", done: false },
      { text: "Error analysis: critical false positives (healthy bank flagged) vs. false negatives (missed risk)", done: false },
      { text: "Paper writing: ACL/NeurIPS-style with ablation, limitation, and reproducibility statement sections", done: false },
    ],
    deliverable: "Draft paper + annotated codebase + benchmark dataset publicly releasable (where data policy allows).",
    risk: "ECB data confidentiality — plan from the start which parts of the dataset can be made public."
  },
];

const list = document.getElementById('milestone-list');

function renderMilestones() {
  list.innerHTML = '';
  milestones.forEach(m => {
    const card = document.createElement('div');
    card.className = `milestone-card ${m.status}`;
    card.dataset.id = m.id;

    const tasksHtml = m.tasks.map(t =>
      `<div class="task-item ${t.done ? 'done-task' : ''}">${t.text}</div>`
    ).join('');

    card.innerHTML = `
      <div class="milestone-header" data-id="${m.id}">
        <div style="display:flex;align-items:center;gap:12px;min-width:0;flex:1">
          <span class="milestone-badge ${m.badgeClass}">${m.phase}</span>
          <div class="milestone-info">
            <div class="milestone-name">${m.label}</div>
            <div class="milestone-goal">${m.goal}</div>
          </div>
        </div>
        <div class="milestone-meta">
          <span class="milestone-badge ${m.badgeClass}" style="font-size:9px;padding:2px 7px">${m.statusLabel}</span>
          <span class="duration-tag">${m.duration}</span>
          <span class="chevron" id="chev-${m.id}">▼</span>
        </div>
      </div>
      <div class="milestone-body" id="body-${m.id}" style="display:none">
        <div class="body-label">Tasks</div>
        <div class="task-list">${tasksHtml}</div>
        <div class="deliverable-box">
          <div class="dl-label">Deliverable</div>
          ${m.deliverable}
        </div>
        <div class="risk-box">${m.risk}</div>
      </div>
    `;
    list.appendChild(card);
  });

  // click handlers
  list.querySelectorAll('.milestone-header').forEach(h => {
    h.addEventListener('click', () => {
      const id = h.dataset.id;
      const body = document.getElementById(`body-${id}`);
      const chev = document.getElementById(`chev-${id}`);
      const isOpen = body.style.display !== 'none';
      body.style.display = isOpen ? 'none' : 'block';
      chev.classList.toggle('open', !isOpen);
    });
  });

  // auto-open active milestone
  const activeM = milestones.find(m => m.status === 'active');
  if (activeM) {
    const body = document.getElementById(`body-${activeM.id}`);
    const chev = document.getElementById(`chev-${activeM.id}`);
    if (body) { body.style.display = 'block'; chev.classList.add('open'); }
  }
}

renderMilestones();

// ── TYPEWRITER ──
(function () {
  const phrases = [
    'We are Banking Supervision.',
    'We are Agentic AI.',
    'We are the Implementation Roadmap.',
    'We are Financial Resilience.',
    'We are Compliance Engineering.',
    'We are Project NEMESIS.'
  ];

  const el = document.getElementById('tw-text');
  if (!el) return;

  let phraseIdx = 0, charIdx = 0, deleting = false;
  const TYPE_SPEED = 65, DELETE_SPEED = 32, PAUSE_TYPED = 1200, PAUSE_EMPTY = 350;

  function tick() {
    const phrase = phrases[phraseIdx];
    if (!deleting) {
      el.textContent = phrase.slice(0, ++charIdx);
      if (charIdx === phrase.length) {
        deleting = true;
        setTimeout(tick, PAUSE_TYPED);
      } else {
        setTimeout(tick, TYPE_SPEED);
      }
    } else {
      el.textContent = phrase.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(tick, PAUSE_EMPTY);
      } else {
        setTimeout(tick, DELETE_SPEED);
      }
    }
  }
  setTimeout(tick, 600);
})();
</script>
</body>
</html>
