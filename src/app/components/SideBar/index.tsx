import { Logo } from '@/app/assets/Logo'
import { MainNavigation } from './MainNavigation'
import { NavItem } from './MainNavigation/NavItem'
import { LifeBuoy, Search, Settings } from 'lucide-react'
import UsedSpaceWidget from './UsedSpaceWidget'
import Profile from './Profile'

import * as Input from '../../components/Input'

export function SideBar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-4 py-8">
      <header className=" flex flex-col gap-6">
        <div className="mx-1 flex items-center gap-2.5">
          <Logo />
          <span className="text-xl font-semibold text-zinc-900">
            Untitled UI
          </span>
        </div>

        <Input.Root>
          <Input.Icon icon={Search} />
          <Input.Control type="search" placeholder="Search" />
        </Input.Root>

        <MainNavigation />
      </header>

      <div className="mt-auto flex flex-col gap-6">
        <nav>
          <NavItem title="Support" icon={LifeBuoy} isChevronDown={false} />
          <NavItem title="Settings" icon={Settings} isChevronDown={false} />
        </nav>

        <UsedSpaceWidget />

        <div className="flex h-px bg-zinc-200"></div>
        <Profile />
      </div>
    </aside>
  )
}
