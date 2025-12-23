import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";

const HeaderTestimonials = () => {
  return (
    <div className="container">
        <div className="flex flex-col items-center justify-center gap-8">
      <div className="flex gap-3.5">
        <h3 className="font-semibold text-6xl text-foreground">From Dreams</h3>

        <div className="relative w-[188px] h-[78px]">
          <Image
            src={PUBLIC_IMAGES.TestimonialImg1}
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <h3 className="font-semibold text-6xl text-foreground">to Achievements</h3>

      </div>
        <div className="flex gap-3.5">


        <div className="relative w-[188px] h-[78px]">
          <Image
            src={PUBLIC_IMAGES.TestimonialImg1}
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <h3 className="font-semibold text-6xl text-foreground"> – Hear Their Stories</h3>

      </div>
      <p className="text-lg font-normal text-foreground text-center">Donec lacinia fringilla libero ut finibus. Vestibulum euismod purus eu risus aliquam volutpat. Fusce scelerisque nibh sit amet quam gravida, eget euismod tellus viverra. Nulla dapibus dapibus augue.</p>
      </div>
    </div>
  );
};

export default HeaderTestimonials;
