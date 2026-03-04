import type { StaticImageData } from 'next/image';

import aiStartupImage from '@/assets/aiStartupImage.png';
import myPortfolioImage from '@/assets/My Portfolio.png';
import waterPlantImage from '@/assets/water plant.png';
import medicareImage from '@/assets/medicare medical.png';
import freshDairyImage from '@/assets/FreshDairy.png';
import augustWebImage from '@/assets/14 August web.png';
import tinyUrlImage from '@/assets/Tiny URL.png';
import housingAiImage from '@/assets/Housing Ai agent.png';
import portfolioImage from '@/assets/portfolio.png';
import billReaderImage from '@/assets/Bill reader.png';
import chatBoxImage from '@/assets/chat box.jpg';
import geminiImage from '@/assets/Gemini_Generated_Image_a7ua5ca7ua5ca7ua (1).png';
import order_processs1 from '@/assets/order_proceeing_id_1.png';
import inventory_system from '@/assets/inventory syetem.png';
import ai_automation1 from '@/assets/ai_automation1.png';
import weather_assistant from '@/assets/weather assisatnat.png';
import property_hub from '@/assets/proptery_hub.png';
import weekly_cleint_report from '@/assets/weekly_client_report.png';
import smart_waiter from '@/assets/smart_waiter.png';
import content_creation from '@/assets/content_creation.png';
import prism_ai_todo from '@/assets/prism_ai_todo.png';
import email_assistant from '@/assets/smart_assistant.png';
import video_viral from '@/assets/video_viral.png';


export type ProjectCategory =
  | 'Workflow Automations (n8n)'
  | 'Modern Full-Stack Development'
  | 'Full-Stack Web Applications'
  | 'Frontend + n8n Integration';

export type FilterCategory = 'All' | ProjectCategory;

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  thumbnail: StaticImageData;
  shortDescription: string;
  fullDescription: string;
  /** YouTube video ID — e.g. "dQw4w9WgXcQ". Undefined = no video, show thumbnail instead. */
  youtubeId?: string;
  /** External live URL */
  liveUrl?: string;
  technologies: string[];
  features?: string[];
}

export const CATEGORIES: FilterCategory[] = [
  'All',
  'Workflow Automations (n8n)',
  'Modern Full-Stack Development',
  'Full-Stack Web Applications',
  'Frontend + n8n Integration',
];

