import { useTranslation } from "next-i18next";

const ContactInfo = () => {
  const { t } = useTranslation();

  const contactContent = [
    {
      id: 1,
      title: "Toll Free Customer Care",
      action: "tel:+(1) 123 456 7890",
      text: "+(1) 123 456 7890",
    },
    {
      id: 2,
      title: "Need live support?",
      action: "mailto:xyz@abc.com",
      text: "hi@gotrip.com",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mt-30" key={item.id}>
          <div className={"text-14 mt-30"}>{t(item.title)}</div>
          <a href={item.action} className="text-18 fw-500 text-blue-1 mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
