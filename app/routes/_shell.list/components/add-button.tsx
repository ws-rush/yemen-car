import { Trans } from '@lingui/macro'
import RadixIconsPlus from '~icons/radix-icons/plus'

export function AddButton() {
  return (
    <Button>
      <Trans>Add</Trans>
      <RadixIconsPlus className="ms-2" />
    </Button>
  )
}