export const projects: Project[] = [
  // ─── Frontend + n8n Integration ────────────────────────────────────────
  {
  id: 'ai-content-strategy-engine',
  title: 'Multi-Stage AI Content Strategy Engine – n8n + NestJS',
  category: 'Workflow Automations (n8n)',
  thumbnail: content_creation, // ← Add your image import here
  shortDescription:
    'Production-ready AI pipeline built with n8n + NestJS that transforms a single prompt into platform-optimized, emotionally intelligent, zero-edit publication-ready content.',
  fullDescription: `Built a structured, production-ready AI content strategy engine using n8n and NestJS that solves a fundamental problem with AI-generated content — it generates strategy, not just text.

Most AI content fails due to inconsistent brand voice, platform-specific formatting issues, manual editing cycles, and lack of emotional depth. This multi-model orchestration workflow inside n8n fixes all of that: it extracts platform intent (LinkedIn, Instagram, X, or Blog), applies emotional psychology layers, enforces word-count compliance per platform, structures content using strategic reasoning blocks, and outputs zero-edit publication-ready copy — all from a single user prompt.

The entire workflow is connected to a custom UI built in NestJS, enabling session management, API-ready architecture, scalable content generation, and clean frontend integration with enterprise-grade reliability. A single input now triggers a full strategic content engine — applied AI infrastructure built for marketing teams, founders, and AI-first product builders.`,
  youtubeId: 'https://youtu.be/ni2huup5LPU',
  liveUrl: 'https://content-creation-system-with-automate.vercel.app/',
  technologies: ['n8n', 'NestJS', 'AI Agents', 'LLM', 'OpenAI'],
  features: [
    'Multi-model orchestration with platform intent extraction (LinkedIn, Instagram, X, Blog)',
    'Emotional psychology layering and word-count compliance per platform',
    'Zero-edit publication-ready content output from a single prompt',
    'NestJS custom UI with session management and API-ready architecture',
  ],
},

  {
    id: 'personal-ai-portfolio',
    title: 'Personal AI Portfolio Website',
    category: 'Frontend + n8n Integration',
    thumbnail: myPortfolioImage,
    shortDescription:
      'Advanced AI-powered portfolio with intelligent chat interaction built on Next.js and N8N automation workflows.',
    fullDescription: `An advanced AI-powered portfolio built with Next.js, TypeScript, and N8N automation, featuring intelligent chat interaction to explore my journey, projects, and professional details seamlessly in one place.

The portfolio integrates a custom AI chat widget that connects to an n8n automation backend, enabling visitors to have natural conversations about my skills, projects, and experience. The system uses OpenAI for intelligent responses and n8n for workflow orchestration, creating a unique and engaging portfolio experience.`,
    youtubeId: 'https://youtu.be/1LDsPoDG1VE' ,
    liveUrl: 'https://ai-portfolio-website-five.vercel.app/',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'N8N', 'OpenAI'],
    features: [
      'AI-powered chat widget for portfolio exploration',
      'N8N workflow orchestration backend',
      'OpenAI-powered natural language understanding',
      'Fully responsive, modern dark-mode UI',
    ],
  },
  {
    id: 'aab-e-aswad-water-plant',
    title: 'Aab-e-Aswad – Order & Delivery Automation',
    category: 'Frontend + n8n Integration',
    thumbnail: waterPlantImage,
    shortDescription:
      'Water delivery platform with complete n8n order automation, Google Sheets management, and email notifications.',
    fullDescription: `A professional water delivery website built for Aab-e-Aswad Water Plant with complete n8n automation, Google Sheets order management, and automated email notifications.

The system instantly records orders, generates unique order IDs, sends confirmation emails, and ensures a streamlined delivery workflow — all powered by n8n. The frontend is built with Next.js and TypeScript, delivering a clean and user-friendly ordering experience for customers and efficient back-end management for the business.`,
    youtubeId: 'https://youtu.be/UuCDqc29xuU',
    liveUrl: 'https://abe-aswad-filter-plant-system.vercel.app/',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'n8n', 'Google Sheets API'],
    features: [
      'Automated order recording with unique ID generation',
      'Automated email confirmation via n8n',
      'Google Sheets real-time order management',
      'End-to-end delivery workflow automation',
    ],
  },
  {
    id: 'smart-url-shortener',
    title: 'Smart URL Shortener & Automation',
    category: 'Frontend + n8n Integration',
    thumbnail: tinyUrlImage,
    shortDescription:
      'n8n-powered URL shortener with webhook triggers and automated email notification on every URL creation.',
    fullDescription: `A smart n8n-powered automation project that shortens URLs, triggers webhooks, and delivers email notifications through a custom React UI.

Users enter a URL on the frontend, which triggers an n8n workflow that calls the TinyURL API, processes the result, and sends an automated email notification — all in seconds. A clean, real-world demonstration of deep frontend-to-automation integration without a traditional backend.`,
    youtubeId: 'https://youtu.be/ssy2gI2ktII',
    liveUrl: 'https://url-shorter-app-dun.vercel.app/',
    technologies: ['React.js', 'n8n', 'TinyURL API', 'TypeScript', 'Automation'],
    features: [
      'Instant URL shortening via TinyURL API',
      'n8n webhook-triggered automation pipeline',
      'Automated email notification on URL creation',
      'Clean and intuitive React.js frontend',
    ],
  },
  {
    id: 'architecture-housing-ai-chat',
    title: 'Architecture Housing AI Chat',
    category: 'Frontend + n8n Integration',
    thumbnail: housingAiImage,
    shortDescription:
      'AI-powered app merging architecture and housing design with intelligent conversational assistance.',
    fullDescription: `An AI-powered application merging architecture and housing design consultation with AI assistance. Users describe their design needs and receive intelligent suggestions and insights through a conversational interface.

Built with React.js and integrated with an AI chat backend, this project demonstrates how conversational AI can be applied to domain-specific use cases like architecture and interior design consultation — delivering real value through a focused user experience.`,
    youtubeId: "https://youtu.be/jIRKKKvWO3o",
    liveUrl: 'https://architecture-housing-ai-chat.vercel.app/',
    technologies: ['React.js', 'AI Chat Integration', 'Vercel', 'TypeScript'],
    features: [
      'Domain-specific AI chat for architecture & design',
      'Real-time intelligent design suggestions',
      'Natural conversational user interface',
      'Performance-optimized deployment on Vercel',
    ],
  },
  {
    id: 'smart-bill-checker',
    title: 'Smart Bill Checker – Electricity Automation',
    category: 'Frontend + n8n Integration',
    thumbnail: billReaderImage,
    shortDescription:
      'Smart automation app that analyzes electricity bills and delivers instant structured insights via n8n workflow.',
    fullDescription: `A smart automation app built with React.js and n8n that analyzes electricity bills and provides instant, structured insights. Users input their bill data through the React frontend, which triggers an n8n workflow for analysis and delivers the results directly back to the UI.

This project is a practical demonstration of n8n automation combined with a user-friendly React frontend — solving a real-world everyday problem with intelligent automation without any traditional backend infrastructure.`,
    youtubeId: 'https://youtu.be/7Y5U9N_06vU',
    liveUrl: 'https://auto-electric-bill-react-n8n.vercel.app/',
    technologies: ['React.js', 'N8N', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Automated electricity bill parsing and analysis',
      'n8n backend workflow orchestration',
      'Instant structured insights delivered to UI',
      'Fully responsive React.js frontend',
    ],
  },

  // ─── Full-Stack Web Applications ───────────────────────────────────────
  {
  id: 'spec-driven-ai-todo-evolution',
  title: 'From Console to AI-Agentic: Spec-Driven Todo App Evolution',
  category: 'Full-Stack Web Applications',
  thumbnail: prism_ai_todo, // ← Add your image import here
  shortDescription:
    'Three progressive iterations of the same product — from console app to full-stack Next.js to a fully conversational AI-agentic interface using spec-driven development.',
  fullDescription: `Shipped three iterations of the same product using progressively advanced development approaches, demonstrating the full evolution from traditional to AI-native software architecture.

v1.0 was a pure console memory app — focused on data structures and state management with no UI. v2.0 evolved into a full-stack web application with a Next.js frontend, REST APIs, database persistence, and authentication. v3.0 made the leap to a fully AI-agentic application where users don't click buttons or fill forms — they simply chat with an AI agent that adds, deletes, and updates tasks through natural conversation, understanding context and intent entirely.

What made the difference was Spec-Driven Development: writing clear specifications before a single line of code. This approach delivered faster iterations, better upfront architecture decisions, and a seamless transition from traditional to agentic workflows. The result proves that the shift from UI buttons to conversational AI isn't just a tech upgrade — it's a paradigm shift in how users interact with software.`,
  youtubeId: 'https://youtu.be/pLFOC9fzxbE',
  liveUrl: 'https://lnkd.in/gUp_KPQV',
  technologies: ['Next.js', 'TypeScript', 'AI Agents', 'OpenAI', 'REST API'],
  features: [
    'Three progressive versions: Console → Full-Stack → AI-Agentic',
    'Spec-driven development approach for clear upfront architecture',
    'Conversational AI agent for natural language task management',
    'Full-stack v2 with Next.js, REST APIs, and database persistence',
  ],
},
  
  {
    id: 'fresh-dairy-shop',
    title: 'FreshDairy – Online Dairy Shop',
    category: 'Full-Stack Web Applications',
    thumbnail: freshDairyImage,
    shortDescription:
      'Modern, responsive dairy eCommerce website for exploring and purchasing fresh dairy products online.',
    fullDescription: `Built a modern, responsive dairy eCommerce website using React.js and Next.js, enabling users to explore and purchase fresh milk and dairy products online.

The platform features a clean product catalog, smooth navigation, and a fully responsive layout. This project demonstrates proficiency in building full-stack eCommerce solutions with modern web technologies and a strong focus on user experience and performance.`,
    youtubeId: undefined,
    liveUrl: 'https://dairy-shop-website.vercel.app/',
    technologies: ['Next.js', 'React.js', 'CSS', 'Vercel'],
    features: [
      'Responsive product catalog with grid layout',
      'Clean and modern eCommerce UI',
      'Smooth product browsing experience',
      'Fully optimized across all devices',
    ],
  },

  {
    id: 'ai-startup-idea-generator',
    title: 'AI Startup Idea Generator',
    category: 'Full-Stack Web Applications',
    thumbnail: aiStartupImage,
    shortDescription:
      'AI-powered startup idea generator delivering brand names, pitch content, and creative ideas in real-time using Gemini API.',
    fullDescription: `Created an AI-powered startup idea generator that transforms user inputs into brand names, pitch content, and creative ideas in real-time. Built exactly based on the client's PDF requirements, leveraging the Gemini API, Next.js + TypeScript, and Supabase to deliver a responsive, scalable, and fully automated web application under hackathon deadlines.

This project was developed as a hackathon challenge and demonstrates how modern AI APIs can be seamlessly integrated with a clean frontend to deliver powerful creative tools. The system uses intelligent prompting to generate unique startup concepts, matching brand identities, and pitch-ready content — all within seconds.`,
    youtubeId: 'https://youtu.be/d1HCxkpvcH8', // ← Replace with your YouTube video ID, e.g. 'dQw4w9WgXcQ'
    liveUrl: 'https://lnkd.in/dzmH_78A',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Gemini API', 'Tailwind CSS'],
    features: [
      'Real-time AI idea generation via Gemini API',
      'Brand name and pitch content generator',
      'Scalable Supabase backend integration',
      'Built and shipped under hackathon deadlines',
    ],
  },


  {
    id: '14-august-celebration',
    title: '14 August Celebration Website',
    category: 'Full-Stack Web Applications',
    thumbnail: augustWebImage,
    shortDescription:
      'Vibrant Pakistan Independence Day website with animated patriotic design, launched live on August 14.',
    fullDescription: `Developed a vibrant Independence Day website capturing the patriotic essence of Pakistan with stunning animations and a green-white theme, launched on Pakistan's Independence Day.

The website features smooth CSS animations, a patriotic visual design, and engaging interactive elements celebrating the occasion. Built with React.js and Tailwind CSS, this project demonstrates creative and expressive frontend development — delivering a timely, purpose-built web experience.`,
    youtubeId: 'https://youtu.be/iAK5ZO1t0nk',
    liveUrl: 'https://14-august-indepandance-day-website-eta.vercel.app/',
    technologies: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React.js'],
    features: [
      'Patriotic green-white visual design',
      'Smooth CSS animations and transitions',
      'Fully responsive across all screen sizes',
      "Launched live on Pakistan's Independence Day",
    ],
  },

  // ─── Modern Full-Stack Development ──────────────────────────────────────
  {
    id: 'medicare-medical-website',
    title: 'MediCare Medical Website',
    category: 'Modern Full-Stack Development',
    thumbnail: medicareImage,
    shortDescription:
      'Fully responsive medical website with image slider and elegant multi-page UI using HTML, CSS & Bootstrap.',
    fullDescription: `A modern, fully responsive medical website designed with pure HTML, CSS, and Bootstrap, featuring an image slider, multi-page layout, and an elegant professional UI.

This project showcases strong fundamentals in frontend development, responsive design principles, and clean visual hierarchy — demonstrating that powerful UI experiences can be built with solid HTML and CSS foundations.`,
    liveUrl: 'https://medi-care-medical-website-ui.vercel.app/',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    features: [
      'Fully responsive multi-page layout',
      'Smooth image slider component',
      'Clean professional medical UI',
      'Cross-browser compatible design',
    ],
  },

