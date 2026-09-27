'use client'
import { useContext, useState } from "react";
import MetricSummaryCard from "@/components/MyPlan/MetricSummaryCard";
import { WorkoutContext } from "@/app/contexts/WorkoutContext";
import MyPlanWokoutCard from "@/components/MyPlan/MyPlanWokoutCard";
import Link from "next/link";

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

        {/* EMPTY MESSAGE */}
        <div className={`border border-border border-dashed rounded-2xl place-items-center py-20
        ${activeLink === "plan" && planWokout?.length === 0 ||
            activeLink === "saved" && savedWorkout?.length === 0
            ? "grid" : "hidden"} `} >
          <h2 className="text-xl font-bold">NOTHING HERE YET</h2>
          <p className="text-sm/relaxed text-muted">Browse the library and add a lift to get today moving.</p>
          <Link className="p-4 py-2 mt-4 bg-primary text-background text-sm font-semibold rounded-full" href={"/"}>
            Go to Workouts
          </Link>
        </div>

      </section >

    </div >
  )
}