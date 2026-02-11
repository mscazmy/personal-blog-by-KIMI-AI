// ============================================
// EDITABLE CONTENT FILE
// Modify the values below to customize your website
// ============================================

export const personalInfo = {
  name: "Ahmed Azeez",
  title: "PhD in Public Health",
  tagline: "Public Health Researcher & Data Storyteller",
  email: "ahmed.azeez@example.com",
  location: "Global",
  
  // Social media links
  social: {
    twitter: "https://twitter.com/ahmedazeez",
    linkedin: "https://linkedin.com/in/ahmedazeez",
    github: "https://github.com/ahmedazeez",
    orcid: "https://orcid.org/0000-0000-0000-0000",
  },
  
  // Hero section
  hero: {
    headline: "Hi, I'm Ahmed Azeez",
    subheadline: "PhD in Public Health",
    description: "Exploring the intersection of data, health, and storytelling through research and visual narratives.",
    ctaPrimary: "About Me",
    ctaSecondary: "My Blog",
  },
  
  // About section
  about: {
    headline: "About Me",
    bio: [
      "I am a public health researcher and data storyteller with a passion for transforming complex health data into compelling narratives. My work bridges the gap between academic research and public understanding, making critical health information accessible to everyone.",
      "With expertise in epidemiology, health policy analysis, and data visualization, I explore how storytelling can drive public health action and policy change."
    ],
    stats: [
      { value: "10+", label: "Years of Experience" },
      { value: "50+", label: "Research Publications" },
      { value: "3", label: "Continents Worked In" },
    ],
  },
  
  // Process section
  process: {
    headline: "My Process",
    subheadline: "How I transform complex data into compelling narratives",
    steps: [
      {
        number: "01",
        title: "Research",
        description: "I dive deep into health data, exploring patterns, trends, and anomalies that tell a story.",
      },
      {
        number: "02",
        title: "Analysis",
        description: "Using statistical methods and epidemiological frameworks, I uncover the insights hidden in the numbers.",
      },
      {
        number: "03",
        title: "Visualization",
        description: "I craft visual representations that make complex findings accessible and engaging.",
      },
      {
        number: "04",
        title: "Storytelling",
        description: "Finally, I weave everything into a narrative that resonates with audiences and drives action.",
      },
    ],
  },
  
  // CTA section
  cta: {
    headline: "Let's Collaborate",
    description: "Have a project in mind? I'm always open to discussing new research collaborations, data storytelling opportunities, or public health initiatives.",
    buttonText: "Get in Touch",
  },
  
  // Footer
  footer: {
    tagline: "Public Health Researcher & Data Storyteller",
    bio: "Transforming complex health data into compelling narratives that drive policy change and improve lives.",
    copyright: "© 2024 Ahmed Azeez. All rights reserved.",
  },
};

