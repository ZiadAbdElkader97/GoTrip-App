"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import i18n from "@/i18n";

const LanguageMegaMenu = ({ textClass }) => {
  const { t } = useTranslation();

  const [click, setClick] = useState(false);
  const handleCurrency = () => setClick((prevState) => !prevState);

  const languageContent = [
    { id: 1, language: "English", country: "United States", code: "en" },
    { id: 2, language: "Türkçe", country: "Turkey", code: "tr" },
    { id: 3, language: "Español", country: "España", code: "es" },
    { id: 4, language: "Français", country: "France", code: "fr" },
    { id: 5, language: "Italiano", country: "Italia", code: "it" },
    { id: 6, language: "Dari, Pashto", country: "Afghanistan", code: "fa" },
    { id: 7, language: "Albanian", country: "Albania", code: "sq" },
    { id: 8, language: t("Arabic"), country: t("Egypt"), code: "ar" },
    { id: 9, language: "Catalan", country: "Andorra", code: "ca" },
    { id: 10, language: "Kongo, Portuguese", country: "Angola", code: "kg" },
    { id: 11, language: "Spanish", country: "Argentina", code: "es-AR" },
    { id: 12, language: "Armenian", country: "Armenia", code: "hy" },
    { id: 13, language: "English", country: "Australia", code: "en-AU" },
    { id: 14, language: "German", country: "Austria", code: "de" },
    { id: 15, language: "Azerbaijani", country: "Azerbaijan", code: "az" },
    { id: 16, language: "Bengali", country: "Bangladesh", code: "bn" },
    { id: 17, language: "English", country: "Barbados", code: "en-BB" },
    { id: 18, language: "Belarusian", country: "Belarus", code: "be" },
    { id: 19, language: "Dutch, French", country: "Belgium", code: "nl" },
    { id: 20, language: "English", country: "Belize", code: "en-BZ" },
  ];

  const [selectedLang, setSelectedLang] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("selectedLanguage");
    if (savedLang) {
      setSelectedLang(savedLang);
      i18n.changeLanguage(savedLang);
    }
  }, []);

  const handleSelectedLang = (langCode) => {
    setSelectedLang(langCode);
    i18n.changeLanguage(langCode);
    localStorage.setItem("selectedLanguage", langCode);
    setClick(false);
  };

  return (
    <>
      {/* Start language currency Selector */}
      <div className="col-auto">
        <button
          className={`d-flex items-center text-14 ${textClass}`}
          onClick={handleCurrency}
        >
          <Image
            width={20}
            height={20}
            src="/img/general/lang.png"
            alt="image"
            className="rounded-full mr-10"
          />
          <span className="js-language-mainTitle">
            {
              languageContent.find((item) => item.code === selectedLang)
                ?.country
            }
          </span>
          <i className="icon-chevron-sm-down text-7 ml-15" />
        </button>
      </div>
      {/* End language currency Selector */}

      <div className={`langMenu js-langMenu ${click ? "" : "is-hidden"}`}>
        <div className="currencyMenu__bg" onClick={handleCurrency}></div>
        <div className="langMenu__content bg-white rounded-4">
          <div className="d-flex items-center justify-between px-30 py-20 sm:px-15 border-bottom-light">
            <div className="text-20 fw-500 lh-15">
              {t("Select your language")}
            </div>
            {/* End title */}
            <button className="pointer" onClick={handleCurrency}>
              <i className="icon-close" />
            </button>
            {/* End colse button */}
          </div>
          {/* Emd flex-wrapper */}
          <ul className="modalGrid px-30 py-30 sm:px-15 sm:py-15">
            {languageContent.map((item) => (
              <li
                className={`modalGrid__item js-item ${
                  selectedLang === item.code ? "active" : ""
                }`}
                key={item.id}
                onClick={() => handleSelectedLang(item.code)}
              >
                <div className="py-10 px-15 sm:px-5 sm:py-5">
                  <div className="text-15 lh-15 fw-500 text-dark-1">
                    {item.language}
                  </div>
                  <div className="text-14 lh-15 mt-5 js-title">
                    {item.country}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* End langMenu */}
      </div>
    </>
  );
};

export default LanguageMegaMenu;
