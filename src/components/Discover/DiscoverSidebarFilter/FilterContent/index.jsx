const FilterContent = ({children}) => {
    return (
        <div className="w-full flex flex-col gap-3">
            {children}
        </div>
    )
}

const Header = ({ children }) => {
    return (
        <h3 className="font-medium text-base text-black">{children}</h3>
    )
}

const Content = ({ children }) => {
    return (
        <div className="w-full flex flex-col gap-3">
            {children}
        </div>
    )
}

FilterContent.Header = Header;
FilterContent.Content = Content;

export default FilterContent;