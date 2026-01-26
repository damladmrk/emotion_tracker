import { Routes, Route, BrowserRouter } from "react-router-dom";
import Explore from "./pages/Explore";
import ReflectPage from "./pages/reflect/ReflectPage";
import CalendarPage from "./pages/calendar/CalendarPage";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/reflect" element={<ReflectPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </>
  );
}
