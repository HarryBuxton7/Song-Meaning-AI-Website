import jsonData from "./songList.json";

export async function getSongList(songName: string) {
  return jsonData;
  const url = `https://genius-song-lyrics1.p.rapidapi.com/search/?q=${songName}&per_page=10&page=1`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9c0db058c0msha961f9827bfcf90p1d445cjsn2106e68543e9",
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
