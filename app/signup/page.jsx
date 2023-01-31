import Link from "next/link";

import AppleLogo from "../../public/SVG/AppleLogo";

import Navbar from "./Navbar";
import Button from "../../Components/Button";
import TextRedirect from "../../Components/TextRedirect";



export default function Signup() {
    return (
        <>
            <div className="h-screen flex flex-col">

                <Navbar />

                <div className="flex justify-center flex-col gap-4 w-4/5 m-auto">

                    <h1 className="font-bold text-2xl mb-4">
                        Join Twitter today
                    </h1>

                    <div className="w-full flex flex-col gap-5">
                        <Button
                            text="Sign up with Google"
                            bgColor="bg-white"
                            textColor="text-black"
                        />
                        <Button
                            logo={<AppleLogo height="100%" width="25px" color="#000000" background="bg-white" />}
                            text="Sign up with Apple"
                            bgColor="bg-white"
                            textColor="text-black"
                        />

                        <div className="flex flex-row w-full justify-between items-center">
                            <hr className="w-2/5" />
                            <p className="text-center">or</p>
                            <hr className="w-2/5" />
                        </div>

                        <Button
                            text="Create account"
                            bgColor="bg-white"
                            textColor="text-black"
                        />
                    </div>

                    <p className="text-sm text-gray-500 ">
                        By signing up, you agree to the <span className="text-cyan-400 hover:underline hover:cursor-pointer">Terms of service</span> and <span className="text-cyan-400 hover:underline hover:cursor-pointer">Privacy Policy</span>, including <span className="text-cyan-400 hover:underline hover:cursor-pointer">Cookie Use.</span>
                    </p>

                    <TextRedirect 
                        text="Have an account already?"
                        link="/login"
                        redirect="Log in."
                    />

                </div>
            </div>
        </>
    )
}