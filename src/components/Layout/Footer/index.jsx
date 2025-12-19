import { Icons, PUBLIC_IMAGES } from "@/assets";
import FormInput from "@/components/Home/ReachUsSection/FormInput";
import LinkButton from "@/components/ui/Buttons/LinkButton";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-soft-black !pt-14">
      <section className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <div className="!space-y-7">
              <div className="w-[197px] h-[50px] relative">
                <Image
                  src={PUBLIC_IMAGES.Logo}
                  alt="Website Logo"
                  fill
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="font-normal text-sm text-white max-w-[286px]">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Etiam mattis dui vel placerat lacinia.
              </p>
            </div>
          </div>

          <div className="col-span-2 !pt-3">
            <h4 className="font-bold text-lg text-white !mb-3">Useful Links</h4>
            <ul className="font-normal text-sm !space-y-2 text-white">
              <li>Home</li>
              <li>People</li>
              <li>Master classes</li>
              <li>About us</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="col-span-3 !pt-3">
            <h4 className="font-bold text-lg text-white !mb-3.5">Legal</h4>
            <ul className="font-normal text-sm !space-y-3 text-white">
              <li>Terms of Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="col-span-3 !pt-3">
            <h4 className="font-bold text-lg text-white !mb-7">
              Sign up for exclusive updates
            </h4>
            <div className="flex !mb-9">
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
                  base: "w-36",
                }}
              />
              <LinkButton
                href="#"
                className="w-36 h-12 font-semibold text-sm text-foreground"
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
