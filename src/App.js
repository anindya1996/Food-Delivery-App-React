import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/cart";

//Using JS
// const heading=document.createElement("h1");
// heading.innerHTML="Hello World!";

// const root=document.querySelector("#root");
// root.appendChild(heading);

//Using React
// const heading=React.createElement("h1",{id:"heading"},"Hello World from React!");

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

//JS

// {
//   /*<div id="parent">
//     <div id="child1">
//         <h1>I am h1 tag</h1>
//         <h2>I am h2 tag</h2>
//     </div>

//     <div id="child1">
//         <h1>I am h1 tag</h1>
//         <h2>I am h2 tag</h2>
//       </div>
//    </div> */
// }

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "I am a h1 tag of child1 right"),
//     React.createElement("h2", {}, "I am a h2 tag  of child1"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am a h1 tag  of child2"),
//     React.createElement("h2", {}, "I am a h2 tag  of child2"),
//   ]),
// ]);
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

//React Functional component
// const Title = () => <h1 className="heading">This is Heading</h1>;

// const name = <h1 className="name">Anindya</h1>;

// //Component Composition
// const HeadingComponent = () => (
//   <div id="container">
//     {name}
//     <Title />
//     <h1>Namaste React</h1>
//   </div>
// );

// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(<HeadingComponent />);

//Food ordering App

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //Authentication
  useEffect(() => {
    const data = {
      name: "Anindya",
    };
    setUserName(data.name);
  });

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={appRouter} />);
