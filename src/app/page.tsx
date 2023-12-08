"use client";
import Block from "@/shared/ui/Block/Block";
import AnalyzeBlock from "@/widgets/AnalyzeBlock/AnalyzeBlock";
import NewsList from "@/widgets/NewsList/NewsList";

export default function Home() {
  return (
    <div className="grid gap-20 grid-cols-2 h-full">
      <AnalyzeBlock />
      <div className="relative">
        <NewsList />
      </div>
    </div>
  );
}
