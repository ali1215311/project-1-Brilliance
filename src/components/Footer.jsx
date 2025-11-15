import Github from "./svg/Github";
import LinkedIn from "./svg/LinkedIn";
import Twitter from "./svg/Twitter";

const Footer = () => {
  return (
    <>
      <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[1060px] border-t border-[rgba(55,50,47,0.12)] pt-10 pb-16 m-auto">
        <div className="flex flex-col justify-between md:flex-row pb-8 md:px-8 lg:px-0">
          <div className="flex flex-col justify-start gap-8 p-4 md:p-8 h-auto">
            <h3 className="text-[#49423D] text-xl font-semibold leading-4">
              Brillance
            </h3>
            <p className="text-[rgba(73,66,61,0.90)] text-sm font-medium leading-[18px]">
              Coding made effortless
            </p>
            <div className="flex justify-start items-center gap-4">
              <Twitter />
              <LinkedIn />
              <Github />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-start p-4 md:p-8 gap-6 mad:gap-8">
            <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
              <h4 className="text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5">
                Product
              </h4>
              <div className="flex flex-col justify-end items-start gap-2">
                <p className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                  Features
                </p>
                <p className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                  Pricing
                </p>
                <p className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                  Integrations
                </p>
                <p className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                  Real-time Previews
                </p>
                <p className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                  Multi-Agent Coding
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
              <h4 className="text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5">
                Company
              </h4>
              <div className="flex flex-col justify-end items-start gap-2">
                <p className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                  About Us
                </p>
                <p className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                  Our Team
                </p>
                <p className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                  Careers
                </p>
                <p className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                  Brand
                </p>
                <p className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                  Contact
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
              <h4 className="text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5">
                Resources
              </h4>
              <div className="flex flex-col justify-end items-start gap-2">
                <p className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                  Terms of use
                </p>
                <p className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                  API Reference
                </p>
                <p className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                  Documentation
                </p>
                <p className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                  Community
                </p>
                <p className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                  Support
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-12 relative overflow-hidden border-t border-b border-[rgba(55,50,47,0.12)]"></div>
      </div>
    </>
  );
};
export default Footer;
