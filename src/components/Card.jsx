const Card = ({ title, description, imgSrc, alt, classes = "", type }) => {
  return (
    <>
      <div className="w-full flex flex-col  px-6 py-5 gap-2 border-b last:border-b-0 border-l-0 border-r-0 md:border md:last:border-b border-[#E0DEDB]/80">
        <div className="flex flex-col gap-2">
          <h3
            className={`font-semibold ${
              type === 2
                ? "text-[#49423D] text-sm md:text-sm leading-6"
                : "text-[#37322F] text-lg sm:text-xl leading-tight"
            }`}
          >
            {title}
          </h3>
          <p
            className={`font-normal text-[#605A57] ${
              type === 2
                ? "text-[13px] md:text-[13px] leading-[22px] md:leading-[22px]"
                : "text-sm md:text-base leading-relaxed"
            }`}
          >
            {description}
          </p>
        </div>
        <div
          className={
            type === 2
              ? ""
              : "w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden"
          }
        >
          <img src={imgSrc} alt={alt} className={classes} />
        </div>
      </div>
    </>
  );
};
export default Card;
