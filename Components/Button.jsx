import Link from "next/link";

export default function Button({ text, logo, textColor, bgColor }) {
    return (
        <div>
            <Link
                href=""
                className={`${textColor} ${bgColor} font-bold border-2 border-white rounded-full w-full flex justify-center items-center p-2 hover:cursor-pointer`}>
                {logo} {text}
            </Link>
        </div>
    )
}