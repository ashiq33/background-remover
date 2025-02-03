import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import enTranslations from "./locales/en.json";
import bnTranslations from "./locales/bn.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    bn: { translation: bnTranslations },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);