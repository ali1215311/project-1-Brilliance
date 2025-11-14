import img3 from "../assets/images/services/integration.png";
import img4 from "../assets/images/services/speak.png";
import img1 from "../assets/images/services/work-order.png";
import img2 from "../assets/images/services/work-sync.png";
import Card from "./Card";

import HeadingTemplate from "./HeadingTemplate";
import ServicesSvg from "./svg/ServicesSvg";

const template = {
  svg: <ServicesSvg />,
  templateName: "Services",
  title: "Built for absolute clarity and focused work",
  shortDes1: "Stay focused with tools that organize, connect",
  shortDes2: "and turn information into confident decisions.",
  hide: false,
};

const cards = [
  {
    id: 1,
    title: "Smart. Simple. Brilliant.",
    description:
      "Your data is beautifully organized so you see everything clearly without the clutter.",
    imgSrc: img1,
    alt: "Work Order",
    classes: "h-1/2 object-cover",
    type: 1,
  },
  {
    id: 2,
    title: "Your work, in sync",
    description:
      "Every update flows instantly across your team and keeps collaboration effortless and fast.",
    imgSrc: img2,
    alt: "Work Sync",
    classes: "h-full object-cover",
    type: 1,
  },
  {
    id: 3,
    title: "Effortless integration",
    description:
      "All your favorite tools connect in one place and work together seamlessly by design.",
    imgSrc: img3,
    alt: "Integration",
    classes: "h-full object-cover",
    type: 1,
  },
  {
    id: 4,
    title: "Numbers that speak",
    description:
      "Track growth with precision and turn raw data into confident decisions you can trust.",
    imgSrc: img4,
    alt: "Speak",
    classes: "h-full object-cover",
    type: 1,
  },
];

const Services = () => {
  return (
    <>
      <HeadingTemplate {...template} />

      <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[1060px] grid md:grid-cols-2 md:px-20 lg:px-12 border-b m-auto">
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imgSrc={card.imgSrc}
            alt={card.alt}
            classes={card.classes}
            type={card.type}
          />
        ))}
      </div>
    </>
  );
};
export default Services;
