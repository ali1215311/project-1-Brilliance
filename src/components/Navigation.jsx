const Navigation = () => {
  return (
    <>
      <div className="w-full h-12 sm:h-14 md:h-16 lg:h-[84px] px-6 sm:px-8 md:px-12 lg:px-0 flex justify-center items-center">
        <div className="relative flex items-center justify-between w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[700px] lg:w-[700px] h-10 sm:h-11 md:h-12 py-1.5 sm:py-2 px-3 sm:px-4 md:px-4 pr-2 sm:pr-3 rounded-[50px] backdrop-blur-sm shadow-[0px_0px_0px_2px_white] overflow-hidden z-10">
          <h2 className="text-[#2F3037] text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-5 cursor-pointer">
            Brillance
          </h2>
          <nav className="flex justify-between sm:w-full">
            <div className="hidden sm:flex justify-center items-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-3.5 pl-3 sm:pl-4 md:pl-5 lg:pl-5 gap-2 sm:gap-3 md:gap-4 lg:gap-4">
              <div className="cursor-pointer">Products</div>
              <div className="cursor-pointer">Pricing</div>
              <div className="cursor-pointer">Docs</div>
            </div>
            <div className="px-2 sm:px-3 md:px-3.5 py-1 sm:py-1.5 bg-white cursor-pointer rounded-full overflow-hidden shadow-[0px_1px_2px_rgba(55,50,47,0.12)]">
              <div className="flex justify-center text-xs md:text-[13px] font-medium leading-5">
                Log in
              </div>
            </div>
          </nav>
        </div>
        <div className="absolute h-px w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[1060px] bg-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white] "></div>
      </div>
    </>
  );
};
export default Navigation;
