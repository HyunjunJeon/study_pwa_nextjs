import Link from "next/link";

// Shared Component 구성

export default () => <header>
    <nav>
        <ul>
            <li><Link href={"/"}><a>Home</a></Link></li>
            <li><Link href={"/about"}><a>About</a></Link></li>
        </ul>
    </nav>
</header>