'use client'
import { User } from 'lucide-react'
import { useFileInput } from './Root'
import { useMemo } from 'react'

export function ImagePreview() {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return undefined
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (files.length) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={previewURL}
        alt="User avatar"
        className="h-16 w-16 rounded-full border-2 border-violet-600 object-cover"
      />
    )
  } else {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
        <User className="h-8 w-8 text-violet-600" />
      </div>
    )
  }
}