import React from "react";

import { Container } from "@/libs/components/organisms/container";
import { Link } from "@/libs/components/atoms/link";
import { getData } from "@/libs/methods/mdx";
import { redirect } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { cx } from "class-variance-authority";

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
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cx("mt-2 ml-3 list-disc", className)} {...props} />
  ),
  li: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLLIElement>) => {
    return <li className={cx("mt-2 ml-3 list-item", className)}>{children}</li>;
  },
};

const page = ({ params }: { params?: any; searchParams?: any }) => {
  const data = getData(params?.slug.join("/"));

  if (!data) return redirect("/");

  const createdAt = new Date(data.metadata.created).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    
  );

  const updatedAt = new Date(data.metadata.updated).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const publicationInfo = `Published ${createdAt} ⋅ Updated ${updatedAt}`;

  return (
    <div className="bg-background">
      <Container>
        <header className="flex flex-col gap-4 relative pb-10">
          <div className="flex gap-2 text-reg-18 text-small mb-4 font-inter mt-2">
            <Link href="/" className="no-underline">
              <span className="before:content-['↩'] before:mr-2 before:text-primary before:text-small font-news italic">
                index
              </span>
            </Link>
          </div>

          <h1 className="flex flex-col gap-1 text-reg-18">
            <span className="text-default">{data.metadata.title}</span>
            <div className="flex justify-between text-muted text-small font-light">
              <span>{publicationInfo}</span>
              <span>101 views</span>
            </div>
          </h1>
        </header>

        <article>
          <MDXRemote source={data?.content} components={components} />
        </article>
      </Container>
    </div>
  );
};

export default page;
