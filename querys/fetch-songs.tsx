import { supabase } from '@/services/supabaseClient';
import { Song } from '@/types/song';
import { handleSupabaseError } from '@/utils/handle-supabase-error';

const fetchSongs = async (): Promise<Song[]> => {
  const { data, error } = await supabase
    .from('la-rockola')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    return handleSupabaseError(error, 'Error fetching songs');
  }

  return data as Song[];
};

export default fetchSongs;
