const each = require('jest-each').default

const { findLargest } = require("./functions")

describe("findLargest", () => {

    it("exists", () => {
        expect(findLargest).toBeDefined()
    })
    
    it("is a function", () => {
        expect(findLargest instanceof Function).toEqual(true)
    })
    
    it("returns a number", () => {
        expect(typeof findLargest() == "number").toEqual(true)
    })
    
    it("identifys the largest value's index", () => {
        // Arrange
        const numbers = [1,1,4,1]
        // Act
        const result = findLargest(numbers)
        // Assert
        expect(result).toEqual(2)
    })
    
    it("returns -1 if no values are passed in", () => {
        expect(findLargest([])).toEqual(-1)
    })

    each([
        [2, [1,2,3]],
        [0, [-1, -10, -100]], 
        [-1, []],
        [0, [100000000000, 4, 5, 2, 556757, 234234, 234]],
        [4, [67, -999, 45, 999, 9999934]],
    ]).test(`Returns %s when passed %s`, (expected, arr) => {
        // Arrange
        const numbers = arr
        // Act
        const result = findLargest(numbers)
        // Assertion
        expect(result).toBe(expected)
    })
})