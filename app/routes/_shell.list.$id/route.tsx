import { CarFeatures } from './components/car-feauters'
import { Gallery } from './components/gallery'
import { type LoaderFunctionArgs } from 'react-router-dom'

export async function loader({ params }: LoaderFunctionArgs) {
  const { data } = await client.GET('/cars/{id}', {
    params: {
      path: {
        id: params.id,
      },
    },
  })

  const { data: fromSeller } = await client.GET('/cars', {
    params: {
      query: {
        seller: data.seller,
      },
    },
  })
  const { data: fromCompany } = await client.GET('/cars', {
    params: {
      query: {
        company: data.company,
      },
    },
  })

  return {
    ...data,
    fromCompany,
    fromSeller,
  }
}

export function Component() {
  const car = useLoaderData() as ExtendedCar

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
          {car.fromComany?.length > 0 && (
            <h3 className="text-xl font-semibold mb-2 mt-4">
              From Same Company
            </h3>
          )}
          <div className="flex gap-2 flex-wrap">
            {car.fromComany?.map((compnayCar) => (
              <Link
                key={compnayCar.id}
                to={`/list/${compnayCar.id}`}
              >
                <img
                  className="w-24 md:w-44"
                  src={compnayCar.images[0]}
                />
              </Link>
            ))}
          </div>
          {car.fromSeller?.length > 0 && (
            <h3 className="text-xl font-semibold mb-2 mt-4">
              From Same Seller
            </h3>
          )}
          <div className="flex gap-2 flex-wrap">
            {car.fromSeller?.map((sellerCar) => (
              <Link
                key={sellerCar.id}
                to={`/list/${sellerCar.id}`}
              >
                <img
                  className="w-24 md:w-44"
                  src={sellerCar.images[0]}
                />
              </Link>
            ))}
          </div>
        </section>
        <section>
          <h3 className="text-xl px-2 py-4 border-b-2 border-white">
            <span className="font-semibold">Seller: </span>
            {car.seller}
          </h3>
        </section>
      </div>
    </div>
  )
}
