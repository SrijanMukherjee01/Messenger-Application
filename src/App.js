import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useState } from "react";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Routes>
              <Route
                path="/rooms/:roomId"
                element={
                  <>
                    <Chat />
                  </>
                }
              ></Route>
              <Route path="/" element={<>{/* <Chat /> */}</>} />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;

/*
Page link : "https://www.freecodecamp.org/news/react-router-cheatsheet/"

Some points related to routing in react:
>If we want to provide routes within our entire application Router(BrowserRouter is imported as Router) needs to be wrapped around our entire component tree. That's why you will usually see it wrapped around or within the main app component

>The primary function of the BrowserRouter: to be able to declare individual routes within our application. 

>The next component is the Route component.We declare routes within the Router component as children. We can declare as many routes as we like

                         import { BrowserRouter as Router, Route } from 'react-router-dom';
                         
                         export default function App() {
                           return (
                             <Router>
                               <Route path="/about" component={About} />
                             </Router>
                           );
                         }

-->>The path prop specifies on what path of our app a given route is located.For an about page, for example, we might want that route to be accessible on the path '/about'. 
-->>The render or component props are used to display a specific component for our path.

>Finally, if want a component (such as a navbar) to be visible on every page, put it still within the browser router, but above (or below) the declared routes
<Router>
      <Navbar />
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
-->Inside BrowserRouter but above Routes(Switch in v5) and Route

>When we begin to add multiple routes, we'll notice something strange.Let's say we have a route for the home page and about page. Even though we specify two different paths, '/' and '/about', when I visit the about page we'll see both the home and the about components.We can fix this with the exact prop, on the home route to make sure that our router matches exactly the path '/' instead of '/about'

                        import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
                        
                        export default function App() {
                          return (
                            <Router>
                              <Navbar />
                              <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/about" component={About} />
                              </Switch>
                            </Router>
                          );
                        }

When it comes to switching between different routes that our router should show, there is in fact a dedicated component that you should be using if you have multiple routes within your router and that is the Switch component.The switch component should be included within the router and we can place all of our routes within it

IMPORTANT: ABOVE WORKS FOR V5 REACT-ROUTER-DOM, 2022 HAS V6 WHERE SWITCH IS REPLACED BY ROUTES, COMPONENT BY ELEMENT AND TO PASS MULTIPLE COMPONENTS INSIDE ELEMENT OF ONE ROUTE USE <></> AND INSIDE THEM PASS MULTIPLE COMPONENTS

WHAT WE ARE DOING HERE
2:15:52 --> We'll implement pagination and will use the id of the rooms stored in the firestore database and with the id we'll do the routing such that when any room is selected , our routing mechanism will take that room's id and use that to open it's chats 

2:22:46 --> We'll use useParams hook from react-router-dom to extract roomId from the url 
*/
