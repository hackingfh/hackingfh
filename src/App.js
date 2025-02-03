import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from "./pages/Cart";
import SignInPage from "./pages/login";
import SignUp from "./pages/sign_up";

function App() {
  return (
    <BrowserRouter>
      <PageContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/SignInPage" element={<SignInPage />} />
          <Route path="/sign_up" element={<SignUp />} />
        </Routes>
      </PageContainer>
    </BrowserRouter>
  );
}

export default App;