import { Icons } from "@/assets"

const PostEngagement=()=>{
    return(
        <div className="w-full flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <div className="relative flex">
                    <Icons.Heart className="" size={14}/>
                    <Icons.Smile className="" size={14}/>
                </div>
                <p className="text-base">James Deans and 12k Others</p>
            </div>
            <div className="flex gap-4 items-center">
                <div className="flex gap-2 items-center">
                    <Icons.MessageCircle size={18} className="text-almost-black"/>
                    <span className="inline-block ml-2 text-almost-black">500</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Icons.Share2 size={18} className="text-almost-black"/>
                    <span className="inline-block ml-2 text-almost-black">120</span>
                </div>
            </div>
        </div>
    )
}

export default PostEngagement