const HeadingTemplate = ({
  svg,
  templateName,
  title,
  shortDes1,
  shortDes2,
  hide,
}) => {
  return (
    <>
      <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[1060px] flex justify-center items-center gap-6 px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] m-auto">
        <div className="w-full flex flex-col justify-center items-center p-4 gap-3">
          <div className="flex px-3.5 py-1.5 bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-[90px] gap-2 border border-[rgba(2,6,23,0.08)]">
            <span>{svg}</span>
            <h2 className="text-center text-[#37322F] text-xs font-medium leading-3">
              {templateName}
            </h2>
          </div>
          <h3 className="w-full max-w-[472.55px] text-center text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] tracking-tight">
            {title}
          </h3>
          <p className="text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7">
            {shortDes1}
            <br className={hide ? "hidden sm:block" : ""} /> {shortDes2}
          </p>
        </div>
      </div>
    </>
  );
};
export default HeadingTemplate;
