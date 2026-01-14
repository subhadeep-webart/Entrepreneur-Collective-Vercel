import PostTextArea from "@/components/ui/Textarea/PostTextArea";

const PostTextAreaContainer=()=>{
    return(
        <div className="w-full flex flex-col gap-10">
            <h3 className="text-4xl font-semibold text-black">AI ideas</h3>
            <PostTextArea/>
        </div>
    )
}

export default PostTextAreaContainer;