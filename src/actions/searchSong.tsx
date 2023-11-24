"use server";
import { redirect } from "next/navigation";

export async function searchSong(formData: FormData) {
  const songName = formData.get("songName");

  if (typeof songName !== "string") {
    return "No song name received";
  }

  const redirectUrl = songName.replace(/ /g, "-");

  redirect(`/search/${redirectUrl}`);
}
