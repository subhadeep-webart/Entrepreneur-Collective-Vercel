const PostDisplayCardWrapper = ({ headerText, children }) => {
    return (
        <div className="w-full flex flex-col gap-10">
            <h3 className="font-semibold text-3xl text-smoky-black">{headerText}</h3>
            {children}
        </div>
    )
}

export default PostDisplayCardWrapper;