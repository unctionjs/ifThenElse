/* eslint-disable no-magic-numbers */
import ifThenElse from "./index";

const toFloat = (value) => parseFloat(value);
const toString = (value) => `${value}`;
const isEven = (value) => value % 2 === 0;

test("works", () => {
  expect(ifThenElse(isEven)(toString)(toFloat)(1)).toEqual(1.0);
});

test("works", () => {
  expect(ifThenElse(isEven)(toString)(toFloat)(2)).toEqual("2");
});