// Blog posts - Add, edit, or remove posts as needed
export const blogPosts = [
  {
    id: 1,
    title: "The Power of Data Storytelling in Public Health",
    excerpt: "How narrative frameworks can transform raw health data into compelling stories that drive policy change and improve community health outcomes.",
    category: "Data Storytelling",
    date: "Dec 15, 2024",
    image: "/images/blog-1.jpg",
    slug: "power-of-data-storytelling",
    content: `
      <p>Data storytelling is more than just presenting numbers—it's about creating a narrative that resonates with audiences and drives meaningful action. In public health, this skill is essential for translating complex research into accessible, impactful messages.</p>
      
      <h3>The Challenge of Health Data</h3>
      <p>Public health data is often complex, multifaceted, and difficult for non-experts to interpret. Raw statistics about disease prevalence, mortality rates, and health disparities can feel abstract and disconnected from real human experiences.</p>
      
      <h3>Crafting the Narrative</h3>
      <p>Effective data storytelling in public health requires:</p>
      <ul>
        <li><strong>Context:</strong> Placing data within broader social, economic, and environmental frameworks</li>
        <li><strong>Human connection:</strong> Linking statistics to real people and communities</li>
        <li><strong>Visual clarity:</strong> Using appropriate charts, graphs, and infographics</li>
        <li><strong>Actionable insights:</strong> Clearly communicating what the data means and what should be done</li>
      </ul>
      
      <h3>Impact on Policy</h3>
      <p>When done well, data storytelling can influence policy decisions, secure funding for health initiatives, and raise public awareness about critical health issues. The key is to make the data not just understandable, but emotionally compelling.</p>
    `,
  },
  {
    id: 2,
    title: "Visualizing Health Disparities",
    excerpt: "A deep dive into effective visualization techniques for highlighting health inequities and promoting health equity research.",
    category: "Data Visualization",
    date: "Dec 10, 2024",
    image: "/images/blog-2.jpg",
    slug: "visualizing-health-disparities",
    content: `
      <p>Health disparities represent one of the most pressing challenges in public health today. Effective visualization can illuminate these inequities and drive action toward health equity.</p>
      
      <h3>Choosing the Right Visualization</h3>
      <p>Different types of health disparities require different visualization approaches:</p>
      <ul>
        <li><strong>Geographic disparities:</strong> Maps and choropleths</li>
        <li><strong>Temporal trends:</strong> Line charts and area graphs</li>
        <li><strong>Demographic comparisons:</strong> Bar charts and grouped visualizations</li>
        <li><strong>Intersectional analysis:</strong> Small multiples and faceted charts</li>
      </ul>
      
      <h3>Ethical Considerations</h3>
      <p>When visualizing health disparities, it's crucial to:</p>
      <ul>
        <li>Avoid reinforcing stereotypes</li>
        <li>Provide appropriate context</li>
        <li>Respect the communities represented</li>
        <li>Focus on systemic factors rather than individual blame</li>
      </ul>
    `,
  },
  {
    id: 3,
    title: "From Numbers to Narratives",
    excerpt: "My journey from traditional epidemiology to the art of data-driven storytelling and its impact on public health communication.",
    category: "Personal",
    date: "Dec 5, 2024",
    image: "/images/blog-3.jpg",
    slug: "from-numbers-to-narratives",
    content: `
      <p>My transition from traditional epidemiologist to data storyteller wasn't planned—it evolved from a growing frustration with how public health research was being communicated.</p>
      
      <h3>The Problem with Traditional Approaches</h3>
      <p>Academic papers, while rigorous, often fail to reach the audiences who could most benefit from the findings. Policymakers, community leaders, and the general public need accessible, engaging information.</p>
      
      <h3>Finding My Voice</h3>
      <p>Learning to tell stories with data required developing new skills:</p>
      <ul>
        <li>Understanding narrative structure and pacing</li>
        <li>Mastering data visualization tools</li>
        <li>Learning to write for different audiences</li>
        <li>Balancing accuracy with accessibility</li>
      </ul>
      
      <h3>The Impact</h3>
      <p>Today, my work reaches broader audiences and has greater real-world impact. By combining rigorous research with compelling storytelling, I'm able to contribute more effectively to public health improvement.</p>
    `,
  },
];

// Publications - Add your research papers here
export const publications = [
  {
    id: 1,
    title: "The Impact of Data Visualization on Public Health Policy Decisions",
    authors: "Azeez, A., Smith, J., Johnson, M.",
    journal: "Journal of Public Health Informatics",
    year: 2024,
    doi: "10.1234/jphi.2024.001",
    link: "https://doi.org/10.1234/jphi.2024.001",
    abstract: "This study examines how different data visualization approaches influence policy maker understanding and decision-making in public health contexts.",
  },
  {
    id: 2,
    title: "Health Disparities in Urban Communities: A Longitudinal Analysis",
    authors: "Azeez, A., Williams, R., Davis, K.",
    journal: "American Journal of Epidemiology",
    year: 2023,
    doi: "10.1234/aje.2023.045",
    link: "https://doi.org/10.1234/aje.2023.045",
    abstract: "A comprehensive 10-year analysis of health disparities across major urban centers, identifying key trends and intervention opportunities.",
  },
  {
    id: 3,
    title: "Storytelling as a Tool for Health Communication: Best Practices",
    authors: "Azeez, A.",
    journal: "Health Communication Review",
    year: 2023,
    doi: "10.1234/hcr.2023.012",
    link: "https://doi.org/10.1234/hcr.2023.012",
    abstract: "An evidence-based framework for using narrative techniques to improve health communication effectiveness.",
  },
  {
    id: 4,
    title: "Digital Health Interventions in Low-Resource Settings",
    authors: "Azeez, A., Chen, L., Brown, T.",
    journal: "Global Health Action",
    year: 2022,
    doi: "10.1234/gha.2022.089",
    link: "https://doi.org/10.1234/gha.2022.089",
    abstract: "Evaluation of mobile health intervention effectiveness in resource-constrained environments across three continents.",
  },
  {
    id: 5,
    title: "Epidemiological Trends in Non-Communicable Diseases",
    authors: "Azeez, A., Martinez, S.",
    journal: "Epidemiology & Health",
    year: 2022,
    doi: "10.1234/eph.2022.034",
    link: "https://doi.org/10.1234/eph.2022.034",
    abstract: "Analysis of global NCD trends with projections for the next decade and recommendations for prevention strategies.",
  },
];

// Navigation links
export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Publications", path: "/publications" },
  { name: "Contact", path: "/contact" },
];

// Categories for blog filtering
export const blogCategories = [
  "All",
  "Data Storytelling",
  "Data Visualization",
  "Public Health",
  "Research",
  "Personal",
];
