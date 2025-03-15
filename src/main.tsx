import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './routers/App';
import ErrorBoundary from './routers/ErrorBoundry';

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

import { NotFound } from './components/index.components';
import { Home, About, Services, Carrers, Request, Login, Forgot} from './components/outlets/index.outlets';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/carrer' element={<Carrers/>}/>
        <Route path='/request-a-demo' element={<Request/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/forgot-password' element={<Forgot/>}></Route>
    </>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router}/>
    </ErrorBoundary>
  </StrictMode>,
)
