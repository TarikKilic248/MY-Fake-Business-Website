# Gülümseyelim

A small, static website prepared for TikTok Developer App Review.

## Pages

- `index.html` — product overview and TikTok Login Kit connection flow
- `terms.html` — Terms of Service
- `privacy.html` — Privacy Policy
- `callback.html` — OAuth callback state validation

The site requests only `user.info.basic` and `video.list`. The client secret is
never placed in browser code; a production deployment must exchange the returned
authorization code on a server. Before submitting for review, deploy these files
over HTTPS on a verified domain and add the exact callback URL shown on the home
page to the TikTok Developer Portal.