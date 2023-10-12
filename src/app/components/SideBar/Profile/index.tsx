import { LogOut } from 'lucide-react'

export default function Profile() {
  return (
    <div className="flex items-center gap-3 ">
      <img
        className="h-10 w-10 rounded-full"
        src="https://avatars.githubusercontent.com/u/64987824?v=4"
        alt="Perfil"
      />
      <div className="flex flex-col truncate">
        <span className="truncate text-sm font-semibold text-zinc-700">
          Lucas de Lima
        </span>
        <span className="truncate text-sm text-zinc-500">
          lms.souza39@gmail.com
        </span>
      </div>
      <button className="ml-auto rounded-md p-2 text-zinc-600 transition-all hover:bg-zinc-100">
        <LogOut className="h-5 w-5 " />
      </button>
    </div>
  )
}
