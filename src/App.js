
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import OurClients from './pages/ourClients'
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(createRoutesFromElements(
  <Route  element={<RootLayout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/ourClients" element={<OurClients/>}></Route>
  </Route>
  
))

function App() {
  return (
<RouterProvider router={router}></RouterProvider>
  );
}

export default App;
