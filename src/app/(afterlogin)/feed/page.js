import PostCardDisplay from "@/components/ui/Cards/PostDisplayCard";

const FeedPage = () => {
    return (
        <section className="container">
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