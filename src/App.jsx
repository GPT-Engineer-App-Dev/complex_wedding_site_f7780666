import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Schedule from "./pages/Schedule";
import Logistics from "./pages/Logistics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/logistics" element={<Logistics />} />
      </Routes>
    </Router>
  );
}

export default App;
