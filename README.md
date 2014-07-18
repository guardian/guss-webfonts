# Guss Webfonts

Guardian Webfonts for your prototyping needs.

Important: use these fonts in production at your own risk!  
Read the End User License Agreement before deploying any of these fonts
at a user-facing URL.

## Quick start

```
bower install guss-webfonts --save
```

### Point directly to the css

This will load all the Guardian webfonts, hinted, with the largest character
set:

```html
<link rel="stylesheet" href="bower_components/guss-webfonts/all-webfonts.css" type="text/css" />
```

### …or import the file in Sass

1. Configure and import guss-webfonts

```scss
// HTTP path or url where the browser will look for fonts
// if you use an asset domain, you would set it to:
// $guss-webfonts-base-url: '//assets.yourdomain.com/path/to/guss-webfonts';

$guss-webfonts-base-url: '/path/to/guss-webfonts';


// Charset
//
// - ascii: 256 characters only, very small
// - latin1: latin 1 character set
// - original: full character set

$guss-webfonts-charset: 'original' !default;


// Hinting {String}
//
// - on: larger file but better rendering in Windows
// - off: smaller files, render well on HiDPI displays

$guss-webfonts-hinting: 'on' !default;


@import 'path/to/guss-webfonts/_webfonts.scss';
```


2. Output the @font-face declarations

```scss
// all @font-face rules
@include guss-webfonts();

// only Guardian Compact Web
@include guss-webfonts(32);

// all Guardian Agate Sans weights/styles
@include guss-webfonts((1, 2, 3, 4));

// all except Guardian Sans
@include guss-webfonts($exclude: (13, 14, 15));
```

## License and usage

These fonts are the property of Commercial Type.

The font files are for internal use exclusively. You may use them for
prototyping purposes but not serve them publicly on your own domain.

For more information, read the attached Commercial Type End User License
Agreement.
