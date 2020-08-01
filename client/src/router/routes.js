import Index from '../pages/Index';
import Scan from '../pages/Scan';

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
        path: '/scan',
        name: 'scan',
        component: Scan
    }
]
  
export default routes;