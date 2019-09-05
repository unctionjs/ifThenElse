# @unction/ifThenElse

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> PredicateFunctionType<A> => MapperFunctionType<A, B> => MapperFunctionType<A, C> => B | C

Based on a predicate it passes the value to a consequent or alternative function

``` javascript
ifThenElse(isEven)(toString)(toFloat)(1) // 1.0
ifThenElse(isEven)(toString)(toFloat)(2) // "2"
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/ifThenElse.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/ifThenElse.svg?maxAge=2592000&style=flat-square