{
  id: 'propertyhub-real-estate-website',
  title: 'PropertyHub – Modern Real Estate Website',
  category: 'Modern Full-Stack Development',
  thumbnail: property_hub, // ← Add your image import here
  shortDescription:
    'Modern, responsive real estate website built with Next.js featuring clean UI, SEO optimization, and scalable component-based architecture.',
  fullDescription: `Built PropertyHub, a modern and fully responsive real estate website developed using Next.js, designed to deliver a fast, clean, and user-friendly experience for exploring property listings and real estate opportunities.

The project focuses on performance, scalability, and modern UI/UX design — following best frontend development practices throughout. The component-based architecture ensures the codebase remains clean and easily extendable as the platform grows.

PropertyHub demonstrates how Next.js can power professional real estate platforms with high performance, strong SEO optimization, and a polished user interface that works seamlessly across all screen sizes and devices.`,
  youtubeId: 'https://youtu.be/_gDmjBkqxrw',
  liveUrl: 'https://lnkd.in/eC8cwuCB',
  technologies: ['Next.js', 'React.js', 'JavaScript', 'Tailwind CSS'],
  features: [
    'High-performance and SEO-optimized with Next.js',
    'Modern, clean, and professional real estate UI',
    'Fully responsive across all screen sizes',
    'Scalable component-based architecture',
  ],
},

  {
    id: 'simple-portfolio-website',
    title: 'Simple Portfolio Website',
    category: 'Modern Full-Stack Development',
    thumbnail: portfolioImage,
    shortDescription:
      'Clean, minimal portfolio website built with Next.js showcasing projects and skills with minimalist design.',
    fullDescription: `A clean and responsive portfolio website built using Next.js, showcasing projects, skills, and achievements with a minimalist design philosophy.

This project demonstrates strong web fundamentals with a focus on clean code, effective content presentation, and fast page loads using Next.js server-side rendering capabilities.`,
    liveUrl: 'https://muhammad-owais-portfolio.vercel.app',
    technologies: ['HTML', 'Tailwind CSS', 'Next.js'],
    features: [
      'Minimalist and professional design',
      'Responsive across all screen sizes',
      'Projects and skills showcase sections',
      'Fast load with Next.js optimizations',
    ],
  },

  // ─── Workflow Automations (n8n) ────────────────────────────────────────
  {
  id: 'smart-email-assistant-n8n',
  title: 'Smart Email Assistant – Fully Automated with n8n + OpenAI',
  category: 'Workflow Automations (n8n)',
  thumbnail: email_assistant, // ← Add your image import here
  shortDescription:
    'AI-powered email assistant built with n8n + GPT-4o-mini that auto-categorizes emails, creates tasks, tracks invoices, drafts replies, and delivers a daily Slack summary — 24/7 on autopilot.',
  fullDescription: `Built a fully autonomous Smart Email Assistant using n8n and OpenAI GPT-4o-mini that eliminates 2–3 hours of daily manual email management — running automatically every 15 minutes without any human intervention.

The workflow triggers instantly on every new Gmail message. GPT-4o-mini reads the subject and body, then categorizes and acts accordingly: SALES emails are auto-archived to clear inbox clutter; CLIENT emails get starred, trigger a Slack alert, and create a Todoist task; INVOICE emails are parsed for vendor, amount, and due date and logged directly to Google Sheets; MEETING emails check Google Calendar availability and draft a reply with open slots; QUESTION emails search the knowledge base and prepare an AI-drafted response for review.

Every weekday at 6 PM, a second workflow aggregates email stats, invoice data, and task activity — GPT-4o-mini generates a clean executive productivity report, sends it to Slack, and logs everything to Google Sheets for a complete audit trail. Two workflows, 48 nodes, 4 AI calls per email — running 24/7 with zero manual effort.`,
  youtubeId: 'https://youtu.be/U2le8M46xtw',
  liveUrl: undefined,
  technologies: ['n8n', 'OpenAI GPT-4o-mini', 'Gmail', 'Google Sheets', 'Google Calendar', 'Todoist', 'Slack'],
  features: [
    'AI-powered 5-category email classification and automated action per category',
    'Automatic invoice extraction with vendor, amount, and due date logging to Google Sheets',
    'Google Calendar-aware meeting reply drafting with available time slots',
    'Daily 6 PM executive productivity summary delivered to Slack',
  ],
},

  {
  id: 'business-order-automation-n8n',
  title: 'Business Order Automation with n8n',
  category: 'Workflow Automations (n8n)',
  thumbnail: order_processs1, // ← Add your image import here
  shortDescription:
    'End-to-end n8n automation that fetches ERP orders, stores data in Airtable with conditional routing, and sends weekly Discord reports.',
  fullDescription: `Built an end-to-end business automation using n8n that streamlined order management and reporting for a real-life business workflow.

The workflow runs on a schedule trigger, fetches order data from an internal ERP system via HTTP Request, cleans and maps order details, and stores them in Airtable. Conditional logic routes orders based on status — Processing orders go to one table, Booked orders to another. A Code Node then calculates total booked orders and total order value, and a weekly summary report is automatically delivered to Discord — keeping the entire team updated in real time.

This project demonstrates how n8n can connect multiple enterprise tools (ERP → Airtable → Discord) into one seamless, fully automated pipeline — eliminating manual tracking and improving team communication.`,
  youtubeId: 'https://youtu.be/GfmtaWufQC0 ',
  liveUrl: undefined,
  technologies: ['n8n', 'Airtable', 'Discord', 'HTTP Request', 'ERP Integration'],
  features: [
    'Scheduled trigger for fully automated execution',
    'ERP data fetch and field mapping via HTTP Request',
    'Airtable integration with conditional order routing',
    'Automated weekly summary report sent to Discord',
  ],
},

