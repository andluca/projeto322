import { RouteObject } from "react-router-dom";

import { Home, Movie } from '../pages'

export const ROUTES: RouteObject[] = [
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/movie/:id',
    Component: Movie,
  }
]