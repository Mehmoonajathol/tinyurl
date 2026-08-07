import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Plans from "./Pages/Plans";

import Blog from "./Pages/Blog";
import Features from "./Pages/Features";
import Domains from "./Pages/Domains";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/features" element={<Features />} />
      <Route path="/domains" element={<Domains />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;