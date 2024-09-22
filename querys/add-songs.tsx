import { supabase } from '@/services/supabaseClient';
import { Song } from '@/types/song';
import { handleSupabaseError } from '@/utils/handle-supabase-error';

const addSong = async (song: Song) => {
  const { data, error } = await supabase
    .from('la-rockola')
    .insert(song)
    .select('*');

  if (error) {
    return handleSupabaseError(error, 'Error adding song');
  }
};

export default addSong;
