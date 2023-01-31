import Link from "next/link"
import TwitterLogo from "../../public/SVG/TwitterLogo"

export default function Navbar() {
    return (
        <nav className="flex justify-between p-3">
            <div>
                <Link href={"/"}>
                    <i className="fa-solid fa-x text-md pt-2 pl-2"></i>
                </Link>
            </div>
            <div>
                <TwitterLogo width={"30px"} height={"30px"} color={"#EFF3F4"} />
            </div>
            <div></div>
        </nav>
    )
}