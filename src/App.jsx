
import './App.css'
import {Routes,Route} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.jsx";
import PostsPage from "./pages/PostsPage/PostsPage.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path='/posts' element={<PostsPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
