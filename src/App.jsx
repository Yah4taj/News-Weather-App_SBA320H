import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './app.css'
import Nav from "./components/Nav";
import Weather from "./pages/Weather";
import News from "./pages/News";


console.log(import.meta.env.VITE_NEWSDATA_API_KEY);

function App() {
  return (
    <Router>
      <Nav />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

