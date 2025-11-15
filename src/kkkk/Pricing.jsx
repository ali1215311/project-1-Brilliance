import HeadingTemplate from "./HeadingTemplate";
import PricingSvg from "./svg/PricingSvg";

const template = {
  svg: <PricingSvg />,
  templateName: "Plans & Pricing",
  title: "Choose the perfect plan for your business",
  shortDes1:
    "Scale your operations with flexible pricing that grows with your team.",
  shortDes2: "Start free, upgrade when you're ready.",
  hide: false,
};

const Pricing = () => {
  return (
    <>
      <HeadingTemplate {...template} />
    </>
  );
};
export default Pricing;
