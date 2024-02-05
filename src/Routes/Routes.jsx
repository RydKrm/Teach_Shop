import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import LogIn from "../Pages/LogIn/LogIn";
import Registration from "../Pages/Registration/Registration";
import ProductContainer from "../Pages/Product/ProductContainer";
import Payment from "../Pages/Payment/Payment";
import ProductDetails from "../Pages/Product/ProductDetails/ProductDetails";
import ShoppingCart from "../Pages/ShoppingCart/ShoppingCart";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AdminProductList from "../Pages/Dashboard/AdminProductList/AdminProductList";
import AdminUserList from "../Pages/Dashboard/AdminUserList.jsx/AdminUserList";
import AdminMainDashboard from "../Pages/Dashboard/AdminMainDashboard/AdminMainDashboard";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },{
        path: 'login',
        element: <LogIn></LogIn>
      },{
        path: 'registration',
        element: <Registration></Registration>
      },{
        path: '/product',
        element: <ProductContainer />
      },{
        path: 'shopCart',
        element: <ShoppingCart />
      },{
        path: '/product',
        element: <ProductContainer />
      },,{
        path: 'product/productDetails/:id',
        element: <ProductDetails />
      },{
        path: "/paymentPage",
        element: <Payment />
      },{
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          {
            path:'productList',
            element: <AdminProductList/>
          },{
            path:'userList',
            element: <AdminUserList />
          },{
            path:'main',
            element: <AdminMainDashboard/>
          }
        ]
      }
    ]
  }
])