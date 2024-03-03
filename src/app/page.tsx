"use client";
import SSEComponent from "@/pages/api/data.js";
import Hero from "../components/Hero.js";
import "tailwindcss/tailwind.css";
import MyApp from "../pages/page.tsx";
import MatchSearch from "../components/MatchSearch.js";

export default function Home({ launches }) {
  return (
    <div>
      <MatchSearch />
    </div>
  );
}

//Some code or somthing coool