{
  id: 'smart-automation-ai-workflow',
  title: 'Smart Automation + AI Workflow with n8n + Airtable + LLM',
  category: 'Workflow Automations (n8n)',
  thumbnail: ai_automation1, // ← Add your image import here
  shortDescription:
    'n8n workflow integrating forms, Airtable, and Google Gemini LLM to automate data collection, AI rating, and personalized response generation.',
  fullDescription: `Designed a powerful n8n workflow that integrates form submissions, Airtable, and AI (Google Gemini) to fully automate data collection and generate personalized AI-driven responses.

The workflow captures form submissions (Name + Food Choice), stores data automatically in Airtable, and uses a Switch Node to assign ratings based on user choices. An AI Agent powered by Google Gemini then generates a creative personalized poem or message for each user — and saves everything neatly back into Airtable for record-keeping.

This workflow eliminates manual data entry, makes surveys engaging with AI-generated responses, and adds instant categorization and intelligence — all without writing a single line of backend code. Real-world use cases include automated survey collection, customer onboarding, lead generation, CRM enrichment, and interactive engagement flows.`,
  youtubeId: 'https://youtu.be/qASIE6NX3jM',
  liveUrl: undefined,
  technologies: ['n8n', 'Airtable', 'Google Gemini', 'LLM', 'AI Agents'],
  features: [
    'Form submission capture with automatic Airtable sync',
    'Switch Node for intelligent choice-based rating assignment',
    'AI Agent + Google Gemini for personalized poem/message generation',
    'Full end-to-end automation with zero manual data entry',
  ],
},

