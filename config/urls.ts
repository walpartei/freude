const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://freude-3qpwxxqt2-walpartei-admins-projects.vercel.app';

export const getImageUrl = (path: string) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE_URL}/${cleanPath}`;
};
