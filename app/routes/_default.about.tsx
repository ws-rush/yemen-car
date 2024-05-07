import { attributes, ReactComponent } from '@/content/about.md'
import { Helmet } from 'react-helmet'

export function Component() {
  return (
    <>
      <Helmet>
        <title>{attributes.title}</title>
      </Helmet>
      <div className="text-base p-4 prose prose-truegray xl:text-xl dark:text-gray-50">
        <div className="text-center">
          <div className="text-4xl -mb-6 m-auto i-carbon-dicom-overlay" />
          <h3>{attributes.title}</h3>
        </div>
        <ReactComponent />
      </div>
    </>
  )
}