{
  id: 'ai-inventory-management-n8n',
  title: 'AI-Powered Inventory Management with n8n + Airtable',
  category: 'Workflow Automations (n8n)',
  thumbnail: inventory_system, // ← Add your image import here
  shortDescription:
    'Conversational AI chatbot workflow that lets teams manage Airtable inventory via natural chat — check stock, update prices, and add products instantly.',
  fullDescription: `Built a custom AI-powered n8n workflow that transforms manual Airtable inventory management into a fully automated, chat-based system.

Before this automation, shop owners had to manually search products one by one, enter data into Airtable fields, and carefully track record IDs just to update stock or prices — leading to lost productivity and frequent human errors.

With this solution, an AI Agent connects directly to Airtable, allowing the team to simply type natural instructions: "What's the stock of iPhone 14?" returns instant results, "Update stock of Wireless Earbuds to 8" updates the record automatically, and "Add cover" creates a new product entry — all through chat with zero manual effort.

The result: hours of manual updates reduced to seconds, error-free stock control, and a scalable system that even non-technical staff can operate effortlessly.`,
  youtubeId: 'https://youtu.be/6vaic-UNGrU',
  liveUrl: undefined,
  technologies: ['n8n', 'Airtable', 'AI Agents', 'OpenAI', 'Webhook'],
  features: [
    'Conversational AI chatbot for natural language inventory control',
    'Real-time stock lookup and instant Airtable record updates',
    'Automated new product creation via chat commands',
    'Error-free updates with AI-validated product IDs and status fields',
  ],
},

