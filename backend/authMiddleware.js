const { expressjwt: jwt } = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const domain = "dev-5p074mfzmc6i0d7x.us.auth0.com"; // e.g., dev-abc123.us.auth0.com
const audience = "YOUR_AUTH0_API_IDENTIFIER"; // optional, can skip if not set

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${domain}/.well-known/jwks.json`,
  }),
  audience: audience, // remove this line if you're not using a custom API
  issuer: `https://${domain}/`,
  algorithms: ["RS256"],
});

module.exports = checkJwt;
