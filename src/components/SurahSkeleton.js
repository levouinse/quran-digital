export default function SurahSkeleton() {
    return (
        <div className="animate-pulse px-6 md:px-24">
            <div className="flex justify-between py-8">
                <div className="h-7 w-32 bg-slate-700 rounded-full"></div>
                <div className="h-7 w-32 bg-slate-700 rounded-full"></div>
            </div>
            <div className="grid justify-items-center gap-2">
                <div className="h-8 w-40 bg-slate-700 rounded-lg"></div>
                <div className="h-3 w-44 bg-slate-700 rounded"></div>
            </div>
            <div className="pt-16">
                <div className="py-8">
                    {[1, 2, 3, 4].map((x, idx) => (
                        <div key={idx}>
                            <div className="grid justify-items-end gap-2">
                                <div className="h-9 w-56 bg-slate-700 rounded-lg"></div>
                                <div className="h-3 w-44 bg-slate-700 rounded-lg"></div>
                            </div>
                            <div className="my-4 h-3 w-32 md:w-72 bg-slate-700 rounded-lg"></div>
                            <div className="divider"></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between py-8">
                <div className="h-7 w-32 bg-slate-700 rounded-full"></div>
                <div className="h-7 w-32 bg-slate-700 rounded-full"></div>
            </div>
        </div>
    )
}