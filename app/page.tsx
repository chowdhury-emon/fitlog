import Hero from "@/components/Hero/Hero";
import WorkoutLibrary from "@/components/Workout/WorkoutLibrary";

export default function Home() {
  return (
    <div className="grid gap-8">
      <Hero />
      <WorkoutLibrary />
    </div>
  )
}