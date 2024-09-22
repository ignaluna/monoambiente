import fetchSongs from '@/querys/fetch-songs';
import { Song } from '@/types/song';
import { useQuery } from '@tanstack/react-query';

const useFetchSongs = () => {
  const { data, isLoading, error } = useQuery<Song[], Error>({
    queryKey: ['songs'],
    queryFn: fetchSongs,
  });

  return {
    songs: data,
    isLoadingFetchSongs: isLoading,
    fetchSongsError: error,
  };
};

export default useFetchSongs;
