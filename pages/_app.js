import App from "next/app";
import React from "react";
import withApollo from "../lib/withApollo";
import { ApolloProvider } from "react-apollo";

class MyApp extends App {
    render(){
        const { Component, pageProps, apollo } = this.props;
        return (
            <ApolloProvider client={apollo}>
                <>
                    <Component {...pageProps} />
                </>
            </ApolloProvider>
        );
    }
}

export default withApollo(MyApp);