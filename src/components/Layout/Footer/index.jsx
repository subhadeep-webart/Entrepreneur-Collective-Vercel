import { Icons, PUBLIC_IMAGES } from "@/assets";
import FormInput from "@/components/Home/ReachUsSection/FormInput";
import LinkButton from "@/components/ui/Buttons/LinkButton";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-soft-black">
      <section className="container">
        <div className="grid grid-cols-12 !py-6">
          <div className="col-span-12 lg:col-span-4">
            <div className="!space-y-2 lg:!space-y-7">
              <div className="w-[160px] lg:w-[197px] h-[36px] lg:h-[50px] relative">
                <Image
                  src={PUBLIC_IMAGES.Logo}
                  alt="Website Logo"
                  fill
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="font-normal text-xs lg:text-sm text-white max-w-[286px]">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Etiam mattis dui vel placerat lacinia.
              </p>
            </div>
          </div>

          <div className="col-span-6 lg:col-span-2 !pt-3">
            <h4 className="font-semibold lg:font-bold text-sm lg:text-lg text-white !mb-3">
              Useful Links
            </h4>
            <ul className="font-normal !space-y-2 text-white text-xs lg:text-sm">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>People</li>
              <li>Master classes</li>
              <li>
                <Link href={"/about-us"}>About us</Link>
              </li>
              <li>
                <Link href={"/contact-us"}>Contact</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-3 !pt-3">
            <h4 className="font-semibold lg:font-bold text-sm lg:text-lg text-white !mb-3">
              Legal
            </h4>
            <ul className="font-normal !space-y-2 text-white text-xs lg:text-sm">
              <li>Terms of Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-3 !py-4 flex flex-col gap-3 lg:gap-7">
            <h4 className="font-semibold lg:font-bold text-sm lg:text-lg text-white">
              Sign up for exclusive updates
            </h4>
            <div className="flex w-full">
              <FormInput
                placeholder="Email"
                type="email"
                classNames={{
                  inputWrapper: [
                    "border border-greige bg-transparent text-white h-12",
                    "hover:bg-transparent focus:bg-transparent active:bg-transparent",
                    "data-[hover=true]:bg-transparent",
                    "data-[focus=true]:bg-transparent",
                    "data-[focus-visible=true]:shadow-none",
                    "data-[pressed=true]:bg-transparent",
                    "data-[filled=true]:bg-transparent",
                    "data-[filled=true]:data-[hover=true]:bg-transparent",
                    "data-[filled=true]:data-[focus=true]:bg-transparent",
                  ],

                  input: [
                    "!text-white font-normal !pl-[18px]",
                    "placeholder:text-white placeholder:font-normal placeholder:text-[13px]",
                  ],
                  base: "w-fit lg:w-36",
                }}
              />
              <LinkButton
                href="#"
                className="w-30 lg:w-36 h-12 font-normal lg:font-semibold text-xs lg:text-sm text-foreground text-nowrap"
              >
                Subscribe Now!
              </LinkButton>
            </div>
            <div className="flex gap-4">
              <Icons.FacebookIcon />
              <Icons.InstagramIcon />
              <Icons.YoutubeIcon />
            </div>
          </div>
        </div>
      </section>
      <div className="bg-rich-black min-h-[72px] !mt-9 flex justify-center items-center ">
        <p className="font-medium text-sm text-off-white">
          © {new Date().getFullYear()}, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
