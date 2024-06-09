import { CarFeatures } from './components/car-feauters'
import { Gallery } from './components/gallery'
import { type LoaderFunctionArgs } from 'react-router-dom'

export async function loader({ params }: LoaderFunctionArgs) {
  const response = await client.GET('/cars/{id}', {
    params: {
      path: {
        id: params.id,
      },
    },
  })

  return response.data
}

export function Component() {
  const car = useLoaderData() as Car

  return (
    <div>
      <Gallery />

      <section className="flex flex-col gap-2 my-6">
        <h1 className="text-4xl font-semibold">
          {car.company} {car.model}
        </h1>
        <div className="flex gap-5 items-center">
          <Badge>{`${car.status}`}</Badge>
          <strong className="text-lg">${car.price}</strong>
        </div>
      </section>

      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-[2fr_1fr] md:grid-rows-1">
        <section>
          <h3 className="text-xl font-semibold mb-2 mt-4">Description</h3>
          <p>{car.description}</p>
          <h3 className="text-xl font-semibold mb-2 mt-4">Features</h3>
          <CarFeatures />
          <h3 className="text-xl font-semibold mb-2 mt-4">From Same Company</h3>
          <h3 className="text-xl font-semibold mb-2 mt-4">From Same Seller</h3>
        </section>
        <section className="">
          <h3 className="text-xl px-2 py-4 border-b-2 border-white">
            <span className="font-semibold">Seller: </span>
            {car.seller}
          </h3>
        </section>
      </div>
    </div>
  )
}
