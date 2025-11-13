const Card = ({ title, description, imgSrc, alt }) => {
  return (
    <>
      <div className="w-full flex flex-col  px-6 py-5 gap-2 border-b last:border-b-0 border-l-0 border-r-0 md:border md:last:border-b border-[#E0DEDB]/80">
        <h3 className="text-[#49423D] text-sm md:text-sm font-semibold leading-6">
          {title}
        </h3>
        <p className="text-[#605A57] text-[13px] md:text-[13px] font-normal leading-[22px] md:leading-[22px]">
          {description}
        </p>
        <img
          src={imgSrc}
          alt={alt}
          className="w-full h-40 object-cover rounded-md mt-3"
        />
      </div>
    </>
  );
};
export default Card;
