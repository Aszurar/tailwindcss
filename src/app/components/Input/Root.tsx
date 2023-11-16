import { ComponentProps, ReactNode } from 'react'

type RootProps = ComponentProps<'div'> & {
  children: ReactNode
}

export function Root({ children, ...rest }: RootProps) {
  return (
    <div
      className=" flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3.5 py-2.5 text-zinc-500"
      {...rest}
    >
      {children}
    </div>
  )
}
