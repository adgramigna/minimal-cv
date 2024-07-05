// import {
//   AmbitLogo,
//   BarepapersLogo,
//   BimLogo,
//   CDGOLogo,
//   ClevertechLogo,
//   ConsultlyLogo,
//   EvercastLogo,
//   Howdy,
//   JarockiMeLogo,
//   JojoMobileLogo,
//   Minimal,
//   MobileVikingsLogo,
//   MonitoLogo,
//   NSNLogo,
//   ParabolLogo,
//   TastyCloudLogo,
//   YearProgressLogo,
// } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Andrew Gramigna",
  initials: "AG",
  location: "Boston, MA",
  locationLink: "https://www.google.com/maps/place/Boston",
  about:
    "Detail-oriented Data Generalist with a passion for Analytics Engineering",
  summary:
    "I enjoy creating and maintaining business-critical data pipelines. My professional interests lie at the intersection of the sports industry, data, and startups. I am currently a consultant at Brooklyn Data Company, helping companies make sense of their data.",
    // I excel in leading teams and creating environments where individuals perform at their best.
    // Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience working remotely with companies worldwide.",
  avatarUrl: "https://avatars.githubusercontent.com/u/24813853?v=4",
  personalWebsiteUrl: "https://github.com/adgramigna",
  contact: {
    // email: "Not sharing online",
    // tel: "Not Sharing online",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/adgramigna",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/andrew-gramigna/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "University of Massachusetts, Amherst",
      degree: "M.S. in Computer Science",
      start: "2016",
      end: "2018",
    },
    {
      school: "University of Massachusetts, Amherst",
      degree: "Dual Degree: B.S. in Mathematics, B.A. in Computer Science",
      start: "2012",
      end: "2016",
    },
  ],
  work: [
    {
      company: "Brooklyn Data Company",
      link: "https://brooklyndata.co",
      badges: ["Remote"],
      title: "Senior Analytics Engineer",
      // logo: ConsultlyLogo,
      start: "Nov 2023",
      end: null,
      description:
        "Technical lead for major data migrations for clients in healthcare and e-commerce industries. Adept at building trust with client stakeholders and distilling requirements based on their requests. Technologies: dbt, Snowflake, BigQuery",
    },
    {
      company: "Rhino",
      link: "https://www.sayrhino.com",
      badges: ["Remote"],
      title: "Analytics Manager",
      // logo: ParabolLogo,
      start: "Mar 2021",
      end: "Nov 2023",
      description:
        "Revamped our risk-based pricing model, decoupling code into a Python microservice. Migrated our dbt pipeline from Airflow to Github Actions, saving roughly ~$40k/year. Technologies: BigQuery, dbt, Python, Airflow, GitHub Actions",
    },
    {
      company: "Commonbond",
      link: "https://www.businessinsider.com/student-loan-startup-commonbond-shutting-down-after-payments-pause-2022-9",
      badges: ["New York City"],
      title: "Analytics Manager",
      // logo: ClevertechLogo,
      start: "Nov 2018",
      end: "Mar 2021",
      description:
        "Lead development and analysis of risk-based pricing methodologies. Used Python to automate manual processes for Finance and Operations teams. Technologies: Python, Jupyter, Looker, Retool, Redshift",
    },
  ],
  skills: [
    "SQL",
    "Python",
    "dbt",
    "AWS",
    "Airflow",
    "Web Scraping",
    "Snowflake",
    "BigQuery",
    "DuckDB",
    "Github Actions",
    "pandas",
    "Polars",
    "scikit-learn",
    "Tableau",
    "Looker",
    "Retool"

  ],
  projects: [
    {
      title: "Levergreen",
      techStack: [
        "Scrapy",
        "Neon Postgres",
        "dbt",
        "Github Actions",
        "Hightouch",
        "Airtable",
        "Softr"
      ],
      description:
        "(Sold to https://joinprospect.com). Scrapes open roles from popular job boards Greenhouse, Lever, Ashby, and Rippling",
      // logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://levergreen.dev/",
      },
    },
    {
      title: "Chessray",
      techStack: [
        "Python",
        "msgspec",
        "dbt",
        "DuckDB",
        "Evidence",
      ],
      description:
        "A Data-driven deep dive into major Chess tournaments",
      link: {
        label: "evidence.app",
        href: "https://chessray.evidence.app/2024%20FIDE%20Candidates%20Tournament/overview",
      },
    },
  ],
} as const;
