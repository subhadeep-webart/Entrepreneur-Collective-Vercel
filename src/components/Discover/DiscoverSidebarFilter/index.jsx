import CustomButton from "@/components/ui/Buttons/CustomButton";
import FilterParameterContainer from "./FilterParameterContainer";

const DiscoverSidebarFilter=()=>{
    return(
        <aside className="w-full !py-9 !px-10 flex flex-col gap-6 bg-white border-1 border-neutral-light-gray">
            <h3 className="text-black text-xl font-semibold">FILTERS</h3>
            <FilterParameterContainer/>
            <CustomButton className="w-full text-base font-medium text-black">
                Clear Filters
            </CustomButton>
        </aside>
    )
}

export default DiscoverSidebarFilter;