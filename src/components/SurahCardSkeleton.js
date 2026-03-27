export default function SurahCardSkeleton() {
    return (
        <div className="bg-white dark:bg-base-200 rounded-2xl border-2 border-base-300 p-4 max-w-sm w-full h-full mx-auto">
            <div className="animate-pulse flex space-x-4 items-center">
                <div className="rounded-xl bg-gray-300 dark:bg-slate-700 h-10 w-10"></div>
                <div className="flex-1">
                    <div className="flex justify-between">
                        <div>
                            <div className="h-4 w-20 bg-gray-300 dark:bg-slate-700 rounded my-2"></div>
                            <div className="h-2 w-14 bg-gray-300 dark:bg-slate-700 rounded"></div>
                        </div>
                        <div>
                            <div className="h-4 w-20 bg-gray-300 dark:bg-slate-700 rounded my-2"></div>
                            <div className="h-2 w-20 bg-gray-300 dark:bg-slate-700 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}