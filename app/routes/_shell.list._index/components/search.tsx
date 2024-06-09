import { Trans } from '@lingui/macro'
// import RadixIconsMixerHorizontal from '~icons/radix-icons/mixer-horizontal'

export function Search() {
  const submit = useSubmit()
  const [searchParameters] = useSearchParams()

  return (
    <Form
      className="flex flex-col gap-3"
      method="get"
      onChange={(event) => submit(event.currentTarget)}
      replace
    >
      <fieldset className="flex">
        <Input
          className="block h-12"
          defaultValue={searchParameters.get('q') || undefined}
          name="q"
          placeholder="get your next car"
          type="search"
        />
        {/* <Button className="h-12 md:hidden">
        <RadixIconsMixerHorizontal />
      </Button> */}
      </fieldset>

      <fieldset className="flex gap-3 items-center justify-between w-full">
        <strong>
          <Trans>Filters</Trans>
        </strong>
        <Select name="status">
          <SelectTrigger className="w-1/4">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="New">New</SelectItem>
              <SelectItem value="Used">Used</SelectItem>
              <SelectItem value="Damaged">Damaged</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select name="fuel">
          <SelectTrigger className="w-1/4">
            <SelectValue placeholder="Fule" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Ethanol">Ethanol</SelectItem>
              <SelectItem value="Diesel">Diesel</SelectItem>
              <SelectItem value="Gas">Gas</SelectItem>
              <SelectItem value="Hydrogen">Hydrogen</SelectItem>
              <SelectItem value="Electric">Electric</SelectItem>
              <SelectItem value="Petrol">Petrol</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select name="gearbox">
          <SelectTrigger className="w-1/4">
            <SelectValue placeholder="Gearbox" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Manual">Manual</SelectItem>
              <SelectItem value="Automatic">Automatic</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </fieldset>
    </Form>
  )
}
