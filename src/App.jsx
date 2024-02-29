import {Routes, Route, Link} from "react-router-dom"
import HomePage from "../pages/HomePage.jsx";
import Services from "../pages/Services.jsx";
import CreatePage from "../pages/CreatePage.jsx";
import EditPage from "../pages/EditPage.jsx";

const App = () => {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="container mx-auto p-2">
          <Link to="/"><h2 className="text-white text-2xl font-bold">GateBot</h2></Link>
        </div>
      </nav>  

      <div className="container mx-auto p-2 h-full">     
        <Routes>
          <Route index element={<HomePage/>}></Route>
          <Route path="/Services" element={<Services/>}></Route>
          <Route path="/Services/:id" element={<Services/>}></Route>
          <Route path="/create" element={<CreatePage/>}></Route>
          <Route path="/edit/:id" element={<EditPage/>}></Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;