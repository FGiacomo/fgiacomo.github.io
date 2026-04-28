---
title: "nemesis"
url: "/en/nemesis/"
emoji: "🗺️"
---

<style>
  /* ── HERO ── */
  .nemesis-hero {
    min-height: 72vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px 0 48px;
    border-bottom: 1px solid var(--border);
    margin-bottom: 48px;
  }

  .nemesis-label {
    font-size: 10px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--dim);
    margin-bottom: 24px;
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
  html[data-theme="light"] .nemesis-typewriter { color: #111; }

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

  .nemesis-subtitle {
    font-size: 13px;
    color: var(--dim);
    line-height: 1.9;
    max-width: 680px;
    border-left: 2px solid var(--accent);
    padding-left: 18px;
  }
  .nemesis-subtitle strong { color: var(--accent); font-weight: 700; }

  /* ── STATUS BADGE ── */
  .nemesis-status {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    color: var(--accent);
    border: 1px solid rgba(59,130,246,0.35);
    padding: 5px 14px;
    margin-bottom: 32px;
    background: rgba(59,130,246,0.04);
    width: fit-content;
  }
  .status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent);
    animation: status-pulse 1.8s ease-in-out infinite;
  }
  @keyframes status-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.4; transform: scale(0.7); }
  }

  /* ── OVERVIEW GRID ── */
  .overview-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin-bottom: 14px;
  }
  .ov-card {
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 18px 16px;
    transition: border-color 0.15s;
  }
  .ov-card:hover { border-color: var(--accent); }
  .ov-label {
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--dim);
    margin-bottom: 8px;
  }
  .ov-label::before { content: '# '; color: var(--accent); }
  .ov-value { font-size: 13px; color: var(--text); font-weight: 500; }

  /* ── TIMELINE ── */
  .tl-outer {
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 28px 24px;
    margin-bottom: 12px;
    overflow-x: auto;
  }
  .tl-track {
    display: flex;
    align-items: flex-start;
    min-width: 540px;
    padding: 10px 0 4px;
  }
  .tl-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .tl-item:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 13px;
    left: 50%;
    width: 100%;
    height: 2px;
    background: var(--border);
    z-index: 0;
  }
  .tl-item.tl-done:not(:last-child)::after   { background: #10b981; }
  .tl-item.tl-active:not(:last-child)::after { background: linear-gradient(to right, var(--accent), var(--border)); }

  .tl-dot {
    width: 26px; height: 26px;
    border-radius: 50%;
    border: 2px solid var(--border);
    background: var(--bg);
    display: flex; align-items: center; justify-content: center;
    font-size: 9px;
    font-family: var(--font);
    font-weight: 700;
    position: relative;
    z-index: 1;
  }
  .tl-item.tl-done   .tl-dot { border-color: #10b981; color: #10b981; background: rgba(16,185,129,0.08); }
  .tl-item.tl-active .tl-dot { border-color: var(--accent); color: var(--accent); background: rgba(59,130,246,0.1); animation: status-pulse 2s ease-in-out infinite; }
  .tl-item.tl-upcoming .tl-dot { color: var(--dim); }

  .tl-label {
    font-size: 9px; font-family: var(--font);
    letter-spacing: 1px; text-transform: uppercase;
    color: var(--dim); margin-top: 8px; text-align: center;
  }
  .tl-item.tl-done   .tl-label { color: #10b981; }
  .tl-item.tl-active .tl-label { color: var(--accent); }

  .tl-sub {
    font-size: 8px; font-family: var(--font);
    color: var(--dim); margin-top: 3px; text-align: center; line-height: 1.3;
  }
  .tl-item.tl-done   .tl-sub { color: rgba(16,185,129,0.6); }
  .tl-item.tl-active .tl-sub { color: rgba(59,130,246,0.65); }

  .tl-legend {
    display: flex; gap: 20px;
    margin-top: 18px; padding-top: 12px;
    border-top: 1px solid var(--border);
  }
  .tl-legend-item { display: flex; align-items: center; gap: 7px; font-size: 11px; color: var(--dim); }
  .tl-legend-dot  { width: 8px; height: 8px; border-radius: 50%; }

  /* ── CURRENT FOCUS ── */
  .focus-block {
    background: var(--surface);
    border: 1px solid var(--border);
    border-left: 2px solid var(--accent);
    padding: 20px 22px;
    margin-bottom: 12px;
  }
  .focus-title {
    font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
    color: var(--accent); font-family: var(--font); margin-bottom: 14px;
  }
  .focus-title::before { content: '◆ '; }
  .focus-item {
    display: flex; gap: 10px;
    font-size: 12px; color: var(--dim); line-height: 1.6;
    margin-bottom: 8px;
  }
  .focus-item:last-child { margin-bottom: 0; }
  .fi-phase {
    font-family: var(--font); font-size: 9px; font-weight: 700;
    color: var(--accent); background: rgba(59,130,246,0.08);
    border: 1px solid rgba(59,130,246,0.2);
    padding: 1px 7px; flex-shrink: 0; height: fit-content; margin-top: 2px;
  }

  /* ── MILESTONE CARDS ── */
  .milestone-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-left: 3px solid var(--border);
    margin-bottom: 10px;
    overflow: hidden;
    transition: border-color 0.2s;
  }
  .milestone-card.ms-done   { border-left-color: #10b981; }
  .milestone-card.ms-active { border-left-color: var(--accent); }

  .ms-header {
    display: flex; align-items: center; gap: 12px;
    padding: 16px 18px; cursor: pointer;
    justify-content: space-between; user-select: none;
  }
  .ms-header:hover { background: rgba(255,255,255,0.02); }

  .ms-badge {
    font-family: var(--font); font-size: 11px; font-weight: 800;
    padding: 3px 10px; letter-spacing: 1px; flex-shrink: 0; border: 1px solid;
  }
  .ms-badge.b-done     { color: #10b981;       border-color: #10b981;             background: rgba(16,185,129,0.07); }
  .ms-badge.b-active   { color: var(--accent);  border-color: var(--accent);       background: rgba(59,130,246,0.08); }
  .ms-badge.b-upcoming { color: var(--dim);     border-color: var(--border);       background: transparent; }
  .ms-badge.b-warn     { color: var(--warn);    border-color: rgba(245,158,11,0.4); background: rgba(245,158,11,0.05); }
  .ms-badge.b-purple   { color: #a78bfa;        border-color: rgba(167,139,250,0.4); background: rgba(167,139,250,0.06); }
  .ms-badge.b-danger   { color: #ef4444;        border-color: rgba(239,68,68,0.4); background: rgba(239,68,68,0.06); }

  .ms-info     { flex: 1; min-width: 0; }
  .ms-name     { font-size: 14px; font-weight: 600; color: var(--text); }
  .ms-goal     { font-size: 12px; color: var(--dim); margin-top: 3px; line-height: 1.4; }

  .ms-meta     { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
  .ms-duration {
    font-size: 11px; font-family: var(--font); color: var(--dim);
    border: 1px solid var(--border); padding: 3px 8px; background: var(--bg);
  }
  .ms-chevron  { color: var(--dim); font-size: 11px; transition: transform 0.2s; flex-shrink: 0; }
  .ms-chevron.open { transform: rotate(180deg); }

  .ms-body {
    padding: 0 18px 18px;
    border-top: 1px solid var(--border);
    animation: ms-fadein 0.18s ease;
  }
  @keyframes ms-fadein {
    from { opacity: 0; transform: translateY(5px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .ms-body-label {
    font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
    color: var(--dim); font-family: var(--font); margin: 16px 0 10px;
  }
  .ms-body-label::before { content: '> '; color: var(--accent); }

  .ms-task {
    display: flex; gap: 10px; align-items: flex-start;
    font-size: 12px; color: var(--dim); line-height: 1.55; margin-bottom: 6px;
  }
  .ms-task::before { content: '→'; color: var(--accent); font-family: var(--font); flex-shrink: 0; margin-top: 1px; }
  .ms-task.t-done  { color: rgba(16,185,129,0.7); }
  .ms-task.t-done::before { content: '✓'; color: #10b981; }

  .ms-deliverable {
    background: rgba(59,130,246,0.05);
    border: 1px solid rgba(59,130,246,0.18);
    padding: 12px 14px; margin-top: 14px;
    font-size: 12px; color: var(--text); line-height: 1.5;
  }
  .ms-deliverable-label {
    font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
    color: var(--accent); font-family: var(--font); margin-bottom: 5px;
  }
  .ms-risk {
    background: rgba(245,158,11,0.04);
    border: 1px solid rgba(245,158,11,0.22);
    padding: 12px 14px; margin-top: 8px;
    font-size: 12px; color: rgba(245,158,11,0.8); line-height: 1.5;
    display: flex; gap: 9px; align-items: flex-start;
  }
  .ms-risk::before { content: '⚠'; flex-shrink: 0; }

  /* ── WIP BANNER ── */
  .wip-banner {
    border: 1px solid rgba(255,170,0,0.4);
    background: rgba(255,170,0,0.04);
    padding: 14px 20px; font-size: 12px; color: var(--warn);
    margin-bottom: 40px; display: flex; align-items: flex-start; gap: 12px;
  }
  .wip-banner::before { content: '⚠'; flex-shrink: 0; }

  /* ── RESPONSIVE ── */
  @media (max-width: 700px) {
    .overview-grid { grid-template-columns: 1fr 1fr; }
    .nemesis-hero  { min-height: 60vh; }
    .ms-duration   { display: none; }
  }
  @media (max-width: 440px) {
    .overview-grid { grid-template-columns: 1fr; }
  }
</style>

<!-- HERO -->
<div class="nemesis-hero">
  <div class="nemesis-label">project — roadmap</div>

  <div class="nemesis-typewriter">
    <div class="tw-line">
      <span class="tw-text" id="tw-text"></span>
    </div>
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

<!-- WIP BANNER -->
<div class="wip-banner">
  This roadmap is a living document updated as development progresses. Timelines are estimates; some tasks may be parallelised after M0.
</div>

<!-- OVERVIEW -->
<section class="section">
  <div class="section-title">overview</div>
  <div class="overview-grid">
    <div class="ov-card">
      <div class="ov-label">total milestones</div>
      <div class="ov-value">6 &nbsp;(M0 → M5)</div>
    </div>
    <div class="ov-card">
      <div class="ov-label">estimated duration</div>
      <div class="ov-value">26–34 weeks</div>
    </div>
    <div class="ov-card">
      <div class="ov-label">current phase</div>
      <div class="ov-value" style="color:var(--accent)">M1 — Active</div>
    </div>
    <div class="ov-card">
      <div class="ov-label">completed</div>
      <div class="ov-value" style="color:#10b981">M0 ✓ Done</div>
    </div>
  </div>
</section>

<!-- TIMELINE -->
<section class="section">
  <div class="section-title">timeline</div>
  <div class="tl-outer">
    <div class="tl-track">
      <div class="tl-item tl-done">
        <div class="tl-dot">✓</div>
        <div class="tl-label">M0</div>
        <div class="tl-sub">Foundation<br>&amp; Data</div>
      </div>
      <div class="tl-item tl-active">
        <div class="tl-dot">M1</div>
        <div class="tl-label">M1</div>
        <div class="tl-sub">RAG<br>Pipeline</div>
      </div>
      <div class="tl-item tl-upcoming">
        <div class="tl-dot">M2</div>
        <div class="tl-label">M2</div>
        <div class="tl-sub">Risk<br>Analyst</div>
      </div>
      <div class="tl-item tl-upcoming">
        <div class="tl-dot">M3</div>
        <div class="tl-label">M3</div>
        <div class="tl-sub">Multi-Agent<br>Orchestr.</div>
      </div>
      <div class="tl-item tl-upcoming">
        <div class="tl-dot">M4</div>
        <div class="tl-label">M4</div>
        <div class="tl-sub">API &amp;<br>Explain.</div>
      </div>
      <div class="tl-item tl-upcoming">
        <div class="tl-dot">M5</div>
        <div class="tl-label">M5</div>
        <div class="tl-sub">Benchmark<br>&amp; Paper</div>
      </div>
    </div>
    <div class="tl-legend">
      <div class="tl-legend-item">
        <div class="tl-legend-dot" style="background:#10b981"></div>
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

<!-- CURRENT FOCUS -->
<section class="section">
  <div class="section-title">current focus</div>
  <div class="focus-block">
    <div class="focus-title">What we are building right now</div>
    <div class="focus-item">
      <span class="fi-phase">M1</span>
      Collecting and cleaning the regulatory corpus: CRR/CRD, SREP methodology, ECB guides and EBA guidelines (PDF → clean text)
    </div>
    <div class="focus-item">
      <span class="fi-phase">M1</span>
      Designing the optimal chunking strategy for legal texts — evaluating chunk sizes (512 / 1024 tokens) with 10–20% overlap
    </div>
    <div class="focus-item">
      <span class="fi-phase">M1</span>
      Embedding model benchmarking: <code>text-embedding-3-large</code> vs <code>BGE-M3</code> vs <code>E5-mistral</code>
    </div>
    <div class="focus-item">
      <span class="fi-phase">M1</span>
      Setting up Qdrant collections with structured payload (framework, article, year, language, KPI relevance)
    </div>
  </div>
</section>

<!-- MILESTONES -->
<section class="section">
  <div class="section-title">milestones</div>

  <!-- M0 -->
  <div class="milestone-card ms-done" id="ms-0">
    <div class="ms-header" onclick="toggleMs(0)">
      <div style="display:flex;align-items:center;gap:12px;flex:1;min-width:0">
        <span class="ms-badge b-done">M0</span>
        <div class="ms-info">
          <div class="ms-name">Foundation &amp; Data Pipeline</div>
          <div class="ms-goal">Stable infrastructure with real (or realistic synthetic) data flowing end-to-end.</div>
        </div>
      </div>
      <div class="ms-meta">
        <span class="ms-badge b-done" style="font-size:9px;padding:2px 7px">COMPLETE</span>
        <span class="ms-duration">4–6 weeks</span>
        <span class="ms-chevron" id="chev-0">▼</span>
      </div>
    </div>
    <div class="ms-body" id="body-0" style="display:none">
      <div class="ms-body-label">Tasks</div>
      <div class="ms-task t-done">Repo setup, CI/CD (GitHub Actions), Docker Compose for local dev</div>
      <div class="ms-task t-done">CASPER API integration (or mock with public ECB data: EBA transparency exercise)</div>
      <div class="ms-task t-done">TimescaleDB schema for banking time series (CET1, NPL ratio, LCR, NSFR, etc.)</div>
      <div class="ms-task t-done">Data quality scripts: validation, normalisation, missing value handling</div>
      <div class="ms-task t-done">ETL pipeline: CASPER → TimescaleDB → API endpoint <code>/data/{bank_id}</code></div>
      <div class="ms-task t-done">Basic test suite: unit tests on ingestion, integration tests on API</div>
      <div class="ms-deliverable">
        <div class="ms-deliverable-label">Deliverable</div>
        Functional, documented data pipeline with 3+ mock banks and 2+ years of time series data.
      </div>
      <div class="ms-risk">Real CASPER data access — always have a realistic synthetic dataset as fallback.</div>
    </div>
  </div>

  <!-- M1 -->
  <div class="milestone-card ms-active" id="ms-1">
    <div class="ms-header" onclick="toggleMs(1)">
      <div style="display:flex;align-items:center;gap:12px;flex:1;min-width:0">
        <span class="ms-badge b-active">M1</span>
        <div class="ms-info">
          <div class="ms-name">RAG Pipeline — Regulatory Intelligence</div>
          <div class="ms-goal">Accurate retrieval system over ECB/EBA/BCBS documents with chunking optimised for legal texts.</div>
        </div>
      </div>
      <div class="ms-meta">
        <span class="ms-badge b-active" style="font-size:9px;padding:2px 7px">IN PROGRESS</span>
        <span class="ms-duration">4–5 weeks</span>
        <span class="ms-chevron" id="chev-1">▼</span>
      </div>
    </div>
    <div class="ms-body" id="body-1" style="display:block">
      <div class="ms-body-label">Tasks</div>
      <div class="ms-task">Corpus collection: CRR/CRD, SREP methodology, ECB guides, EBA guidelines (PDF → clean text)</div>
      <div class="ms-task">Chunking strategy: experiment with chunk size (512/1024 tokens) + overlap (10–20%) on normative texts</div>
      <div class="ms-task">Embedding selection: compare <code>text-embedding-3-large</code> vs <code>BGE-M3</code> vs <code>E5-mistral</code></div>
      <div class="ms-task">Qdrant setup: collection per document category, payload with metadata (framework, article, year, language)</div>
      <div class="ms-task">DocRetrieverAgent with hybrid search (dense + sparse BM25)</div>
      <div class="ms-task">RAG evaluation: RAGAS metrics (faithfulness, answer relevancy, context precision)</div>
      <div class="ms-task">Retrieval benchmark: 50+ question-answer pairs on regulatory documents as golden set</div>
      <div class="ms-deliverable">
        <div class="ms-deliverable-label">Deliverable</div>
        RAG pipeline with RAGAS faithfulness ≥ 0.85 on the regulatory golden set.
      </div>
      <div class="ms-risk">Normative texts have complex structure (nested articles, paragraphs) — naive chunking severely degrades performance.</div>
    </div>
  </div>

  <!-- M2 -->
  <div class="milestone-card" id="ms-2">
    <div class="ms-header" onclick="toggleMs(2)">
      <div style="display:flex;align-items:center;gap:12px;flex:1;min-width:0">
        <span class="ms-badge b-warn">M2</span>
        <div class="ms-info">
          <div class="ms-name">Risk Analyst Agent — Anomaly Detection</div>
          <div class="ms-goal">Early-warning model that detects anomalies in banking KPIs with an interpretable risk score.</div>
        </div>
      </div>
      <div class="ms-meta">
        <span class="ms-badge b-upcoming" style="font-size:9px;padding:2px 7px">UPCOMING</span>
        <span class="ms-duration">5–6 weeks</span>
        <span class="ms-chevron" id="chev-2">▼</span>
      </div>
    </div>
    <div class="ms-body" id="body-2" style="display:none">
      <div class="ms-body-label">Tasks</div>
      <div class="ms-task">Feature engineering: % delta over time windows (MoM, QoQ, YoY), rolling stats, per-bank z-scores</div>
      <div class="ms-task">Baseline models: Isolation Forest, LSTM Autoencoder, Prophet for trend detection</div>
      <div class="ms-task">Dataset labelling: use ECB supervisory thresholds as ground truth proxy</div>
      <div class="ms-task">Scoring model: XGBoost with SHAP values for feature importance (native explainability)</div>
      <div class="ms-task">Adaptive thresholds: calibrated by sector / country / bank size (no one-size-fits-all)</div>
      <div class="ms-task">Integrate model as RiskAnalystAgent in LangGraph</div>
      <div class="ms-task">Structured output: <code>{score, anomaly_type, affected_kpis, shap_explanation, confidence_interval}</code></div>
      <div class="ms-deliverable">
        <div class="ms-deliverable-label">Deliverable</div>
        RiskAnalystAgent with AUC-ROC ≥ 0.82 on test dataset, SHAP explanation for every flag.
      </div>
      <div class="ms-risk">Label scarcity — anomalies are rare by definition. Use SMOTE or self-supervised pre-training to compensate.</div>
    </div>
  </div>

  <!-- M3 -->
  <div class="milestone-card" id="ms-3">
    <div class="ms-header" onclick="toggleMs(3)">
      <div style="display:flex;align-items:center;gap:12px;flex:1;min-width:0">
        <span class="ms-badge b-purple">M3</span>
        <div class="ms-info">
          <div class="ms-name">Multi-Agent Orchestration</div>
          <div class="ms-goal">The three agents collaborate in a stateful graph with feedback loops and graceful error handling.</div>
        </div>
      </div>
      <div class="ms-meta">
        <span class="ms-badge b-upcoming" style="font-size:9px;padding:2px 7px">UPCOMING</span>
        <span class="ms-duration">4–5 weeks</span>
        <span class="ms-chevron" id="chev-3">▼</span>
      </div>
    </div>
    <div class="ms-body" id="body-3" style="display:none">
      <div class="ms-body-label">Tasks</div>
      <div class="ms-task">Implement the StateGraph in LangGraph: nodes = agents, edges = transition conditions</div>
      <div class="ms-task">SupervisorAgent with router: decides <code>next_agent</code> based on current state</div>
      <div class="ms-task">Human-in-the-loop: supervisor can interrupt the cycle and inject feedback</div>
      <div class="ms-task">Failure handling: retry logic, conservative fallback on LLM error, <code>max_iterations</code> hard cap</div>
      <div class="ms-task">LangSmith tracing: every run logged with inputs / outputs / latency / token usage</div>
      <div class="ms-task">Audit trail: every agent decision written to PostgreSQL with timestamp and reasoning</div>
      <div class="ms-task">End-to-end integration test: from CASPER input to explained flag in output</div>
      <div class="ms-deliverable">
        <div class="ms-deliverable-label">Deliverable</div>
        Functional end-to-end multi-agent pipeline with full audit trail and latency &lt; 30s.
      </div>
      <div class="ms-risk">Infinite loops in the agent graph — define a hard <code>max_iterations</code> cap and an always_exit condition.</div>
    </div>
  </div>

  <!-- M4 -->
  <div class="milestone-card" id="ms-4">
    <div class="ms-header" onclick="toggleMs(4)">
      <div style="display:flex;align-items:center;gap:12px;flex:1;min-width:0">
        <span class="ms-badge b-active">M4</span>
        <div class="ms-info">
          <div class="ms-name">Explainability &amp; API Layer</div>
          <div class="ms-goal">Every system output is explainable, citable and auditable. FastAPI exposes everything in a documented way.</div>
        </div>
      </div>
      <div class="ms-meta">
        <span class="ms-badge b-upcoming" style="font-size:9px;padding:2px 7px">UPCOMING</span>
        <span class="ms-duration">3–4 weeks</span>
        <span class="ms-chevron" id="chev-4">▼</span>
      </div>
    </div>
    <div class="ms-body" id="body-4" style="display:none">
      <div class="ms-body-label">Tasks</div>
      <div class="ms-task">Explainability layer: generate NL narratives from SHAP values + retrieved docs</div>
      <div class="ms-task">Citation system: every LLM assertion must cite a specific chunk with article and page</div>
      <div class="ms-task">Confidence scoring: the system expresses uncertainty — 'high-confidence flag' vs. 'weak signal'</div>
      <div class="ms-task">FastAPI endpoints: <code>/analyze/{bank_id}</code>, <code>/flags</code>, <code>/explain/{flag_id}</code>, <code>/audit/{run_id}</code></div>
      <div class="ms-task">API authentication: JWT + rate limiting (authenticated supervisors, protected audit access)</div>
      <div class="ms-task">Auto-generated OpenAPI docs, Postman collection for testing</div>
      <div class="ms-task">Minimal dashboard (Streamlit or React) to visualise flags + explanations</div>
      <div class="ms-deliverable">
        <div class="ms-deliverable-label">Deliverable</div>
        Swagger-documented API with explainability traceable to the source document chunk.
      </div>
      <div class="ms-risk">LLM may hallucinate explanations — grounding on retrieved chunks must be mandatory and verifiable.</div>
    </div>
  </div>

  <!-- M5 -->
  <div class="milestone-card" id="ms-5">
    <div class="ms-header" onclick="toggleMs(5)">
      <div style="display:flex;align-items:center;gap:12px;flex:1;min-width:0">
        <span class="ms-badge b-danger">M5</span>
        <div class="ms-info">
          <div class="ms-name">Benchmark &amp; Research Paper</div>
          <div class="ms-goal">Rigorous, reproducible, publishable evaluation. Systematic comparison against strong baselines.</div>
        </div>
      </div>
      <div class="ms-meta">
        <span class="ms-badge b-upcoming" style="font-size:9px;padding:2px 7px">UPCOMING</span>
        <span class="ms-duration">6–8 weeks</span>
        <span class="ms-chevron" id="chev-5">▼</span>
      </div>
    </div>
    <div class="ms-body" id="body-5" style="display:none">
      <div class="ms-body-label">Tasks</div>
      <div class="ms-task">Define benchmark protocol: metrics (AUC-PR, F2, RAGAS, human score), baselines, train/test splits</div>
      <div class="ms-task">Public dataset collection: EBA stress test data, ECB SDMX, BIS statistics</div>
      <div class="ms-task">Ablation study: component by component — what contributes and by how much?</div>
      <div class="ms-task">Baseline comparison: static rules vs. ML only vs. RAG only vs. full NEMESIS</div>
      <div class="ms-task">Human evaluation: 2–3 banking supervisors rate explanation quality (inter-rater agreement)</div>
      <div class="ms-task">Error analysis: critical false positives (healthy bank flagged) vs. false negatives (missed risk)</div>
      <div class="ms-task">Paper writing: ACL/NeurIPS-style with ablation, limitation, and reproducibility statement sections</div>
      <div class="ms-deliverable">
        <div class="ms-deliverable-label">Deliverable</div>
        Draft paper + annotated codebase + benchmark dataset publicly releasable (where data policy allows).
      </div>
      <div class="ms-risk">ECB data confidentiality — plan from the start which parts of the dataset can be made public.</div>
    </div>
  </div>

</section>

<script>
  /* ── TYPEWRITER ── */
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
        if (charIdx === phrase.length) { deleting = true; setTimeout(tick, PAUSE_TYPED); }
        else { setTimeout(tick, TYPE_SPEED); }
      } else {
        el.textContent = phrase.slice(0, --charIdx);
        if (charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; setTimeout(tick, PAUSE_EMPTY); }
        else { setTimeout(tick, DELETE_SPEED); }
      }
    }
    setTimeout(tick, 600);
  })();

  /* ── MILESTONE TOGGLE ── */
  function toggleMs(id) {
    const body = document.getElementById('body-' + id);
    const chev = document.getElementById('chev-' + id);
    const isOpen = body.style.display !== 'none';
    body.style.display = isOpen ? 'none' : 'block';
    chev.classList.toggle('open', !isOpen);
  }
</script>
