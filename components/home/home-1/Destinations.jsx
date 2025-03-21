"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { destinations1 } from "../../../data/desinations";
import { useTranslation } from "next-i18next";

const Destinations = () => {
  const { t } = useTranslation();

  const [filterOption, setFilterOption] = useState("all");
  const [filteredItems, setFilteredItems] = useState([]);

  const filterOptions = [
    { label: "All", value: "all" },
    { label: "Europe", value: "europe" },
    { label: "Asia", value: "asia" },
    { label: "North America", value: "north_america" },
    // add more options as needed
  ];
  useEffect(() => {
    if (filterOption == "all") {
      setFilteredItems(destinations1);
    } else {
      setFilteredItems(
        destinations1.filter((elm) => elm.region == filterOption)
      );
    }
  }, [filterOption]);

  return (
    <>
      <div className="tabs__controls d-flex js-tabs-controls">
        {filterOptions.map((option) => (
          <div key={option.value}>
            <button
              className={`tabs__button fw-500 text-15 px-30 py-15 rounded-4 js-tabs-button ${
                filterOption === option.value ? "is-tab-el-active" : ""
              }`}
              onClick={() => setFilterOption(option.value)}
            >
              {t(option.label)}
            </button>
          </div>
        ))}
      </div>

      <div className="tabs__content pt-30 js-tabs-content">
        <div className="tabs__pane -tab-item-1 is-tab-el-active">
          <div className="row y-gap-20">
            {filteredItems.map((item) => (
              <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2" key={item.id}>
                <Link href="#" className="d-block">
                  <div className="text-15 fw-500">{t(item.city)}</div>
                  <div className="text-14 text-light-1">
                    {item.properties} {t("properties")}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End .tabs__content */}
    </>
  );
};

export default Destinations;
