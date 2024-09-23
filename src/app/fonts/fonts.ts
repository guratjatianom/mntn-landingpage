import { Playfair_Display, Montserrat } from 'next/font/google';

export const playfair_display = Playfair_Display({
  variable: '--font-playfair_display',
  weight: '600',
  subsets: ['latin'],
});

export const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: ['500', '600', '700', '800'],
  subsets: ['latin'],
});
