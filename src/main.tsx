import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './routers/App';
import ErrorBoundary from './routers/ErrorBoundry';

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

import { NotFound } from './components/index.components';
import { Home, About, Services} from './components/outlets/index.outlets';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router}/>
    </ErrorBoundary>
  </StrictMode>,
)
