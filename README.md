# Guss Webfonts

Guardian Webfonts for your prototyping needs.

Read the End User License Agreement before deploying any of these fonts
at a user-facing URL.

These fonts are the property of Commercial Type.

The font files are for internal use exclusively. You may use them for
prototyping purposes but not serve them publicly on your own domain
unless you have a license for it.

For more information, read the Commercial Type End User License Agreement.

## Quick start

```bash
$ bower install guss-webfonts --save
```

### Point directly to the css

This will load all the Guardian webfonts, hinted, with the largest character
set:

```html
<link rel="stylesheet" href="bower_components/guss-webfonts/all-webfonts.css" type="text/css" />
```

Note that on Next Gen Web and Apps, Guardian Text Egyptian bold actually loads
the medium weight of the font.

### …or import the file in Sass

#### 1. Configure and import guss-webfonts

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

#### 2. Output the @font-face declarations

```scss
// outputs all @font-face rules
@include guss-webfonts();
```

## Font selection

Font properties are stored in the `$guss-webfonts` map.

```scss
$guss-webfonts: (
     1:  ( family: 'Guardian Agate Sans 1 Web',      weight: 'bold',     style: 'normal' ),
     2:  ( family: 'Guardian Agate Sans 1 Web',      weight: 'bold',     style: 'italic' ),
     3:  ( family: 'Guardian Agate Sans 1 Web',      weight: 'regular',  style: 'normal' ),
     4:  ( family: 'Guardian Agate Sans 1 Web',      weight: 'regular',  style: 'italic' ),
     5:  ( family: 'Guardian Egyptian Web',          weight: 'bold',     style: 'normal' ),
     6:  ( family: 'Guardian Egyptian Web',          weight: 'bold',     style: 'italic' ),
     7:  ( family: 'Guardian Egyptian Web',          weight: 'light',    style: 'normal' ),
     8:  ( family: 'Guardian Egyptian Web',          weight: 'medium',   style: 'normal' ),
     9:  ( family: 'Guardian Egyptian Web',          weight: 'regular',  style: 'normal' ),
     10: ( family: 'Guardian Egyptian Web',          weight: 'regular',  style: 'italic' ),
     11: ( family: 'Guardian Egyptian Web',          weight: 'semibold', style: 'normal' ),
     12: ( family: 'Guardian Egyptian Web',          weight: 'semibold', style: 'italic' ),
     13: ( family: 'Guardian Sans Web',              weight: 'light',    style: 'normal' ),
     14: ( family: 'Guardian Sans Web',              weight: 'regular',  style: 'normal' ),
     15: ( family: 'Guardian Sans Web',              weight: 'semibold', style: 'normal' ),
     16: ( family: 'Guardian Text Egyptian Web',     weight: 'black',    style: 'normal' ),
     17: ( family: 'Guardian Text Egyptian Web',     weight: 'black',    style: 'italic' ),
     18: ( family: 'Guardian Text Egyptian Web',     weight: 'bold',     style: 'normal' ),
     19: ( family: 'Guardian Text Egyptian Web',     weight: 'bold',     style: 'italic' ),
     20: ( family: 'Guardian Text Egyptian Web',     weight: 'medium',   style: 'normal' ),
     21: ( family: 'Guardian Text Egyptian Web',     weight: 'medium',   style: 'italic' ),
     22: ( family: 'Guardian Text Egyptian Web',     weight: 'regular',  style: 'normal' ),
     23: ( family: 'Guardian Text Egyptian Web',     weight: 'regular',  style: 'italic' ),
     24: ( family: 'Guardian Text Sans Web',         weight: 'black',    style: 'normal' ),
     25: ( family: 'Guardian Text Sans Web',         weight: 'black',    style: 'italic' ),
     26: ( family: 'Guardian Text Sans Web',         weight: 'bold',     style: 'normal' ),
     27: ( family: 'Guardian Text Sans Web',         weight: 'bold',     style: 'italic' ),
     28: ( family: 'Guardian Text Sans Web',         weight: 'medium',   style: 'normal' ),
     29: ( family: 'Guardian Text Sans Web',         weight: 'medium',   style: 'italic' ),
     30: ( family: 'Guardian Text Sans Web',         weight: 'regular',  style: 'normal' ),
     31: ( family: 'Guardian Text Sans Web',         weight: 'regular',  style: 'italic' ),
     32: ( family: 'Guardian Compact Web',           weight: 'black',    style: 'normal', extra: true ),
     33: ( family: 'Guardian Titlepiece Web',        weight: 'regular',  style: 'normal', extra: true ),
     34: ( family: 'Guardian Weekend Condensed Web', weight: 'black',    style: 'normal', extra: true )
);
```

You can curate your own list of @font-face declarations like so:

```scss
// only Guardian Compact Web
@include guss-webfonts(32);

// all Guardian Agate Sans weights/styles
@include guss-webfonts((1, 2, 3, 4));

// all except Guardian Sans
@include guss-webfonts($exclude: (13, 14, 15));
```

## Acknowledgements

Thanks to @HugoGiraudel for his help and the [string functions][sassystrings]
in use in this project.

[sassystrings]: https://github.com/HugoGiraudel/SassyStrings
