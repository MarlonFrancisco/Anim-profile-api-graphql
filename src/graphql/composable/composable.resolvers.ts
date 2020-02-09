import { GraphQLFieldResolver } from "graphql";

export type ComposerResolver<TSource, EContext> = (
    fn: GraphQLFieldResolver<TSource, EContext>,
) => GraphQLFieldResolver<TSource, EContext>;

export function composer<TSource, EContext>(
    ...funcs: ComposerResolver<TSource, EContext>[]
): ComposerResolver<TSource, EContext> {
    if (funcs.length === 0) {
        return (o: any) => o;
    }

    if (funcs.length === 1) {
        return funcs[0];
    }

    const last = funcs[funcs.length - 1];
    return (
        fn: GraphQLFieldResolver<TSource, EContext>,
    ): GraphQLFieldResolver<TSource, EContext> => {
        let result = last(fn);
        for (let c = funcs.length - 2; c >= 0; c--) {
            const func = funcs[c];
            result = func(result);
        }
        return result;
    };
}
