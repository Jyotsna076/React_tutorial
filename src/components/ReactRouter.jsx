import { BrowserRouter,Routes,Route,Link } from "react-router";

export default function ReactRouter() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Routes>
          <Route path="/" element={<h1>Home</h1>}>
            {" "}
          </Route>
          <Route path="/about" element={<h1>About</h1>}>
            {" "}
          </Route>
          <Route path="/Contact" element={<h1>Contact</h1>}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
