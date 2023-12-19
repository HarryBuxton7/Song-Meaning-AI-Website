import jsonData from "./SongLyrics.json";

export async function getSongLyrics(songId: string) {
  return jsonData.lyrics.lyrics.body.html;

  const url = `https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=${songId}}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${process.env.API_KEY}`,
      "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.lyrics.lyrics.body.html;
  } catch (error) {
    console.error(error);
  }
}
