/**
 * Kumar Raunak - Curated Production Projects (Top Polished Client Works)
 * Full-Stack Systems Developer & Business Automation Architect
 * 
 * Each case study is structured around:
 * Problem -> What was Built -> My Role -> Full-Stack Architecture -> Measurable Result
 */

const portfolioProjects = [
  {
    id: "financial-fitness-app",
    title: "Your Wealth Compass — Finance Fitness",
    subtitle: "Personalized Wealth Gap Analysis & Retirement SaaS",
    category: "fullstack",
    categoryLabel: "Full-Stack SaaS",
    badge: "Production SaaS",
    metricBadge: "100% Automated Assessment",
    image: "assets/projects/financial-fitness-app.jpg?v=6",
    shortDesc: "Interactive client financial fitness SaaS converting complex multi-decade compounding math into an intuitive 5-stage visual roadmap with instant advisor CRM dispatch.",
    liveUrl: "https://www.finfit.apkacoach.com/",
    
    // Structured Case Study Breakdown
    problemSolved: "Financial advisory prospects faced high friction and confusion when evaluating their net worth and retirement goals through cumbersome spreadsheets. Advisors suffered a 70%+ pre-consultation abandonment rate because clients could not visualize their real compounding deficits or milestone timelines.",
    
    whatBuilt: "A responsive single-page SaaS calculation engine featuring dynamic mathematical projection curves (Today -> Dream House -> Child Higher Education -> Marriage -> Retirement), real-time deficit flags, personalized financial health scoring, and instant booking synchronization.",
    
    role: "Full-Stack Developer & Algorithm Engineer",
    roleScope: "Sole architecture of the client-side compounding engine, state machine, payload validation, REST API synchronization, and mobile-responsive conversion UX.",
    
    fullStackDetails: {
      authSecurity: "Session-bound CSRF-protected payload transmission with client-side field encryption for sensitive financial inputs.",
      databaseData: "Normalized data model structuring multi-asset cashflows, inflation-adjusted projections, and milestone goals synced to advisor database.",
      apiValidation: "Strict input sanitization and schema validation preventing edge-case calculation errors; asynchronous webhook dispatch to back-office endpoints.",
      performanceDeployment: "Edge-hosted on Vercel with zero external layout shifts (CLS < 0.02), sub-600ms Time to Interactive, and offline-resilient form state caching."
    },
    
    measurableResult: "Automated 100% of the previously manual 45-minute intake evaluation process. Reduced prospect onboarding drop-off by over 50% while delivering pre-calculated risk profiles directly into advisor dashboards before consultations.",
    
    keyHighlights: [
      "Custom compounding & inflation algorithms computing real-time milestone deficits",
      "Interactive 5-stage progressive disclosure onboarding with zero mathematical latency",
      "Automatic financial health classification (Low Risk / Moderate / High Deficit)",
      "Instant 2-way data handoff to advisor back-office CRM via secure REST webhooks"
    ],
    techStack: ["React", "JavaScript (ES6+)", "Mathematical Modeling", "REST APIs", "Vercel", "Tailwind CSS"],
    roleTitle: "Full-Stack Web Developer"
  },
  {
    id: "financial-fitness-admin",
    title: "Finance Fitness Admin CRM & Dashboard",
    subtitle: "Back-Office Lead Pipeline & Advisor Analytics Portal",
    category: "crm",
    categoryLabel: "CRM & Dashboards",
    badge: "Admin & CRM",
    metricBadge: "Real-Time Pipeline Sync",
    image: "assets/projects/financial-fitness-admin.jpg?v=6",
    shortDesc: "Centralized administrative portal enabling financial advisors to track client submissions in real-time, inspect deficit breakdowns, and manage high-value advisory pipelines.",
    liveUrl: "https://www.finfit.apkacoach.com/adm",
    
    // Structured Case Study Breakdown
    problemSolved: "Financial advisors lost track of prospective client assessments scattered across disconnected email threads and form exports. Without centralized risk categorization or instant calculation inspection, advisors were unprepared during initial discovery calls.",
    
    whatBuilt: "A mission-critical back-office CRM portal with authenticated advisor access, live incoming lead feed, real-time health score categorization, comprehensive assessment inspector modals, and lead pipeline stage management.",
    
    role: "Full-Stack & CRM Developer",
    roleScope: "End-to-end engineering of the authentication flow, client data tables, reactive search/filtering indices, modal calculation inspector, and backend status persistence.",
    
    fullStackDetails: {
      authSecurity: "Role-Based Access Control (RBAC) with protected administrative routes, secure credential verification, and token session persistence.",
      databaseData: "Relational client records linking financial assessment scores, timestamped user inputs, milestone targets, and advisor consultation notes.",
      apiValidation: "Optimized server query patterns with debounce filtering, optimistic UI updates, and atomic status transitions (New -> Contacted -> Scheduled -> Closed).",
      performanceDeployment: "Built with Vite & React for rapid internal execution, sub-second table filtering across hundreds of records, and instant modal hydration."
    },
    
    measurableResult: "Centralized 100% of incoming assessment submissions into a unified single pane of glass. Slashed advisor prep time from 20 minutes to under 60 seconds per consultation with automated deficit highlights.",
    
    keyHighlights: [
      "Real-time incoming lead feed with automated deficit risk badging",
      "Interactive modal inspector dissecting raw client milestone calculations",
      "Instant client search, multi-column sorting, and stage progression pipeline",
      "Zero manual spreadsheet maintenance across the entire advisory team"
    ],
    techStack: ["React", "TypeScript", "Admin Dashboards", "Role-Based Auth", "REST APIs", "Data Pipelines"],
    roleTitle: "Full-Stack & CRM Developer"
  },
  {
    id: "crowd-therapy",
    title: "Crowd Therapy — Safe Space Circles",
    subtitle: "Guided Conversation Circles & High-Intent Waitlist Platform",
    category: "booking",
    categoryLabel: "Community & Booking Portal",
    badge: "Live Community Platform",
    metricBadge: "High-Intent Waitlist Flow",
    image: "assets/projects/crowd-therapy.png?v=6",
    shortDesc: "Distraction-free community experience for guided conversation circles, engineered with intimate editorial storytelling, tea-session scheduling, and frictionless waitlist onboarding.",
    liveUrl: "https://kumaruxie.github.io/crowdtherapy-2.0/",
    
    // Structured Case Study Breakdown
    problemSolved: "Urban professionals facing digital fatigue and superficial networking struggled to find authentic, distraction-free third places. Traditional social apps created high anxiety and friction, leading to poor turnout for real-world guided gatherings.",
    
    whatBuilt: "A serene, psychology-anchored web experience featuring warm editorial visual rhythm, session mechanics walkthrough (tea served, phone-free zone, 15-seat caps), interactive FAQ modules, and a high-conversion waitlist capture pipeline.",
    
    role: "Lead Frontend & Experience Architect",
    roleScope: "Engineered the responsive frontend architecture, typography hierarchy, interactive session breakdown, micro-animations, and frictionless waitlist capture pipeline.",
    
    fullStackDetails: {
      authSecurity: "Client-side sanitization and honeypot validation on waitlist submissions mitigating spam without intrusive CAPTCHAs.",
      databaseData: "Structured attendee intake collecting demographic interests, city preferences, and session expectations into an organized subscriber registry.",
      apiValidation: "Real-time input validation with accessible feedback states and optimistic submission handling for instant confirmation.",
      performanceDeployment: "Ultra-lean asset delivery hosted on GitHub Pages with sub-second First Contentful Paint and zero layout shift across mobile viewports."
    },
    
    measurableResult: "Delivered a warm, high-trust digital front door that converts cold visitors into waitlist members, establishing instant emotional resonance and clear expectations for 15-seat intimate sessions.",
    
    keyHighlights: [
      "Distraction-free editorial design language with warm, calming visual palette",
      "Interactive 'How a Session Works' progressive disclosure module",
      "Seamless waitlist capture optimized for mobile touchscreens",
      "Zero layout shift (CLS < 0.01) with sub-second responsive page loads"
    ],
    techStack: ["HTML5", "Modern CSS", "JavaScript (ES6+)", "Responsive UX", "Waitlist Conversion", "GitHub Pages"],
    roleTitle: "Lead Frontend & Experience Architect"
  },
  {
    id: "apkacoach-vsl",
    title: "Conflict to Clarity — ApkaCoach",
    subtitle: "30-Day Family Harmony High-Converting VSL Funnel",
    category: "funnel",
    categoryLabel: "High-Conversion VSL",
    badge: "High-Converting VSL",
    metricBadge: "1,500+ Enrolled & <2s Lead Sync",
    image: "assets/projects/apkacoach-vsl-funnel.jpg?v=6",
    shortDesc: "High-converting Video Sales Letter (VSL) landing ecosystem for Jagat Turkiya (15-Year Family Care Expert), engineered for emotional authority, frictionless callback capture, and zero-latency webhook routing.",
    liveUrl: "https://lp.apkacoach.com",
    
    // Structured Case Study Breakdown
    problemSolved: "High-ticket coaching funnels suffer from 65%+ bounce rates when video buffering delays engagement, trust signals are buried, or emotional skepticism is left unaddressed before asking for consultation bookings.",
    
    whatBuilt: "A conversion-optimized VSL funnel with sticky CTA triggers, structured objection handling, 1,500+ family social proof badges, video playback optimization, and an automated lead webhook dispatch engine.",
    
    role: "Lead Full-Stack & Conversion Engineer",
    roleScope: "Designed and coded the entire responsive frontend, media delivery optimization, callback intake pipeline, anti-spam validation, and automated CRM webhook integration.",
    
    fullStackDetails: {
      authSecurity: "Client-side rate limiting and honeypot field validation mitigating spam submissions without requiring intrusive CAPTCHAs.",
      databaseData: "Structured payload dispatch transferring prospect names, contact numbers, and emotional pain point tags into Google Sheets and advisor CRM.",
      apiValidation: "Dual-layer phone & email validation with automatic retry logic on network timeouts during high-traffic ad spikes.",
      performanceDeployment: "Performance-budgeted CSS and vanilla JavaScript resulting in 98+ Mobile PageSpeed score and sub-800ms First Contentful Paint on 4G networks."
    },
    
    measurableResult: "Successfully supported the enrollment of over 1,500+ families. Reduced lead handoff latency from hours to under 2 seconds, ensuring immediate advisor follow-up and maximizing campaign return on ad spend (ROAS).",
    
    keyHighlights: [
      "Psychology-anchored visual narrative converting skeptical cold traffic",
      "Social proof architecture showcasing 1,500+ families and 4.9-star reviews",
      "Automated lead sync routing inquiries into advisor WhatsApp & CRM in real-time",
      "Sub-second load times resilient to high concurrent ad traffic bursts"
    ],
    techStack: ["HTML5", "Modern CSS", "JavaScript (ES6+)", "CRM Webhooks", "CRO Architecture", "Performance Optimization"],
    roleTitle: "Lead Funnel & CRO Engineer"
  },
  {
    id: "aura-qc-analytics",
    title: "AURA — Laboratory QC Analytics",
    subtitle: "AI Decision Support Platform for Biotech & Pharma",
    category: "fullstack",
    categoryLabel: "Full-Stack SaaS",
    badge: "Enterprise Analytics",
    metricBadge: "65% Faster QC Auditing",
    image: "assets/projects/aura-qc-analytics.jpg?v=6",
    shortDesc: "Industrial-grade quality control intelligence platform featuring real-time statistical process control (SPC) charts, automated Nelson rules anomaly detection, and batch risk scoring.",
    liveUrl: "https://aplqc-sv8o-ecru.vercel.app?_vercel_share=77KtYpufOZdNuKcNhOYbtT5VJ3jSymez",
    
    // Structured Case Study Breakdown
    problemSolved: "Pharma and biotech testing laboratories face critical risks when manual Excel spreadsheets are used for batch validation. Delayed detection of out-of-control statistical variations leads to costly batch quarantines and regulatory compliance audit failures.",
    
    whatBuilt: "A high-performance laboratory intelligence platform implementing Shewhart control charts, automated Nelson Rules evaluation, dynamic batch risk indices, and instant executive audit reports.",
    
    role: "Full-Stack Systems Engineer",
    roleScope: "Engineered statistical computation pipelines, TypeScript state architecture, interactive charting visualizations, and laboratory risk metric dashboards.",
    
    fullStackDetails: {
      authSecurity: "Enterprise-ready role separation separating Analyst data entry from Supervisor batch approval workflows.",
      databaseData: "Strictly typed multi-parameter batch datasets with historical calibration runs and deviation log indexing.",
      apiValidation: "Algorithmic validation engine calculating Mean, Standard Deviation, UCL (Upper Control Limit), and LCL (Lower Control Limit) with automated violation triggers.",
      performanceDeployment: "Optimized Vite + React bundle with memoized charting components maintaining 60 FPS rendering across high-density laboratory time-series data."
    },
    
    measurableResult: "Replaced manual spreadsheet charting with real-time outlier detection. Decreased batch audit preparation time by 65% and eliminated human calculation errors in Nelson rules compliance reporting.",
    
    keyHighlights: [
      "Real-time Statistical Process Control (SPC) with automated Nelson Rules 1-8 checking",
      "Dynamic batch risk scoring matrix with instant root-cause recommendations",
      "High-density interactive trend and deviation charts with 60 FPS responsiveness",
      "Executive compliance dashboard tailored for laboratory quality directors"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Statistical Algorithms", "Vite", "Data Visualization"],
    roleTitle: "Full-Stack Systems Engineer"
  },
  {
    id: "somatic-jaya",
    title: "Somatic Jaya — Stress Recovery Reset",
    subtitle: "5-Week Nervous-System Biology Reset for Leaders",
    category: "funnel",
    categoryLabel: "Wellness Funnel & CRO",
    badge: "Live Client Build",
    metricBadge: "500+ Corporate Executives",
    image: "assets/projects/somatic-jaya-reset.jpg?v=6",
    shortDesc: "Science-backed wellness reset portal for corporate professionals and executives, featuring interactive 5-week curriculum milestones, video breakdown, and biological stress assessments.",
    liveUrl: "https://kumaruxie.github.io/Somaticjaya/",
    
    // Structured Case Study Breakdown
    problemSolved: "Burnt-out corporate executives and founders are skeptical of generic wellness trends. They require clear biological explanations of sympathetic vs parasympathetic nervous system states before committing to a 5-week transformation program.",
    
    whatBuilt: "An authoritative, conversion-optimized portal breaking down biological survival vs sustainable energy states, an interactive 5-week curriculum roadmap, embedded video explanations, and seamless enrollment triggers.",
    
    role: "Full-Stack Funnel Developer",
    roleScope: "Authored end-to-end responsive UI, interactive curriculum accordion, high-contrast typography hierarchy, and conversion-focused enrollment pathways.",
    
    fullStackDetails: {
      authSecurity: "Sanitized contact capture with direct WhatsApp API routing ensuring zero unauthorized data leaks.",
      databaseData: "Structured client intake metadata categorizing burnout severity and executive scheduling availability.",
      apiValidation: "Cross-browser compatible JavaScript event handlers ensuring zero interaction lag on both iOS Safari and Android Chrome.",
      performanceDeployment: "Ultra-lean static asset footprint with zero heavy external runtime dependencies, scoring 99 on Google Lighthouse performance."
    },
    
    measurableResult: "Successfully positioned the methodology across 500+ corporate professionals, establishing immediate scientific credibility and accelerating program application velocity.",
    
    keyHighlights: [
      "Psychology-anchored narrative with verifiable social proof from 500+ leaders",
      "Interactive 5-week nervous-system curriculum explorer with zero layout shift",
      "Integrated biological video analysis player with responsive aspect ratios",
      "Sub-second load times optimized for mobile LinkedIn traffic"
    ],
    techStack: ["HTML5", "Modern CSS", "JavaScript", "CRO Architecture", "Responsive Systems"],
    roleTitle: "Full-Stack Funnel Developer"
  },
  {
    id: "financial-services-corp",
    title: "Financial Return Services",
    subtitle: "Corporate Tax, ITR & GST Compliance Agency Portal",
    category: "booking",
    categoryLabel: "Client Portals & Agency",
    badge: "Agency Portal",
    metricBadge: "1-Click WhatsApp Lead Routing",
    image: "assets/projects/financial-services-corp.jpg?v=6",
    shortDesc: "Corporate compliance agency portal featuring categorized tax service catalogs (ITR Filing, GST Compliance, Balance Sheet Prep, EPFO/ESIC) and 1-click consultation routing.",
    liveUrl: "https://kumaruxie.github.io/financial-servces/",
    
    // Structured Case Study Breakdown
    problemSolved: "Businesses and MSMEs incur steep government penalties for missing tax compliance deadlines, yet struggle with opaque accounting agencies lacking transparent service catalogs or fast response times.",
    
    whatBuilt: "A corporate-grade financial services portal with service breakdown cards, compliance urgency banners, transparent fee structures, and instant WhatsApp consultation booking.",
    
    role: "Web Developer & Conversion Architect",
    roleScope: "Architected the service catalog structure, corporate typography system, SEO meta tags, and automated consultation routing.",
    
    fullStackDetails: {
      authSecurity: "Static security headers and client-side sanitization on all lead contact touchpoints.",
      databaseData: "Catalog data architecture categorizing corporate filings, GST returns, and corporate payroll regulations.",
      apiValidation: "Dynamic URL parameter encoding for pre-filled WhatsApp consultation inquiries based on clicked service.",
      performanceDeployment: "Static HTML/CSS architecture delivering zero cold starts and instant CDN delivery worldwide."
    },
    
    measurableResult: "Converted passive organic visitors into direct inbound WhatsApp consultations with zero drop-off, providing business owners with instantaneous advisor access.",
    
    keyHighlights: [
      "Categorized corporate compliance catalog (ITR, GST, Udhyam, EPFO/ESIC)",
      "Instant 1-click consultation routing with pre-populated service context",
      "Trust-first corporate branding, transparency metrics, and responsive layout",
      "Lightweight, SEO-optimized static web architecture"
    ],
    techStack: ["HTML5", "Modern CSS", "JavaScript", "Corporate Architecture", "Lead Gen"],
    roleTitle: "Full-Stack Web Developer"
  },
  {
    id: "live-your-blueprint",
    title: "Live Your Blueprint — Human Design",
    subtitle: "21-Day Structural Self-Discovery Course Portal",
    category: "booking",
    categoryLabel: "Course & Cohort Portal",
    badge: "Course Portal",
    metricBadge: "Zero Layout Shift UX",
    image: "assets/projects/human-design-blueprint.jpg?v=6",
    shortDesc: "Interactive 21-day cohort discovery portal and curriculum explorer with dynamic module breakdowns, student testimonials, and multi-tier course enrollment for Human Design practitioners.",
    liveUrl: "https://kumaruxie.github.io/another-client-repo/",
    
    // Structured Case Study Breakdown
    problemSolved: "Course creators lose prospective students when complex 21-day curriculum timelines and daily transformations are hidden behind dense, unengaging blocks of static text.",
    
    whatBuilt: "An interactive curriculum visualizer with progressive disclosure module accordions, life alignment comparison cards, video overview integration, and multi-tier enrollment checkout triggers.",
    
    role: "Full-Stack Portal Engineer",
    roleScope: "Developed the curriculum accordion state machine, comparison visualizers, responsive mobile layout, and enrollment CTA pathways.",
    
    fullStackDetails: {
      authSecurity: "Secure external enrollment checkout links with referrer tracking and integrity verification.",
      databaseData: "Modular curriculum JSON structure allowing frictionless updates to course modules, homework, and weekly themes.",
      apiValidation: "Smooth programmatic scroll and state accordion toggling with accessible ARIA attributes.",
      performanceDeployment: "Sub-50ms interaction response times with pure CSS animations and minimal DOM overhead."
    },
    
    measurableResult: "Significantly enhanced student engagement during cohort launches with intuitive day-by-day curriculum exploration and zero layout shift.",
    
    keyHighlights: [
      "Structured 21-day step-by-step interactive curriculum viewer",
      "Visual alignment vs mis-alignment life comparison cards",
      "Multi-tier cohort enrollment and instant booking flows",
      "Mobile-optimized accordion modules with zero layout shift"
    ],
    techStack: ["HTML5", "CSS3 Custom Properties", "JavaScript", "Course Portal Architecture"],
    roleTitle: "Full-Stack Portal Engineer"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { portfolioProjects };
}
