import React from "react";

import { Container } from "@/libs/components/organisms/container";
import { Text } from "@/libs/components/atoms/text";
import { getData } from "@/libs/methods/mdx";
import { redirect } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Link } from "@/libs/components/atoms/link";
import { Span } from "next/dist/trace";

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: number) {
  // eslint-disable-next-line react/display-name
  return ({ children }: any) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  em: ({ children }: any) => <em className="font-news italic">{children}</em>,
  a: ({ children, href }: any) => <Link href={href}>{children}</Link>,
};

const page = ({ params }: { params?: any; searchParams?: any }) => {
  const data = getData(params?.slug.join("/"));

  if (!data) return redirect("/");

  return (
    <div className="bg-background">
      <Container>
        <header className="flex flex-col gap-4 relative pb-10">
          <div className="flex gap-2 text-reg-18 text-primary mb-4 font-inter mt-2">
            <div className="sticky top-4">
              <Link href="/" className="no-underline">
                <span className="before:content-['↩'] before:mr-2 before:text-primary before:text-reg-14 font-news italic">
                  index
                </span>
              </Link>
            </div>
          </div>

          <h1 className="flex flex-col gap-1 text-reg-18 text-primary">
            <span>{data.metadata.title}</span>
            <div className="flex justify-between text-secondary text-reg-14 font-sans font-light">
              <span>March 21, 2024 (1mo ago)</span>
              <span>101 views</span>
            </div>
          </h1>
        </header>

        <article
          className="prose w-full min-w-fit
          prose-headings:text-primary prose-headings:font-normal prose-headings:font-sans prose-headings:mb-0
          prose-p:text-secondary prose-p:font-extralight prose-p:font-sans prose-p:tracking-[0px]
          prose-li:text-secondary prose-li:font-extralight
          prose-strong:text-primary prose-strong:font-medium
          "
        >
          <MDXRemote source={data?.content} components={components} />
        </article>
      </Container>
    </div>
  );
};

export default page;