{
  id: 'ai-video-generation-pipeline',
  title: 'Fully Automated AI Video Generation Pipeline with n8n',
  category: 'Workflow Automations (n8n)',
  thumbnail:video_viral , // ← Add your image import here
  shortDescription:
    'End-to-end n8n pipeline that turns a single Telegram prompt into a fully rendered AI-generated video — with automated scripting, human approval, rendering, and Google Drive delivery.',
  fullDescription: `Built a fully automated, end-to-end AI video generation pipeline using n8n that handles the entire content creation lifecycle — from a simple text prompt to a final rendered MP4 — without any manual editing.

The entire process is triggered by a single message sent via Telegram, which acts as the command center. From there, the workflow automatically generates a creative script using an integrated LLM, then pauses for a human-in-the-loop approval step via Telegram to ensure content quality before proceeding. Once approved, the workflow triggers the AI text-to-video engine for automated rendering, uploads the final high-quality MP4 to Google Drive, and sends a delivery notification back to the user.

Throughout the pipeline, Google Sheets logs every prompt and tracks workflow status for full visibility and record-keeping. This project demonstrates deep expertise in API integration, workflow orchestration logic, and practical AI implementation across multiple connected services.`,
  youtubeId: 'https://youtu.be/ZJMFC_3_Oeg', // ← Add YouTube video ID if available
  liveUrl: undefined,
  technologies: ['n8n', 'Telegram Bot API', 'Google Sheets', 'Google Drive', 'LLM', 'Text-to-Video AI'],
  features: [
    'Telegram bot as command center — single prompt triggers full pipeline',
    'Automated AI script generation from user input via LLM',
    'Human-in-the-loop Telegram approval step before final rendering',
    'Automated MP4 upload to Google Drive with user delivery notification',
  ],
},

