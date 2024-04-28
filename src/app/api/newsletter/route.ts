import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (req.method === "POST") {
    try {
      const formBody = `email=${encodeURIComponent(body.email)}`;

      const response = await fetch(
        `https://app.loops.so/api/newsletter-form/clvji1ws800kkc6askaxk95ay`,
        {
          method: "POST",
          body: formBody,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      return new NextResponse(
        JSON.stringify({
          status: "success",
          data: { email: body.email },
        }),
        {
          status: 201,
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (error) {
      return new NextResponse(
        JSON.stringify({
          status: "error",
          message: error,
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }
}
