import { RouterProvider, createBrowserRouter } from 'react-router-dom'  
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
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
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
