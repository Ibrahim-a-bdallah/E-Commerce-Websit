import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
//main Layout
const MainLayouts = lazy(() => import("@layouts/index"));
/* pages*/
const Home = lazy(() => import("@pages/Home"));
const AboutUs = lazy(() => import("@pages/AboutUs"));
const Products = lazy(() => import("@pages/Products"));
const Categories = lazy(() => import("@pages/Categories"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
const Cart = lazy(() => import("@pages/Cart"));
const Wishlist = lazy(() => import("@pages/Wishlist"));
import Error from "@pages/Error";
import SuspensLottieFallback from "@components/feedback/LottieHandler/SuspensLottieFallback";
import Profile from "@pages/Profile";
import ProtectedRoute from "@components/Auth/protectedRoutes";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SuspensLottieFallback type="loading" styled="mt-5 pt-5">
        <MainLayouts />
      </SuspensLottieFallback>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <SuspensLottieFallback>
            <Home />
          </SuspensLottieFallback>
        ),
      },
      {
        path: "categories",
        element: (
          <SuspensLottieFallback>
            <Categories />
          </SuspensLottieFallback>
        ),
      },
      {
        path: "cart",
        element: (
          <SuspensLottieFallback>
            <Cart />
          </SuspensLottieFallback>
        ),
      },
      {
        path: "wishlist",
        element: (
          <ProtectedRoute>
            <SuspensLottieFallback>
              <Wishlist />
            </SuspensLottieFallback>
          </ProtectedRoute>
        ),
      },
      {
        path: "categories/products/:prefix",
        element: (
          <SuspensLottieFallback>
            <Products />
          </SuspensLottieFallback>
        ),
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Response", {
              statusText: "Category not found",
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path: "about-us",
        element: (
          <SuspensLottieFallback>
            <AboutUs />
          </SuspensLottieFallback>
        ),
      },
      {
        path: "login",
        element: (
          <SuspensLottieFallback>
            <Login />
          </SuspensLottieFallback>
        ),
      },
      {
        path: "register",
        element: (
          <SuspensLottieFallback>
            <Register />
          </SuspensLottieFallback>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <SuspensLottieFallback>
              <Profile />
            </SuspensLottieFallback>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
