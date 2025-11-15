const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-6 sm:pt-8 md:pt-10 lg:pt-32">
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 items-center justify-center">
          <h1 className="w-full max-w-[748.71px] lg:w-[748.71px] text-center flex justify-center font-serif text-[#37322F] text-[24px] xs:text-[28px] sm:text-[36px] md:text-[52px] lg:text-[80px] font-normal leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-24 px-2 sm:px-4 md:px-0">
            Effortless custom contract
            <br />
            billing by Brillance
          </h1>
          <h2 className="w-full max-w-[506.08px] lg:w-[506.08px] text-center flex justify-center flex-col text-[rgba(55,50,47,0.80)] sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-normal lg:leading-7 px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm">
            Streamline your billing process with seamless automation
            <br className="hidden sm:block" /> for every custom contract,
            tailored by Brillance.
          </h2>
        </div>
        <div className="flex justify-center items-center bg-[#37322F] text-white text-sm sm:text-base md:text-[15px] font-medium leading-5 h-10 sm:h-11 md:h-12 px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-1.5 mt-6 sm:mt-8 md:mt-10 lg:mt-12 rounded-full cursor-pointer">
          Start for free
        </div>
      </div>
    </>
  );
};
export default Hero;
