export default function ifThenElse (predicate: PredicateFunctionType): Function {
  return function ifThenElsePredicate (consequent: UnaryFunctionType): Function {
    return function ifThenElsePredicateConsequent (alternative: UnaryFunctionType): Function {
      return function ifThenElsePredicateConsequentAlternative (value: mixed): mixed {
        if (predicate(value)) {
          return consequent(value)
        }

        return alternative(value)
      }
    }
  }
}
