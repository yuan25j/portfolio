const about = {
  title: "Hi 👋 , I am John Yuan",
  description:
    "I'm a MS/BS Computer Science student at UNC Chapel Hill with a strong background in software engineering. I'm passionate about building innovative solutions and have experience with web development, cloud technologies, and data science.",
  github: "https://github.com/yuan25j",
  linkedin: "https://www.linkedin.com/in/johnyuan2026/",
  cv: "https://yuan25j.github.io/portfolio",
};

const projects = {
  title: "Projects",
  personalProjects: [
    {
      title: "LLM Fingerprinting & Digital Watermarking",
      short:
        "Research on identifying the unique signatures of different LLMs for digital content attribution.",
      description:
        "Researched methods for identifying the origin of AI-generated text by detecting unique 'fingerprints' left by different large language models.\nThis research has significant applications in digital watermarking, copyright protection, and content attribution. We achieved 97%+ accuracy in identifying which model generated a given text.",
      technologies: ["#NLP", "#Machine Learning", "#BERT", "#LLMs", "#Python", "#Data Analysis, #Research"],
      github: "https://github.com/yuan25j/IdiosyncrasiesInLLMs",
      demo: "https://drive.google.com/file/d/156Fwo-ZKqDqlGk6fFZYVAlACrRr3nh2i/view?usp=sharing",
    },
    {
      title: "UNC COMP Course Scheduler",
      short:
        "An integer linear programming system to generate optimal class schedules.",
      description:
        "Designed and implemented an integer linear programming system using Python to generate optimal class schedules based on professor availabilities, room capacities, and scheduling constraints.\nDeveloped a robust database system using SQLite3 and built a responsive frontend with React.js, HTML, and CSS.\nIntegrated secure login functionality and automated deployment with GitHub Actions, following a CI/CD development lifecycle.",
      technologies: ["#Python", "#SQLite3", "#React.js", "#HTML/CSS", "#GitHub Actions"],
      github: "https://github.com/yuan25j/portfolio",
      demo: "#",
    },
    {
      title: "Comparative Analysis of LLM Performance vs Traditional ML Techniques",
      short:
        "Analysis comparing Large Language Models with traditional ML techniques.",
      description:
        "Conducted an empirical comparison of Large Language Models (LLMs) and traditional methods such as Logistic Regression, Support Vector Machines (SVMs), and Random Forests for text classification tasks.\nEvaluated performance using F1 Score, Precision, and Recall; identified performance trade-offs and analyzed root causes of misclassification across models.",
      technologies: ["#Python", "#LLMs", "#Machine Learning", "#Data Analysis"],
      github: "https://github.com/yuan25j/IdiosyncrasiesInLLMs",
      demo: "#",
    },
    {
      title: "RAG Clickbait Generator",
      short:
        "A tool for generating engaging, informative headlines using Retrieval Augmented Generation.",
      description:
        "Developed a tool leveraging Retrieval Augmented Generation (RAG) to create headlines that are both informative and engaging.\nBalanced the need for accuracy with captivating language to improve content engagement metrics.",
      technologies: [
        "#Python",
        "#Natural Language Processing",
        "#RAG"
      ],
      github: "https://github.com/yuan25j/RAGClickbaitGenerator",
      demo: "#",
    },
  ],
};

const experience = {
  title: "Experience",
  experiences: [
    {
      title: "Software Engineering Intern",
      company: "Truist Financial",
      duration: "Jun 2024 - Aug 2024",
      description:
        "Enhanced the online banking virtual assistant by consolidating shared code across AWS Lambda functions written in Node.js, validating end-to-end functionality, and reducing build times—saving over 200 developer hours monthly.\nAutomated the purging of 30,000 daily outdated records in DynamoDB via CloudFormation, improving data hygiene and operational efficiency across multiple deployments.",
    },
    {
      title: "Teaching Assistant",
      company: "UNC Computer Science Department",
      duration: "Aug 2023 - Dec 2024",
      description:
        "Facilitated learning for over 300 students in Computer Organization and Digital Logic by conducting office hours, devising assessment questions, and evaluating lab assignments using MIPS assembly, System Verilog, and C.",
    },
    {
      title: "Residential Computing Consultant Manager",
      company: "Carolina Housing",
      duration: "Nov 2022 - Present",
      description:
        "Lead and mentor 25 employees in the maintenance of university housing technology.\nOversee operational logistics, including scheduling, hiring, maintenance of equipment, and new policy creation for the Carolina Gaming Arena.\nDirect and train teammates to ensure adherence to the Service Level Agreement.",
    },
    {
      title: "Software Engineering Intern",
      company: "Truist Financial",
      duration: "Jun 2023 - Aug 2023",
      description:
        "Engineered AWS Lambda functions in Node.js to transform internal REST API account data and integrate with external vendor systems, enabling detection of recurring subscriptions through transactional pattern analysis.\nDeployed and automated extraction of key details from external vendor API response for client facing account insights.",
    },
  ],
};

const skills = {
  title: "Skills",
  mySkills: [
    {
      title: "Languages",
      skills: [
        "#Python",
        "#Java",
        "#JavaScript",
        "#TypeScript",
        "#SQL",
        "#C",
        "#System Verilog",
        "#MIPS"
      ],
    },
    {
      title: "Frameworks & Technologies",
      skills: ["#React.js", "#Node.js", "#Angular", "#HTML/CSS"],
    },
    {
      title: "Tools & Platforms",
      skills: ["#Git", "#AWS", "#Docker", "#Linux", "#CI/CD"],
    },
  ],
};

export { about, projects, experience, skills };
