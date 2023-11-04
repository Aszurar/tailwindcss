type ButtonProps = {
  form?: string
  title: string
  type?: 'submit' | 'reset' | 'button'
  variant?: 'primary' | 'secondary'
}

export function Button({
  form,
  title,
  type = 'button',
  variant = 'primary',
}: ButtonProps) {
  const isPrimary = variant === 'primary'
  return (
    <button
      type={type}
      form={form}
      className={`rounded-md border border-zinc-300 px-4 py-2.5 text-sm font-semibold shadow-sm ${isPrimary
          ? 'bg-violet-600 text-white hover:bg-violet-700'
          : 'text-zinc-700 hover:bg-zinc-50'
        }`}
    >
      {title}
    </button>
  )
}
