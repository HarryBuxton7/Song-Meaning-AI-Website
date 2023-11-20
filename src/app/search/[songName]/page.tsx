import { getSongList } from "./getSongList";
import { List } from "@mui/material";
import { SongList } from "./SongList";
import Box from "@mui/material/Box";
import Input from "./Input";

export default async function SearchPage({
  params,
}: {
  params: { songName: string };
}) {
  const songList = await getSongList(params.songName.replace(/-/g, " "));

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box sx={{ height: "10vh" }} />
        <form>
          <Input songName={params.songName.replace(/-/g, " ")} />
        </form>

        {songList && (
          <List
            sx={{ display: "flex", flexDirection: "column", align: "center" }}
          >
            {songList.hits.map((song: any) => (
              <SongList
                key={song.result.id}
                songUrl={song.result.song_art_image_thumbnail_url}
                songTitle={song.result.title}
                artistName={song.result.primary_artist.name}
                artistSlug={song.result.primary_artist.slug}
                songId={song.result.id}
              />
            ))}
          </List>
        )}
      </Box>
    </>
  );
}
