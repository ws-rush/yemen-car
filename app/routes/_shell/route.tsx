import { Search } from './components/search'
import { Sidebar } from './components/sidebar'
import { UserNav } from './components/user-nav'
import { t } from '@lingui/macro'
import RadixIconsMoon from '~icons/radix-icons/moon'
import RadixIconsSun from '~icons/radix-icons/sun'

export function Component() {
  return (
    <div className="hidden md:block">
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <Sidebar className="hidden lg:block" />
            <div className="col-span-3 lg:col-span-4 lg:border-l">
              <div className="h-full px-4 py-6 lg:px-8">
                <div className="hidden flex-col md:flex">
                  <div className="border-b">
                    <div className="flex h-16 items-center px-4">
                      <Search />
                      <div className="ml-auto flex items-center space-x-4">
                        <button
                          className="icon-btn"
                          onClick={() => mode.toggleColorMode()}
                          title={t`button.toggle_dark`}
                          type="button"
                        >
                          <RadixIconsMoon className="hidden dark:inline-block" />
                          <RadixIconsSun className="dark:hidden" />
                        </button>
                        <UserNav />
                      </div>
                    </div>
                  </div>
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
