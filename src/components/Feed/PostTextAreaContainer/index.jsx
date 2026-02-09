import PostTextArea from "@/components/ui/Textarea/PostTextArea";

const PostTextAreaContainer=({header})=>{
    return(
        <div className="w-full flex flex-col gap-10">
          {header &&   <h3 className="text-4xl font-semibold text-black">{header}</h3>}
            <PostTextArea/>
        </div>
    )
}

export default PostTextAreaContainer;