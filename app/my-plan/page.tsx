'use client'
import { useContext, useState } from "react";
import MetricSummaryCard from "@/components/MyPlan/MetricSummaryCard";
import { WorkoutContext } from "@/app/contexts/WorkoutContext";
import MyPlanWokoutCard from "@/components/MyPlan/MyPlanWokoutCard";

type ActiveLink = "plan" | "saved";

export default function MyPlan() {
  const { planWokout, savedWorkout } = useContext(WorkoutContext);
  const [activeLink, setActiveLink] = useState<ActiveLink>("plan");

  return (
    <div>
      <h1 className="text-2xl/loose font-bold uppercase"> MyPlan </h1>
      <p className="text-sm text-muted">Cap of five lifts for today. Finish them, then load more.</p>

      <MetricSummaryCard data={activeLink === "plan" ? planWokout! : savedWorkout!}></MetricSummaryCard>

      <section className="flex justify-between w-full mt-12">
        <div className="grid grid-cols-2 max-w-80 bg-surface rounded-2xl border border-border p-1 text-sm" >
          <button className={`p-2 px-8 rounded-xl ${activeLink === "plan" ? "bg-border font-bold" : ""}`}
            onClick={() => setActiveLink("plan")}>
            Today's Plan
          </button>
          <button className={`p-2 px-8 rounded-xl ${activeLink === "saved" ? "bg-border font-bold" : ""}`}
            onClick={() => setActiveLink("saved")}>
            Saved
          </button>
        </div>
      </section>

      {/* MY PLAN CARD LIST */}
      <section className="grid gap-8 my-6 mb-12">
        {activeLink === "plan"
          ? planWokout!.map(workout => (
            <MyPlanWokoutCard key={workout.id} workout={workout} activeLinkPlan={true} />
          ))

          : savedWorkout!.map(workout => (
            <MyPlanWokoutCard key={workout.id} workout={workout} />
          ))
        }
      </section>
    </div>
  )
}