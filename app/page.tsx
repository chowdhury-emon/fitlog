import Hero from "@/components/Hero/Hero";
import WorkoutLibrary from "@/components/WorkoutLibrary/WorkoutLibrary";

export default function Home() {
  return (
    <div className="grid gap-8">
      <Hero />
      <WorkoutLibrary />
    </div>
  )
}