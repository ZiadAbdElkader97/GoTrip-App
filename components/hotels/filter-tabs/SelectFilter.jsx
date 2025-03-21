import { useTranslation } from "next-i18next";

const SelectFilter = () => {
  const { t } = useTranslation();

  return (
    <select className="form-select rounded-4 border-light justify-between text-16 fw-500 px-20 h-50 w-140 sm:w-full text-14">
      <option defaultValue>{t("Hotel")}</option>
      <option value="animation">{t("Animation")}</option>
      <option value="design">{t("Design")}</option>
      <option value="illustration">{t("Illustration")}</option>
      <option value="lifestyle">{t("Lifestyle")}</option>
      <option value="business">{t("Business")}</option>
    </select>
  );
};

export default SelectFilter;
