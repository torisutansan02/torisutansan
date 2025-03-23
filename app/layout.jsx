// app/layout.js or app/layout.tsx
import { Auth0Provider } from '@auth0/nextjs-auth0';

export const metadata = {
  title: 'Your App Name',
  description: 'Your app description',
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
