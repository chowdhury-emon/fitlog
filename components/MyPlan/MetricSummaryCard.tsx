import { Workout } from "@/types/workout.type";

export default function MetricSummaryCard({ data }: { data: Workout[] }) {
    const tatalDuration = data.reduce((acc, item) => acc + item.duration, 0);
    const tatalCalories = data.reduce((acc, item) => acc + item.caloriesBurned, 0)

    return (
        <section className="container w-full bg-surface border border-border p-8 grid grid-cols-3 rounded-2xl my-6 text-center *:px-8">
            <div className="">
                <h2 className="text-muted text-sm">Exercises</h2>
                <div className="text-3xl/relaxed font-bold text-primary">{data.length}</div>
            </div>
            <div className="border-l border-r border-border">
                <h2 className="text-muted text-sm">Minutes</h2>
                <div className="text-3xl/relaxed font-bold text-white">{tatalDuration}</div>
            </div>
            <div className="">
                <h2 className="text-muted text-sm">Calories</h2>
                <div className="text-3xl/relaxed font-bold text-white">{tatalCalories}</div>
            </div>
        </section>
    )
}