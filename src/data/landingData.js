import {
    FaAws,
    FaBolt,
    FaBrain,
    FaChartLine,
    FaCloud,
    FaHubspot,
    FaLock,
    FaMicrosoft,
    FaRegFileAlt,
    FaRobot,
    FaSalesforce,
    FaSlack,
    FaSnowflake,
    FaStripe,
}   from 'react-icons/fa'

export const stats = [
    {label: 'Models Deployed', value: '280+'},
    {label: 'Avg. Automation Gain', value: '127%'},
    {label: 'Enterprise Uptime', value: '99.99%'},
    {label: 'Global Clients', value: '42'},
]

export const features = [
    {
        icon: FaBolt,
        title: 'AI-Powered Automation',
        description: 'Automate repetitive workflows with intelligent agents that reduce manual work and speed up execution.'
    },
    {
        icon: FaChartLine,
        title: 'Real-Time Analytics',
        description: 'Turn complex data into actionable insights with live dashboards and predictive trend analysis.'
    },
    {
        icon: FaLock,
        title: 'Enterprise-Grade Security',
        description: 'Protect your data with encrypted pipelines, robust access controls and compliance-ready infrastructure.'
    }
]

export const services = [
    {
        icon: FaBolt,
        name: 'Intelligent Assistant API',
        summary: 'Plug in conversational AI to support teams and customer-facing experiences.'
    },
    {
        icon: FaBrain,
        name: 'Workflow Copilot',
        summary: 'Augment operations with contect-aware suggestions and one-click automation.'
    },
    {
        icon: FaChartLine,
        name: 'Predictive Intelligence',
        summary: 'Forecast demand, detect risk, and optimize decisions with machine learning models.'
    }
]

export const showCases = [
    {
        icon: FaCloud,
        title: 'Command Center',
        description: 'Monitor all AI workflows, alert and system health in one reaş-time dashboard.',
        metric: '98.2% accuracy'
    },
    {
        icon: FaRobot,
        title: 'Automation Studio',
        description: 'Design no-code AI automations with triggers, routing and approval chains',
        metric: '3.4x faster setup'
    },
    {
        icon: FaChartLine,
        title: 'İnsight Engine',
        description: 'Surface demand trends, churn risk and conversion opportunities before they happen.',
        metric: '+31% conversion lift'
    }
]

export const workflowSteps = [
    {
        step: '01',
        title: 'Discovery & Data Mapping',
        details: 'We identify your highest-impact workflows and data sources, KPIs and constraints.'
    },
    {
        step: '02',
        title: 'Pilot Build in 14 Days',
        details: 'Our team ships a production-grade pilot with measurable performance and clear ROI goals.'
    },
    {
        step: '03',
        title: 'Scale & Optimization',
        details: 'We continuously tube models, monitor drift and expand automations across departments.'
    }
]

export const infrastructure = [
    {name: 'Slack', icon: 'FaSlack'},
    {name: 'HubSpot', icon: 'FaHubspot'},
    {name: 'Salesforce', icon: 'FaSalesforce'},
    {name: 'Notion', icon: 'FaRegFileAlt'},
    {name: 'AWS', icon:'FaAws'},
    {name: 'Azure', icon:'FaMicrosoft'},
    {name: 'Stripe', icon:'FaStripe'},
    {name: 'Snowflake', icon:'FaSnowflake'}
]

export const testimonials = [
    {
        quote:'NeuraForge helped us launch an AI support assistant in two weeks and cut response time by 63%.',
        author: 'Maya Rios',
        role: 'VP Product Lumina Health'
    },
    {
        quote:'The predictive engine surfaced revenue opportunities we had never captured with our previous stack.',
        author: 'Oliver Grant',
        role: 'COO, Nova Commerce'
    },
    {
        quote:'Their team feels like an extension of ours - strategic, fast and deeply technical.',
        author: 'Sana Idris',
        role: 'Head of Ops, ApexFlow'
    }
]

export const pricing = [
    {
        tier: 'Starter',
        monthly: '$99',
        annual: '$79',
        description: 'For early-stage teams validating AI workflows.',
        features: ['1 AI workflow', 'Basic analytics', 'Email support']
    },
    {
        tier: 'Growth',
        monthly: '$299',
        annual: '$239',
        description: 'For scaling teams shipping AI-powered products.',
        features: ['Unlimited workflows', 'Advanced analytics', 'Priority support'],
        popular: true
    },
    {
        tier: 'Enterprise',
        monthly: 'Custom',
        annual: 'Custom',
        description: 'For mission-critical AI at enterprise scale',
        features: ['Private deployment', 'SSO + compliance', 'Dedicated AI arhitect'],
        popular: true
    }
]

export const faqs = [
    {
        q: 'How fast can we launch our first AI workflow?',
        a: 'Most teams deploy their first workflow within 7-14 days with our onboarding and templates.'
    },
    {
        q: 'Do you support private or on-prem infrastructure?',
        a: ' Yes. Growth and Enterprise customers can run on private cloud, VPC, of hybrid environments.'
    },
    {
        q: 'Can we connect our existing tools and data sources?',
        a: 'Absolutely: We provide connectors for common CRMs, warehouses, support tools and custom APIs.'
    }
]

export const team = [
    {name: 'Mushaner', role: 'CEO & AI Strategy Lead'},
    {name: 'Alex', role: 'CTO & ML Architect'},
    {name: 'Lenovo', role: 'Head of Product'}
]