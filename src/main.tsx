import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { StoreProvider } from 'easy-peasy'
import store from "./store/index.store.ts";
import { App as KonstaApp } from 'konsta/react'
import { router } from "./router/index.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <KonstaApp theme="material">
        <RouterProvider router={ router } />
      </KonstaApp>
    </StoreProvider>
  </React.StrictMode>,
)
