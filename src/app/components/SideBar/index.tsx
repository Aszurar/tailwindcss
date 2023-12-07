'use client'

import { Logo } from '@/app/assets/Logo'
import { MainNavigation } from './MainNavigation'
import { NavItem } from './MainNavigation/NavItem'
import { LifeBuoy, Menu, Search, Settings } from 'lucide-react'
import * as Collapsible from '@radix-ui/react-collapsible'

import UsedSpaceWidget from './UsedSpaceWidget'
import Profile from './Profile'

import * as Input from '../../components/Input'
import { Button } from '../Button'
import { Switch } from './Switch'

export function SideBar() {
  return (
    <aside>
      <Collapsible.Root className=" fixed  left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900 lg:w-80 lg:border-r lg:py-8 lg:data-[state=closed]:bottom-0">
        <header className="mx-1 flex items-center gap-2.5 ">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Untitled UI
              </span>
            </div>
            <Switch />
          </div>

          <Collapsible.Trigger asChild className="ml-auto lg:hidden">
            <Button type="button" variant="ghost">
              <Menu className="h-6 w-6" />
            </Button>
          </Collapsible.Trigger>
        </header>
        <Collapsible.Content
          forceMount
          className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
        >
          <Input.Root>
            <Input.Icon icon={Search} />
            <Input.Control type="search" placeholder="Search" />
          </Input.Root>
          <MainNavigation />
          <div className="mt-auto flex flex-col gap-6 ">
            <nav>
              <NavItem title="Support" icon={LifeBuoy} isChevronDown={false} />
              <NavItem title="Settings" icon={Settings} isChevronDown={false} />
            </nav>

            <UsedSpaceWidget />

            <div className="flex h-px bg-zinc-200 dark:bg-zinc-700"></div>
            <Profile />
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    </aside>
  )
}
