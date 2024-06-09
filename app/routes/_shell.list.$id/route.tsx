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
  const [selectedImage, setSelectedImage] = useState(car.images[0])

  return (
    <section>
        <div className="flex flex-col gap-2">
          <img
            alt="main image"
            className="w-full"
            src={selectedImage}
          />
          <div className="flex gap-2 w-full">
            {car.images.map((image) => (
              <div
                className="relative cursor-pointer"
                key={image}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  alt="image"
                  className="flex-shrink-0 w-[100px]"
                  src={image}
                />
                <div
                  className={`absolute inset-0  ${image === selectedImage && 'dark:bg-gray-900/60'}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
