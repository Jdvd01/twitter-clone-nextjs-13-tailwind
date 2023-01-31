import Link from "next/link";

export default function TextRedirect({ text, link, redirect }) {
    return (
        <p className="text-gray-500 ">
            {text} <Link href={link} className="text-cyan-400 hover:underline hover:cursor-pointer">{redirect}</Link>
        </p>
    )
}