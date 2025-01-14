
import './App.css'
import {createBrowserRouter, RouterProvider, Navigate} from "react-router";
import {RootLayout} from "./components/layout/RootLayout.tsx";
import {UserSignUpPage} from "./pages/UserSignUpPage.tsx";
import {UserSignInPage} from "./pages/UserSignInPage.tsx";
import {UserDashboard} from "./pages/UserDashboard.tsx";
import {NotFoundLayout} from "./components/layout/NotFoundLayout.tsx";


function App() {

    const route = createBrowserRouter([
        {
            path: '',
            element: <RootLayout/>,
            children: [
                { path: '', element: <Navigate to="/signin" replace /> },
                { path : '/signin', element : <UserSignInPage/>},
                { path : '/signup', element : <UserSignUpPage/>},
                { path : '/dashbord', element : <UserDashboard/>},
            ],


        },
        {
            path: '*',
            element: <NotFoundLayout/>,
        }

    ])


  return (
    <>
        <RouterProvider router={route}/>

    </>
  )
}

export default App
