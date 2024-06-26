import largeScreen from '@/assets/images/large-screen.jpg?format=webp&quality=5'
import smallScreen from '@/assets/images/small-screen.jpg?format=webp&quality=5'
import { Trans } from '@lingui/macro'

export function Component() {
  const data = Object.values(
    import.meta.glob('../assets/logos/**/*.svg', { as: 'url', eager: true })
  )

  return (
    <div
      className="dark dark:text-white dark:bg-black h-screen bg-small-screen md:bg-large-screen bg-cover bg-center grayscale-[90%]"
      style={
        {
          '--large-screen': `url('${largeScreen}')`,
          '--small-screen': `url('${smallScreen}')`,
        } as React.CSSProperties
      }
    >
      <div className="h-full w-11/12 md:w-8/12 m-auto">
        <div className="h-full flex flex-col">
          <header className="flex h-24 items-center">
            {/* <Link to="/"> */}
            <h1 className="mb-2 text-2xl md:text-3xl font-black italic tracking-tight">
              <Trans>YemenCar.</Trans>
            </h1>
            {/* </Link> */}
            {/* <div className="ml-auto flex items-center space-x-4">
              <h2>gggg</h2>
            </div> */}
          </header>

          <div className="h-full flex flex-col justify-evenly">
            <section className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h2 className="text-5xl md:text-6xl">
                  <strong>Get</strong> Your <br /> Next <strong>Car</strong>
                </h2>
                <span className="md:text-lg max-w-96 text-gray-700 dark:text-gray-200">
                  While lease deals can offer great prices on a new car or
                  truck, you may find yourself looking.
                </span>
              </div>

              <div className="flex flex-col gap-2 w-full items-center space-x-2">
                <Form
                  action="/list"
                  className="w-full"
                  method="get"
                >
                  <Input
                    className="block h-12 md:h-16 border-2 placeholder:text-gray-900 dark:placeholder:text-gray-50 dark:focus-visible:ring-white"
                    name="q"
                    placeholder="get your next car"
                    type="search"
                  />
                </Form>
                <Link
                  className="self-start underline"
                  to="/list"
                >
                  or browse all cars
                </Link>
              </div>
            </section>

            <section className="overflow-hidden">
              <div className="flex w-max space-x-4 justify-center gap-16 animate-marquee">
                {data.map((url) => (
                  <img
                    alt={url.split('/').at(-1)?.replace('.svg', '')}
                    className="w-20 h-20 invert"
                    key={url}
                    src={url}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
