import UrlShortener from "@/components/url-shortener";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-dvh p-5 flex justify-center items-center">
      <UrlShortener />
    </div>
  );
}
