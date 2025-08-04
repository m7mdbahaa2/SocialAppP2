import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Posts from './Components/Pages/Posts/Posts';
import NotFound from './Components/Pages/NotFound/NotFound';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import Profile from './Components/Pages/Profile/Profile';

function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [{
      index: '/',
      element: <Home />
    }, {
      path: 'about',
      element: <About />
    }, {
      path: 'posts',
      element: <Posts />
    }, {
      path: 'notfound',
      element: <NotFound />
    }, {
      path: 'login',
      element: <Login />
    }, {
      path: 'register',
      element: <Register />
    }, {
      path: 'profile',
      element: <Profile />
    },]
  }])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
