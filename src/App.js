import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Logout from "./Pages/Logout/Logout";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
