import PlansTab from "@/components/Plans/PlansTab";

const PlansPageLayout = ({ children }) => {
    return (
        <section className="w-full !py-24">
            <div className="container flex flex-col gap-8">
                <div className="w-full flex flex-col items-center text-black gap-4">
                    <h3 className="font-semibold text-4xl">More access. More opportunities</h3>
                    <p className="text-2xl font-normal">Explore some of the exclusive features that come with Premium</p>
                </div>
                {/* <PlansTab/> */}
                {children}
            </div>
        </section>
    )
}

export default PlansPageLayout;