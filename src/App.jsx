import { RouterProvider, createBrowserRouter } from 'react-router-dom'  
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import JobsPage from './pages/Jobs';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/jobs",
      element: <JobsPage />,
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
