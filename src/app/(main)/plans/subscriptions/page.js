import SubscriptionPlanCard from "@/components/Plans/SubscriptionPlanCard";
import { PLANS_DETAILS } from "@/contants/app_contant";

const SubscriptionPlanPage=()=>{
    return(
        <div className="w-full grid grid-cols-3 gap-7">
            {
                PLANS_DETAILS?.map((planDetails,index)=>(
                    <SubscriptionPlanCard key={`my-plan-${index+1}`} planDetails={planDetails}/>
                ))
            }
        </div>
    )
}

export default SubscriptionPlanPage;