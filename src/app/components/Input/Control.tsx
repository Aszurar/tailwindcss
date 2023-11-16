import { ComponentProps } from 'react'

type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  return (
    <input
      className="flex flex-1 items-center justify-center border-0 bg-transparent p-0 text-base text-zinc-900 placeholder-zinc-500"
      {...props}
    />
  )
}
