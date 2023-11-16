"use client";
import Popover from "@mui/material/Popover";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";

export default function Highlight() {
  const [open, setOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleMouseUp = (e: any) => {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const rect = selection.getRangeAt(0).getBoundingClientRect();
        setMousePosition({
          top: rect.bottom + 10,
          left: (rect.left + rect.right) / 2,
        });
      }
      const highlightedText = window.getSelection()?.toString();
      if (highlightedText && highlightedText.length > 0) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };

    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <Popover
        anchorReference="anchorPosition"
        open={open}
        anchorPosition={{ top: mousePosition.top, left: mousePosition.left }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={() => setOpen(false)}
      >
        <Typography sx={{ p: 2 }}>Ask chatGPT</Typography>
      </Popover>
    </>
  );
}
