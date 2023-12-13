import { ComponentProps } from 'react'

type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  return (
    <input
      className={`flex flex-1 items-center justify-center border-0 bg-transparent p-0 
      text-base text-zinc-900 placeholder-zinc-500 outline-none
      focus-visible:ring-0 dark:text-zinc-100 dark:placeholder-zinc-400
      `}
      {...props}
    />
  )
}
