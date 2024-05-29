import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./components/signup"
import Signin from "./components/signin"
import Blog from "./components/blog"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/blog/:id" element={<Blog/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
