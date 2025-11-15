import HeadingTemplate from "./HeadingTemplate";
import TestimonialSvg from "./svg/TestimonialSvg";

const template = {
  svg: <TestimonialSvg />,
  templateName: "Testimonials",
  title: "Confidence backed by results",
  shortDes1: "Our customers achieve more each day",
  shortDes2: "because their tools are simple, powerful, and clear.",
  hide: true,
};

const Testimonials = () => {
  return (
    <>
      <HeadingTemplate {...template} />

      {/* First testimonial content */}
      <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[1060px] py-12 md:py-16 px-5 md:px-20 lg:px-14 flex flex-col md:flex-row justify-center items-start m-auto gap-4 border-b">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2011%2C%202025%2C%2011_35_19%20AM-z4zSRLsbOQDp7MJS1t8EXmGNB6Al9Z.png"
          alt="Jamie Marshall"
          className="w-48 h-50 rounded-lg object-cover"
        />
        <div className="flex flex-col gap-6 shadow-[0px_0px_0px_0.75px_rgba(50,45,43,0.12)] p-6">
          <div className="">
            <p className="text-[#49423D] text-2xl md:text-[32px] font-medium leading-10 md:leading-[42px] h-auto tracking-tight">
              "In just a few minutes, we transformed our data into actionable
              insights. The process was seamless and incredibly efficient!"
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[rgba(73,66,61,0.90)] text-lg font-medium leading-[26px]">
              Jamie Marshall
            </p>
            <p className="text-[rgba(73,66,61,0.70)] text-lg font-medium leading-[26px]">
              Co-founder, Exponent
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Testimonials;
