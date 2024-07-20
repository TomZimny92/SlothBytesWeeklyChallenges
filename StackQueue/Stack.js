// Stack - Sloth Bytes 7/16/2024
//
// Implement a Stack
//
//
var Stack = /** @class */ (function () {
    function Stack() {
    }
    return Stack;
}());
var stack;
var size;
constructor();
{
    this.stack = [];
    this.size = 0;
}
push(value, number);
void {
    this: .stack.push(value),
    this: .size++
};
pop();
void {
    this: .stack.pop(),
    this: .size--
};
isEmpty();
boolean;
{
    return this.size === 0;
}
peek();
number;
{
    return this.stack[this.size - 1];
}
var testStack = new Stack();
for (var i = 1; i <= 10; ++i) {
    testStack.push(i);
}
