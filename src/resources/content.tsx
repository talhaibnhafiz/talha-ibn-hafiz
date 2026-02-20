import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Md.Talha Ibn",
  lastName: "Hafiz",
  name: `Talha Ibn Hafiz`,
  role: "CS Enthusiast",
  avatar: "/images/7d1d28a3-b269-4562-9f32-356c52708d8c.jpg",
  email: "talhaibnhafiz2007@gmail.com",
  location: "Asia/Dhaka", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bangla"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/talhaibnhafiz",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/talhaibnhafiz",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/talha_ibn_hafiz?igsh=dDQzb3FkemxxNTk1",
    essential: true,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@talha_ibn_hafiz",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between Human & Technology</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Integrated Eco Factory</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured Project
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Talha, an intermediate student at <Text as="span" size="xl" weight="strong">Rajshahi Govt. City College</Text>. Currenty I am preparing for Higher Secondary Certificate examination. <br /> Also I'm working with some science projects.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am Talha Ibn Hafiz, a final-year High School student (Science) at Rajshahi Govt. City College. As a passionate CS enthusiast, I am dedicated to exploring the world of technology and engineering while balancing my academic journey in Bangladesh.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Projects",
    experiences: [
      {
        company: "Integrated Eco-Friendly Smart Factory Model",
        timeframe: "WINTER 2026",
        role: "Project Lead",
        achievements: [
          <>
            Developed an automated industrial system focused on reducing energy waste and monitoring environmental pollutants using Sensor Networks.
          </>,
          <>
         Integrated real-time resource management through Wireless Communication platforms to ensure sustainable manufacturing processes.
          </>,
          <>
          Designed a centralized control system to optimize factory operations and minimize carbon footprint.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/public/eco.jpg",
            alt: "Integrated Eco Factory",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "IoT-based Smart Helmet for Road Safety",
        timeframe: "WINTER, 2025",
        role: "Project Lead",
        achievements: [
          <>
            Engineered an intelligent safety prototype using IoT sensors to prevent motorcycle ignition without helmet usage and detect alcohol consumption levels.
          </>,
          <>
            Implemented an emergency alert system with GPS tracking for real-time accident location sharing, aligning with V2X (Vehicle-to-Everything) communication standards.
          </>,
          <>
          Focused on enhancing worker and rider safety through Body Area Network (BAN) technology and secure data transmission.
          </>,
        ],
        images: [
          {
            src: "/public/helmet.jpg",
            alt: "IoT-based Smart Helmet for Road Safety",
            width: 16,
            height: 9,
      },
    ],
  },
       {
        company: "Carbon Capture & Ink Production System",
        timeframe: "WINTER, 2024",
        role: "Project Lead",
        achievements: [
          <>
          Conceptualized a device for collecting black smoke (particulate matter) from vehicle exhausts and urban roadsides to mitigate air pollution.
          </>,
          <>
            Developed a chemical processing method to convert captured carbon soot into high-quality usable ink, promoting a circular economy.
          </>,
<>
Researched the environmental impact of reducing urban carbon emissions through low-cost filtration and sustainable resource recovery.
</>,     
          ],
         images: [
          {
            src: "/public/carbon.jpg",
            alt: "Carbon Capture & Ink Production System",
            width: 16,
           height: 9,
          },
        ],
      },
    ], // <--- ভুল ২: 'experiences' অ্যারে শেষ করার জন্য এটি ( ], ) মিসিং ছিল
  }, // <--- ভুল ৩: 'work' অবজেক্ট শেষ করার জন্য এটি ( }, ) মিসিং ছিল
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Rajshahi Govt. City College",
        description: <>Present student at Science Department.</>,
      },
      {
        name: "Seroil Govt. High School",
        description: <>Compeleted 10th Standard here.</>,
      },
    ],
  },
technical: {
  display: true,
  title: "Technical Skills",
  skills: [
    {
      title: "Languages",
      description: (
        <>
          Bangla (Native), English (Foreign), Arabic (Reading), Hindi, Urdu, Korean (Speaking).
        </>
      ),
    },
    {
      title: "Programming",
      description: (
        <>
          C, Python (Beginner), HTML, SQL, Arduino/ESP32/Microcontroller
        </>
      ),
      tags: [
        {
          name: "C",
          icon: "c",
        },
        {
          name: "Python",
          icon: "python",
        },
        {
          name: "Html",
          icon: "html",
        },
      ],
    },
  ],
},

  certifications: {
    display: true,
    title: "Certifications",
    items: [
      {
        title: "Supervised ML: Regression and Classification",
        issuer: "DeepLearning.AI",
        timeframe: "SPRING, 2026",
        description: <>Machine learning course focused on regression & classification using Python.</>,
      },
      {
        title: "Introduction to Prompt Engineering with GitHub Copilot",
        issuer: "GitHub",
        timeframe: "WINTER, 2026",
      },
      {
        title: "AI/ML Engineering Career Jumpstart",
        issuer: "Professional Development Program",
        timeframe: "FALL, 2025",
      },
      {
        title: "First Step Korean",
        issuer: "Yonsei University (Online)",
        timeframe: "SPRING, 2026",
      },
    ],
  },

  awards: {
    display: true,
    title: "Honors & Awards",
    items: [
      {
        title: "TOP 50 – National Youth Idea Contest",
        issuer: "Jagannath University, Dhaka",
        timeframe: "2026",
      },
      {
        title: "2nd Place – Rajshahi College National Science Fest",
        issuer: "Rajshahi College",
        timeframe: "2025",
      },
      {
        title: "5th Place – ICT Olympiad (Regional)",
        issuer: "Rajshahi, Bangladesh",
        timeframe: "2024",
      },
      {
        title: "10th Place – English Quiz (Regional)",
        issuer: "Rajshahi, Bangladesh",
        timeframe: "2023",
      },
    ],
  },

};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
