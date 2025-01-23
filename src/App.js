import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,RouterProvider}from 'react-router-dom';
import Navbar from './component/Navbar';
import Book from './component/Book';
import UserResgister from './component/UserResgister';
import LibrariyanRegister from './component/LibrariyanRegister';
import HomePage from './component/HomePage';
import BookRegisteration from './component/BookRegisteration';
//create  routes
const routes=createBrowserRouter([

{
  path:"/",
  element:<> <Navbar/> <HomePage/></>
},

{
  path:"/userRegister",
  element:<><UserResgister/></>
},
{
  path:"/librariyanRegister",
  element:<><LibrariyanRegister/></>
},
{
  path:"/home",
  element:<> <HomePage/> </>
},
{
  path:"/book",
  element:<> <BookRegisteration/></>
},
{
  path:"/namebook",
  element:<> <Book/> </>
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
