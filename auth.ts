import NextAuth from "next-auth";

export const { handlers, auth } = NextAuth({
  debug: true,
  providers: [
    {
      id: "logindotgov",
      name: "Login.gov",
      type: "oidc",
      issuer: "https://idp.int.identitysandbox.gov/", // to infer the .well-known/openid-configuration URL
      clientId: process.env.AUTH_CLIENT_ID, // from Login.gov's app dashboard
      authorization: {
        params: { acr_values: "http://idmanagement.gov/ns/assurance/loa/1" },
        // Change this to specify different requirements for authentication, such as requiring identify verification, PIV, etc. Choose from options listed here:
        // https://idp.int.identitysandbox.gov/.well-known/openid-configuration
      },
      checks: ["pkce", "state", "nonce"],
      client: {
        token_endpoint_auth_method: "none", // This is the key to making Login.gov work since it doesn't issue a client secret.
      },
    },
  ],
});
