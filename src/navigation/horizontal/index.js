import { Mail, Home } from 'react-feather'

export default [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: <Home size = { 20 }/>,
    navLink: '/dashboard'
},
    {
        id: 'sgsoil',
        title: 'Sand & Soil',
        icon: <Mail size = { 20 }/>,
        navLink: '/sgsoil'
    },
    {
      id: 'timwood',
      title: 'Timber & Wood',
      icon: <Mail size = { 20 }/>,
      navLink: '/timwood'
  },
  {
    id: 'divsect',
    title: 'Divisional Secretary',
    icon: <Mail size = { 20 }/>,
    navLink: '/divsect'
},
{
  id: 'vehicle',
  title: 'Vehicle',
  icon: <Mail size = { 20 }/>,
  navLink: '/vehicle'
},
{
  id: 'users',
  title: 'Users',
  icon: <Mail size = { 20 }/>,
  navLink: '/users'
}
]