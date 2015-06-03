var Deffy = require("../lib");

console.log(Deffy(undefined, "Hello World"));
console.log(Deffy("Hello World", 42));
console.log(Deffy("Hello", "World"));
debugger
console.log(Deffy("", "World", true));
console.log(Deffy("", "World"));
console.log(Deffy("foo", function (input) {
    return input === "foo" ? "bar" : "foo";
}));
