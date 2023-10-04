import { createDirectus, rest  } from "@directus/sdk";
import { graphql } from '@directus/sdk/graphql';

import gql from 'gql-tag'
const endpoint = import.meta.env.VITE_APP_DIRECTUS_ENDPOINT;

const install = ( app ) => {


    interface Pages {
        id: string;
        title: string;
        description: string;
    }
    
    interface Schema {
        sw_pages: Pages[];
    }
    
    const restClient = createDirectus(endpoint).with(rest());
    const graphqlClient = createDirectus(endpoint).with(graphql());
    const query = gql`
    query {
        sw_pages {
            title
            description
        }
    }`;

    // graphqlClient.query(query);
    
    
    app.provide("$rest", restClient);
    app.provide("$graphql", graphqlClient);

};

export default install;

