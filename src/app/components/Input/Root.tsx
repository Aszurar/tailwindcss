import { ComponentProps, ReactNode } from 'react'

type RootProps = ComponentProps<'div'> & {
  children: ReactNode
}

export function Root({ children, ...rest }: RootProps) {
  return (
    <div
      className={`flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3.5 py-2.5 text-zinc-500 
      focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-50
        dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/10
      `}
      {...rest}
    >
      {children}
    </div>
  )
}
