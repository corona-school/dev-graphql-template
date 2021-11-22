import { ApolloClient, HttpLink, InMemoryCache, TypedDocumentNode } from "@apollo/client";
import { fetch } from "cross-fetch";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: "http://corona-school-backend-dev.herokuapp.com/apollo", 
        fetch, 
        headers: {
            "authorization": "Bearer af31743e-6674-4fc7-b026-5c4abdfaedc8"
        }
    })
});

export class GraphQLError extends Error {
    constructor(public errors: Readonly<object[]>) {
        super(`GraphQLError: ${errors.join(" ")}`);
    }
}

export async function query<Result, Variables>(query: TypedDocumentNode<Result, Variables>, variables: Variables): Promise<Result | never> {
    const result = await client.query({
        query,
        variables
    });

    if (result.errors) {
        throw new GraphQLError(result.errors);
    }

    return result.data;
}

export async function mutate<Result, Variables>(mutation: TypedDocumentNode<Result, Variables>, variables: Variables): Promise<Result | never> {
    const result = await client.mutate({
        mutation,
        variables
    });

    if (result.errors) {
        throw new GraphQLError(result.errors);
    }

    return result.data!;
}
