# guss-webfonts

## Using fonts

To use webfonts in your project, import them from the pasteup CDN like so:

```
https://pasteup.guim.co.uk/webfonts/1.0.0/noalts-not-hinted/GHGuardianHeadline-Black.woff
```

- `webfonts/1.0.0` follows the structure of `webfonts`.
- The last version is in `Gruntfile.js`.
- To know which files to use, follow <a href="https://github.com/guardian/frontend/issues/19550">this guide</a>.
- To know how to use them in SCSS follow the `example.scss` file.

## Uploading fonts

Replace the fonts in this repo, bump up the version in `Gruntfile.js`, then run

```
$ grunt release:fonts --id=AWS_ACCESS_KEY --secret=AWS_SECRET_KEY --session=AWS_SESSION_TOKEN
```

Using Janus credentials.
