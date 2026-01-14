import WhatWeOfferCard from "./WhatWeOfferCard"

const WhatWeOfferingContainer = () => {
    return (
        <div className="flex flex-col gap-7">
            <h3 className="font-semibold text-lg text-black">Providing services</h3>
            <div className="grid grid-cols-4 gap-7">
                <WhatWeOfferCard />
                <WhatWeOfferCard />
                <WhatWeOfferCard />
                <WhatWeOfferCard />
            </div>
        </div>
    )
}

export default WhatWeOfferingContainer