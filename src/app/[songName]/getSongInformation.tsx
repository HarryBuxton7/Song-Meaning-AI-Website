//import jsonData from "./songInformation.json";

export async function getSongInformation(songId: string) {
  //return jsonData

  const url = `https://genius-song-lyrics1.p.rapidapi.com/song/details/?id=${songId}`;
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
    return result
  } catch (error) {
    console.error(error);
  }
}
