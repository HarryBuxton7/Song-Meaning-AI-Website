import jsonData from "./songList.json";

export async function getSongList(songName: string) {
  return jsonData;
  const url = `https://genius-song-lyrics1.p.rapidapi.com/search/?q=${songName}&per_page=10&page=1`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${process.env.API_KEY}`,
      "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`HTTP Error: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
}
