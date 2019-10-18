import Head from "next/head";
import { withRouter } from "next/router";
import Axios from "axios";

const Post = (props) => (
    <>
        <Head>
            <title>{props.movie.title} | SampleStore</title>
        </Head>
        <h1>{props.movie.title}</h1>
        <p>{props.movie.description_intro}</p>
    </>
);

Post.getInitialProps = async (context) => {
    const { query : {id}} = context;
    const {
        data : {
            data : { movie }
        }
    } = await Axios.get(`https://yts.lt/api/v2/movie_details.json?movie_id=${id}`);
    
    return { movie };
}

export default withRouter(Post);
