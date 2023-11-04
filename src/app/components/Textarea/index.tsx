import { ComponentProps } from 'react'

type TextareaProps = ComponentProps<'textarea'>

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      {...props}
      className="flex  min-h-[120px] w-full resize-y items-center gap-2 rounded-lg border border-zinc-300 px-3.5 py-2.5 text-zinc-900 shadow-sm"
    />
  )
}
