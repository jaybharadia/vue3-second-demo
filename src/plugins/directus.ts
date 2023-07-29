import { createDirectus, rest  } from "@directus/sdk";
import { graphql } from '@directus/sdk/graphql';

import gql from 'gql-tag'

const install = ( app ) => {

    interface Pages {
        id: string;
        title: string;
        description: string;
    }
    
    interface Schema {
        sw_pages: Pages[];
    }
    
    const restClient = createDirectus("https://products.7span.in").with(rest());
    const graphqlClient = createDirectus('https://products.7span.in').with(graphql());
    console.log("🚀 ~ file: directus.ts:17 ~ install ~ graphqlClient:", graphqlClient)

    const query = gql`
    query {
        sw_pages {
            title
            description
        }
    }`;

    graphqlClient.query(query);
    
    
    app.provide("$rest", restClient);
    app.provide("$graphql", graphqlClient);

};

export default install;

