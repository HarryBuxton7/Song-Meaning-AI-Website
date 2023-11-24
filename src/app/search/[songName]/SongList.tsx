"use client";
import { ListItemButton, ListItemText } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export function SongList({
  songUrl,
  songTitle,
  artistName,
  songId,
  fullTitle
}: {
  songUrl: string;
  songTitle: string;
  artistName: string;
  songId: string;
  fullTitle: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <ListItemButton
      key={songUrl}
      onClick={() => {
        setLoading(true)
        let sanitizedTitle = fullTitle.replace(/\s+/g, '-');
        sanitizedTitle = sanitizedTitle.replace(/[?]/g, '');
        router.push(`/${sanitizedTitle}?id=${songId}`)
      }}
    >
      {loading ? <CircularProgress size={90}/> : <Image src={songUrl} alt={songTitle} width={90} height={90}/>}
      <ListItemText sx={{ml: 1.5}} primary={songTitle} secondary={artistName} />
    </ListItemButton>
  );
}
