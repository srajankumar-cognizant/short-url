"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { v4 as uuidv4 } from "uuid";

const durations: { label: string; value: number }[] = [
  { label: "1 Hour", value: 1 },
  { label: "3 Hours", value: 3 },
  { label: "5 Hours", value: 5 },
  { label: "10 Hours", value: 10 },
  { label: "1 Day", value: 24 },
];

export default function UrlShortener() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [duration, setDuration] = useState(1);
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleShorten = async () => {
    if (!originalUrl) return;
    setLoading(true);

    // generate a short code (6 chars from uuid)
    const shortCode = uuidv4().slice(0, 6);

    const expiresAt = new Date(Date.now() + duration * 60 * 60 * 1000);

    const { error } = await supabase.from("links").insert([
      {
        original_url: originalUrl,
        short_code: shortCode,
        expires_at: expiresAt.toISOString(),
      },
    ]);

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    setShortUrl(`${window.location.origin}/r/${shortCode}`);
    setOriginalUrl("");
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-2xl shadow">
      <h1 className="text-xl font-bold mb-4">URL Shortener</h1>

      <input
        type="url"
        placeholder="Enter your URL"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />

      <select
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
        className="w-full p-2 border rounded mb-3"
      >
        {durations.map((d) => (
          <option key={d.value} value={d.value}>
            {d.label}
          </option>
        ))}
      </select>

      <button
        onClick={handleShorten}
        disabled={loading}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        {loading ? "Generating..." : "Shorten"}
      </button>

      {shortUrl && (
        <div className="mt-4">
          <p className="text-sm">Your short link:</p>
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}
