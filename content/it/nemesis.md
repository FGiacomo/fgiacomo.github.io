---
title: "nemesis"
url: "/it/nemesis/"
emoji: "⚡"
---

<style>
  /* ── NEMESIS HERO ── */
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
    .tw-line {
      white-space: normal;
      overflow: visible;
      flex-wrap: wrap;
    }
  }
  .tw-text {
    color: var(--accent);
  }
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
    color: var(--warn);
    border: 1px solid rgba(255,170,0,0.35);
    padding: 5px 14px;
    margin-bottom: 32px;
    background: rgba(255,170,0,0.04);
    width: fit-content;
  }
  .status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--warn);
    animation: status-pulse 1.8s ease-in-out infinite;
  }
  @keyframes status-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.4; transform: scale(0.7); }
  }

  /* ── OVERVIEW GRID ── */
  .overview-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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

  /* ── ARCH BLOCK ── */
  .arch-block {
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 32px 24px;
    margin-bottom: 12px;
    display: flex;
    justify-content: center;
    overflow-x: auto;
  }
  .arch-block pre {
    margin: 0;
    color: var(--dim);
    font-family: var(--font);
    font-size: 12px;
    line-height: 1.85;
    text-align: left;
  }
  .arch-block pre .hl   { color: var(--accent); }
  .arch-block pre .hl2  { color: var(--accent2); }
  .arch-block pre .warn { color: var(--warn); }

  /* ── STACK GROUPS ── */
  .stack-group { margin-bottom: 18px; }
  .stack-group-label {
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--dim);
    margin-bottom: 10px;
  }
  .stack-group-label::before { content: '// '; color: var(--accent); }

  /* ── WIP BANNER ── */
  .wip-banner {
    border: 1px solid rgba(255,170,0,0.4);
    background: rgba(255,170,0,0.04);
    padding: 14px 20px;
    font-size: 12px;
    color: var(--warn);
    margin-bottom: 40px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }
  .wip-banner::before { content: '⚠'; flex-shrink: 0; }

  /* ── RESPONSIVE ── */
  @media (max-width: 700px) {
    .overview-grid { grid-template-columns: 1fr 1fr; }
    .nemesis-typewriter { font-size: clamp(28px, 7vw, 38px); }
    .nemesis-hero { min-height: 60vh; }
  }
  @media (max-width: 440px) {
    .overview-grid { grid-template-columns: 1fr; }
  }
</style>

<!-- HERO -->
<div class="nemesis-hero">
  <div class="nemesis-label">progetto — public</div>

  <div class="nemesis-typewriter">
    <div class="tw-line">
      <span class="tw-text" id="tw-text"></span>
    </div>
  </div>

  <div class="nemesis-status">
    <span class="status-dot"></span>
    sviluppo attivo &nbsp;·&nbsp; WIP
  </div>

  <div class="nemesis-subtitle">
    Benvenuto in <strong>NEMESIS</strong> —
    <strong>N</strong>eural <strong>E</strong>ngine for <strong>M</strong>ulti-agent
    <strong>E</strong>arly-warning <strong>S</strong>upervisory <strong>I</strong>ntelligence
    <strong>S</strong>ystem.<br><br>
    Una piattaforma di AI agentiva per la vigilanza bancaria, progettata per rilevare,
    segnalare e spiegare i segnali di rischio sistemico in tempo reale — combinando LLM,
    pipeline RAG e orchestrazione multi-agente.
  </div>
</div>

<!-- WIP BANNER -->
<div class="wip-banner">
  Questo progetto è in sviluppo attivo. Dettagli, diagrammi architetturali e documentazione vengono aggiornati continuamente. Alcune sezioni potrebbero essere incomplete.
</div>

<!-- PANORAMICA -->
<section class="section">
  <div class="section-title">panoramica</div>
  <div class="overview-grid">
    <div class="ov-card">
      <div class="ov-label">dominio</div>
      <div class="ov-value">Vigilanza Bancaria · FinReg</div>
    </div>
    <div class="ov-card">
      <div class="ov-label">paradigma</div>
      <div class="ov-value">Agentic AI · RAG · LLM</div>
    </div>
    <div class="ov-card">
      <div class="ov-label">stato</div>
      <div class="ov-value" style="color:var(--warn)">WIP — Attivo</div>
    </div>
    <div class="ov-card">
      <div class="ov-label">istituzione</div>
      <div class="ov-value">Contesto BCE / SEBC</div>
    </div>
    <div class="ov-card">
      <div class="ov-label">stack principale</div>
      <div class="ov-value">Python · LangChain · FastAPI</div>
    </div>
    <div class="ov-card">
      <div class="ov-label">tipo</div>
      <div class="ov-value">Ricerca + Ingegneria</div>
    </div>
  </div>
</section>

<!-- ARCHITETTURA -->
<section class="section">
  <div class="section-title">architettura di sistema</div>
  <div class="arch-block"><pre>
