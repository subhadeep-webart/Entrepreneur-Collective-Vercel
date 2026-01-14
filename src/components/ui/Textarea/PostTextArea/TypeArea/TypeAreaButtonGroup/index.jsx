import { useState, useCallback, Suspense, memo } from "react";
import dynamic from "next/dynamic";
import EmojiButton from "../EmojiButton";
import FileUploadDropdown from "../FileUploadDropdown";

const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });

const MemoizedEmojiButton = memo(EmojiButton);
const MemoizedFileUploadDropdown = memo(FileUploadDropdown);

const TypeAreaButtonGroup = ({ localMessage, setLocalMessage, textareaRef }) => {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const onEmojiClick = (emojiData) => {
        const newMessage = (localMessage || "") + emojiData.emoji;
        setLocalMessage(newMessage);
        setShowEmojiPicker(false);
        textareaRef.current?.focus?.();
    };

    const toggleEmojiPicker = useCallback(() => {
        setShowEmojiPicker((s) => !s);
    }, []);

    return (
        <div className="flex items-center gap-2 ml-2 mb-1 relative">
            <MemoizedEmojiButton
                onToggle={toggleEmojiPicker}
                show={showEmojiPicker}
            />

            {showEmojiPicker && (
                <div className="absolute bottom-12 right-2 z-50">
                    <Suspense fallback={<div className="p-2">Loading emojis...</div>}>
                        <EmojiPicker onEmojiClick={onEmojiClick} />
                    </Suspense>
                </div>
            )}

            <div className="relative z-40">
                <MemoizedFileUploadDropdown />
            </div>
        </div>
    );
};

export default TypeAreaButtonGroup;
