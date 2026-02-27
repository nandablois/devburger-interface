import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/globalStyles";
import { Router } from "./routes";
import AppProvider from "./hooks";
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from "./config/stripeConfig";
import { ThemeProvider } from "styled-components";
import { standardTheme } from "./styles/themes/standard";

createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvider theme={standardTheme}>
      <GlobalStyles />
      <AppProvider>
        <StrictMode>
          <Elements stripe={stripePromise}>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </Elements>
          <ToastContainer autoClose={2000} theme="dark" />
        </StrictMode>
      </AppProvider>
    </ThemeProvider>
  </>
);
