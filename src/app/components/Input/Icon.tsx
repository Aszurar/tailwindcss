import { ComponentProps, ElementType } from 'react'

type IconProps = ComponentProps<'span'> & {
  icon: ElementType
}

export function Icon({ icon: Icon }: IconProps) {
  return (
    <span className="h-5 w-5 text-xl text-zinc-500">
      <Icon />
    </span>
  )
}
