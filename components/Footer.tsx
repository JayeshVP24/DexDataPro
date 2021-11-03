import React from "react";
import Link from "next/link"

/* eslint-disable @next/next/no-img-element */
const Footer: React.FC = () => {
    return (
        <footer className="bg-primary mt-24 text-white rounded-t-3xl py-12 px-8  md:flex md:flex-row-reverse md:items-start">
            <div className="font-medium space-y-6 md:w-3/5 xl:w-2/4 md:ml-20">
                <div>
                    <p className="text-2xl">Go to</p>
                    <nav className="flex flex-col mt-2 space-y-1 md:space-y-0 md:space-x-4 md:flex-row ">
                        <Link href="/#home">
                            <a className="underline">Home</a>
                        </Link>
                        <Link href="/#services">
                            <a className="underline">Services</a>
                        </Link>
                        <Link href="/#testimonials">
                            <a className="underline">Testimonials</a>
                        </Link>
                        <Link href="/#team">
                            <a className="underline">Team</a>
                        </Link>
                        <Link href="/#contact">
                            <a className="underline">Contact</a>
                        </Link>
                    </nav>
                </div>
                <div>
                    <p className="text-2xl">Connect with us</p>
                    <div className="mt-2 space-y-1">
                        <p>Business Hours:</p>
                        <p className="font-normal">
                            {" "}
                            Mon to Sat - 10:00 AM to 06:00 PM
                        </p>
                        <p>
                            Mail:{" "}
                            <a
                                href="mailto:info@dexdatapro.in"
                                className="underline"
                            >
                                info@dexdatapro.in
                            </a>
                        </p>
                        <p>
                            Call Sales:{" "}
                            <a href="tel:+91-8879631505" className="underline">
                                +91-8879631505
                            </a>
                        </p>
                        <p>
                            Call Support:{" "}
                            <a href="tel:+91-7977017717" className="underline">
                                +91-7977017717
                            </a>{" "}
                            or{" "}
                            <a href="tel:+91-7039424836" className="underline">
                                +91-7039424836
                            </a>{" "}
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-12 md:mt-0  md:w-2/5 xl:w-2/4 ">
                <img
                    src="logoNamed.png"
                    alt="Dex Data Processing"
                    className="bg-white rounded-3xl xl:w-3/6 xl:mx-auto "
                />
                <h4 className="text-center mt-4 font-medium  ">
                    Dex Data Processing, PVT LTD <br /> Copyright |{" "}
                    <a className="underline" href="https://elightlabs.com/">
                        Elightlabs Technologies, 2021{" "}
                    </a>
                </h4>
            </div>
        </footer>
    );
};

export default Footer