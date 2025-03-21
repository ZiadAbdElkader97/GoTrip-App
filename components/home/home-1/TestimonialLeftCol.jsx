import { useTranslation } from "next-i18next";

const TestimonialLeftCol = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="text-30">
        {t("What our customers are") + "\n" + t("saying us?")}
      </h2>
      <p className="mt-20">
        {t("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo.")}
      </p>
      <div className="row y-gap-30 pt-60 lg:pt-40">
        <div className="col-sm-5 col-6">
          <div className="text-30 lh-15 fw-600">13m+</div>
          <div className="text-light-1 lh-15">{t("Happy People")}</div>
        </div>
        <div className="col-sm-5 col-6">
          <div className="text-30 lh-15 fw-600">4.88</div>
          <div className="text-light-1 lh-15">{t("Overall rating")}</div>
          <div className="d-flex x-gap-5 items-center pt-10">
            <div className="icon-star text-blue-1 text-10" />
            <div className="icon-star text-blue-1 text-10" />
            <div className="icon-star text-blue-1 text-10" />
            <div className="icon-star text-blue-1 text-10" />
            <div className="icon-star text-blue-1 text-10" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialLeftCol;
