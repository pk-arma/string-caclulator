import { add } from "./stringCaclulator";

test("should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("should return the number itself if one number is provided", () => {
  expect(add("5")).toBe(5);
});

test("should return the sum of two numbers", () => {
  expect(add("1,2")).toBe(3);
});

test("should handle newlines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("should support custom delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("should throw an exception for negative numbers", () => {
  expect(() => add("1,-2,-3")).toThrow("Negative numbers not allowed: -2,-3");
});
function expect(arg0: number) {
  throw new Error("Function not implemented.");
}
