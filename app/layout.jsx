import { Auth0Provider } from "@auth0/nextjs-auth0";

export default function Layout({ children }) {
  return <Auth0Provider>{children}</Auth0Provider>;
}