import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

type NavItemProps = {
  title: string
  icon: ElementType
  isChevronDown?: boolean
}

export function NavItem({
  title,
  icon: Icon,
  isChevronDown = true,
}: NavItemProps) {
  return (
    <a
      href=""
      className={`group flex h-10 flex-1 items-center gap-3 rounded-md px-3 transition-all hover:bg-violet-50
        dark:hover:bg-zinc-800
      `}
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span
        className={`mr-auto font-medium text-zinc-700 group-hover:text-violet-700
      dark:text-zinc-100 dark:group-hover:text-violet-300
      `}
      >
        {title}
      </span>
      {isChevronDown && (
        <ChevronDown
          size={24}
          className="h-5 w-5 text-zinc-400 group-hover:text-violet-400 dark:text-zinc-600"
        />
      )}
    </a>
  )
}
