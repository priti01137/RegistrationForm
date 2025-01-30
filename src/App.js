import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,RouterProvider}from 'react-router-dom';
import Navbar from './component/Navbar';
import Book from './component/Book';
import UserResgister from './component/UserResgister';
import LibrariyanRegister from './component/LibrariyanRegister';
import HomePage from './component/HomePage';
import BookRegisteration from './component/BookRegisteration';
import LoginPage from './component/LoginPage';
import Member from './component/Members/Member';

//create  routes
const routes=createBrowserRouter([

// {
//   path:"/",
//   element:<> <Navbar/></>
// }

// {
//   path:"/userRegister",
//   element:<><Navbar/> <UserResgister/></>
// },
{
  path:"/librariyanRegister",
  element:<><Navbar/> <LibrariyanRegister/></>
},
{
  path:"/",
  element:<> <Navbar/> <HomePage/></>
},

{
  path:"/book",
  element:<> <Navbar/> <Book/> </>
},
{
  path:"/login",
  element:<> <Navbar/> <LoginPage/> </>
},
{
  path:"/member",
  element:<><Navbar/> <UserResgister/><Member/> </>
}

]);

function App() {
  return (
    <div>
     <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
