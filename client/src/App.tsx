import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SimpleBottomNavigation from "./Components/Navbar";
import SearchAppBar from "./Components/SearchBar";
function App() {
  return (
    <div>
      <BrowserRouter>
        <SearchAppBar />
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
        <SimpleBottomNavigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
