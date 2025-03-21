import { useTranslation } from "next-i18next";

const CallToActions = () => {
  const { t } = useTranslation();

  return (
    <section className="layout-pt-md layout-pb-md bg-dark-2">
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-auto">
            <div className="row y-gap-20  flex-wrap items-center">
              <div className="col-auto">
                <div className="icon-newsletter text-60 sm:text-40 text-white" />
              </div>
              <div className="col-auto">
                <h4 className="text-26 text-white fw-600">
                  {t("Your Travel Journey Starts Here")}
                </h4>
                <div className="text-white">
                  {t("Sign up and we`'ll send the best deals to you")}
                </div>
              </div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-auto">
            <div className="single-field -w-410 d-flex x-gap-10 y-gap-20">
              <div>
                <input
                  className="bg-white h-60"
                  type="text"
                  placeholder={t("Your Email")}
                />
              </div>
              {/* End email input */}

              <div>
                <button className="button -md h-60 bg-blue-1 text-white">
                  {t("Subscribe")}
                </button>
              </div>
              {/* End subscribe btn */}
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default CallToActions;
