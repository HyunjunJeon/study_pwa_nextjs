import App from "next/app";
import React from "react";
import withApollo from "../lib/withApollo";
import { ApolloProvider } from "react-apollo";
import { Layout } from "antd";
const { Footer } = Layout;

class MyApp extends App {
    static async getInitialProps({ Component, router, ctx}){
        let pageProps = {};

        if(Component.getInitialProps){
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render(){
        const { Component, pageProps, apollo } = this.props;
        return (
            <ApolloProvider client={apollo}>
                <>
                    <Layout>
                        <Component {...pageProps} />
                        <Footer>This is Footer...</Footer>
                    </Layout>
                </>
            </ApolloProvider>
        );
    }
}

export default withApollo(MyApp);