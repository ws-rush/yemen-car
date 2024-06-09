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
  return (
    <div>
      <Gallery />
    </div>
  )
}
