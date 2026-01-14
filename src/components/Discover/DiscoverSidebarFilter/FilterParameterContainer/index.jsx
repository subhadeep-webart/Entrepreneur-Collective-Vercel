"use client"
import { Checkbox, CheckboxGroup, cn } from "@heroui/react";
import FilterContent from "../FilterContent";
import { FILTER_CONSTANTS } from "@/contants/app_contant";

const FilterParameterContainer = () => {
    return (
        <>
            <FilterContent>
                <FilterContent.Header>
                    Talent Type
                </FilterContent.Header>
                <FilterContent.Content>
                    <CheckboxGroup defaultValue={["all"]} radius="none" classNames={{
                    }}>
                        {
                            FILTER_CONSTANTS?.map((filterItem) => (<Checkbox key={filterItem.key} value={filterItem.value} classNames={{ base: cn("data-[selected=true]:bg-transparent"), wrapper: "!mr-2" }}>{filterItem.label}</Checkbox>))
                        }
                    </CheckboxGroup>
                </FilterContent.Content>
            </FilterContent>
        </>
    )
}

export default FilterParameterContainer;