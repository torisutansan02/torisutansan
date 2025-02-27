import { Auth0Client } from "@auth0/nextjs-auth0/server"

export const auth0 = new Auth0Client({
    secret: process.env.AUTH0_SECRET,
    baseURL: process.env.APP_BASE_URL, // ✅ Ensure this is set
    issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`, // ✅ Ensure this is set
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    authorizationParams: {
      scope: "openid profile email",
      audience: "urn:custom:api",
    },
  });