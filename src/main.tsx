import { StoreProvider } from 'easy-peasy'
import { App as KonstaApp } from 'konsta/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './router/index.tsx'
import store from './store/index.store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <KonstaApp theme="material">
        <RouterProvider router={router} />
      </KonstaApp>
    </StoreProvider>
  </React.StrictMode>
)
