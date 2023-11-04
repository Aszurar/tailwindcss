'use client'
import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'

type SelectItemProps = Select.SelectItemProps & {
  text: string
}

export function SelectItem({ text, ...rest }: SelectItemProps) {
  return (
    <Select.Item
      className="flex items-center justify-between px-3.5 py-2.5 data-[highlighted]:bg-violet-50"
      {...rest}
    >
      <Select.ItemText className="font-medium text-black">
        {text}
      </Select.ItemText>
      <Select.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
