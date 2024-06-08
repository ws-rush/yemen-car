import { Trans } from '@lingui/macro'
import RadixIconsArrowLeft from '~icons/radix-icons/arrow-left'
import RadixIconsMixerHorizontal from '~icons/radix-icons/mixer-horizontal'
import RadixIconsPlus from '~icons/radix-icons/plus'
import { useLoaderData } from 'react-router-dom'

export async function loader() {
  const { data } = await client.GET('/cars')
  return data
}

export function Component() {
  const cars = useLoaderData() as Car[]

  return (
    <div>
      <div className="fixed z-[-10] h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full bg-orange-500 blur-[150px] md:blur-[350px] opacity-50 left-0 top-0" />
      <div className="fixed z-[-10] h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full bg-violet-500 blur-[150px] md:blur-[350px] opacity-50 right-0 bottom-0" />
      <section className="flex">
        <Input
          className="block h-12"
          placeholder="get your next car"
          type="search"
        />
        <Button className="h-12 md:hidden">
          <RadixIconsMixerHorizontal />
        </Button>
      </section>

      <Link
        className="flex items-center justify-between"
        to="/"
      >
        <div className="flex flex-col gap-3 my-8">
          <RadixIconsArrowLeft />
          <strong>
            <Trans>All Cars</Trans>
          </strong>
        </div>
        <Button>
          <Trans>Add</Trans>
          <RadixIconsPlus className="ms-2" />
        </Button>
      </Link>

      <section>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <Link
              key={car.id}
              to={`/list/${car.id}`}
            >
              <article className="relative isolate cursor-pointer flex flex-col justify-end overflow-hidden rounded-none px-8 pb-8 pt-40 hover:-translate-y-2 hover:-translate-x-2 transition-all duration-300 ease-in-out hover:shadow-[0.7rem_0.7rem]">
                {/* prev image scale animation: group-hover:scale-[1.2] transition-transform duration-300 ease-in-out */}
                <img
                  alt={car.description}
                  className="absolute inset-0 h-full w-full object-cover"
                  src={car.images[0]}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-300 via-gray-300/40 dark:from-gray-900 dark:via-gray-900/40" />
                <h3 className="z-10 mt-3 text-3xl font-bold">
                  {car.company} {car.model}
                </h3>
                <div className="flex justify-between">
                  <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-700 dark:text-gray-300">
                    <Badge>{car.status}</Badge>
                  </div>
                  <span className="z-10 gap-y-1 overflow-hidden leading-6 font-semibold">
                    ${car.price}
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
