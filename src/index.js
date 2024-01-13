import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DefaultPage from './pages/DefaultPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PageNotFound from './components/ErrorComponent/PageNotFound';
import teamPagePoster from "./Assets/posters/TeamPagePoster.png"
import eventPagePoster from "./Assets/posters/eventPagePoster.png"
import galleryPagePoster from "./Assets/posters/galleryPagePoster.png"
import AppHero from './components/AppHero';
import TeamPage from './pages/TeamPage';
// import AboutPage from './pages/AboutPage';
import EventPage from './pages/EventPage';
import GalleryPage from './pages/GalleryPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultPage>
      <App />
    </DefaultPage>,
    errorElement: <DefaultPage>
      <PageNotFound />
    </DefaultPage>
  },
  {
    path: "/team",
    element: <DefaultPage>
      <AppHero poster={teamPagePoster} />
      <TeamPage />
    </DefaultPage>,
  },
  {
    path: "/event",
    element: <DefaultPage>
      <AppHero poster={eventPagePoster} />
      <EventPage />
    </DefaultPage>,
  },
  {
    path: "/gallery",
    element: <DefaultPage>
      <AppHero poster={galleryPagePoster} />
      <GalleryPage />
    </DefaultPage>,
  },

]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
