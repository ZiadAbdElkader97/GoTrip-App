import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "@/next-i18next.config";

if (!i18n.isInitialized) {
  i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      ...nextI18NextConfig.i18n, // تحميل الإعدادات مباشرة من next-i18next.config.js
      fallbackLng: nextI18NextConfig.i18n.defaultLocale || "en", // ضبط اللغة الافتراضية
      detection: {
        order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
        caches: ["cookie"],
      },
      backend: {
        loadPath: "/locales/{{lng}}/translation.json",
      },
      react: { useSuspense: false },
    });
}

export default appWithTranslation(i18n);
