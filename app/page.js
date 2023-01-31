import Link from "next/link";

export default function Page() {
    return (
        <h1>
            Esta es la pagina principal
            <ul>
                <li>
                    <Link href={"/login"}>Login</Link>
                </li>
                <li>
                    <Link href={"/signup"}>Signup</Link>
                </li>
            </ul>
        </h1>
    )
}