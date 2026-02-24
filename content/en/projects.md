---
title: "projects"
url: "/en/projects/"
---

<!-- <div class="prompt"><span>~</span> $ ls -la projects/</div> -->

<section class="section">
  <div class="section-title">projects</div>

  <div class="entry">
    <div class="entry-title">Master’s Thesis - Machine Learning for Credit Card Fraud Detection</div>
    <div class="entry-date">lug 2025 – set 2025</div>
    <div class="entry-sub">Università degli Studi di Verona</div>
    <div class="entry-desc">
      Under Basel III, banks must maintain the intraday liquidity ratio, which can be disrupted by credit card fraud. Fraudulent transactions create unexpected liquidity demands, threatening operational resilience and systemic stability. My thesis, defended on September 4th 2025, focused on designing and evaluating machine learning-based fraud detection systems. The project was developed in Python, combining financial risk analysis with advanced predictive modeling.
      <br><br>
      <strong>What was built:</strong>
      <ul>
        <li>Data preparation, feature engineering and modeling on real-world financial datasets</li>
        <li>Comparative assessment of classifiers: Decision Tree, Random Forest, XGBoost, LightGBM, CatBoost and TabNet</li>
        <li>ROC AUC as the primary metric to handle severe class imbalance</li>
        <li>Computational cost analysis, identifying LightGBM as the best trade-off between accuracy and speed</li>
      </ul>
      The workflow was accelerated with GPU Data Science using NVIDIA RAPIDS on Google Cloud Platform with NVIDIA H100 GPUs. Training and inference times dropped dramatically, and data operations were up to 95% faster than CPU workflows. This enabled scalable, high-performance, real-time fraud monitoring.
      <br><br>
      <a href="https://lnkd.in/dgkN9g5B" target="_blank">GitHub Repository</a> | <a href="https://bit.ly/RAPIDScolab" target="_blank">RAPIDS on GCP</a><br>
      Grade: 8/8
    </div>
  </div>

  <div class="entry">
    <div class="entry-title">Financial Volatility Modeling and Forecasting with GARCH and DCC-GARCH</div>
    <div class="entry-date">mag 2025 – giu 2025</div>
    <div class="entry-sub">Uniwersytet Warszawski</div>
    <div class="entry-desc">
      Developed a comprehensive volatility analysis of global equity markets (S&P 500, NASDAQ 100, DAX, Nikkei 225) using both univariate GARCH(1,1) and multivariate DCC-GARCH(1,1) models.
      <br><br>
      <strong>Key components:</strong>
      <ul>
        <li>Data preprocessing and exploratory time series analysis</li>
        <li>Stationarity and ARCH effects testing</li>
        <li>Estimation and diagnostics of GARCH models</li>
        <li>Dynamic correlation modeling with DCC-GARCH</li>
        <li>In-sample and out-of-sample Value-at-Risk (VaR) evaluation</li>
        <li>Portfolio-level risk assessment using rolling window forecasts</li>
      </ul>
      Tools: R (rugarch, rmgarch), GitHub, Visual Studio Code<br>
      <a href="https://github.com/FGiacomo/Volatility-Analysis-of-Financial-Indices-Using-the-DCC-GARCH-Model" target="_blank">GitHub Repository</a><br>
      Grade: 5!/5 (Equivalent to 30L in italian grade)
    </div>
  </div>

  <div class="entry">
    <div class="entry-title">Value-at-Risk Estimation using Multivariate GARCH-family Models</div>
    <div class="entry-date">mag 2025 – giu 2025</div>
    <div class="entry-sub">Uniwersytet Warszawski</div>
    <div class="entry-desc">
      Final project developed as part of the Time Series Analysis course, in collaboration with Federico Mennella and Domenico Castaldo. The objective was to estimate the Value-at-Risk (VaR) of a diversified portfolio using two models from the GARCH family: GARCH and EGARCH, capturing key stylized facts of financial markets such as volatility clustering and asymmetry.
      <br><br>
      Portfolio Composition:
      <ul>
        <li>Equity: Boeing (NYSE)</li>
        <li>Equity Index: S&P 500</li>
        <li>Commodity: Gold</li>
        <li>Currency: USD/PLN</li>
        <li>Cryptocurrency: Ethereum</li>
      </ul>
      The project included the implementation of an automated pipeline for volatility modeling and risk estimation. Each asset’s best-fitting GARCH specification was selected based on the Akaike Information Criterion (AIC), the Ljung-Box test on residuals, and the LM-ARCH test on standardized residuals. The data were harmonized to follow the NYSE trading calendar and split into in-sample and out-of-sample periods to evaluate conditional volatility and rolling VaR forecasts.<br><br>
      <a href="https://bit.ly/TSA-project" target="_blank">GitHub Repository</a><br>
      Grade: 30 in italian grade
    </div>
  </div>

  <div class="entry">
    <div class="entry-title">Machine Learning Project: Apartment Price Prediction & Insurance Claim Classification</div>
    <div class="entry-date">apr 2025 – mag 2025</div>
    <div class="entry-sub">Uniwersytet Warszawski</div>
    <div class="entry-desc">
      This project applied a range of machine learning algorithms to two datasets, covering both regression and classification tasks. Completed as the final project for the Machine Learning course at the University of Warsaw.
      <br><br>
      Apartment price prediction: models trained to estimate property values based on structural, locational, and economic features. Dataset: 156,000 training records, 39,000 test records. Steps: exploratory analysis, feature engineering, encoding, scaling, comparison of multiple regression algorithms, cross-validation and hyperparameter tuning.
      <br><br>
      Insurance claim classification: goal was to predict claim approval outcomes for travel insurance policies. Dataset: 57,000 training observations, 6,000 test records. Steps: preprocessing, exploratory analysis, implementation and evaluation of multiple classification algorithms, performance metrics and model selection through systematic validation.
      <br><br>
      Key outcomes: enhanced EDA, preprocessing, feature engineering skills, practical experience with regression and classification algorithms, cross-validation and hyperparameter tuning, delivery of robust predictive models.
      <br><br>
      <a href="https://github.com/FGiacomo/ML-project-1" target="_blank">GitHub Repository</a>
    </div>
  </div>

</section>