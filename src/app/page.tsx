import { Link } from "@/libs/components/atoms/link";

export default function Home() {
  return (
    <main>
      <h1 className="font-medium mb-8 tracking-tighter">
        <em className="font-mono">
          nikhil tidke (<Link href="/">nktd.dev</Link>)
        </em>
      </h1>
      <p>
        Crafting interfaces. Building polished software and web experiences.
        Experimenting with magical details in user interfaces. currently work as
        MTS at <Link href="https://devrev.ai">DevRev</Link>, where I create
        creative experinces for audience. &nbsp;
      </p>

      <br />
      <p>...and a few other things.</p>
    </main>
  );
}
