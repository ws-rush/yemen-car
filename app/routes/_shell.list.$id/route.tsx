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
    </div>
  )
}
