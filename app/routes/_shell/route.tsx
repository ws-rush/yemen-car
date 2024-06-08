import { ThemeSwitcher } from './components/theme-switcher'

export function Component() {
  return (
    <div className="h-full w-11/12 md:w-8/12 m-auto">
      <div className="h-full flex flex-col">
        <header className="flex h-16 items-center">
          <h1 className="text-2xl font-extrabold italic tracking-tight">
            YemenCar.
          </h1>
          <div className="ml-auto flex items-center space-x-4">
            <ThemeSwitcher />
          </div>
        </header>

        <Outlet />
      </div>
    </div>
  )
}