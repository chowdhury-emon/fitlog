import Hero from "@/components/Hero/Hero";
import WalkoutLibrary from "@/components/Walkout/WalkoutLibrary";

export default function Home() {
  return (
    <div className="grid gap-8">
      <Hero />
      <WalkoutLibrary />
    </div>
  )
}