{
  id: 'ai-weather-assistant-n8n',
  title: 'AI-Powered Weather Assistant with n8n + Gemini + Gmail',
  category: 'Workflow Automations (n8n)',
  thumbnail: weather_assistant, // ← Add your image import here
  shortDescription:
    'Smart n8n weather assistant that uses Google Gemini AI to process natural language queries, fetch live weather, log history in Google Sheets, and deliver automated Gmail reports.',
  fullDescription: `Built a smart AI-powered Weather Assistant Workflow in n8n that combines Google Gemini, live Weather API, Google Sheets, and Gmail to deliver real-time weather updates automatically — with zero manual effort.

Users can ask weather questions in natural language for any city. Google Gemini AI extracts the accurate city name from the query, a live Weather API fetches real-time temperature and conditions, and the results are automatically logged into Google Sheets for history tracking and analytics. A professionally formatted daily weather report is then delivered straight to the user's inbox via Gmail.

This workflow eliminates manual weather checking, ensures AI-powered accuracy, and produces polished reports ready for business use. It's fully scalable and customizable for industries like logistics, agriculture, travel, and more.`,
  youtubeId: 'https://youtu.be/zd-WE3F7j0s',
  liveUrl: undefined,
  technologies: ['n8n', 'Google Gemini', 'Weather API', 'Google Sheets', 'Gmail API'],
  features: [
    'Natural language city query processing via Google Gemini AI',
    'Live real-time weather data fetching via Weather API',
    'Automatic Google Sheets logging for history and analytics',
    'Automated professional Gmail weather report delivery',
  ],
},


