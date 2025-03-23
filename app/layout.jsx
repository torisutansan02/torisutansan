// app/layout.js or app/layout.tsx
import { Auth0Provider } from '@auth0/nextjs-auth0';
import '../styles/globals.css';

export const metadata = {
  title: 'torisutansan',
  description: 'My personal website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Auth0Provider>
          {children}
        </Auth0Provider>
      </body>
    </html>
  );
}