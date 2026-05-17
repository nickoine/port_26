export enum SkillNames {
  PYTHON = "python",
  FLASK = "flask",
  DJANGO = "django",
  FASTAPI = "fastapi",
  DRF = "django-rest-framework",
  ASYNCIO = "asyncio",

  OPENAI = "openai",
  OPENROUTER = "openrouter",
  OLLAMA = "ollama",
  MCP = "mcp",
  HUGGINGFACE = "huggingface",

  DOCKER = "docker",
  LINUX = "linux",
  NGINX = "nginx",
  ANSIBLE = "ansible",
  JENKINS = "jenkins",
  GRAFANA = "grafana",

  POSTGRESQL = "postgresql",
  MONGODB = "mongodb",
  REDIS = "redis",

  PYTEST = "pytest",
  SELENIUM = "selenium",
  POSTMAN = "postman",
  SWAGGER = "swagger",

  GITHUB = "github",
  BASH = "bash",

  KOTLIN = "kotlin",
  APPIUM = "appium",
  OSI = "osi"
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "Backend development, automation, scripting, and AI system integration.",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },

  [SkillNames.FLASK]: {
    id: 2,
    name: "flask",
    label: "Flask",
    shortDescription: "Lightweight backend services, internal tools, prototypes, and APIs.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },

  [SkillNames.DJANGO]: {
    id: 3,
    name: "django",
    label: "Django",
    shortDescription: "Structured backend applications, admin systems, and production web services.",
    color: "#092e20",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },

  [SkillNames.FASTAPI]: {
    id: 4,
    name: "fastapi",
    label: "FastAPI",
    shortDescription: "Modern API development with typed contracts, validation, and service architecture.",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },

  [SkillNames.DRF]: {
    id: 5,
    name: "django-rest-framework",
    label: "Django REST Framework",
    shortDescription: "REST API development on top of Django with serializers, views, and permissions.",
    color: "#a30000",
    icon: "https://cdn.simpleicons.org/django/092E20",
  },

  [SkillNames.GRAFANA]: {
    id: 6,
    name: "grafana",
    label: "Grafana",
    shortDescription: "Monitoring dashboards and metrics visualization, because guessing production health is not a strategy.",
    color: "#f46800",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
  },

  [SkillNames.OPENAI]: {
    id: 7,
    name: "openai",
    label: "OpenAI SDK",
    shortDescription: "LLM integration, structured outputs, tool calling, and AI workflow automation.",
    color: "#ffffff",
    icon: "https://cdn.simpleicons.org/openai/ffffff",
  },

  [SkillNames.OPENROUTER]: {
    id: 8,
    name: "openrouter",
    label: "OpenRouter",
    shortDescription: "Model routing across different LLM providers through a unified API layer.",
    color: "#ffffff",
    icon: "https://cdn.simpleicons.org/openrouter/ffffff",
  },

  [SkillNames.OLLAMA]: {
    id: 9,
    name: "ollama",
    label: "Ollama",
    shortDescription: "Local and remote open-source model runtime for practical LLM experiments.",
    color: "#ffffff",
    icon: "https://cdn.simpleicons.org/ollama/ffffff",
  },

  [SkillNames.HUGGINGFACE]: {
    id: 10,
    name: "huggingface",
    label: "Hugging Face",
    shortDescription: "Open model ecosystem for LLMs, datasets, benchmarks, and AI tooling.",
    color: "#ffcc4d",
    icon: "https://cdn.simpleicons.org/huggingface/FFD21E",
  },

  [SkillNames.DOCKER]: {
    id: 11,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerized development environments, service packaging, and deployment workflows.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },

  [SkillNames.LINUX]: {
    id: 12,
    name: "linux",
    label: "Linux",
    shortDescription: "Server-side development, system operations, shell workflows, and debugging.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },

  [SkillNames.NGINX]: {
    id: 13,
    name: "nginx",
    label: "Nginx",
    shortDescription: "Reverse proxy configuration, routing, static serving, and backend exposure.",
    color: "#009639",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },

  [SkillNames.ANSIBLE]: {
    id: 14,
    name: "ansible",
    label: "Ansible",
    shortDescription: "Infrastructure automation, repeatable server setup, and configuration management.",
    color: "#ee0000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
  },

  [SkillNames.JENKINS]: {
    id: 15,
    name: "jenkins",
    label: "Jenkins",
    shortDescription: "CI/CD pipelines, automated builds, test execution, and delivery workflows.",
    color: "#d24939",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  },

  [SkillNames.POSTGRESQL]: {
    id: 16,
    name: "postgresql",
    label: "PostgreSQL",
    shortDescription: "Relational database design, SQL, persistence layers, and backend data modeling.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },

  [SkillNames.MONGODB]: {
    id: 17,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "Document database usage for flexible data models and application storage.",
    color: "#47a248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },

  [SkillNames.REDIS]: {
    id: 18,
    name: "redis",
    label: "Redis",
    shortDescription: "Caching, queues, temporary state, and fast in-memory data access.",
    color: "#dc382d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },

  [SkillNames.PYTEST]: {
    id: 19,
    name: "pytest",
    label: "Pytest",
    shortDescription: "Python testing, fixtures, test suites, and automated quality checks.",
    color: "#0a9edc",
    icon: "https://cdn.simpleicons.org/pytest/0A9EDC",
  },

  [SkillNames.SELENIUM]: {
    id: 20,
    name: "selenium",
    label: "Selenium",
    shortDescription: "Browser automation, UI testing, regression checks, and test workflows.",
    color: "#43b02a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
  },

  [SkillNames.POSTMAN]: {
    id: 21,
    name: "postman",
    label: "Postman",
    shortDescription: "API testing, request collections, debugging, and backend contract validation.",
    color: "#ff6c37",
    icon: "https://cdn.simpleicons.org/postman/FF6C37",
  },

  [SkillNames.SWAGGER]: {
    id: 22,
    name: "swagger",
    label: "Swagger",
    shortDescription: "API documentation, OpenAPI contracts, and service interface specification.",
    color: "#85ea2d",
    icon: "https://cdn.simpleicons.org/swagger/85EA2D",
  },

  [SkillNames.GITHUB]: {
    id: 23,
    name: "github",
    label: "GitHub",
    shortDescription: "Repository management, pull requests, code collaboration, and project delivery.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },

  [SkillNames.BASH]: {
    id: 24,
    name: "bash",
    label: "Bash",
    shortDescription: "Shell scripting, automation, system workflows, and Linux command-line operations.",
    color: "#4eaa25",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
  },

  [SkillNames.MCP]: {
    id: 25,
    name: "mcp",
    label: "Model Context Protocol",
    shortDescription: "Connected AI systems to tools and external context so agents could stop pretending they know everything.",
    color: "#ffffff",
    icon: "https://cdn.simpleicons.org/openai/ffffff",
  },

  [SkillNames.KOTLIN]: {
    id: 26,
    name: "kotlin",
    label: "Kotlin",
    shortDescription: "Android-side development and automation support when Python alone could not bully the device enough.",
    color: "#7f52ff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  },

  [SkillNames.APPIUM]: {
    id: 27,
    name: "appium",
    label: "Appium",
    shortDescription: "Mobile E2E automation against Android devices, because tapping screens manually is not a career plan.",
    color: "#662d91",
    icon: "https://cdn.simpleicons.org/appium/662D91",
  },

  [SkillNames.ASYNCIO]: {
    id: 28,
    name: "asyncio",
    label: "asyncio",
    shortDescription: "Asynchronous Python workflows for I/O-heavy logic, because waiting politely is not always architecture.",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },

  [SkillNames.OSI]: {
  id: 29,
  name: "osi",
  label: "OSI Model",
  shortDescription: "Network layer abstraction for understanding why packets disappear exactly when confidence appears.",
  color: "#4eaa25",
  icon: "https://cdn.simpleicons.org/cisco/1BA0D7",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "01/2026",
    endDate: "06/2026",
    title: "Backend Developer. AI Automation.",
    company: "TR client, Freelance, IT Consulting",
    description: [
      "Leveled up in LLM/AI area. Prompt, context, agent engineering 🤖",
      "Designed cloud-to-local model routing pipelines and kept token chaos under control 🚦",
      "Also acted as a project manager when coordination needed fewer meetings and more signal 📞"
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.LINUX,
      SkillNames.OPENAI,
      SkillNames.DOCKER,
      SkillNames.OLLAMA,
      SkillNames.MCP,
      SkillNames.OPENROUTER,
    ],
  },
  {
    id: 2,
    startDate: "01/2024",
    endDate: "01/2025",
    title: "Web Backend Developer",
    company: "SeeWay, Product, Fintech",
    description: [
      "Refactored and maintained existing Django services, keeping backend logic maintainable.",
      "Built new product features, REST APIs, validation flows, and cross-device ID verification.",
      "Optimized database queries, fixed bugs, documented APIs, and worked closely with QA to ship features with fewer surprises in production.",
      "Mentored devs, tuned workflows, and watched team productivity glow up without extra coffee.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.DJANGO,
      SkillNames.DOCKER,
      SkillNames.POSTGRESQL,
      SkillNames.REDIS,
      SkillNames.DRF,
      SkillNames.SWAGGER
    ],
  },
  {
    id: 3,
    startDate: "06/2023",
    endDate: "01/2024",
    title: "DevOps, Automation",
    company: "FineLabs, Product, Web3 Consulting",
    description: [
      "Configured VPS infrastructure and optimized hosting costs without letting the server bill grow.",
      "Installed and maintained LXC/Docker containers for user node hosting by keeping environments isolated, automated, repeatable.",
      "Built automation flows for node installs, updates, monitoring, and metrics visualization so infrastructure behaved more like a system."
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.LINUX,
      SkillNames.DOCKER,
      SkillNames.ANSIBLE,
      SkillNames.GRAFANA,
      SkillNames.BASH
    ],
  },
  {
    id: 4,
    startDate: "12/2022",
    endDate: "06/2023",
    title: "AQA, Automation",
    company: "Sotor, Product, Deftech",
    description: [
      "Data serialization, validation and processing.",
      "Supported internal engineering workflows, made repetitive checks concurrently faster and more reliable."
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.LINUX,
      SkillNames.ASYNCIO,
      SkillNames.SELENIUM,
      SkillNames.OSI,
      SkillNames.MONGODB
    ],
  },
  {
    id: 5,
    startDate: "01/2022",
    endDate: "10/2022",
    title: "AQA, Automation",
    company: "GlobalLogic, Hitachi Group, Android Devices Management",
    description: [
      "Maintained plugins, E2E autotests for different Android smartphones and apps.",
      "Designed and automated test cases for internal web framework.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.LINUX,
      SkillNames.PYTEST,
      SkillNames.KOTLIN,
      SkillNames.APPIUM,
      SkillNames.GITHUB,
    ],
  },
  {
    id: 6,
    startDate: "01/2021",
    endDate: "12/2021",
    title: "Python Developer",
    company: "UA client, Freelance, E-commerce",
    description: [
      "Backend design and implementation for a Flask-based web app.",
      "Server-side functionality, user auth support, and integration with externals.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.FLASK,
      SkillNames.LINUX,
      SkillNames.MONGODB,
      SkillNames.POSTGRESQL,
      SkillNames.NGINX
    ],
  },
  {
    id: 7,
    startDate: "09/2019",
    endDate: "09/2020",
    title: "QA / AQA",
    company: "CrowdRobot, Start-Up, E-commerce Chatbots",
    description: [
      "Owned the full TDLC process for e-commerce chatbot products, from requirement analysis to test execution and reporting.",
      "Cooperated with the team to improve product quality and catch bugs.",
      "Worked on user requirements within team budget and deadlines."
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.POSTMAN,
      SkillNames.PYTEST,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
