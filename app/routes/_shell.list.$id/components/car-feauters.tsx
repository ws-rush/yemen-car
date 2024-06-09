import CarbonDistributeVerticalBottom from '~icons/carbon/distribute-vertical-bottom'
import CarbonFusionBlender from '~icons/carbon/fusion-blender'
import CarbonIbmCloudKubernetesService from '~icons/carbon/ibm-cloud-kubernetes-service'
import CarbonSettings from '~icons/carbon/settings'

export function CarFeatures() {
  const car = useLoaderData() as Car
  return (
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
        <span>{`${car.fule}`}</span>
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
  )
}
