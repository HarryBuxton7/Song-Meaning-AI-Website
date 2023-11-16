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
        'X-RapidAPI-Key': '0bd4a892f6msh6810b9e73168e6ep1190c7jsnae4ef1e5d2f0',
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
