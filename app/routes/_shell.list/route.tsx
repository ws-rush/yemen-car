import { AddButton } from './components/add-button'
import { BackButton } from './components/back-button'
import { Carcard } from './components/car-card'
import { Trans } from '@lingui/macro'
import RadixIconsMixerHorizontal from '~icons/radix-icons/mixer-horizontal'
import { type LoaderFunctionArgs, useSubmit } from 'react-router-dom'

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const { data } = await client.GET('/cars', {
    params: {
      query: {
        // eslint-disable-next-line id-length
        q: url.searchParams.get('q'),
      },
    },
  })

  return data
}

export function Component() {
  const submit = useSubmit()
  const cars = useLoaderData() as Car[]
  const [searchParameters] = useSearchParams()

  return (
    <div>
      <div className="fixed z-[-10] h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full bg-orange-500 blur-[150px] md:blur-[350px] opacity-50 left-0 top-0" />
      <div className="fixed z-[-10] h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full bg-violet-500 blur-[150px] md:blur-[350px] opacity-50 right-0 bottom-0" />
      <Form
        className="flex"
        method="get"
        onChange={(event) => submit(event.currentTarget)}
        replace
      >
        <Input
          className="block h-12"
          defaultValue={searchParameters.get('q') || undefined}
          name="q"
          placeholder="get your next car"
          type="search"
        />
        <Button className="h-12 md:hidden">
          <RadixIconsMixerHorizontal />
        </Button>
      </Form>

      <section className="flex items-center justify-between">
        <BackButton />
        <AddButton />
      </section>

      <section className="mb-8">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {cars.map((car) => (
            <Carcard
              car={car}
              key={car.id}
            />
          ))}
        </div>
        {cars.length === 0 && (
          <p className="text-center">
            <Trans>No cars found</Trans>
          </p>
        )}
      </section>
    </div>
  )
}
