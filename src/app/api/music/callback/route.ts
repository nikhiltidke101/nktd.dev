import { NextRequest, NextResponse } from "next/server";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const REQUEST_SCOPE = "user-read-recently-played"
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/music/callback`;

export async function GET(req: NextRequest, res: NextResponse) {
  const { code } = Object.fromEntries(
    req.nextUrl.searchParams.entries()
  );

  if (!code) {
    const params = new URLSearchParams({
      response_type: "code",
      client_id: CLIENT_ID!,
      scope: REQUEST_SCOPE,
      redirect_uri: REDIRECT_URI,
    });

    return NextResponse.redirect(
      `https://accounts.spotify.com/authorize?${params.toString()}`
    );
  } else {
    const params = new URLSearchParams({
      code: code,
      redirect_uri: REDIRECT_URI,
      grant_type: "authorization_code",
    });

    const response = await fetch(
      `https://accounts.spotify.com/api/token?${params.toString()}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
        },
      }
    ).then(res => res.json());

    return NextResponse.json({
      access_token: response.access_token,
      refresh_token: response.refresh_token,
    }, { status: 200 });
  }
}
