import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,Routerprovide, RouterProvider}from 'react-router-dom';
import Navbar from './component/Navbar';
import Book from './component/Book';
import UserResgister from './component/UserResgister';
import LibrariyanRegister from './component/LibrariyanRegister';
//create  routes
const routes=createBrowserRouter([

{
  path:"/",
  element:<> <Navbar/></>
},
{
  path:"/book",
  element:<> <Book/> </>
},
{
  path:"/userRegister",
  element:<><UserResgister/></>
},
{
  path:"/librariyanRegister",
  element:<><LibrariyanRegister/></>
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
