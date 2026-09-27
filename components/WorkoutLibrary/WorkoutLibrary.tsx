import WorkoutCard from "@/components/WorkoutLibrary/WorkoutCard";
import { getWorkoutData } from "@/lib/api";

export default async function WorkoutLibrary() {
  const workoutData = await getWorkoutData();

  return (
    <section id="library">
      <div>
        <h1 className="text-2xl font-bold uppercase">The Library</h1>
        <p className="text-muted">Twelve lifts covering every major muscle group.</p>
      </div>

      {/* The Grid of Workout Library */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8 mb-12">
        {workoutData.map(workout => (
          <div key={workout.id}>
            <WorkoutCard workout={workout}></WorkoutCard>
          </div>
        ))}
      </div>

    </section>
  )
}