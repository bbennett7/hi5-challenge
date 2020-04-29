import { Home, Breed } from '../pages';

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: Home,
  },
  {
    path: '/breeds/:breedName',
    exact: true,
    name: 'Breed',
    component: Breed,
  },
];

export default routes;
