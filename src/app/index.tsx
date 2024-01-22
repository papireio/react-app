import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { AppStateProvider } from '@app/context'

import App from './App'

const bootstrap = () => {
  const selector = document.querySelector('#root')
  if (selector) {
    const root = createRoot(selector)

    root.render(
      <AppStateProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppStateProvider>
    )
  } else {
    throw new Error("Can't get document selector.")
  }
}

export default bootstrap
