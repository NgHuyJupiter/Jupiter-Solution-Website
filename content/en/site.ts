// CONTENT VERIFICATION REQUIRED: Verify all business claims and license numbers before production release.

import { ServiceItem, ProductGroup, CaseStudyItem, FAQItem } from '../vi/site';

export const siteContentEn = {
  brand: {
    name: 'Sao Mộc',
    englishName: 'Jupiter Solutions',
    fullName: 'Sao Mộc · Jupiter Solutions Technology',
    tagline: 'The orbit of innovation.',
    license: 'Business Registration No. 0109876543', // CONTENT VERIFICATION REQUIRED: Confirm registration code
    address: '12th Floor, Sao Mộc Building, 88 Đại Cồ Việt, Hai Bà Trưng, Hà Nội, Vietnam',
    phone: '(+84) 326.813.947',
    email: 'info@jupiter-ai.pro',
  },
  
  home: {
    hero: {
      eyebrow: 'ENTERPRISE TECHNOLOGY SYSTEMS',
      headline: 'Putting businesses into the orbit of technology.',
      description: 'We design, build, and operate enterprise AI, software, data pipelines, and cloud infrastructure engineered to scale alongside your organization.',
      ctaPrimary: 'Discuss a Project',
      ctaSecondary: 'Explore Capabilities',
      credibilityPill: 'AI · SOFTWARE · CLOUD · DATA · SECURITY',
      stats: [
        { value: '60+', label: 'Engineers & Specialists', sub: 'Engineers, architects and specialists' },
        { value: '4', label: 'Markets Served', sub: 'Markets served across ASEAN' },
        { value: '24/7', label: 'Continuous Operation', sub: 'Monitoring & emergency response' },
        { value: '3', label: 'Regional Offices', sub: 'Regional presence & PoC labs' }
      ]
    },
    challengesHead: {
      eyebrow: 'ENTERPRISE CHALLENGE',
      title: 'Technology should not become a fragmented system.',
      description: 'When technology tools operate in isolation, enterprises incur high costs without achieving expected execution velocity.',
      transition: 'Jupiter Solution architects a unified system from strategy to continuous operations.'
    },
    challenges: [
      { id: 'c1', code: '01', title: 'Siloed Data Lakes', desc: 'Data is locked across disconnected software systems, preventing unified executive visibility.' },
      { id: 'c2', code: '02', title: 'Manual Workflows', desc: 'Core processes rely on manual work, creating operational bottlenecks and human errors.' },
      { id: 'c3', code: '03', title: 'Isolated AI Pilots', desc: 'AI is tested in isolation without generating real operational value or data privacy boundaries.' },
      { id: 'c4', code: '04', title: 'Inflexible Infrastructure', desc: 'Legacy infrastructure lacks observability, driving unpredicted cloud bill escalation.' },
      { id: 'c5', code: '05', title: 'Legacy Software Barriers', desc: 'Monolithic legacy systems slow down product deployment and time-to-market.' },
      { id: 'c6', code: '06', title: 'Late Security Addition', desc: 'Security is added reactively after incidents rather than being engineered with Zero Trust by design.' }
    ],
    servicePillarsHead: {
      eyebrow: 'SYSTEM ARCHITECTURE',
      title: 'Three core pillars driving enterprise speed and stability',
      description: 'We structure our capabilities into three interconnected pillars: Build, Intelligence, and Operate.'
    },
    servicePillars: [
      {
        id: 'build',
        code: 'BUILD',
        title: 'Build & System Integration',
        description: 'Design and build custom enterprise software platforms and core integration engines.',
        capabilities: ['Enterprise Software', 'Product Engineering', 'System Integration & APIs'],
        outcome: 'Reduce time-to-market for new digital workflows by 40%.'
      },
      {
        id: 'intelligence',
        code: 'INTELLIGENCE',
        title: 'Intelligence & Data Engineering',
        description: 'Deploy specialized AI models and automated data pipelines on private secured datasets.',
        capabilities: ['Enterprise RAG', 'AI Agents & Automation', 'Data Pipeline & Governance'],
        outcome: 'Unlock internal enterprise knowledge and automate complex knowledge tasks.'
      },
      {
        id: 'operate',
        code: 'OPERATE',
        title: 'Operate & Infrastructure',
        description: 'Ensure 24/7 operational stability, information security, and high performance across hybrid clouds.',
        capabilities: ['Cloud & Hybrid Infrastructure', 'DevOps & SRE Automation', 'Zero Trust SOC & Managed NOC'],
        outcome: 'Committed 99.99% uptime SLA with rapid emergency incident response.'
      }
    ],
    securityHead: {
      eyebrow: 'RELIABILITY & GOVERNANCE',
      title: 'Operational security principles for mission-critical systems',
      description: 'We engineer cybersecurity as a foundational prerequisite across every system layer.'
    },
    securityPrinciples: [
      { num: '01', title: 'Security by Design', desc: 'Embed security policies into every line of source code and infrastructure configuration.' },
      { num: '02', title: 'Zero Trust Access Control', desc: 'Enforce multi-factor authentication and Least Privilege access control across all nodes.' },
      { num: '03', title: 'Data Isolation', desc: 'Encrypt data at rest and in transit using customer-managed encryption keys.' },
      { num: '04', title: 'Deployment Governance', desc: 'Automate security checks inside CI/CD pipelines before production deployment.' },
      { num: '05', title: 'Full System Observability', desc: 'Centralize event log analytics (SIEM) with real-time threat anomaly detection.' },
      { num: '06', title: 'Documentation & Handover', desc: 'Hand over 100% of architecture documentation, source code, and Disaster Recovery Plans (DRP).' }
    ],
    servicesHead: {
      eyebrow: 'Strategic Services',
      title: 'End-to-End technology solutions for enterprise growth',
      description: 'We deliver full lifecycle engineering services from IT architecture consulting and custom software development to network security and NOC operations.'
    },
    capabilitiesHead: {
      eyebrow: 'OUR PRINCIPLE',
      title: 'Build quietly. Ship reliably.',
      description: 'We believe that the best technology is quiet and humble—serving humans, operating silently, and supporting clients so they can shine.'
    },
    processHead: {
      eyebrow: 'DELIVERY METHODOLOGY',
      title: '5-Stage system timeline from strategy to operation',
      description: 'Ensures absolute transparency in progress, engineering quality, and budget optimization throughout the project lifecycle.'
    },
    processSteps: [
      { num: '01', title: 'Discover', desc: 'Understand real business needs, survey existing IT architecture, and define success metrics.' },
      { num: '02', title: 'Architect', desc: 'Design baseline system architecture, compile implementation roadmap, and define commercial SLA.' },
      { num: '03', title: 'Build', desc: 'Program and integrate software in short agile cycles (Scrum) with bi-weekly deliverables.' },
      { num: '04', title: 'Integrate', desc: 'Connect legacy systems, data pipelines, and conduct technical workshops for in-house teams.' },
      { num: '05', title: 'Operate', desc: 'Provide 24/7 NOC/SOC monitoring, proactive maintenance, and continuous performance tuning.' }
    ]
  },

  services: {
    list: [
      {
        id: 'tech-solutions',
        num: '01',
        title: 'Technology Solutions',
        problem: 'Enterprises struggle to find off-the-shelf software optimized for their specific workflow requirements.',
        description: 'Design and develop custom enterprise software platforms tailored to your business needs—from web portals and internal tools to complex ERP/CRM systems.',
        scope: ['Custom Web & Mobile App Development', 'Core Business Systems Engineering', 'API Systems & Microservices Integration'],
        deliverables: ['Full Source Code Ownership Transfer', 'API Specifications & Documentation', 'Automated QA Testing Suites'],
        tags: ['Web Platform', 'ERP / CRM', 'Mobile', 'API System']
      },
      {
        id: 'digital-transformation',
        num: '02',
        title: 'Digital Transformation',
        problem: 'Siloed data pipelines and manual work processes hinder operational efficiency in large organizations.',
        description: 'Partner with leadership teams to map digital transformation paths, automate manual processes, and unify analytics for real-time decision support.',
        scope: ['Digital Transformation Roadmap Consulting', 'Cross-departmental Workflow Automation', 'Siloed Data Lakes Unification'],
        deliverables: ['Enterprise Digital Architecture Maps', 'Real-time KPI Data Visualizations', 'Standardized Digital SOPs'],
        tags: ['Strategy', 'Data Unification', 'Process Redesign', 'KPI Dashboard']
      },
      {
        id: 'applied-ai',
        num: '03',
        title: 'Applied AI Services',
        problem: 'Businesses want to leverage AI but are concerned about data leaks and measurable returns on investment (ROI).',
        description: 'Deploy custom AI models, Retrieval-Augmented Generation (RAG), and intelligent autonomous agents on private datasets with strict security constraints.',
        scope: ['RAG Pipeline Setup on Internal Data', 'Autonomous AI Agents for System Tasks', 'Computer Vision Models Integration'],
        deliverables: ['Fine-tuned LLM Configurations', 'Secure AI Data Control Boundaries', 'ROI Performance Metric Audits'],
        tags: ['LLM Pipeline', 'RAG Security', 'Computer Vision', 'AI Agents']
      },
      {
        id: 'cloud-infrastructure',
        num: '04',
        title: 'Integration & Cloud Infrastructure',
        problem: 'Managing complex hybrid clouds without structured DevOps tools results in infrastructure instability and high cloud bills.',
        description: 'Design and deploy secure cloud environments, automate deployment pipelines (DevOps), and optimize hosting costs.',
        scope: ['Hybrid Cloud & Multi-Cloud Architecture Design', 'DevOps Automations & CI/CD Pipelines', 'Cloud Spending Optimization'],
        deliverables: ['Cloud Target Architecture Layouts', 'Infrastructure as Code Files (IaC/Terraform)', 'Fully Automated CI/CD Systems'],
        tags: ['AWS / GCP / Azure', 'DevOps CI/CD', 'System Integration', 'Cloud Security']
      },
      {
        id: 'networking-security',
        num: '05',
        title: 'Network & Security Systems',
        problem: 'Core network backbones remain vulnerable to increasingly complex cyber attacks.',
        description: 'Integrate and secure core enterprise networks using Juniper Networks appliances, Next-Generation Firewalls (NGFW), and SD-WAN.',
        scope: ['Enterprise Core Network Design', 'Juniper SRX NGFW Integration', 'Secure SD-WAN Networks Integration'],
        deliverables: ['Core Network Design Diagrams', 'Hardened Device Configuration Templates', 'Access Control Segment Policies'],
        tags: ['Juniper SRX', 'Core Switches', 'SD-WAN', 'NGFW']
      },
      {
        id: 'modern-datacenter',
        num: '06',
        title: 'Modern Data Centers',
        problem: 'Legacy servers suffer from poor performance, high expansion costs, and frequent service downtime.',
        description: 'Modernize on-premise data centers using HPE servers, flash storage systems, VMware vSphere virtualization, and hyperconverged infrastructure (HCI).',
        scope: ['HPE ProLiant & HPE Nimble Systems Integration', 'VMware vSAN HCI Implementations', 'Enterprise Virtualization Setups'],
        deliverables: ['Virtualized Infrastructure Ready to Run', 'Backup & Disaster Recovery Plans (DR)', 'Storage Allocation Schematics'],
        tags: ['HPE Servers', '3PAR / Nimble', 'VMware vSAN', 'HCI']
      },
      {
        id: 'cybersecurity-soc',
        num: '07',
        title: 'Cybersecurity (SOC)',
        problem: 'Organizations lack the internal teams and tools required to monitor security events continuously 24/7.',
        description: 'Monitor, detect, and mitigate threats around the clock with Splunk SIEM, ForeScout device control, and BeyondTrust PAM privilege management.',
        scope: ['SOC Setup with Splunk Enterprise & SOAR', 'BeyondTrust Privileged Access Management', 'OT/IoT Device Visibility with ForeScout'],
        deliverables: ['Operational SIEM Monitoring Centers', 'SOAR Automated Incident Playbooks', 'Secure Access Control Policies'],
        tags: ['Splunk SIEM', 'ForeScout IoT', 'BeyondTrust PAM', 'Zero Trust']
      },
      {
        id: 'managed-operations',
        num: '08',
        title: 'Operations & Maintenance',
        problem: 'Running internal 24/7 NOCs is costly and SLA tracking for branch equipment is difficult.',
        description: 'Outsource operations with managed services, ATM maintenance, and nationwide IT support backed by strict SLAs and a 24/7 NOC.',
        scope: ['24/7 Proactive NOC Monitoring', 'ATM & Branch Hardware Support Services', 'Onsite Engineering & Helpdesk Support'],
        deliverables: ['Monthly SLA Performance Reports', 'Ticketing Incident Tracking Indexes', 'Routine Maintenance Summaries'],
        tags: ['Managed Services', 'ATM Maintenance', 'NOC 24/7 Support', 'SLA Contract']
      }
    ] as ServiceItem[]
  },

  products: {
    intro: 'Sao Mộc is an authorized integration partner for global hardware and virtualization leaders. We configure and deploy reliable compute, networking, and security platforms.',
    list: [
      {
        id: 'juniper-networking',
        code: 'NET',
        partner: 'Juniper Networks Partner',
        title: 'Juniper Networks Core Infrastructure',
        description: 'High-performance routing, edge switching, and SRX Series next-generation firewalls for enterprise backbones.',
        subgroups: [
          {
            name: 'Next-Generation Firewalls (NGFW)',
            items: [
              { name: 'SRX 5800', note: 'Ultra-performance core and data center firewall' },
              { name: 'SRX 4600', note: '1U security gateway integrating SD-WAN features' },
              { name: 'SRX Series', note: 'Branch and edge security firewalls' }
            ]
          },
          {
            name: 'Switching & Routing',
            items: [
              { name: 'EX Series', note: 'Standard campus enterprise access switches' },
              { name: 'QFX Series', note: 'High-density, low-latency data center switches' },
              { name: 'MX Series Routers', note: 'Service provider and edge routing systems' }
            ]
          }
        ]
      },
      {
        id: 'hpe-vmware-systems',
        code: 'SYS',
        partner: 'HPE · VMware Partner',
        title: 'Storage & Virtualization Systems',
        description: 'Durable enterprise servers and hyperconverged software architectures ready for hybrid cloud deployment.',
        subgroups: [
          {
            name: 'HPE Servers & Storage',
            items: [
              { name: 'HPE 3PAR StoreServ', note: 'All-Flash array with sub-ms response metrics' },
              { name: 'HPE Nimble Storage', note: 'AI-driven InfoSight arrays with 99.9999% uptime validation' },
              { name: 'HPE ProLiant Servers', note: 'The world\'s most popular rack compute servers' }
            ]
          },
          {
            name: 'VMware Virtualization',
            items: [
              { name: 'VMware vSAN', note: 'Software-defined storage for Hyperconverged Infrastructure (HCI)' },
              { name: 'VMware vSphere', note: 'The leading server virtualization configuration' }
            ]
          }
        ]
      },
      {
        id: 'security-solutions',
        code: 'SEC',
        partner: 'Splunk · BeyondTrust · ForeScout',
        title: 'Monitoring & Cybersecurity Tools',
        description: 'Advanced data analytics pipelines, threat monitoring, and PAM access controllers.',
        subgroups: [
          {
            name: 'Splunk Data Analytics',
            items: [
              { name: 'Splunk Enterprise', note: 'Large-scale machine log capture and event analytics' },
              { name: 'Splunk SOAR', note: 'Automated workflow response orchestration templates' },
              { name: 'Splunk ITSI', note: 'Machine learning diagnostic monitors for IT services' }
            ]
          },
          {
            name: 'Privilege & Device Security',
            items: [
              { name: 'BeyondTrust PAM', note: 'Privileged password vaults and secure remote access logs' },
              { name: 'ForeScout CounterACT', note: 'Agentless asset discovery and control for IoT/OT nodes' }
            ]
          }
        ]
      }
    ] as ProductGroup[]
  },

  capabilities: {
    intro: 'We build our technical competence on system depth, standardized processes, and certified professionals trained directly by technology vendors.',
    // CONTENT VERIFICATION REQUIRED: Verify certified engineer counts
    certs: [
      { code: 'AWS', title: 'AWS Certified Solutions Architect', count: '12 engineers' },
      { code: 'AZURE', title: 'Microsoft Azure Architect', count: '8 engineers' },
      { code: 'GCP', title: 'Google Cloud Architect Certification', count: '6 engineers' },
      { code: 'JUNIPER', title: 'Juniper Networks JNCIE / JNCIP Certifications', count: '9 engineers' },
      { code: 'VMWARE', title: 'VMware VCP-DCV Certification', count: '11 engineers' },
      { code: 'SPLUNK', title: 'Splunk Certified Architect', count: '5 engineers' },
      { code: 'CISSP', title: 'CISSP & CISM Security Specialist', count: '7 engineers' }
    ],
    // CONTENT VERIFICATION REQUIRED: Verify staff ratios
    ratios: [
      { percent: '32%', title: 'Software Engineers', desc: 'Focusing on backend, frontend, mobile, and web apps.' },
      { percent: '18%', title: 'Infrastructure Engineers', desc: 'DevOps, cloud hosting, networking, and system security.' },
      { percent: '15%', title: 'Data & AI Specialists', desc: 'Constructing pipelines, data modeling, and MLOps integrations.' },
      { percent: '12%', title: 'Product & UX Designers', desc: 'Conducting user research and coding enterprise visual interfaces.' },
      { percent: '13%', title: 'Project Managers (PM)', desc: 'Scrum masters delivering sprints with strict quality assurance.' },
      { percent: '10%', title: 'Solutions Architects', desc: 'Analyzing system requirements and drafting pre-sales specifications.' }
    ]
  },

  caseStudies: {
    list: [
      {
        id: 'case-corebanking',
        code: 'CASE.01',
        sector: 'Commercial Bank', // CONTENT VERIFICATION REQUIRED: Real customer name
        title: 'Core Banking Data Center Modernization',
        challenge: 'Legacy storage arrays suffered from high write/read latency during peak hours, affecting customer transactions and end-of-day reports.',
        solution: 'Deployed HPE 3PAR All-Flash storage and VMware vSAN virtualization, moving the architecture to a Hyperconverged Infrastructure (HCI).',
        result: 'Decreased I/O latency by 62%, tripled VM density per rack, and guaranteed 99.99% core infrastructure uptime.',
        techs: ['HPE 3PAR', 'VMware vSAN', 'HCI'],
        isVerified: false
      },
      {
        id: 'case-ot-monitoring',
        code: 'CASE.02',
        sector: 'Energy Group', // CONTENT VERIFICATION REQUIRED: Real customer name
        title: 'Industrial OT Control Network Visibility',
        challenge: 'Operation technology (OT) networks contained thousands of unmapped legacy endpoints with high malware exposure risks.',
        solution: 'Deployed ForeScout CounterACT and eyeInspect to segment networks using the Purdue Model, feeding logs into a central Splunk SIEM.',
        result: 'Achieved 100% automated asset mapping of 18,000+ endpoints, triggering immediate warnings for high-risk nodes.',
        techs: ['ForeScout', 'Splunk SIEM', 'Purdue Model'],
        isVerified: false
      },
      {
        id: 'case-soc-operations',
        code: 'CASE.03',
        sector: 'Securities Firm', // CONTENT VERIFICATION REQUIRED: Real customer name
        title: 'Cybersecurity SOC & Privileged Access Control',
        challenge: 'Needed compliance with strict audits in securities trade and remote access logs of third-party system admins.',
        solution: 'Established a Security Operations Center (SOC) with Splunk Enterprise + SOAR, and integrated BeyondTrust PAM.',
        result: 'Passed compliance audits, automated detection of 98% of anomalies, and recorded 100% of privileged sessions.',
        techs: ['Splunk SOAR', 'BeyondTrust PAM', 'NOC/SOC'],
        isVerified: false
      }
    ] as CaseStudyItem[]
  },

  faq: {
    list: [
      {
        id: 'faq-differentiation',
        num: '01',
        question: 'How is Sao Mộc different from standard system integrators?',
        answer: 'We do not just distribute hardware—we write custom software and implement AI architectures. A typical Sao Mộc project combines networking and compute configurations with tailored core business application code.'
      },
      {
        id: 'faq-pricing',
        num: '02',
        question: 'What are the engagement models and pricing options?',
        answer: 'Depending on how well-defined your requirements are, we offer Fixed Price projects with clear deliverables and SLA timelines, or Dedicated Engineering Teams billed bi-weekly.'
      },
      {
        id: 'faq-security',
        num: '03',
        question: 'How do you keep our company data secure?',
        answer: 'All engineers sign binding personal NDAs. Production data is accessed only within the client\'s own network boundaries. We conform our engineering operations to standard ISO 27001 cybersecurity practices.'
      },
      {
        id: 'faq-exit-strategy',
        num: '04',
        question: 'What happens if a project does not meet our expectations?',
        answer: 'We integrate a formal checkpoint at day 30. If you decide the quality is below specifications, you can terminate the contract and pay only for completed sprints, with zero penalties.'
      }
    ] as FAQItem[]
  }
};
