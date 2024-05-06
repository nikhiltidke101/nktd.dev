import Image from "next/image";
import { Link } from "@/libs/components/atoms/link";
import { Container } from "@/libs/components/organisms/container";
import { NewsLetter } from "@/libs/components/misc/newsletter";
import { HR } from "@/libs/components/atoms/divider";

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
    <div className="relative w-full space-y-2 flex flex-col justify-start">
      {!href && <Label>{label ?? "upcoming"}</Label>}
      <h2 className="font-inter text-reg-16 font-extralight">
        <Link href={href}>{title}</Link>
      </h2>
      <p className="font-extralight text-secondary text-reg-16">{subtitle}</p>
    </div>
  );
};

const Label = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="absolute top-0 right-0 rotate-12 text-reg-10 bg-yellow-300/35 text-yellow-500 px-1.5 py-1 rounded-md">
      {children}
    </span>
  );
};

const items: {
  title: string;
  subtitle: string;
  href?: string;
  label?: string;
}[] = [
  {
    title: "About",
    subtitle: "what? why? where? who am i? ",
    href: "/about",
  },
  {
    title: "Now",
    subtitle: "what i'm doing now, and what's next",
    href: "/now",
  },
  {
    title: "Colophon",
    subtitle: "why i built this site, and some details",
    href: "/colophon",
  },
];

const socials = [
  {
    name: "twitter",
    link: "https://twitter.com/nikhillst",
  },
  {
    name: "github",
    link: "https://github.com/nikhiltidke101",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/nikhil-tidke101/",
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/_nikhiltidke_/",
  },
];

export default function Home() {
  return (
    <main className="pb-16">
      <header className="flex gap-4 bg-foreground font-thin">
        <Container className="flex text-primary flex-col gap-8">
          <h1 className="flex flex-col leading-8 text-reg-30 tracking-tight">
            <span className="font-normal">nikhil tidke</span>
            <span className="font-normal text-tertiary">
              programmer & engineer
            </span>
          </h1>

          <p className="font-sans text-secondary text-reg-18">
            <strong>Crafting interfaces,</strong> Creating, exploring, learning.
            Keeping it simple. Currently working as{" "}
            <Link href="https://designengineer.io/">d-eng</Link> at{" "}
            <Link href="https://devrev.ai/">@devrev</Link>, where I create
            creative experinces for audience.
          </p>
        </Container>
      </header>
      {/* <HR /> */}
      <Container className="flex flex-col gap-10">
        <div>
          <h2 className="text-tertiary text-reg-16 mb-6">
            {/* NAVIGATION —{" "} */}
            <em className="font-news font-extralight">
              where you can find me ⤵
            </em>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-8">
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
        </div>
        <HR />

        <div>
          <div>
            <h3 className="text-tertiary font-extralight mb-6 text-reg-16">
              {/* DGARDEN —{" "} */}
              <em className="font-news">
                digital garden of thoughts & resources ⤵
              </em>
            </h3>
            <p className="text-secondary font-extralight text-reg-16">
              A monthly newsletter where I share my learnings and links to
              anything Ive found interesting. I don’t usually share this stuff
              anywhere else but in this newsletter.
            </p>
          </div>
          <NewsLetter />
        </div>
        <HR />

        <div>
          <h4 className="font-inter mb-6 text-reg-16 text-tertiary font-extralight">
            <em className="font-news">i too, am social. ⤵</em>
          </h4>
          <div className="flex gap-4">
            {socials.map((social, index) => (
              <Link key={index} href={social.link}>
                <em className="font-news">{social.name}</em>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
