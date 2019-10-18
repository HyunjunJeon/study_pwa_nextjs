import Head from "next/head";
import withLayout from "../lib/withLayout";
import Link from "next/link";
import PostLink from "../components/PostLink";

const Index = () => (
    <div>
        <Head>
            <title>Home | Sample Store</title>
        </Head>
        <h1>Posts:</h1>
        <ul>
            <li>
                <PostLink title={"Very Important"} />
            </li>
            <li>
                <PostLink title={"Something Shit"} />
            </li>
        </ul>
    </div>
);

export default withLayout(Index);