export default function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5 dark:bg-zinc-800">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium leading-5 text-violet-700 dark:text-zinc-100">
          Used space
        </span>
        <p className="text-sm text-violet-600 dark:text-zinc-400">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>
      <div className="flex h-2 rounded-full bg-violet-200 dark:bg-zinc-600">
        <div className=" w-4/5 rounded-full bg-violet-700 dark:bg-violet-400"></div>
      </div>
      <div className="flex items-center gap-3">
        <button className="font-semibold text-violet-600 hover:text-violet-700 dark:text-violet-300 dark:hover:text-violet-200">
          Dismiss
        </button>
        <button className="font-semibold text-violet-700 hover:text-violet-900 dark:text-zinc-300 dark:hover:text-zinc-100">
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
