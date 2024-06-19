import { RouteObject } from "react-router-dom";

import { Home, Movie, Serie } from '../pages'

export const ROUTES: RouteObject[] = [
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/movie/:id',
    Component: Movie,
  },
  {
    path: '/serie/:id',
    Component: Serie,
  }
]