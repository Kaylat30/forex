// // Login.tsx
// import { Form, Link, useNavigate, useLocation } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from '../store';
// import { loginUser, selectStatus, selectError, selectUser } from '../slice/userSlice';
// import { toast } from 'react-toastify';

// export default function Login() {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
  
//   const [showPassword, setShowPassword] = useState(false);
//   const status = useAppSelector(selectStatus);
//   const error = useAppSelector(selectError);
//   const user = useAppSelector(selectUser);

//   const from = (location.state as { from: { pathname: string } })?.from?.pathname || '/';
//   const message = location.state?.message;


//   const handleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);
//     const email = formData.get('email') as string;
//     const password = formData.get('password') as string;

//     if (!email || !password) {
//       toast.error('Please fill in all fields', { position: 'bottom-left' });
//       return;
//     }
//     try {
//       await dispatch(loginUser({ email, password }));
//     } catch (error) {
//       toast.error('An error occurred while logging in', { position: 'bottom-left' });
//     }
//   };

//   useEffect(() => {
//     if (status === 'succeeded' && user) {
//       toast.success('Logged in successfully', {
//         position: 'bottom-left',
//       });
//       navigate(from, { replace: true });
//     } else if (status === 'failed' && error) {
//       toast.error(error || 'An error occurred while logging in', {
//         position: 'bottom-left',
//       });
//     }
//   }, [status, error, navigate, user, from]);

//   return (
//     <>
//       <div className='flex items-center flex-col my-10 space-y-3 lg:ml-28 lg:mr-28 xsm:ml-7 xsm:mr-7'>
//         <h1 className='font-bold text-xl'>Login</h1>
//         {error && <h3 className='text-red-500'>{error}</h3>}
//         {message && <h3 className='text-red-500'>{message}</h3>}
//         <Form onSubmit={handleSubmit} className='flex flex-col items-center space-y-7 shadow-md p-10' replace method='post'>
//           <input type='text' placeholder='email' name='email' className='border md:w-96 md:p-4 xsm:p-2 xsm:w-72 rounded-lg' />
//           <input type={showPassword ? 'text' : 'password'} name='password' placeholder='Password' className='border md:w-96 md:p-4 xsm:p-2 xsm:w-72 rounded-lg' />
//           <label className='cursor-pointer'>
//             <input type='checkbox' className='form-checkbox h-5 w-5' checked={showPassword} onChange={handleShowPassword} /> showPassword
//           </label>
//           <button
//             disabled={status === 'loading'}
//             type='submit'
//             className='md:p-4 xsm:p-2 xsm:px-4 md:px-9 font-bold text-white bg-brightBlue rounded-md baseline hover:shadow-2xl'
//           >
//             {status === 'loading' ? 'Signing in...' : 'SIGN IN'}
//           </button>
//         </Form>
//         <div>
//           Do not have an account? <Link className='text-brightBlue' to='/signup'>Sign up</Link>
//         </div>
//       </div>
//     </>
//   );
// }


export default function Login() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Forex"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
