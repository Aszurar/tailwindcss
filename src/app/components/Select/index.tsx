'use client'

import { ReactNode } from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'

type SelectProps = SelectPrimitive.SelectProps & {
  children: ReactNode
  placeholder: string
}
export function Select({ children, placeholder, ...rest }: SelectProps) {
  return (
    <SelectPrimitive.Root {...rest}>
      <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between rounded-lg border border-zinc-300 px-3.5 py-2.5 shadow-sm data-[placeholder]:text-zinc-500">
        <SelectPrimitive.Value
          placeholder={placeholder}
          className="text-black"
        />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-lg"
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