{
  id: 'automated-weekly-client-reporting',
  title: 'Automated Weekly Client Reporting System with n8n',
  category: 'Workflow Automations (n8n)',
  thumbnail: weekly_cleint_report, // ← Add your image import here
  shortDescription:
    'Fully automated n8n system that runs every Friday at 5 PM — collects tasks, calculates hours, generates personalized client reports, and sends everything automatically.',
  fullDescription: `Built a fully automated weekly client reporting system using n8n that eliminated 2+ hours of manual admin work every Friday — with zero human involvement once deployed.

Before automation, the process meant manually copying tasks, calculating hours, writing repetitive client emails, and sending updates one by one — busy work with no real creative value. Now, every Friday at 5 PM the system runs automatically: it collects the week's work details across all clients, organizes everything by client, calculates total hours worked, generates a personalized and professional report for each client, and sends them out automatically. A personal summary is also delivered showing total clients updated, total hours reported, and any work still in progress.

The result is consistent, professional client communication with no manual effort — and for a 5-person team, that translates to 480 hours saved per year. A practical demonstration of how automation removes repetitive work and frees up high-value time.`,
  youtubeId: 'https://youtu.be/DOJh2cp7cnk',
  liveUrl: undefined,
  technologies: ['n8n', 'Webhook', 'Email Automation', 'Scheduling', 'AI Agents'],
  features: [
    'Scheduled Friday 5 PM trigger for fully automated execution',
    'Automatic task collection, client grouping, and hour calculation',
    'Personalized professional report generation per client',
    'Personal summary report with total clients, hours, and WIP status',
  ],
},

{
  id: 'riddan-smart-waiter-ai-agent',
  title: 'Riddan SmartWaiter – AI-Powered Restaurant Automation',
  category: 'Workflow Automations (n8n)',
  thumbnail: smart_waiter, // ← Add your image import here
  shortDescription:
    'Fully autonomous AI Agent ecosystem built with n8n that automates conversational order-taking in English & Roman Urdu, real-time inventory validation, billing, and CRM integration.',
  fullDescription: `Built Riddan SmartWaiter, a sophisticated fully autonomous AI Agent ecosystem engineered with n8n to bridge the gap between high-end customer service and complex restaurant backend operations.

The system solves a critical hospitality problem: manual order entries, inventory discrepancies, and delayed customer responses that drain revenue every hour. The workflow automates intelligent conversational order-taking using natural language processing in both English and Roman Urdu, validates real-time inventory before confirming orders, handles automated billing with zero-error financial calculations, and flows data seamlessly into CRM and order management systems — all running 24/7 without any human intervention.

Every order automatically triggers an instant stock deduction, keeping the digital menu and kitchen perfectly in sync at all times. The result is a 40% reduction in operational overhead, 99% error reduction in data entry, and zero wait time for customers — delivering a fully automated restaurant employee that works around the clock.`,
  youtubeId: 'https://youtu.be/B1wvYQC4_Dk',
  liveUrl: undefined,
  technologies: ['n8n', 'AI Agents', 'LLM', 'CRM Integration', 'OpenAI'],
  features: [
    'Bilingual conversational order-taking in English and Roman Urdu',
    'Real-time inventory validation before order confirmation',
    'Automated zero-error billing and financial calculations',
    'Seamless CRM integration with instant stock deduction per order',
  ],
},
];
