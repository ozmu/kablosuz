import Index from '../pages/Index';
import About from '../pages/About';

const routes = [
    { 
        path: '*', 
        redirect: '/dashboard' 
    },
    {
        path: '/dashboard',
        name: 'index',
        component: Index
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
]
  
export default routes;