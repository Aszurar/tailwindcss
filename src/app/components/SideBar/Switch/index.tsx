import * as RUISwitch from '@radix-ui/react-switch'

export function Switch() {
  return (
    <RUISwitch.Root
      id="theme"
      aria-label='Switch between "light" and "dark" mode'
      className="shadow-blackA4 relative h-6 w-12 cursor-default rounded-full bg-violet-300 shadow-[0_0_0_2px] shadow-zinc-300 outline-none drop-shadow-sm focus:shadow-[0_0_0_2px] focus:shadow-violet-700 data-[state=checked]:bg-violet-700 data-[state=checked]:focus:shadow-violet-300 "
    >
      <RUISwitch.Thumb className=" block h-5 w-5 translate-x-0.5 cursor-pointer rounded-full bg-white shadow-[0_2px_2px] transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[25px]" />
    </RUISwitch.Root>
  )
}
