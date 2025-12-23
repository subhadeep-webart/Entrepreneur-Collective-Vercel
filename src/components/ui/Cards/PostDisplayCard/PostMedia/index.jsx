import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";

const PostMedia = () => {
    return (
        <div className="w-full h-72 relative">
            <Image src={PUBLIC_IMAGES.post1} alt="post_1" className="w-full h-full object-cover" fill />
        </div>
    )
}

export default PostMedia;