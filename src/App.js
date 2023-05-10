import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home />}/>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="*" element={<Home />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
