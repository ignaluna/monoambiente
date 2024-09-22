export const handleSupabaseError = (
  error: any,
  defaultMessage: string
): never => {
  const errorMessage = error.message || defaultMessage;

  console.error('Supabase Error:', error);

  throw new Error(errorMessage);
};
