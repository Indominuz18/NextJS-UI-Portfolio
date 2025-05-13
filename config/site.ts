export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Manmeet S.",
  description: "Welcome to Manmeet Singh's amazing personal portfolio!",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Experience",
      href: "/timeline",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Tech Stack",
      href: "/techstack",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Experience",
      href: "/timeline",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Tech Stack",
      href: "/techstack",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/Indominuz18",
    linkedin: "https://www.linkedin.com/in/manmeet-singh-27bb1a204/",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
  techstack: [
    {
      Name: "React.svg",
      Title: "React",
    },
    {
      Name: "Redux.png",
      Title: "Redux",
    },
    {
      Name: "Node.svg",
      Title: "Node.JS",
    },
    {
      Name: "Nextjs.svg",
      Title: "Next.JS",
    },
    {
      Name: "Express.svg",
      Title: "Express.JS",
    },
    {
      Name: "HTML.svg",
      Title: "HTML",
    },
    {
      Name: "CSS.svg",
      Title: "CSS",
    },
    {
      Name: "TailwindCSS.svg",
      Title: "TailwindCSS",
    },
    {
      Name: "Javascript.svg",
      Title: "JavaScript",
    },
    {
      Name: "Typescript.svg",
      Title: "TypeScript",
    },
    {
      Name: "Python.svg",
      Title: "Python",
    },
    {
      Name: "C.svg",
      Title: "C",
    },
    {
      Name: "C++.svg",
      Title: "C++ ",
    },
    {
      Name: "Swift.svg",
      Title: "Swift",
    },
    {
      Name: "SwiftUI.svg",
      Title: "SwiftUI",
    },
    {
      Name: "Linux.png",
      Title: "Linux",
    },
    {
      Name: "Terminal.png",
      Title: "Terminal",
    },
    {
      Name: "Github.svg",
      Title: "Github",
    },
  ],
  projects: [
    {
      image: "portfolio.png",
      description:
        "This Personal Portfolio Application showcases my work and skills using Next.js, React, Redux, CSS, and HTML. It features a responsive design, interactive UI, project showcases, and SEO optimization. Built for performance and user engagement, it highlights my expertise in modern web development technologies and best practices.        ",
      link: "https://github.com/Indominuz18/NextJS-UI-Portfolio",
      alt: "Personal Portfolio",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "NextUI"]
    },
    {
      image: "Sentiment-Analysis-For-Restaurant-Reviews.png",
      description:
        "Conducted sentiment analysis on 1000 restaurant reviews using Python, Numpy, Matplotlib, NLTK, Scikit-Learn, and Pandas. Applied NLP techniques such as lemmatization, stemming, and tokenization. Trained a Naive-Bayes classifier achieving 75% accuracy, improved by 8% through GridSearchCV. Visualized sentiment categories and model metrics with bar graphs and scatterplots.        ",
      link: "https://github.com/Indominuz18/Sentiment-Analysis-For-Restaurant-Reviews",
      alt: "Sentiment-Analysis-For-Restaurant-Reviews",
      technologies: ["Python", "NLTK", "Scikit-Learn", "Pandas", "Matplotlib", "NLP"]
    },
    {
      image: "HMM-AI-Model.png",
      description:
        "Conduct unsupervised intrusion detection using time series analysis on control system data. Perform PCA for feature selection, train and test multivariate Hidden Markov Models with varying states, and detect anomalies in datasets. Evaluate models using log-likelihood and BIC, and analyze results to identify anomalies.        ",
      link: "https://github.com/Indominuz18/HMM-AI-Model",
      alt: "HMM-AI-Model",
      technologies: ["AI", "Machine Learning", "Time Series Analysis", "PCA", "HMM"]
    },
    {
      image: "flashchat.png",
      description:
        "Developed FlashChat, a real-time chat application using Swift, Xcode, Firebase Auth, Firestore, and SwiftUI. Implemented real-time event listeners for Firestore schemas, handling hundreds of messages with sub 1-second latency. Applied MVC design patterns for clear separation of concerns. Leveraged SwiftUI to optimize interface development speed by 30%, enhancing user experience.        ",
      link: "https://github.com/Indominuz18/Flash-Chat-iOS13",
      alt: "Flash Chat",
      technologies: ["Swift", "SwiftUI", "Firebase", "Firestore", "MVC"]
    },
    {
      image: "tsp_solver.png",
      description:
        "Developed a Travelling Salesman Problem (TSP) solver using C++. The project features modular code, separating functionality into helper and core files for better organization and maintainability. Implemented a greedy approach to find a solution, ensuring efficiency in solving the problem.        ",
      link: "https://github.com/Indominuz18/TSP-solver",
      alt: "TSP Solver C++",
      technologies: ["C++", "Algorithms", "Data Structures", "Greedy Approach"]
    },
  ],
};
