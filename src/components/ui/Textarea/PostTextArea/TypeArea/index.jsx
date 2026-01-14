import React, {
    useRef,
    useState,
} from "react";
import TextareaAutosize from "react-textarea-autosize";
import TypeAreaButtonGroup from "./TypeAreaButtonGroup";

export default function TypeArea() {
    const textareaRef = useRef(null);
    const [localMessage, setLocalMessage] = useState("");

    return (
        <>

            <div className="relative w-full flex border-b border-secondary">
                <TextareaAutosize
                    ref={textareaRef}
                    value={localMessage}
                    // onChange={handleUserTyping}
                    // onFocus={() => setShowEmojiPicker(false)}
                    // onKeyDown={handleKeyDown}
                    // onPaste={handlePaste}
                    minRows={1}
                    maxRows={6}
                    className="w-full resize-none text-sm leading-tight outline-none p-2 border-none focus:ring-0 bg-transparent"
                />

                {!localMessage && (
                    <span className="absolute inset-0 pl-4 flex items-center justify-start text-gray-400 pointer-events-none text-sm">
                        Type Here
                    </span>
                )}
                <TypeAreaButtonGroup localMessage={localMessage} setLocalMessage={setLocalMessage} textareaRef={textareaRef} />
            </div >
        </>

    );
}
