import { t } from '@lingui/macro'
import RadixIconsMoon from '~icons/radix-icons/moon'
import RadixIconsSun from '~icons/radix-icons/sun'

export function ThemeSwitcher() {
  return (
    <button
      className="icon-btn"
      onClick={() => mode.toggleColorMode()}
      title={t`button.toggle_dark`}
      type="button"
    >
      <RadixIconsMoon className="hidden dark:inline-block" />
      <RadixIconsSun className="dark:hidden" />
    </button>
  )
}
