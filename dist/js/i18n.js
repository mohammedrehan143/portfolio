(function () {
  const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  const lang = 'en';
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  window.__I18N_LANG = lang;

  window.getCharHTML = function (ch) {
    if (ch === ' ') return '&nbsp;';
    if (ch === '🡲' || ch === '🡺') return '<svg style="width: 1.25em; height: 1.25em; vertical-align: -0.25em;" viewBox="0 0 84 85" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11 38H54L37 21H51L73 43L51 65H37L54 48H11Z"/></svg>';
    if (ch === '🡼') return '<svg style="width: 1.25em; height: 1.25em; vertical-align: -0.25em;" viewBox="0 0 84 85" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-135 42 42.5)"><path d="M11 38H54L37 21H51L73 43L51 65H37L54 48H11Z"/></g></svg>';
    if (ch === '🞣') return '<svg style="width: 0.9em; height: 0.9em; vertical-align: -0.1em; transform: translateY(-0.1em);" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z"/></svg>';
    return ch;
  };

  if (lang === 'fr') {
    window.__t = function (key) { return null; };
    return;
  }

  const T = {
    'meta.description': 'Data Engineering & AI/ML Student specialized in building large-scale data systems, cloud architectures, and AI models. Discover my projects.',

    'index.title': 'Mohammed Rehan portfolio',
    'index.h1': 'Mohammed Rehan — Data Engineering & AI/ML Student at BMSIT, Bangalore. Specialized in SQL, Python, ETL, and Machine Learning.',
    'index.hero.tagline': 'Data Architect & AI Developer, <span class="other-accent">engineering scalable data pipelines</span> and building AI-driven software.',
    'index.about.text': 'As a <span class="other-accent">data engineer & AI developer</span>, I design systems that process, model, and analyze data to drive intelligent automation.',
    'index.about.sub': "I am an AI/ML student at BMSIT Bangalore. Passionate about ETL workflows, SQL optimizations, distributed computing, and machine learning systems.",
    'index.cg.phrase': "Engineering data is about <span class=\"other-accent\">scalability</span>, <span class=\"other-accent\">precision</span>, and turning raw datasets into intelligence.",
    
    'index.skills.subtitle': 'Expertise',
    'index.skills.text': 'Computer Science student in AIML at BMSIT. Passionate about Data Engineering, ETL scripting, and database optimization.',
    'index.skills.frontend': 'Frontend',
    'index.skills.animation': 'Data Engineering',
    'index.skills.backend': 'Backend',
    'index.skills.database': 'Databases',
    'index.skills.devops': 'Tools',
    'index.skills.security': 'Cloud & Platforms',
    'index.skills.design': 'Specialization',
    
    'index.contact.title': 'Contact — Mohammed Rehan',
    'index.contact.dispo1': "Vice President of Epoch Society at BMSIT. Leading student tech events, hackathons, and programming sessions.",
    'index.contact.dispo2': "I am available for <span class=\"other-accent\">Data Engineering & AI/ML internships</span>, software development, and technical collaboration.",
    'index.proj.label': 'Preview',
    'index.detail.back': '🡼BACK',

    'info.title': 'About — Mohammed Rehan',
    'info.eyebrow': 'About',
    'info.role': 'Data Engineering & AI/ML Student',
    'info.desc': "I craft scalable data pipelines and deploy machine learning models. Specialized in SQL, Python, ETL workflows, database architecture, and building automated data warehouses.",
    'info.meta.based': 'Based in',
    'info.meta.status': 'Availability',
    'info.meta.based.value': 'Bangalore, India',
    'info.meta.status.value': 'Open to Internships',

    'contact.title': 'Contact — Mohammed Rehan',
    'contact.panel.title': "Let's build systems.",
    'contact.panel.copy': "I respond quickly to Data Engineering internships, AI developer roles, and freelance pipelines modeling queries.",
    'contact.meta.base': 'Location',
    'contact.meta.status': 'Availability',
    'contact.meta.delay': 'Response Time',
    'contact.meta.base.value': 'Bangalore, India',
    'contact.meta.status.value': 'Student / Freelancer',
    'contact.meta.delay.value': '24h',
    'contact.eyebrow': 'Contact',
    'contact.role': 'AI/ML Student & Data Engineer',
    'contact.desc': "If you want to design a data warehouse, build an AI API, design & build websites, or talk about system pipelines, feel free to reach out.",
    'contact.shortcuts': 'Shortcuts',
    'contact.brief': 'Project Brief',
    'contact.maildirect': 'Direct Email',
    'contact.brief.product': 'Project Scope',
    'contact.brief.deadline': 'Timeline',
    'contact.brief.stack': 'Tech Stack',
    'contact.brief.deliverables': 'Deliverables',

    'works.title': 'Works — Mohammed Rehan',
    'works.h1': 'Showcase of Mohammed Rehan\'s Data Engineering & AI/ML projects including YogaWeb, Compact Weddings, Agentathon 2026, CognitiveX Hackathon, and EVFlow booking app.',
  };

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    if (T[key] != null) el.innerHTML = T[key];
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
    el.getAttribute('data-i18n-attr').split('|').forEach(function (pair) {
      const idx = pair.indexOf(':');
      if (idx < 0) return;
      const attr = pair.slice(0, idx).trim();
      const key = pair.slice(idx + 1).trim();
      if (T[key] != null) el.setAttribute(attr, T[key]);
    });
  });

  const titleKey = document.documentElement.getAttribute('data-i18n-title');
  if (titleKey && T[titleKey]) document.title = T[titleKey];

  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta && T['meta.description']) descMeta.setAttribute('content', T['meta.description']);

  window.__t = function (key) { return T[key]; };
})();
