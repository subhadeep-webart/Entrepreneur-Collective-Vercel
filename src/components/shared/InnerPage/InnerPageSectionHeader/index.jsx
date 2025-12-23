import InnerPageSectionContentHeader from "@/components/Layout/InnerPage/InnerPageSectionContentHeader"

const InnerPageSectionHeader = ({ headerText = "", subText = "",className="" }) => {
    return (
        <div className="container">
            <InnerPageSectionContentHeader className={className}>
                <InnerPageSectionContentHeader.HeaderText>
                    {headerText}
                </InnerPageSectionContentHeader.HeaderText>
                <InnerPageSectionContentHeader.SubText>
                    {subText}
                </InnerPageSectionContentHeader.SubText>
            </InnerPageSectionContentHeader>
        </div>
    )
}

export default InnerPageSectionHeader
