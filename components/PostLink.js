import Link from "next/link";

export default (props) => (
    // as 는 Route Masking 기능으로.. 사람들이 실제로 보게되는 URL(새로고침시 에러발생)
    <Link href={`/post?id=${props.id}`} as={`/post/${props.id}`}>
        <a>{props.title}</a>
    </Link>
);