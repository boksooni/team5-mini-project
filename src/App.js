import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

import Home from "./pages/HomePage";
import Login from "./pages/auth/LoginPage";
import SignUp from "./pages/auth/SignUpPage";
import UserEdit from "./pages/auth/UserEditPage";
import Cart from "./pages/product/Cart";
import Curation from "./pages/product/CurationPage";
import AllProduct from "./pages/product/AllProductPage";
import Promotion from "./pages/product/PromotionPage";
import PaymentCompleted from "./pages/product/PaymentCompletedPage";
import NotFound from "./pages/NotFound";
import LoginLayout from "./components/LoginLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<LoginLayout />}>
            <Route path="/useredit" element={<UserEdit />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/curtaion" element={<Curation />} />
            <Route path="/allproduct" element={<AllProduct />} />
            <Route path="/promotion" element={<Promotion />} />
            <Route path="/paymentcomplted" element={<PaymentCompleted />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;

// 1. HEADER, NAVBAR, 404page, ui-button, ui-gnb, homepage  //수연님
// 2. login, singup, useredit, user-slice //현재님
// 3. cart,payment-complete,  ui-card, cart-slice, //예진님
// 4. all-product, search-product, all-product-slice, searched-product-slice //효근님
// 5. curation page, promotion page, curation-slice, promotion-slice //화정님
