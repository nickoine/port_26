export type SimpleProject = {
  name: string;
  imageKey: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
};

export const PROJECTS: SimpleProject[] = [
  {
    name: "Channel about IT/AI 🇩🇪",
    imageKey: "wa",
    description: "Ein Messenger-Raum, in dem ich Gedanken, Experimente und praktische Einblicke zu KI, Softwareentwicklung und Automatisierung teile.",
    gradient: ["#00a3ff", "#1446fe"],
    url: "https://whatsapp.com/channel/0029Vb6NbfNKGGGPgC48ma2B",
    tech: ["ai", "ai1", "llm", "agents", "openai"],
  },
 {
    name: "Channel about IT/AI 🇺🇦",
    imageKey: "tg",
    description: "Простір месенджер, де я ділюсь думками, експериментами та практичними інсайтами про AI, розробку та автоматизацію.",
    gradient: ["#7b4f22", "#060606"],
    url: "https://t.me/toketoai",
    tech: ["ai", "ai1","llm", "agents", "openai"],
  },
  {
    name: "Multi-Agent Orchestration Platform",
    imageKey: "ai",
    description: "Multi-agent orchestration platform for software analysis and other configurable agent driven workflows 🏗🦾🤖",
    gradient: ["#f9be62", "#9f433e"],
    url: "https://github.com/nickoine/analyst_v1",
    tech: ["python", "linux", "openai", "docker", "ollama", "mcp", "openrouter"],
  },
  {
    name: "Loans Investments SaaS",
    imageKey: "credit",
    description: "The end-to-end management solution that consolidating all lendings functions into a single system. It enables financial companies to provide a digital experience for their customers and empowers financial institutions to offer credit products across various segments, including Retail and Commercial ⚖️💳📊",
    gradient: ["#0a0604", "#34260d"],
    url: "https://www.heightsfinance.com/",
    tech: ["python", "django", "docker", "postgresql", "redis", "swagger"],
  },
  {
    name: "FineLabs Web3 Consulting",
    imageKey: "nodes",
    description: "A network scaling initiative designed to support Web3 projects growth and simplify node deployment for contributors. Simply select a Web3 project, choose a plan, and start contributing 🔮💰",
    gradient: ["#01e08b", "#1e1e21"],
    url: "https://finesselabs.xyz/#",
    tech: ["python", "linux", "docker", "ansible", "prometheus", "grafana",],
  },
  {
    name: "Sotor Investigation Tools",
    imageKey: "osint",
    description: "Tools like crawler, scrapper, spammer, were developed as a components of a larger OSINT-based project 🔍🥸",
    gradient: ["#f9be62", "#9f433e"],
    url: "https://defensetechforukraine.org/",
    tech: ["python", "linux", "asyncio", "mongodb", "osi"],
  },
  {
    name: "Android Device Management",
    imageKey: "knox",
    description: "Android remote device availability management solutions supporting Samsung, Xiaomi, and Google Pixel device environments 📲🔐",
    gradient: ["#6142ff", "#8c3a61"],
    url: "https://www.globallogic.com/technology-capabilities/smart-and-portable-devices/",
    tech: ["python", "linux", "pytest","kotlin", "appium", "git"],
  },
  {
    name: "CrowdRobot E-commerce Chatbots",
    imageKey: "cr",
    description: "Rule-based e-commerce chatbot services for Telegram and WhatsApp, with inline UI buttons, templates, product browsing, cart flows, and in-messenger checkout 🤖🛍️",
    gradient: ["#7b4f22", "#060606"],
    url: "https://www.signalhire.com/companies/crowdrobot",
    tech: ["python", "pytest", "test-design", "postman"],
  }
];
