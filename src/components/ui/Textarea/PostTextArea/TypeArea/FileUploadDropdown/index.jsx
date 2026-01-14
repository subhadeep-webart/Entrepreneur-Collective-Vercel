import { Icons } from "@/assets"
import { Button } from "@heroui/react"

const FileUploadDropdown = () => {
    return (
        <Button isIconOnly className="bg-transparent hover:bg-transparent w-fit">
            <Icons.Paperclip size={18} className="text-oynx" />
        </Button>
    )
}

export default FileUploadDropdown