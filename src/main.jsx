import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/globalStyles";
import { router } from "./routes";
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
            <RouterProvider router={router} />
          </Elements>
          <ToastContainer autoClose={2000} theme="dark" />
        </StrictMode>
      </AppProvider>
    </ThemeProvider>
  </>
);
