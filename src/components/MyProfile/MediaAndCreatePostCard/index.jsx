import CustomButton from "@/components/ui/Buttons/CustomButton";
import CardComponent from "@/components/ui/Cards/CardComponent";

const MediaAndCreatePostCard = () => {
    return (
        <CardComponent>
            <CardComponent.Body>
                <div className="w-full flex flex-col gap-2.5">
                    <h3 className="font-semibold text-xl text-black">Media & create post</h3>
                    <span className="inline-block font-normal text-base text-variant-gray">Dive into our world of ideas, updates, and inspiration! Check out photos, videos, and thoughts from our team — capturing what we’re working on, what inspires us, and what’s next.</span>
                </div>
            </CardComponent.Body>
            <CardComponent.Footer>
                <CustomButton className="text-sm w-40">
                    Create a post
                </CustomButton>
            </CardComponent.Footer>
        </CardComponent>
    )
}

export default MediaAndCreatePostCard;