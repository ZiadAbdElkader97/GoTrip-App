import Link from "next/link";
import footerDataContent from "../../../data/footerContent";
import { useTranslation } from "next-i18next";

const FooterContent = () => {
  const { t } = useTranslation();

  return (
    <>
      {footerDataContent.map((item) => (
        <div className="col-xl-2 col-lg-4 col-sm-6" key={item.id}>
          <h5 className="text-16 fw-500 mb-30">{t(item.title)}</h5>
          <div className="d-flex y-gap-10 flex-column">
            {item.menuList.map((menu, i) => (
              <Link href={menu.routerPath} key={i}>
                {t(menu.name)}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default FooterContent;
