import { ComponentProps, ElementType, ReactNode } from 'react'

type RootProps = ComponentProps<'div'> & {
  children: ReactNode
}

export function Root({ children, ...rest }: RootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3.5 py-2.5 text-zinc-500"
      {...rest}
    >
      {children}
    </div>
  )
}

type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-base text-zinc-900 placeholder-zinc-500"
      {...props}
    />
  )
}

type IconProps = ComponentProps<'span'> & {
  icon: ElementType
}

export function Icon({ icon: Icon }: IconProps) {
  return (
    <span className="text-zinc-500">
      <Icon />
    </span>
  )
}
