---
title: "projects"
url: "/it/projects/"
---

<!-- <div class="prompt"><span>~</span> $ ls -la projects/</div> -->

<div class="page-header">
  <div class="page-title">projects</div>
</div>

<div class="projects-grid">

  <div class="project-card">
    <div class="project-top">
      <div class="project-name">pgwatch-cli</div>
      <div class="project-links">
        <a class="project-link" href="https://github.com/fgiacomo/pgwatch-cli" target="_blank">↗ github</a>
      </div>
    </div>
    <div class="project-desc">Tool da terminale per monitorare query lente e lock su PostgreSQL in tempo reale. Supporta output JSON, filtri per durata e alert via webhook.</div>
    <div class="project-tags">
      <span class="p-tag lang">Go</span>
      <span class="p-tag lang">PostgreSQL</span>
      <span class="p-tag">CLI</span>
      <span class="p-tag done">stable</span>
    </div>
  </div>

  <div class="project-card">
    <div class="project-top">
      <div class="project-name">k8s-cost-estimator</div>
      <div class="project-links">
        <a class="project-link" href="https://github.com/fgiacomo/k8s-cost" target="_blank">↗ github</a>
        <a class="project-link demo" href="#" target="_blank">↗ demo</a>
      </div>
    </div>
    <div class="project-desc">Kubectl plugin che stima il costo mensile dei pod su AWS/GCP/Azure basandosi sulle risorse richieste e sui prezzi pubblici delle VM.</div>
    <div class="project-tags">
      <span class="p-tag lang">Go</span>
      <span class="p-tag">Kubernetes</span>
      <span class="p-tag">AWS</span>
      <span class="p-tag done">stable</span>
    </div>
  </div>

  <div class="project-card">
    <div class="project-top">
      <div class="project-name">logpipe</div>
      <div class="project-links">
        <a class="project-link" href="https://github.com/fgiacomo/logpipe" target="_blank">↗ github</a>
      </div>
    </div>
    <div class="project-desc">Pipeline di aggregazione log leggera per piccoli team che non vogliono gestire un cluster ELK. Supporta regex, JSON parsing e forward a S3.</div>
    <div class="project-tags">
      <span class="p-tag lang">Python</span>
      <span class="p-tag">Kafka</span>
      <span class="p-tag">S3</span>
      <span class="p-tag wip">WIP</span>
    </div>
  </div>

  <div class="project-card">
    <div class="project-top">
      <div class="project-name">questo sito</div>
      <div class="project-links">
        <a class="project-link" href="https://github.com/fgiacomo/fgiacomo.github.io" target="_blank">↗ github</a>
      </div>
    </div>
    <div class="project-desc">Sito personale bilingua (IT/EN) con auto-detect lingua browser. Hugo senza tema esterno, layout custom verde terminale, deploy su GitHub Pages.</div>
    <div class="project-tags">
      <span class="p-tag lang">HTML</span>
      <span class="p-tag lang">CSS</span>
      <span class="p-tag">Hugo</span>
      <span class="p-tag">GitHub Pages</span>
      <span class="p-tag done">live</span>
    </div>
  </div>

</div>
