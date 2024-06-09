import { Gallery } from './components/gallery'
import CarbonDistributeVerticalBottom from '~icons/carbon/distribute-vertical-bottom'
import CarbonFusionBlender from '~icons/carbon/fusion-blender'
import CarbonIbmCloudKubernetesService from '~icons/carbon/ibm-cloud-kubernetes-service'
import CarbonSettings from '~icons/carbon/settings'
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
          <div className="flex gap-2 flex-wrap">
            <div className="p-4 border-2 border-white aspect-square flex flex-col justify-center items-center gap-2">
              <strong className="flex gap-2 items-center">
                <CarbonIbmCloudKubernetesService />
                Milage
              </strong>
              <span>{`${car.milage}`}</span>
            </div>
            <div className="p-4 border-2 border-white aspect-square flex flex-col justify-center items-center gap-2">
              <strong className="flex gap-2 items-center">
                <CarbonFusionBlender />
                Fule
              </strong>
              <span>{`${car.fuel}`}</span>
            </div>
            <div className="p-4 border-2 border-white aspect-square flex flex-col justify-center items-center gap-2">
              <strong className="flex gap-2 items-center">
                <CarbonSettings />
                Gearbox
              </strong>
              <span>{`${car.gearbox}`}</span>
            </div>
            <div className="p-4 border-2 border-white aspect-square flex flex-col justify-center items-center gap-2">
              <strong className="flex gap-2 items-center">
                <CarbonDistributeVerticalBottom />
                Seats
              </strong>
              <span>{`${car.seats}`}</span>
            </div>
          </div>
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
