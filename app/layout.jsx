"use client";
import Aos from "aos";
import { useEffect } from "react";
import SrollTop from "../components/common/ScrollTop";
import Head from "next/head";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "../styles/index.scss";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { useTranslation } from "next-i18next";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({ children }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    // تغيير اتجاه الصفحة بناءً على اللغة المختارة
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <body>
        <main>
          <Provider store={store}>
            {children}
            <SrollTop />
          </Provider>
        </main>
      </body>
    </html>
  );
}
