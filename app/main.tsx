// css imports
import './globals.css'
import { I18nProvider } from '@lingui/react'
import { ClickToComponent } from 'click-to-react-component'
// js imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

function Loader() {
  return (
    <div className="h-screen grid place-items-center">
      <h1>I am Loader, Put your Logo here</h1>
    </div>
  )
}

createRoot(document.querySelector('#root') as Element).render(
  <StrictMode>
    <I18nProvider i18n={i18n}>
      <RouterProvider
        fallbackElement={<Loader />}
        router={router}
      />
      <ClickToComponent />
    </I18nProvider>
  </StrictMode>
)
