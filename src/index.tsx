/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

// Use consistent styling
import 'sanitize.css/sanitize.css'

// Import root app
import { App } from 'app'
import 'react-phone-input-2/lib/bootstrap.css'

import { HelmetProvider } from 'react-helmet-async'

import { store } from 'store'

import reportWebVitals from 'reportWebVitals'
import { configureAxios } from 'configureAxios'

// Initialize languages
import 'locales/i18n'

// Initialize axios
configureAxios()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <HelmetProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HelmetProvider>
  </Provider>,
)

// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  })
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
