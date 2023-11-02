import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// importing all components
import NavBar from "./components/landing/NavBar";
import DashBoard from "./components/dashboard/DashBoard";
import Username from "./components/login/Username"
import Password from './components/login/Password';
import Register from './components/login/Register';
import Recovery from './components/login/Recovery';
import Reset from './components/login/Reset';
import PageNotFound from './components/login/PageNotFound';

// auth middleware
import { AuthorizeUser, ProtectRoute } from './login-middleware/middleware/auth'

//  root routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar></NavBar>
  },
  {
    path: '/username',
    element: <Username></Username>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/password',
    element: <ProtectRoute><Password /></ProtectRoute>
  },
  {
    path: '/recovery',
    element: <Recovery></Recovery>
  },
  {
    path: '/reset',
    element: <Reset></Reset>
  },
  {
    path: '/dashboard',
    element: <DashBoard></DashBoard>
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  },
])


function App() {
  return (
    <>
      <main>
        <RouterProvider router={router}></RouterProvider>
      </main>
    </>
  )
}

export default App;
