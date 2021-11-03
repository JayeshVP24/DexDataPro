import { AnimatePresence, m } from "framer-motion";
import React, { useState } from "react";

/* eslint-disable @next/next/no-img-element */
const Scanners: React.FC = () => {
    const [currImg, setCurrImg] = useState<string>("p1");
    const [imgModal, setImgModal] = useState<boolean>(false);


    const productsInfo: {
        name: string,
        info: string
    }[] =  [
        {
            name: "Kodak i1420",
            info: "High Speed Production Scanner for A3, A4 sized document"
        },
        {
            name: "Kodak i3400",
            info: "High Speed Production Scanner for A3, A4 sized document"
        },
        {
            name: "Kodak i2800",
            info: "High Speed Production Scanner for A4 sized document"
        },
        {
            name: "Fujitsu fi 7160",
            info: "High Speed Scanners is capable of loading up to 80 sheets at a time"
        },
        {
            name: "Fujitsu fi 6240",
            info: "The Fastest and Most Compact Scanner (60ppm ADF/Flatbed)"
        },
        {
            name: "Fujitsu Sv600",
            info: "An Overhead style Contactless Scanner, A3 Document Scanning, Auto Book Correction"
        },
    ]


    const products = ["p1", "p2", "p3", "p4", "p5", "p6"];

    return (
        <>
            <div className="mt-14 lg:mt-16 ">
                <div className="bg-secondary font-semibold mx-2 lg:mx-8 text-lg px-2 py-4 rounded-2xl text-center">
                    We use TOP most products to reach the HIGHEST level of
                    Efficieny
                </div>
                <div className="w-max-2xl  ml-3 space-x-4 lg:space-x-8 carousel carousel-center mt-8 ">
                    {products.map((p, i) => (
                        <div
                            key={p}
                            className="inline-block carousel-item text-center "
                        >
                            <img
                                className="h-[25vh] mx-auto xl:h-[30vh] rounded-box object-cover cursor-pointer mb-1 "
                                src={`products/${p}.jpg`}
                                onClick={() => {
                                    setCurrImg(p);
                                    setImgModal(true);
                                }}
                                alt={`product ${productsInfo[i].name} `}
                            />
                            <div className="w-52 mx-auto" >                                
                            <span className="font-semibold" >{productsInfo[i].name}</span> <br />
                            <span>{productsInfo[i].info}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <AnimatePresence>
                {imgModal && (
                    <>
                        <m.div
                            className="w-screen z-30 h-screen bg-black bg-opacity-60 fixed top-0 left-0"
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                        />
                        <m.div
                            className="fixed z-40 top-0 left-0 w-screen h-screen  "
                            onClick={() => setImgModal(false)}
                            initial={{
                                y: -100,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            exit={{
                                y: -100,
                                opacity: 0,
                            }}
                        >
                            <img
                                className="w-10/12 lg:w-6/12 left-[50%] translate-x-[-50%] relative top-[50%] translate-y-[-50%]"
                                src={`products/${currImg}.jpg`}
                                alt={`product ${currImg} `}
                            />
                        </m.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
export default Scanners;
