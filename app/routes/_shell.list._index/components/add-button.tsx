import { Trans } from '@lingui/macro'
import RadixIconsPlus from '~icons/radix-icons/plus'

export function AddButton() {
  return (
    <Link to="/list/add">
      <Button>
        <Trans>Add</Trans>
        <RadixIconsPlus className="ms-2" />
      </Button>
    </Link>
  )
}
