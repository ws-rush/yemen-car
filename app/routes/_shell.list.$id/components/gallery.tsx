export function Gallery() {
  const car = useLoaderData() as Car
  const [selectedImage, setSelectedImage] = useState(car.images[0])

  return (
    <section>
      <div className="flex flex-col gap-2">
        <img
          alt="main image"
          className="h-96 w-full object-cover"
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
