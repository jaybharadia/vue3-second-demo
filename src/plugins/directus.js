import { createDirectus, rest, aggregate, readItems } from "@directus/sdk";
// import { graphql } from '@directus/sdk/graphql';

// import gql from 'gql-tag'
const endpoint = import.meta.env.VITE_APP_DIRECTUS_ENDPOINT;

const install = (app) => {
    // interface Pages {
    //     id: string;
    //     title: string;
    //     description: string;
    // }

    // interface Schema {
    //     sw_pages: Pages[];
    // }

    const restClient = createDirectus(endpoint).with(rest());

    restClient
        .request(
            readItems("press", {
                filter: {
                    _and: [
                        {
                            // Month
                            _or: [
                                {
                                    "month(published_date)": {
                                        // January
                                        _eq: 1,
                                    },
                                },
                                {
                                    "month(published_date)": {
                                        // Feb
                                        _eq: 2,
                                    },
                                },
                                {
                                    "month(published_date)": {
                                        // March
                                        _eq: 3,
                                    },
                                },
                            ],
                        },
                        {
                            // Year
                            _or: [
                                {
                                    "year(published_date)": {
                                        _eq: 2023,
                                    },
                                },
                                {
                                    "year(published_date)": {
                                        _eq: 2022,
                                    },
                                },
                            ],
                        },
                        {
                            // Title search
                            title: {
                                _contains: "gpt",
                            },
                        },
                    ],
                },
            })
            // aggregate: { count: "*" },
            // groupBy: ["year(published_date)"],
        )
        .then((res) => {
            console.log("🚀 ~ file: directus.ts:23 ~ install ~ result:", res);
        });

    // restClient
    //     .request(
    //         aggregate("press", {
    //             aggregate: { count: "*" },
    //             query: {
    //                 filter: {
    //                     _and: [
    //                         {
    //                             // Month
    //                             _or: [
    //                                 {
    //                                     "month(published_date)": {
    //                                         // January
    //                                         _eq: 2,
    //                                     },
    //                                     "month(published_date)": {
    //                                         // Feb
    //                                         _eq: 2,
    //                                     },
    //                                     "month(published_date)": {
    //                                         // Feb
    //                                         _eq: 3,
    //                                     },
    //                                 },
    //                             ],
    //                         },
    //                         {
    //                             // Year
    //                             _or: [
    //                                 {
    //                                     "year(published_date)": {
    //                                         _eq: 2023,
    //                                     },
    //                                     "year(published_date)": {
    //                                         _eq: 2022,
    //                                     },
    //                                 },
    //                             ],
    //                         },
    //                     ],
    //                 },
    //             },
    //         })
    //     )
    //     .then((res) => {
    //         console.log(
    //             "🚀 ~ file: directus.js:74 ~ ). COUNT then ~ res:",
    //             res
    //         );
    //     });

    // const graphqlClient = createDirectus(endpoint).with(graphql());
    // const query = gql`
    // query {
    //     sw_pages {
    //         title
    //         description
    //     }
    // }`;

    // graphqlClient.query(query);

    app.provide("$rest", restClient);
    // app.provide("$graphql", graphqlClient);
};

export default install;
