const ENDPOINT = "v1/me/player/recently-played";
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

export const fetchLatestTrack = async () => {
  const params = new URLSearchParams();
  params.append("client_id", CLIENT_ID!);
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", REFRESH_TOKEN!);

  const auth = await fetch(
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
  ).then((res) => res.json());

  const response = await fetch(`https://api.spotify.com/${ENDPOINT}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${auth?.access_token}`,
    },
  }).then((res) => res.json());

  return response;
};
