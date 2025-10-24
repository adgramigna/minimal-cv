import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Andrew Gramigna",
  initials: "AG",
  location: "Boston, MA",
  locationLink: "https://www.google.com/maps/place/Boston",
  about: "Detail-oriented Data Generalist with a passion for Analytics Engineering",
  summary: (
    <>
        I enjoy creating and maintaining business-critical data pipelines. 
        My professional interests lie at the intersection of the sports industry, data, and startups. 
        I am currently a consultant at Brooklyn Data Company, helping companies make sense of their data.
        dbt Certified Developer and Instructor.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/24813853?v=4",
  personalWebsiteUrl: "https://levergreen.dev/all",
  contact: {
    email: "adgramigna1@gmail.com",
    tel: "+1 (508)785-5283",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/adgramigna",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/andrew-gramigna/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Graduate, University of Massachusetts Amherst",
      degree: "M.S. in Computer Science. 3.6",
      start: "2016",
      end: "2018",
    },
    {
      school: "Undergraduate, University of Massachusetts Amherst",
      degree: "Dual Degree: B.S in Mathematics, B.A. in Computer Science. 3.6",
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
      start: "Nov 2023",
      end: null,
      description: (
        <>
          <ul className="list-inside list-disc">
            <li className="pl-4">
              Technical lead on major data migrations for clients in healthcare and e-commerce industries. 
            </li>
            <li className="pl-4">
              Maintain key metrics for a large healthcare client by leveraging the dbt Semantic layer.
            </li>
            <li className="pl-4">
              Adept at building trust with client stakeholders and distilling requirements based on their requests.
            </li>
            <li className="pl-4">
              Given the title internally of dbt Platform Lead, in charge of defining our dbt strategy and best practices.
            </li>
            <li className="pl-4">
              Technologies: dbt, BigQuery, Snowflake, dbt Semantic Layer
            </li>
          </ul>

         
          
        </>
      ),
    },
    {
      company: "Rhino",
      link: "https://sayrhino.com",
      badges: ["Remote"],
      title: "Analytics Lead",
      start: "Mar 2021",
      end: "Nov 2023",
      description: (
        <>
          Revamped our risk-based pricing model, decoupling code into a Python microservice. 
          Migrated our dbt-core pipeline from Google Cloud Composer to Github Actions, saving ~$40k/year.
          Technologies: dbt, Python, Airflow, Github Actions, Stripe.
        </>
      ),
    },
    {
      company: "Commonbond",
      link: "https://www.businessinsider.com/student-loan-startup-commonbond-shutting-down-after-payments-pause-2022-9",
      badges: ["New York City"],
      title: "Analytics Manager",
      start: "Nov 2018",
      end: "Mar 2021",
      description: (
        <>
          Lead development and analysis of risk-based pricing methodologies. 
          Leveraged Python to automate manual processes for Finance and Operations teams.
          Technologies: Python, Jupyter, Looker, Retool, Redshift
        </>
      ),
    },
  ],
  skills: [
    "SQL",
    "dbt",
    "Python",
    "GCP",
    "BigQuery",
    "Snowflake",
    "Web Scraping",
    "Fivetran",
    "Elementary",
    "DuckDB",
    "Airflow",
    "Github Actions",
    "pandas",
    "Polars",
    "AWS",
    "scikit-learn",
    "Tableau",
    "Looker",
    "Retool"
  ],
  projects: [
    {
      title: "Levergreen",
      techStack: ["Scrapy", "Postgres", "dbt", "Elementary", "Hightouch"],
      description: (
        <>
          (Sold to{" "}
          <a
            href="https://joinprospect.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Prospect Ratings
          </a>
          ) Scrapes open roles from job boards Greenhouse, Lever, Ashby, and Rippling
        </>
      ),
      link: {
        label: "levergreen.dev/all",
        href: "https://levergreen.dev/all",
      },
    },
    {
      title: "Chessray",
      techStack: [
        "Python",
        "msgspec",
        "dbt",
        "DuckDB",
        "Evidence"
      ],
      description:
        "A data-driven deep dive into the 2024 FIDE Candidates Tournament",
      link: {
        label: "Chessray Evidence",
        href: "https://chessray.evidence.app/2024%20FIDE%20Candidates%20Tournament/overview/",
      },
    }
  ],
} as const;
