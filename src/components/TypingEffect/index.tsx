import { Typography } from "@mui/material";
import React from "react";

import { useState, useEffect } from "react";

const texts = [
  "Hello, I am Aleksandra!",
  "Hallo, ich bin Aleksandra!",
  "Ciao, sono Aleksandra!",
  "Cześć, jestem Aleksandra!"
];

export default function TypingEffect() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < texts[index].length) {
          setText((prev) => prev + texts[index][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setDeleting(true), 1000);
        }
      } else {
        if (charIndex > 0) {
          setText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, deleting ? 100 : 150);
    return () => clearTimeout(timeout);
  }, [text, charIndex, deleting, index]);

  return (
    <div className="flex items-center justify-center pt-[100px] bg-purple-100">
      <Typography variant="h2" style={{ fontFamily: "Mynerve"}} className="text-[#5a2a82] font-holidays">{text}|</Typography>
    </div>
  );
}