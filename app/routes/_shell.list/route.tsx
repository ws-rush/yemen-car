import RadixIconsMixerHorizontal from '~icons/radix-icons/mixer-horizontal'
import RadixIconsPlus from '~icons/radix-icons/plus'

export function Component() {
  return (
    <div>
      <div className="flex">
        <Input
          className="block h-12"
          placeholder="get your next car"
          type="search"
        />
        <Button className="h-12 md:hidden">
          <RadixIconsMixerHorizontal />
        </Button>
      </div>

      <section className="flex items-center justify-between">
        <div className="flex flex-col gap-3 my-8">
          <h1 className="text-4xl">Welcome Back</h1>
          <span className="text-gray-400">
            Get your latest updates in cars world
          </span>
        </div>
        <Button>
          Add
          <RadixIconsPlus className="ms-2" />
        </Button>
      </section>

      <section>
        <h1 className="text-3xl">Available Cars</h1>
        {/* section for list cars in shadcn */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="w-64 h-10">
            <img
              alt="tets"
              src="https://images.creativefabrica.com/products/previews/2024/03/18/qrxQzast1/2drgj1vHC38XOci2ELwdVnBqMpe-desktop.jpg"
            />
          </Card>
        </div>
        <div className="flex justify-center my-8">
          <Button>Load More</Button>
        </div>
      </section>
    </div>
  )
}
