import { ComponentProps } from 'react'

type TextareaProps = ComponentProps<'textarea'>

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      {...props}
      className={`flex  min-h-[120px] w-full resize-y items-center gap-2 rounded-lg border border-zinc-300 px-3.5 py-2.5 text-zinc-900 shadow-sm outline-none 
      focus:border-violet-300 focus:ring-4 focus:ring-violet-50
      dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400 dark:focus:border-violet-500 dark:focus:ring-violet-500/10
      `}
    />
  )
}
