const { expressjwt: jwt } = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const domain = 'dev-5p074mfzmc6i0d7x.us.auth0.com'; // replace with your actual Auth0 domain

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${domain}/.well-known/jwks.json`,
  }),
  issuer: `https://${domain}/`,
  algorithms: ['RS256'],
});

module.exports = checkJwt;
