import addSong from '@/querys/add-songs';
import { Song } from '@/types/song';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useAddSong = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (song: Song) => await addSong(song),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['songs'] });
    },
    onError: (error) => {
      console.error('Error adding song:', error);
    },
  });

  return {
    addSong: mutation.mutate,
    isLoadingAddSong: mutation.isPending,
    addSongError: mutation.error,
    addSongData: mutation.data,
  };
};

export default useAddSong;
