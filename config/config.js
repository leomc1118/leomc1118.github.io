import profile from "./profile.png";
import {
  faAppStore,
  faGithub,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";

export const navigation = {
  name: "Leonardo Mo Chen",
  links: [
    // {
    //   title: "About",
    //   link: "#about",
    // },
    // {
    //   title: "Projects",
    //   link: "#projects",
    // },
    // {
    //   title: "Contact",
    //   link: "#contact",
    // },
  ],
};

export const intro = {
  title: "Hey, I'm Leo",
  description: "A Computer Engineer creating intuitive embedded systems.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://docs.google.com/document/d/1bT1LSOyjRK8kf0xptOQD4NmxSyXBjoI_LaFz-ths0lY/edit?usp=sharing",
      isPrimary: false,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/leonardo-mo-chen/",
      isPrimary: false,
    },
    {
      title: "GitHub",
      link: "https://github.com/leomc1118",
    },
  ],
};

export const about = {
  title: "Who I am",
  description: [
    "I'm a third-year undergraduate Computer Engineering student at Northeastern University pursuing passion in mobile and desktop applications, embedded systems, and computer hardware. Recently, I was an Electrical Engineer Co-op at Boston Engineering Corporation!",
    "Starting in middle school when I built my first gaming PC, I've been passionate about engineering and technology. I specifically took interest in consumer electronics, in which I observed successful and unsuccessful user interface implementations. I would find myself thinking about how I would have done things differently",
    "When I’m not programming, I focus on my hobbies which are: reading, cooking, gaming, playing tennis, and watching sports!",
  ],
};

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Embedded Development",
      description:
        "I forge user interfaces that control functions on an embedded system.",
      icons: null,
    },
    {
      title: "Electrical Hardware",
      description:
        "I create schematics that enable embedded development and power supplies.",
      icons: null,
    },
  ],
};

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "StarBook",
      description:
        "A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
        },
        {
          icon: faGithub,
          link: "https://github.com/hashirshoaeb/star_book",
        },
      ],
    },
    {
      title: "QuranTalk",
      description:
        "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
        },
        {
          icon: faGooglePlay,
          link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
        },
      ],
    },
    {
      title: "Portfolio",
      description:
        "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/hashirshoaeb/portfolio",
        },
      ],
    },
  ],
};

export const contact = {
  title: "Get in touch",
  description:
    "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at hashirshoaeb@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:hashirshoaeb@gmail.com",
      isPrimary: true,
    },
    {
      title: "Schedule Meeting",
      link: "https://topmate.io/hashirshoaeb",
      isPrimary: false,
    },
  ],
};

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title: "Leo Chen | Computer Engineer | C/C++ | Altium",
  description:
    "I create embedded systems. I'm a third-year undergraduate Computer Engineering student at Northeastern University.",
  image: profile.src,
};

export const links = {
  image: profile.src,
  title: "Leo Chen",
  description: "Computer Engineer | C/C++ | Altium",
  cards: [
    {
      title: "Go back",
      link: "/intro",
    },

    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/leonardo-mo-chen/",
    },
  ],
};
