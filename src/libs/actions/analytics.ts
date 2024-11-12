import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function getViewsCount() {
  noStore();
  let data = await sql`
      SELECT slug, count
      FROM views
    `;

  return data.rows as { slug: string; count: number }[];
}
