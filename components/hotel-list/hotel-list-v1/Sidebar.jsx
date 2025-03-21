import DealsFilter from "../sidebar/DealsFilter";
import Map from "../sidebar/Map";
import SearchBox from "../sidebar/SearchBox";
import PopularFilters from "../sidebar/PopularFilters";
import AminitesFilter from "../sidebar/AminitesFilter";
import RatingsFilter from "../sidebar/RatingsFilter";
import GuestRatingFilters from "../sidebar/GuestRatingFilters";
import StyleFilter from "../sidebar/StyleFilter";
import NeighborhoddFilter from "../sidebar/NeighborhoddFilter";
import PirceSlider from "../sidebar/PirceSlider";
import { useTranslation } from "next-i18next";

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="sidebar__item -no-border position-relative">
        <Map />
      </div>
      {/* End find map */}

      <div className="sidebar__item -no-border">
        <h5 className="text-18 fw-500 mb-10">{t("Search by property name")}</h5>
        <SearchBox />
      </div>
      {/* End search box */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">{t("Deals")}</h5>
        <div className="sidebar-checkbox">
          <div className="row y-gap-5 items-center">
            <DealsFilter />
          </div>
        </div>
      </div>
      {/* End deals filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">{t("Popular Filters")}</h5>
        <div className="sidebar-checkbox">
          <PopularFilters />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End popular filter */}

      <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">{t("Nightly Price")}</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <PirceSlider />
          </div>
        </div>
      </div>
      {/* End Nightly priceslider */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">{t("Aminities")}</h5>
        <div className="sidebar-checkbox">
          <AminitesFilter />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Aminities filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">{t("Star Rating")}</h5>
        <div className="row x-gap-10 y-gap-10 pt-10">
          <RatingsFilter />
        </div>
      </div>
      {/* End rating filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">{t("Guest Rating")}</h5>
        <div className="sidebar-checkbox">
          <GuestRatingFilters />
        </div>
      </div>
      {/* End Guest Rating */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">{t("Style")}</h5>
        <div className="sidebar-checkbox">
          <StyleFilter />
        </div>
      </div>
      {/* End style filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">{t("Neighborhood")}</h5>
        <div className="sidebar-checkbox">
          <NeighborhoddFilter />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Aminities filter */}
    </>
  );
};

export default Sidebar;
