import TestimonialCommentSection from "@/components/shared/Caraousal/TestimonialComment";

const CommentSection = () => {
  return (
    <div className="flex flex-col gap-7">
      <TestimonialCommentSection />
      <TestimonialCommentSection
        swiperConfig={{
          autoplay: {
            delay: 0,
            reverseDirection: true,
          },
        }}
      />
    </div>
  );
};

export default CommentSection;
