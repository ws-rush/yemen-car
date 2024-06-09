import { AddButton } from './components/add-button'
import { BackButton } from './components/back-button'
import { Carcard } from './components/car-card'
import { Search } from './components/search'
import { Trans } from '@lingui/macro'
import { type LoaderFunctionArgs } from 'react-router-dom'

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  // eslint-disable-next-line id-length
  const q = url.searchParams.get('q')
  const status: Status = url.searchParams.get('status')
  const fule = url.searchParams.get('fule')
  const gearbox = url.searchParams.get('gearbox')
  const query: Filter = {}
  // eslint-disable-next-line id-length
  if (q) query.q = q
  if (status) query.status = status
  if (status) query.fule = fule
  if (gearbox) query.gearbox = gearbox
  const { data } = await client.GET('/cars', {
    params: {
      query,
    },
  })

  return data
}

export function Component() {
  const cars = useLoaderData() as Car[]

  return (
    <div>
      <div className="fixed z-[-10] h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full bg-orange-500 blur-[150px] md:blur-[350px] opacity-50 left-0 top-0" />
      <div className="fixed z-[-10] h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full bg-violet-500 blur-[150px] md:blur-[350px] opacity-50 right-0 bottom-0" />

      <Search />

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
