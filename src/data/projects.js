// The capstone — rendered as a large featured card at the top of Projects.
export const featuredProject = {
  name: 'Event Booking System',
  tagline: 'Real-time, horizontally scalable seat booking',
  badge: 'Capstone',
  icon: '🎟️',
  accent: 'grass',
  repo: 'https://github.com/raman7976/Event-Booking-System',
  blurb:
    'A production-grade seat-booking platform for any seated inventory — concerts, buses, course enrolment. Thousands of users can browse and book at once, no two people can ever land the same seat, and every client sees live seat-status updates without a page refresh.',
  highlights: [
    'Zero double-booking, guaranteed by an atomic Redis Lua lock',
    'Live seat updates streamed to every client over WebSockets',
    'Seat holds auto-expire (8-min TTL) via background workers',
    'AI Smart-Seat Recommender (Gemini) with a heuristic fallback',
    'Two stateless Node instances load-balanced behind nginx',
    'PostgreSQL primary–replica with streaming replication',
    'Fully containerised — one “docker compose up” to run it all',
  ],
  // A compact block-diagram strip shown on the featured card
  flow: ['Browser', 'nginx LB', '2× Node', 'Redis', 'Postgres ×2'],
  tech: [
    'React',
    'Vite',
    'Node',
    'Express',
    'Socket.io',
    'Redis',
    'PostgreSQL',
    'BullMQ',
    'nginx',
    'Docker',
    'Gemini AI',
  ],
}

// The rest of the public work, newest-ish first.
export const projects = [
  {
    name: 'Expense Tracker',
    icon: '💰',
    accent: 'grass',
    repo: 'https://github.com/raman7976/expense_tracker',
    blurb:
      'A full-stack MERN expense tracker with user accounts, transaction CRUD, and a live dashboard for tracking income and spending. Express REST API, MongoDB models, and a React client.',
    tech: ['MongoDB', 'Express', 'React', 'Node'],
  },
  {
    name: 'Symptom–Disease Diagnosis',
    icon: '🩺',
    accent: 'redstone',
    repo: 'https://github.com/raman7976/Symptom-Disease-Diagnosis-ML',
    blurb:
      'A dynamic multi-class diagnosis model that starts from a few symptoms, asks intelligent follow-up questions, and predicts likely conditions with high confidence using Random Forest and feature-correlation analysis over a large dataset.',
    tech: ['Python', 'scikit-learn', 'Random Forest', 'Jupyter'],
  },
  {
    name: 'IPO Fintech Platform',
    icon: '📈',
    accent: 'gold',
    repo: 'https://github.com/raman7976/IPO_Fintech_Full_Stack_project',
    blurb:
      'A full-stack Django platform for tracking and analysing IPOs — a clean data pipeline feeds a serialised REST API, an admin dashboard, and dynamic public listings. A real-world take on capital-market tooling.',
    tech: ['Django', 'DRF', 'Python', 'HTML/CSS'],
  },
  {
    name: 'Agentic InsuranceBot',
    icon: '🛡️',
    accent: 'diamond',
    repo: 'https://github.com/raman7976/Agentic-InsuranceBot-usinging-strands-agent',
    blurb:
      'A multi-agent insurance assistant built on the Strands SDK. A user uploads a photo with a description and the agent verifies claim eligibility using RAG over policy documents — running locally on Ollama and portable to any LLM.',
    tech: ['Python', 'Strands SDK', 'Ollama', 'RAG'],
  },
  {
    name: 'AI Task Manager',
    icon: '🧠',
    accent: 'amethyst',
    repo: 'https://github.com/raman7976/Todo-app-with-strand-agent',
    blurb:
      'A smart to-do app where a local AI agent researches each task in real time and generates a step-by-step action plan. Built with Flask, Strands agents, Ollama (Llama 3.2) and live DuckDuckGo search — fully private, on-device.',
    tech: ['Python', 'Flask', 'Strands', 'Ollama'],
  },
  {
    name: 'Resume Parser & Analytics',
    icon: '📄',
    accent: 'diamond',
    repo: 'https://github.com/raman7976/Resume_parser_Analytics_project',
    blurb:
      'An NLP-powered resume analyser that extracts structured data (name, contacts, skills) from PDFs, scores a resume against a target job’s keywords, and flags keyword stuffing — turning raw resumes into recruiter-ready insights.',
    tech: ['Python', 'NLP', 'Flask', 'PDF'],
  },
  {
    name: 'Moving Object Detection',
    icon: '👁️',
    accent: 'gold',
    repo: 'https://github.com/raman7976/Moving-Object-Detection',
    blurb:
      'A real-time motion-detection tool that captures a reference frame and highlights any movement against it, with a tunable sensitivity threshold — a lightweight building block for surveillance and computer-vision pipelines.',
    tech: ['Python', 'OpenCV', 'Computer Vision'],
  },
]
