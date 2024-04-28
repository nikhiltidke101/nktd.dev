"use client";

import React, { useEffect, useRef, useState } from "react";

export const NewsLetter = () => {
  const [subsrcibbed, setSubscribbed] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;

    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      emailRef.current!.value = "";
      setSubscribbed(true);
    }
    return response;
  };

  return (
    <div className="font-light text-reg-17 flex flex-col gap-2">
      <h3 className="text-primary">DGARDEN (Digital Garden)</h3>
      <p className="text-secondary">
        A monthly newsletter where I share my learnings and links to anything
        Ive found interesting. I don’t usually share this stuff anywhere else
        but in this newsletter.
      </p>

      <form
        className="mt-6 flex h-10 items-center justify-between gap-2 overflow-hidden rounded-md bg-foreground shadow-border 
           focus-within:border-gray-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-black/20 focus-within:ring-offset-0"
        onSubmit={handleSubmit}
      >
        <label className="sr-only">Email</label>
        <input
          id="email"
          type="email"
          ref={emailRef}
          className="h-full w-[40%] grow border-none bg-transparent px-3.5 transition-colors text-secondary placeholder:text-secondary placeholder:text-reg-17 focus:outline-none"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="mr-1 h-[30px] w-[80px] rounded-[4px] bg-background dark:text-primary px-1.5 text-sm font-medium outline-none focus:outline-tertiary md:w-[104px] md:px-3.5"
        >
          <span className="block font-light">
            {!subsrcibbed ? "Subscribe" : "✔️"}
          </span>
        </button>
      </form>
    </div>
  );
};
