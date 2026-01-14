"use client";

import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import { useEffect, useRef, useState } from "react";

const REACTIONS = [
  { id: "like", label: "Like", icon: Icons.ThumbsUp },
  { id: "love", label: "Love", icon: Icons.Heart },
  // { id: "haha", label: "Haha", icon: Icons.Frown },
  // { id: "wow", label: "Wow", icon: Icons.Eye },
  // { id: "sad", label: "Sad", icon: Icons.Sad },
  // { id: "angry", label: "Angry", icon: Icons.Angry },
];

const ReactionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState(REACTIONS[0]);

  const containerRef = useRef(null);

  const handleReactionSelect = (reaction) => {
    setSelectedReaction(reaction);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block">
      <CustomButton
        clickHandler={() => setIsOpen((prev) => !prev)}
        className="bg-transparent w-24 flex items-center"
      >
        <selectedReaction.icon size={16} className="text-form-text" />
        <span className="ml-2 text-form-text">{selectedReaction.label}</span>
      </CustomButton>

      {isOpen && (
        <div className="absolute -top-12 left-0 bg-gray-200 shadow-md rounded-full !px-1 !py-2 flex gap-2 !z-50 border-1 w-fit">
          {REACTIONS.map((reaction) => (
            <button
              key={reaction.id}
              onClick={() => handleReactionSelect(reaction)}
              className="hover:scale-125 transition-transform"
            >
              <reaction.icon size={22} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReactionButton;
