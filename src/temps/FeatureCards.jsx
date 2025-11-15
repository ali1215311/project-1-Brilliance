import Card from "./Card";

import img2 from "../assets/images/services/analytics-dashboard-with-charts-graphs-and-data-vi.jpg";
import img3 from "../assets/images/services/data-visualization-dashboard-with-interactive-char.jpg";
import img1 from "../assets/images/services/plan-your-schedules.jpeg";

const cards = [
  {
    id: 1,
    title: "Plan your schedules",
    description:
      "Streamline customer subscriptions and billing with automated scheduling tools.",
    imgSrc: img1,
    alt: "Plan schedules dashboard",
    classes: "w-full h-40 object-cover rounded-md mt-3",
    type: 2,
  },
  {
    id: 2,
    title: "Analytics & insights",
    description:
      "Transform your business data into actionable insights with real-time analytics.",
    imgSrc: img2,
    alt: "Analytics dashboard",
    classes: "w-full h-40 object-cover rounded-md mt-3",
    type: 2,
  },
  {
    id: 3,
    title: "Collaborate seamlessly",
    description:
      "Keep your team aligned with shared dashboards and collaborative workflows.",
    imgSrc: img3,
    alt: "Data visualization dashboard",
    classes: "w-full h-40 object-cover rounded-md mt-3",
    type: 2,
  },
];

const FeatureCards = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[1060px]  border-t border-b mt-60 m-auto px-0 md:px-8 lg:px-12">
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
export default FeatureCards;
