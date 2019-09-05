import {PredicateFunctionType} from "./types";
import {MapperFunctionType} from "./types";

export default function ifThenElse<A, B, C> (predicate: PredicateFunctionType<A>) {
  return function ifThenElsePredicate (consequent: MapperFunctionType<A, B>) {
    return function ifThenElsePredicateConsequent (alternative: MapperFunctionType<A, C>) {
      return function ifThenElsePredicateConsequentAlternative (value: A): B | C {
        if (predicate(value)) {
          return consequent(value);
        }

        return alternative(value);
      };
    };
  };
}
