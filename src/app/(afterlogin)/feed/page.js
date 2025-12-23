import PostCardDisplay from "@/components/ui/Cards/PostDisplayCard";
import PostTextArea from "@/components/ui/Textarea/PostTextArea";

const FeedPage = () => {
    return (
        <section className="container after_login_page_section_padding">
            <PostTextArea/>
            <div className="grid grid-cols-12 w-full">
                <div className="col-span-8">
                   <PostCardDisplay/>
                </div>
                <div className="col-span-4">

                </div>
            </div>
        </section>
    )
}

export default FeedPage;