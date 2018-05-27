export default function ifThenElse(predicate) {
  return function ifThenElsePredicate(consequent) {
    return function ifThenElsePredicateConsequent(alternative) {
      return function ifThenElsePredicateConsequentAlternative(value) {
        if (predicate(value)) {
          return consequent(value);
        }

        return alternative(value);
      };
    };
  };
}
