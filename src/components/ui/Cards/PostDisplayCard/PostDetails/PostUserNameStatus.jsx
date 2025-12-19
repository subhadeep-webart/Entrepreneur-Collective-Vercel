const PostUserNameStatus = ({ userName = "", status = "Just now" }) => {
    return (
        <div className="text-almost-black">
            <h3 className="text-base font-bold">{userName}</h3>
            <span className="inline-flex text-sm font-normal">{status}</span>
        </div>
    )
}

export default PostUserNameStatus;