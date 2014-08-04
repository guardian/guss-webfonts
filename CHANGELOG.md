## 2.0.0 (2014-08-04)

- [new] Serve WOFF 2.0 format to very modern browsers
- [new] Setting to load fonts without kerning tables:
```scss
/**
 * Kerning
 *
 * - on: larger file, better rendering
 * - off: smaller files
 *
 *  @type String
 */
$guss-webfonts-kerning: 'on' !default;
```
- [fix] SVG fonts work in older browsers
- [fix] `Guardian Weekend Condensed Web` renamed to `Guardian Weekend Cond Web`
to match the internal name character length limit

## 1.0.2 (2014-07-24)

- [fixed] a bug reported in #1 where SVG fonts would not load

## 1.0.1 (2014-07-24)

- [new] Documentation is [SassDoc](https://github.com/SassDoc/sassdoc) compliant


## 1.0.0 (2014-07-21)

Public release.
