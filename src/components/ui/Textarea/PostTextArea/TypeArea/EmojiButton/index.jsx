import { Icons } from "@/assets";
import { Button } from "@heroui/react";

function EmojiButton({ onToggle }) {
    return (
        <Button
            type="button"
            className="p-1 bg-transparent relative"
            onPress={onToggle}
            aria-label="Toggle emoji picker"
            isIconOnly
        >
            <Icons.Smile size={20} className="text-oynx"/>
        </Button>
    );
}

export default EmojiButton;