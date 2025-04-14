import { JSX, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate, useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { selectUser, logout, selectSessionExpiresAt } from './slice/userSlice';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Error from './components/Error';
import Chat from './pages/Chat';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="loginn" element={<ProtectedRoute element={<Chat />} />} />
      <Route path="chat" element={<Chat />} />
      <Route path="signup" element={<Signup />} /> 
      <Route path="login" element={<Login />} /> 
    </Route>
  )
);

function App(): JSX.Element {
  const dispatch = useDispatch();
  const sessionExpiresAt = useSelector(selectSessionExpiresAt);
  //const user = useSelector(selectUser);

  useEffect(() => {
    const checkSessionExpiry = () => {
      if (sessionExpiresAt && Date.now() > sessionExpiresAt) {
        dispatch(logout());
      }
    };

    const intervalId = setInterval(checkSessionExpiry, 1000);

    return () => clearInterval(intervalId);
  }, [dispatch, sessionExpiresAt]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

function ProtectedRoute({ element }: { element: JSX.Element }): JSX.Element {
  const user = useSelector(selectUser);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return element;
}
