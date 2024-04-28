import Image from "next/image";
import { Link } from "@/libs/components/atoms/link";
import { Container } from "@/libs/components/organisms/container";
import { NewsLetter } from "@/libs/components/misc/newsletter";

const Card = ({
  title,
  subtitle,
  href,
  label,
}: {
  title: string;
  subtitle: string;
  href?: string;
  label?: string;
}) => {
  return (
    <div className="relative w-full space-y-2 flex flex-col justify-end">
      {!href && <Label>{label ?? "upcoming"}</Label>}
      <h2 className="font-news text-reg-20 font-extralight">
        <Link href={href}>{title}</Link>
      </h2>
      <p className="font-light text-secondary">{subtitle}</p>
    </div>
  );
};

const Label = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="absolute top-0 right-0 rotate-12 text-reg-10 bg-green-300/35 text-green-500 px-1.5 py-1 rounded-md">
      {children}
    </span>
  );
};

const items = [
  {
    title: "About",
    subtitle: "What, why, how",
    href: "/about",
  },
  {
    title: "Now",
    subtitle: "Short-term focus",
    href: "/now",
  },
  {
    title: "Someday",
    subtitle: "Long-term goals",
    label: "figuring out",
  },
  {
    title: "D-garden",
    subtitle: "Growing phils",
  },
  {
    title: "Work",
    subtitle: "Professional life",
    href: "/work",
  },
  {
    title: "Resources",
    subtitle: "Links and tools",
  },
  {
    title: "Colophon",
    subtitle: "Why build this?",
    href: "/contact",
  },
];

export default function Home() {
  return (
    <main>
      <header className="flex gap-4 bg-foreground pt-16 font-thin">
        <Container className="flex text-primary flex-col gap-4">
          <h1 className="flex items-center gap-2 text-reg-20 tracking-tight">
            <Image
              src="/profile.jpeg"
              alt="nktd.dev"
              width={32}
              height={23}
              className="rounded-full"
            />
            <span className="font-normal">nikhil tidke —</span>
            <Link
              className="leading-[90%] -mb-1.5"
              href="https://twitter.com/nikhillst"
            >
              @nikhillst
            </Link>
          </h1>

          <p className="font-sans text-reg-17 font-light text-secondary">
            <em className="font-news text-reg-20 text-primary">
              Crafting interfaces,
            </em>{" "}
            writing software and programs, experimenting with magical details in
            user interfaces, currently work as{" "}
            <Link href="https://designengineer.io/">d-eng</Link> at{" "}
            <Link href="https://devrev.ai/">@devrev</Link>, where I create
            creative experinces for audience.
          </p>
        </Container>
      </header>

      <svg width="100%" height="2px" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="pattern-75"
            patternUnits="userSpaceOnUse"
            width="4"
            height="4"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M1 -1L5 3"
                stroke="var(--secondary)"
                stroke-width="0.5"
              ></path>
              <path
                d="M-1 1L3 5"
                stroke="var(--secondary)"
                stroke-width="0.5"
              ></path>
            </g>
          </pattern>
          <clipPath id="clip0">
            <rect width="4" height="4" fill="white"></rect>
          </clipPath>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#pattern-75)"
        ></rect>
      </svg>

      <Container className="flex flex-col gap-8 md:gap-16">
        <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-8 md:gap-12">
          {items.map((item, index) => (
            <Card
              key={index}
              href={item.href}
              label={item.label}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
        <svg width="100%" height="2px" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="pattern-75"
              patternUnits="userSpaceOnUse"
              width="4"
              height="4"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M1 -1L5 3"
                  stroke="var(--secondary)"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M-1 1L3 5"
                  stroke="var(--secondary)"
                  stroke-width="0.5"
                ></path>
              </g>
            </pattern>
            <clipPath id="clip0">
              <rect width="4" height="4" fill="white"></rect>
            </clipPath>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#pattern-75)"
          ></rect>
        </svg>

        <NewsLetter />
      </Container>
    </main>
  );
}
