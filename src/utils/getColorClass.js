const getColorClass = (tech) => {
  switch (tech) {
    case "#JavaScript":
      return "javascript";
    case "#TypeScript":
      return "typescript";
    case "#HTML":
      return "html";
    case "#CSS":
      return "css";
    case "#Git":
      return "git";
    case "#Node.js":
      return "nodejs";
    case "#Express.js":
      return "expressjs";
    case "#MongoDB":
      return "mongodb";
    case "#PostgreSQL":
      return "postgresql";
    case "#Next.js":
      return "nextjs";
    case "#Firebase":
      return "firebase";
    case "#Jest":
      return "jest";
    case "#CI/CD":
      return "cicd";
    case "#AdobeXD":
      return "adobe-xd";
    case "#React.js":
      return "reactjs";
    case "#JWT":
      return "jwt";
    case "#Strapi":
      return "strapi";
    case "#MUI":
      return "mui";
    case "#NLP":
      return "nlp";
    case "#Machine Learning":
      return "machine-learning";
    case "#BERT":
      return "bert";
    case "#LLMs":
      return "llms";
    case "#Python":
      return "python";
    case "#Data Analysis":
      return "data-analysis";
    case "#SQLite3":
      return "sqlite";
    case "#GitHub Actions":
      return "github-actions";
    case "#Natural Language Processing":
      return "nlp";
    case "#RAG":
      return "rag";
    default:
      return "";
  }
};

export default getColorClass;
