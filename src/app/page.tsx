import { Button } from './components/Button'
import { TabBar } from './components/TabBar'
import * as Input from './components/Input'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import * as FileInput from './components/FileInput'
import { Select } from './components/Select'
import { SelectItem } from './components/Select/SelectItem'
import { Textarea } from './components/Textarea'

export default function Home() {
  return (
    <>
      <header className="flex flex-col gap-6">
        <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
          Settings
        </h1>
        <TabBar />
      </header>

      <section className="mt-8 border-b border-zinc-200 pb-5 dark:border-zinc-700">
        <div className=" flex w-full flex-col  justify-between gap-4 lg:flex-row lg:items-center ">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="space-x-3">
            <Button type="button" variant="outline">
              Cancelar
            </Button>
            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>
      </section>

      <form
        id="settings"
        action=""
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
      >
        <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form lg:gap-8">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300 "
          >
            Name
          </label>
          <div className="flex flex-col gap-6 lg:flex-row">
            <Input.Root>
              <Input.Control id="firstName" placeholder="Lucas" />
            </Input.Root>

            <div className="flex flex-col gap-3">
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300  lg:sr-only"
              >
                Last name
              </label>
              <Input.Root>
                <Input.Control placeholder="de Lima" />
              </Input.Root>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form lg:gap-8">
          <label
            htmlFor="email"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300 "
          >
            Email address
          </label>
          <div className="flex gap-6">
            <Input.Root>
              <Input.Icon icon={Mail} />
              <Input.Control id="email" placeholder="lms.souza@email.com" />
            </Input.Root>
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-5 lg:grid lg:grid-cols-form lg:gap-8">
          <label
            htmlFor="photo"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300 "
          >
            Your photo
            <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
              This will be displayed on your profile.
            </span>
          </label>

          <FileInput.Root className="flex flex-col gap-3 lg:flex-row lg:items-start">
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.Control />
          </FileInput.Root>
        </div>

        <div className=" flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form lg:gap-8">
          <label
            htmlFor="email"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300 "
          >
            Role
          </label>
          <div className="flex gap-6">
            <Input.Root>
              <Input.Control id="role" placeholder="Design..." />
            </Input.Root>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form lg:gap-8">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300 "
          >
            Country
          </label>
          <div className="flex">
            <Select placeholder="Select a country...">
              <SelectItem text="Brasil" value="br" />
              <SelectItem text="Argentina" value="arg" />
            </Select>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form lg:gap-8">
          <label
            htmlFor="timezone"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300 "
          >
            Timezone
          </label>
          <div className="flex gap-6">
            <Select placeholder="Select a Timezone...">
              <SelectItem
                text="utc8"
                value="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem text="utc3" value="America São Paulo (UTC-03:00)" />
            </Select>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form lg:gap-8">
          <label
            htmlFor="bio"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300 "
          >
            Bio
            <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
              Write a short introduction.
            </span>
          </label>

          <div className="space-y-3">
            <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
              <Select placeholder="" defaultValue="normal">
                <SelectItem value="normal" defaultChecked text="Normal Text" />
                <SelectItem value="md" text="Markdown" />
              </Select>

              <div className="flex items-center gap-1">
                <Button type="button" variant="ghost">
                  <Bold className="h-4 w-4" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <Italic className="h-4 w-4" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <Link className="h-4 w-4" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <List className="h-4 w-4" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <ListOrdered className="h-4 w-4" strokeWidth={3} />
                </Button>
              </div>
            </div>
            <Textarea />
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form lg:gap-8">
          <label
            htmlFor="projects"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300 "
          >
            Portfolio projects
            <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
              Share a few snippets of your work.
            </span>
          </label>

          <FileInput.Root>
            <FileInput.Trigger />
            <FileInput.Control multiple />
            <FileInput.FileList />
          </FileInput.Root>
        </div>

        <div className="flex items-center justify-end gap-3 pt-5">
          <Button type="button" variant="outline">
            Cancelar
          </Button>
          <Button type="submit" form="settings">
            Save
          </Button>
        </div>
      </form>
    </>
  )
}
