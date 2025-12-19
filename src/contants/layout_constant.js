import { Icons } from "@/assets";

export const HEADER_MENU = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Features",
        href: "/"
    },
    {
        name: "Resources",
        href: "/"
    },
    {
        name: "Testimonials",
        href: "/"
    },
    {
        name: "About us",
        href: "/"
    },
    {
        name: "Contact",
        href: "/"
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
