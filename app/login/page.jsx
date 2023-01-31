import Link from "next/link"
import Button from "../../Components/Button"
import TextRedirect from "../../Components/TextRedirect"
import AppleLogo from "../../public/SVG/AppleLogo"
import Navbar from "../signup/Navbar"

export default function Login() {
    return (
        <div className="h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-col justify-center m-auto w-4/5 gap-4">

                <h1 className="text-2xl font-bold">
                    Sign in to Twitter
                </h1>

                <Button
                    text="Sign in with Google"
                    bgColor="bg-white"
                    textColor="text-black"
                />
                <Button
                    logo={<AppleLogo height="100%" width="25px" color="#000000" background="bg-white" />}
                    text="Sign in with Apple"
                    bgColor="bg-white"
                    textColor="text-black"
                />

                <div className="flex flex-row w-full justify-between items-center">
                    <hr className="w-2/5" />
                    <p className="text-center">or</p>
                    <hr className="w-2/5" />
                </div>

                <input type="text" placeholder="Phone, email or username" className="border-2 rounded p-4" disabled />

                <Button
                    text="Next"
                    bgColor="bg-white"
                    textColor="text-black"
                />

                <Button
                    text="Forgot password?"
                    bgColor="bg-black"
                    textColor="text-white"
                />

                <TextRedirect
                    text="Don't have an account?"
                    link="/signup"
                    redirect="Sign up."
                />
            </div>
        </div>
    )
}