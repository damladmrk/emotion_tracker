import { Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import ReflectPage from "./pages/reflect/ReflectPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/reflect" element={<ReflectPage />} />
    </Routes>
  );
}
