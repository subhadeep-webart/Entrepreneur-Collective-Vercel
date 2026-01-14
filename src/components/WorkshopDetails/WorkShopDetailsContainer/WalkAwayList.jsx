const { Icons } = require("@/assets")

const WalkAwayList=()=>{
    return(
         <ul className="grid grid-cols-2 gap-8">
          <li className="flex items-start gap-3">
            <Icons.CircleCheck fill="#35855F" color="#fff" />
            <span className="text-base font-normal text-graphite-gray">
              A refined personal niche and value proposition
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Icons.CircleCheck fill="#35855F" color="#fff" />
            <span className="text-base font-normal text-graphite-gray">
              A pricing model that increases your closing rate
            </span>
          </li>
           <li className="flex items-start gap-3">
            <Icons.CircleCheck fill="#35855F" color="#fff" />
            <span className="text-base font-normal text-graphite-gray">
              Proven message templates for cold outreach
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Icons.CircleCheck fill="#35855F" color="#fff" />
            <span className="text-base font-normal text-graphite-gray">
              Tools to automate lead generation
            </span>
          </li>
        </ul>
      
    )
};

export default WalkAwayList;