<span class="hl">┌─────────────────────────────────────────────────────┐</span>
<span class="hl">│                   NEMESIS PLATFORM                  │</span>
<span class="hl">└────────────────────────┬────────────────────────────┘</span>
                         │
<span class="hl2">        ┌────────────────┴─────────────────┐</span>
<span class="hl2">        ▼                                   ▼</span>
<span class="hl2">┌──────────────┐                 ┌──────────────────┐</span>
<span class="hl2">│  Data Layer  │                 │  Agent Orchestr. │</span>
<span class="hl2">│  ─────────── │                 │  ──────────────  │</span>
<span class="hl2">│  CASPER API  │                 │  Supervisor Agt  │</span>
<span class="hl2">│  Reg. Docs   │                 │  Risk Analyst    │</span>
<span class="hl2">│  Time Series │                 │  Doc Retriever   │</span>
<span class="hl2">└───────┬──────┘                 └─────────┬────────┘</span>
        │                                   │
<span class="warn">        ▼                                   ▼</span>
<span class="warn">┌──────────────┐                 ┌──────────────────┐</span>
<span class="warn">│  RAG Engine  │ ◄──────────────►│  LLM Inference   │</span>
<span class="warn">│  ─────────── │                 │  ──────────────  │</span>
<span class="warn">│  Embeddings  │                 │  Early-warning   │</span>
<span class="warn">│  Vector DB   │                 │  Scoring Model   │</span>
<span class="warn">│  Chunking    │                 │  Explainability  │</span>
<span class="warn">└──────────────┘                 └──────────────────┘</span>
</pre></div>
</section>

<!-- STACK TECNOLOGICO -->
<section class="section">
  <div class="section-title">stack tecnologico</div>

  <div class="stack-group">
    <div class="stack-group-label">AI / ML</div>
    <div class="tags">
      <span class="tag hl">LangChain</span>
      <span class="tag hl">Pipeline RAG</span>
      <span class="tag hl">Fine-tuning LLM</span>
      <span class="tag">Database Vettoriali</span>
      <span class="tag">Embeddings</span>
      <span class="tag">Sistemi Multi-agente</span>
    </div>
  </div>

  <div class="stack-group">
    <div class="stack-group-label">backend / infrastruttura</div>
    <div class="tags">
      <span class="tag hl">Python</span>
      <span class="tag hl">FastAPI</span>
      <span class="tag">Docker</span>
      <span class="tag">REST API</span>
      <span class="tag">PostgreSQL</span>
      <span class="tag">Git</span>
    </div>
  </div>

  <div class="stack-group">
    <div class="stack-group-label">dominio</div>
    <div class="tags">
      <span class="tag">Vigilanza Bancaria</span>
      <span class="tag">Piattaforma CASPER</span>
      <span class="tag">Segnalazione Regolamentare</span>
      <span class="tag">Modellazione del Rischio</span>
      <span class="tag">BCE / SEBC</span>
    </div>
  </div>
</section>

<!-- OBIETTIVI CHIAVE -->
<section class="section">
  <div class="section-title">obiettivi chiave</div>
  <div class="entry" style="grid-template-columns:1fr; padding:18px; margin-bottom:8px;">
    <div class="entry-title" style="font-size:13px; margin-bottom:6px;">01 · Rilevamento di Segnali di Allerta Precoce</div>
    <div class="entry-desc">Automatizzare il rilevamento di pattern anomali nelle segnalazioni bancarie, portando a galla i segnali di rischio prima che si trasformino in problemi sistemici.</div>
  </div>
  <div class="entry" style="grid-template-columns:1fr; padding:18px; margin-bottom:8px;">
    <div class="entry-title" style="font-size:13px; margin-bottom:6px;">02 · Intelligenza sui Documenti Regolamentari</div>
    <div class="entry-desc">Costruire una pipeline RAG che renda la documentazione regolamentare della BCE immediatamente interrogabile, riducendo i tempi di validazione e gli errori umani nei flussi di compliance.</div>
  </div>
  <div class="entry" style="grid-template-columns:1fr; padding:18px; margin-bottom:8px;">
    <div class="entry-title" style="font-size:13px; margin-bottom:6px;">03 · Decisioni Agentive Spiegabili</div>
    <div class="entry-desc">Garantire che ogni segnalazione o raccomandazione generata dall'AI sia tracciabile, verificabile e spiegabile — fondamentale in ambito di vigilanza dove la responsabilità è obbligatoria.</div>
  </div>
</section>

<script>
  (function () {
    const phrases = [
      'We are Banking Supervision.',
      'We are Agentic AI.',
      'We are Financial Resilience.',
      'We are Compliance Engineering.',
      'We are Operational Excellence.',
      'We are Project NEMESIS.'
    ];

    const el = document.getElementById('tw-text');
    if (!el) return;

    let phraseIdx = 0;
    let charIdx   = 0;
    let deleting  = false;

    const TYPE_SPEED   = 65;
    const DELETE_SPEED = 32;
    const PAUSE_TYPED  = 1200;
    const PAUSE_EMPTY  = 350;

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
          deleting  = false;
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
