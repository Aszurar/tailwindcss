'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

type ControlProps = ComponentProps<'input'>

export function Control({ multiple = false, ...rest }: ControlProps) {
  const { id, onFilesSelected } = useFileInput()

  function handleSelectFiles(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)

    onFilesSelected(files, multiple)
  }

  return (
    <input
      type="file"
      name="photo"
      id={id}
      className="sr-only"
      multiple={multiple}
      onChange={handleSelectFiles}
      {...rest}
    />
  )
}
