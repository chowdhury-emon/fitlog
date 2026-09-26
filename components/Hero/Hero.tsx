import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-surface border border-border min-h-120 p-8 md:p-12 md:my-8 rounded-2xl grid gap-8 lg:grid-cols-2 lg:gap-0">
            <div className="flex flex-col justify-center items-center text-center lg:text-start lg:items-start gap-6">
                <h3 className="text-sm font-semibold uppercase text-primary font-sans">WORKOUT LIBRARY</h3>
                <h1 className="text-6xl md:text-7xl font-bold uppercase">TRAIN WITH INTENT. LOG EVERY SET.</h1>
                <p className="text-sm md:text-base text-muted max-w-[80%] text-pretty">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>
                <button className="bg-primary text-background text-xs font-bold uppercase rounded-lg p-6 py-3">
                    BROWSE WORKOUTS
                </button>
            </div>
            <figure className="relative w-full min-h-80">
                <Image src={"/banner.svg"} fill className="object-contain" alt="Fitlog Banner Image" />
            </figure>
        </section>
    )
}