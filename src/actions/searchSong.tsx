"use server";
import { redirect } from "next/navigation";

export async function searchSong(formData: FormData) {
  const songName = formData.get("songName");

  if (typeof songName !== "string") {
    return "No song name received";
  }

  const redirectUrl = songName.replace(/ /g, "-");

  redirect(`/search/${redirectUrl}`);

  /*
    const url = `https://genius-song-lyrics1.p.rapidapi.com/search/?q=${songName}&per_page=10&page=1`
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${process.env.API_KEY}`,
        'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      if (response.ok){
        const redirectUrl = songName.replace(/ /g, '-');
        redirect(`/search/${"redirectUrl"}`);
      } else {
        throw new Error(`HTTP Error: ${response.status}`);
      }
    } catch (error) {
        console.log(error)
    }
    */
}
