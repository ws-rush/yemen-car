export function Carcard({ car }: { readonly car: Car }) {
  return (
    <Link to={`/list/${car.id}`}>
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
  )
}
