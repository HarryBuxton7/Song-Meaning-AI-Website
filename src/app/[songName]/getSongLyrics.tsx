import jsonData from "./songLyrics.json";

export async function getSongLyrics() {
  return jsonData.lyrics.lyrics.body.html;
}
