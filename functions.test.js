const { findLargest } = require("./functions")

test("findLargest - exists", () => {
    expect(findLargest).toBeDefined()
})

test("findLargest - is a function", () => {
    expect(findLargest instanceof Function).toEqual(true)
})

test("findLargest - returns a number", () => {
    expect(typeof findLargest() == "number").toEqual(true)
})

test("findLargest - identify the largest value's index", () => {
    expect(findLargest([1,1,4,1])).toEqual(2)
})

test("findLargest - returns -1 if no values are passed in", () => {
    expect(findLargest([])).toEqual(-1)
})