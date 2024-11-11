import React from "react";
import Image from "next/image";
import { Link } from "../atoms/link";
import { fetchLatestTrack } from "@/libs/actions/track";

export const Track: React.FC<any> = async () => {
  const data = await fetchLatestTrack();
  const trackData = data.items?.[0]

  const image = trackData?.track?.album?.images[0].url;
  const url = trackData?.track?.external_urls?.spotify;
  const title = trackData?.track?.album.name;
  const lastPlayed = trackData?.played_at;
  const artists = trackData?.track?.artists?.map((item: any) => {
    return { href: item.external_urls.spotify, name: item.name };
  });

  return (
    <div className="flex flex-col p-1.5 gap-1 bg-background rounded-lg shadow-md">
      <div className="flex bg-background-2 rounded-md p-1.5">
        <Image
          width={100}
          height={100}
          src={image}
          alt={title}
          className="h-14 w-14 rounded-[3px] mr-2 border border-border"
        />
        <div className="flex flex-col justify-evenly gap-1">
          <span className="font-light">
            <Link href={url}>{title}</Link>
          </span>

          <p className="text-muted">
            {artists?.map((artist: any) => (
              <span key={artist.name} className="after:content-['_|_'] last:after:content-none">
                {artist.name}
              </span>
            ))}
          </p>
        </div>
      </div>
      <p className="flex px-1 gap-1 items-center text-sm text-muted">
        <span className="relative flex h-2 w-2">
          <span className="relative inline-flex rounded-full h-2 w-2 bg-background-2"></span>
        </span>
        Last played on{" "}
        {new Date(lastPlayed).toLocaleString("en-US", {
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}{" "}
        EST
      </p>
    </div>
  );
};
