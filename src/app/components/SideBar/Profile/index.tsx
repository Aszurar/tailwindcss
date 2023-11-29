import { LogOut } from 'lucide-react'
import { Button } from '../../Button'

export default function Profile() {
  return (
    <div className="flex items-center gap-3 ">
      <img
        className="h-10 w-10 rounded-full"
        src="https://avatars.githubusercontent.com/u/64987824?v=4"
        alt="Perfil"
      />
      <div className="flex flex-col truncate">
        <span className="truncate text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Lucas de Lima
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          lms.souza39@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 " />
      </Button>
    </div>
  )
}
