import { Icons } from "@/assets";

export const HEADER_MENU = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Features",
    href: "/features"
  },
  {
    name: "Resources",
    href: "/resources"
  },
  {
    name: "Testimonials",
    href: "/testimonials"
  },
  {
    name: "About us",
    href: "/about-us"
  },
  {
    name: "Contact",
    href: "/contact-us"
  }
]

export const AFTER_LOGIN_HEADER_MENU = [
  {
    id: "home",
    href: "/feed",
    icon: <Icons.HomeIcon />,
  },
  {
    id: "profile",
    href: "#",
    icon: <Icons.ManIcon />,
  },
  {
    id: "groups",
    href: "#",
    icon: <Icons.GroupIcon />,
  },
  {
    id: "messages",
    href: "#",
    icon: <Icons.MessageCircle />,
  },
  {
    id: "notifications",
    href: "#",
    icon: <Icons.Bell />,
  },
  {
    id: "media",
    href: "#",
    icon: <Icons.MonitorPlay />,
  },
];

export const INNER_PAGE_HEADER = {
  "about-us": {
    headerText: "ABOUTUS",
    sectionHeader: {
      headerText: "",
      subText: "",
    }
  },
  "contact-us": {

  },
  "features": {
    headerText: "FEATURES",
    sectionHeader: {
      headerText: "Where Entrepreneurs Meet Expertise",
      subText: `Join a thriving network of business leaders and professionals. Exchange insights, get expert advice, and open doors to new opportunities.Build meaningful relationships with like-minded entrepreneurs and industry experts.Share ideas, seek guidance, and grow your vision together.`,
    }
  },
  "testimonials": {
    headerText: "TESTIMONIALS",
    sectionHeader: {
      headerText: "",
      subText: "Donec lacinia fringilla libero ut finibus. Vestibulum euismod purus eu risus aliquam volutpat. Fusce scelerisque nibh sit amet quam gravida, eget euismod tellus viverra. Nulla dapibus dapibus augue.",
    }
  },
  "resources": {
    headerText: "RESOURCES",
    sectionHeader: {
      headerText: "The Frontline of Innovation and Entrepreneurial Wisdom",
      subText: "Donec lacinia fringilla libero ut finibus. Vestibulum euismod purus eu risus aliquam volutpat. Fusce scelerisque nibh sit amet quam gravida, eget euismod tellus viverra. Nulla dapibus dapibus augue.",
    }
  },
  "resource-details": {
    headerText: "RESOURCES",
    sectionHeader: {
      headerText: "The Frontline of Innovation and Entrepreneurial Wisdom",
      subText: "Donec lacinia fringilla libero ut finibus. Vestibulum euismod purus eu risus aliquam volutpat. Fusce scelerisque nibh sit amet quam gravida, eget euismod tellus viverra. Nulla dapibus dapibus augue.",
    }
  },
  "contact-us": {
    headerText: "CONTACT",
    sectionHeader: {
      headerText: "Let’s Build Something Great Together, Start the Conversation",
      subText: "Donec lacinia fringilla libero ut finibus. Vestibulum euismod purus eu risus aliquam volutpat. Fusce scelerisque nibh sit amet quam gravida, eget euismod tellus viverra. Nulla dapibus dapibus augue.",
    }
  }
}