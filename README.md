[![deffy](http://i.imgur.com/k1hlQxA.png)](#)

# deffy [![Support this project][donate-now]][paypal-donations]

Small and fast library to set default values.

## Installation

```sh
$ npm i deffy
```

## Example

```js
// Dependencies
var Deffy = require("deffy");

console.log(Deffy(undefined, "Hello World"));
// => "Hello World"

console.log(Deffy("Hello World", 42));
// => 42

console.log(Deffy("Hello", "World"));
// => "World"

console.log(Deffy("", "World", true));
// => "World"

console.log(Deffy("", "World"));
// => ""

console.log(Deffy("foo", function (input) {
    return input === "foo" ? "bar" : "foo";
}));
// => "bar"
```

## Documentation

### `Deffy(input, def, options)`
Computes a final value by providing the input and default values.

#### Params
- **Anything** `input`: The input value.
- **Anything|Function** `def`: The default value or a function getting the input value as first argument.
- **Object|Boolean** `options`: The `empty` value or an object containing the following fields:

 - `empty` (Boolean): Handles the input value as empty field (`input || default`). Default is `false`.

#### Return
- **Anything** The computed value.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`blah`](https://github.com/IonicaBizau/blah)

 - [`bug-killer`](https://github.com/IonicaBizau/node-bug-killer)

 - [`cli-gh-cal`](https://github.com/IonicaBizau/cli-gh-cal)

 - [`engine-tools`](https://github.com/jillix/engine-tools) by jillix

 - [`git-stats`](https://github.com/IonicaBizau/git-stats)

 - [`gpm`](https://github.com/IonicaBizau/node-gpm)

 - [`one-by-one`](https://github.com/IonicaBizau/node-one-by-one)

 - [`same-time`](https://github.com/IonicaBizau/same-time.js)

 - [`set-or-get`](https://github.com/IonicaBizau/node-set-or-get)

 - [`ssh-remote`](https://github.com/IonicaBizau/ssh-remote)

 - [`svg.connectable.js`](https://github.com/jillix/svg.connectable.js) by jillix

 - [`ul`](https://github.com/IonicaBizau/node-ul)

 - [`web-term`](https://github.com/IonicaBizau/web-term)

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md