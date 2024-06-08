import { Trans } from '@lingui/macro'
import RadixIconsArrowLeft from '~icons/radix-icons/arrow-left'

export function BackButton() {
  return (
    <Link
      className="flex flex-col gap-3 my-8"
      to="/"
    >
      <RadixIconsArrowLeft />
      <strong>
        <Trans>All Cars</Trans>
      </strong>
    </Link>
  )
}
