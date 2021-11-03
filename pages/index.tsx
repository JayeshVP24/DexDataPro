/* eslint-disable @next/next/no-img-element */
import { domAnimation, LazyMotion, m } from "framer-motion";
import { NextPage } from "next";
import useAutoCounter from "../utils/useAutoCounter";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Scanners from "../components/Scanners";
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                initial={{
                    opacity: 0,
                    y: -50,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                exit={{
                    opacity: 0,
                    y: -50,
                }}
            >
                <Header />

                <main className="space-y-16 lg:space-y-20">
                    <Hero />

                    <Stats />

                    <Services />

                    <Why />

                    {/* <Testimonails /> */}

                    <Teams />

                    <About />

                    <Contact />
                </main>

                <Footer />
            </m.div>
        </LazyMotion>
    );
};

export default Home;

export async function getStaticProps() {
    // ↓add
    console.log(`Building `);
    return { props: {} };
}

const Hero: React.FC = () => {
    return (
        <section
            id="home"
            className="flex mx-6 lg:mx-20 xl:mx-32 flex-col-reverse md:flex-row md:justify-between items-center "
        >
            <div className="mt-6 space-y-4 lg:space-y-8 lg:w-2/4 ">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium xl:leading-[1.25]">
                    Digitize your Data, with us !
                </h1>
                <h2 className="text-xl lg:pr-32  ">
                    Your search for quality Data Processing Company now ends.
                    Look no further for your data processing needs!
                </h2>
                <div className="flex space-x-4 md:text-lg">
                    <Link href="/services">
                        <a>
                            <button className="bg-primary font-medium text-white px-8 py-3 rounded-xl hover:ring ring-primary ring-opacity-50 transition-all active:scale-95">
                                Check Services
                            </button>
                        </a>
                    </Link>
                    <a href="#why">
                        <button className="bg-secondary font-medium px-8 py-3 rounded-xl hover:ring ring-secondary ring-opacity-50 transition-all active:scale-95 ">
                            Why us ?
                        </button>
                    </a>
                </div>
            </div>
            <div className="my-6 lg:w-2/4">
                <img
                    src="illustrations/hero.svg"
                    alt="Hero Illustration for Data Processing"
                />
            </div>
        </section>
    );
};

const Stats: React.FC = () => {
    const documentProcessed = useAutoCounter(1000, 10);
    const clientsSatisfied = useAutoCounter(500, 100);
    const dataDigitizied = useAutoCounter(1000, 10);
    const yearsOfExperiance = useAutoCounter(10, 500);

    return (
        <section
            className="  space-y-12 flex-col 
        grid grid-cols-2 grid-rows-2 justify-items-center items-baseline gap-y-4 
        md:flex md:flex-row justify-around"
        >
            <div className="bg-primary w-40 xl:w-72 text-center rounded-2xl xl:rounded-3xl relative px-4 ">
                <p className="font-bold text-xl xl:text-3xl top-[-20%] left-[50%] translate-x-[-50%] text-black bg-secondary w-max rounded-2xl px-8 py-2 absolute">
                    {documentProcessed} +
                </p>
                <p className="font-semibold text-lg w-min mx-auto text-white py-8 xl:py-10 xl:text-2xl">
                    Documents Processed
                </p>
            </div>
            <div className="bg-primary w-40 xl:w-72 text-center rounded-2xl xl:rounded-3xl relative px-4 ">
                <p className="font-bold text-xl xl:text-3xl top-[-20%] left-[50%] translate-x-[-50%] text-black bg-secondary w-max rounded-2xl px-8 py-2 absolute">
                    {clientsSatisfied} +
                </p>
                <p className="font-semibold text-lg w-min mx-auto text-white py-8 xl:py-10 xl:text-2xl">
                    Clients Satisfied
                </p>
            </div>
            <div className="bg-primary w-40 xl:w-72 text-center rounded-2xl xl:rounded-3xl relative px-4 ">
                <p className="font-bold text-xl xl:text-3xl top-[-20%] left-[50%] translate-x-[-50%] text-black bg-secondary w-max rounded-2xl px-8 py-2 absolute">
                    {dataDigitizied} GB +
                </p>
                <p className="font-semibold text-lg w-min mx-auto text-white py-8 xl:py-10 xl:text-2xl">
                    Data Digitized
                </p>
            </div>
            <div className="bg-primary w-40 xl:w-72 text-center rounded-2xl xl:rounded-3xl relative px-4 ">
                <p className="font-bold text-xl xl:text-3xl top-[-20%] left-[50%] translate-x-[-50%] text-black bg-secondary w-max rounded-2xl px-8 py-2 absolute">
                    {yearsOfExperiance} +
                </p>
                <p className="font-semibold text-lg w-min mx-auto text-white py-8 xl:py-10 xl:text-2xl">
                    Years of Experience
                </p>
            </div>
        </section>
    );
};

const Services: React.FC = () => {
    return (
        <section id="services" className=" mx-4">
            <h3 className="text-3xl xl:text-4xl text-center font-medium">
                Services
            </h3>

            <div className="mt-8 space-y-6 md:grid grid-cols-3 grid-rows-1 md:justify-items-center  md:space-y-0 md:gap-6 ">
                <div className="bg-primary text-white text-center flex flex-col items-center rounded-3xl space-y-4 px-4 py-8 ">
                    <img
                        src="services/dataEntry.svg"
                        alt="Data entry and Data processing"
                    />
                    <h4 className="font-medium text-lg">
                        Data Entry & Data Processing
                    </h4>
                    <p>
                        DEX Data Processing & Data Entry Services delivery
                        includes timely and accurate data processing services as
                        an assortment of data collection and entry as per client
                        requirement
                    </p>
                </div>
                <div className="bg-primary text-white text-center flex flex-col items-center rounded-3xl space-y-4 px-4 py-8 ">
                    <img
                        src="services/invetorization.svg"
                        alt="Data entry and Data processing"
                    />
                    <h4 className="pt-10 font-medium text-lg">
                        Document Inventorization Services
                    </h4>
                    <p>
                        Creating inventory of documents is a critical aspect of
                        organizing records generated by an organization. The key
                        challenge faced across all organizations is to have a
                        proper Inventory of records.
                    </p>
                </div>
                <div className="bg-primary text-white text-center flex flex-col items-center rounded-3xl space-y-4 px-4 py-8 ">
                    <img
                        src="services/management.svg"
                        alt="Mangement Document Processing Services"
                    />
                    <h4 className="font-medium text-lg pt-2">
                        Management Document Processing Services
                    </h4>
                    <p>
                        DEX Managed Document Processing Services(MDPS) is the
                        perfect choice for any organization, wherein high volume
                        of documents/records are generated as part of their
                        business process. We provide an efficient, economical
                        and timebound services to help these organizations.
                    </p>
                </div>
            </div>

            <h3 className="text-3xl xl:text-4xl text-center font-medium mt-14 lg:mt-16">
                DEX Data Document Scanning Services
            </h3>
            <div
                className="flex justify-center flex-col items-center mt-8 space-y-6
            md:grid grid-rows-3 grid-cols-2 md:space-y-0 md:justify-items-center md:gap-y-6
            lg:grid-rows-2 lg:grid-cols-3"
            >
                <div className="w-72 xl:w-96 rounded-3xl bg-primary relative ">
                    <img
                        src="services/finance.jpg"
                        width="400"
                        height="350"
                        className="w-full rounded-3xl h-48 object-cover"
                        alt="Finance Documents"
                    />
                    <span className="relative bg-secondary font-semibold px-12 py-2 rounded-2xl -top-4 -left-4">
                        Finance Scanning
                    </span>
                    <ul className="list-disc pl-16 font-medium text-white text-sm pt-4 pb-8 ">
                        <li>Client Files</li>
                        <li>Purchase Invoice</li>
                        <li>Sales Invoice</li>
                        <li>Account Payable</li>
                        <li>Account Receivable</li>
                        <li>Contracts</li>
                        <li>Ledgers</li>
                    </ul>
                </div>
                <div className="w-72 xl:w-96 rounded-3xl bg-primary relative ">
                    <img
                        src="services/humanResource.jpg"
                        width="400"
                        height="350"
                        className="w-full rounded-3xl h-48 object-cover"
                        alt="Finance Documents"
                    />
                    <span className="relative bg-secondary font-semibold px-12 py-2 rounded-2xl -top-4 -left-4">
                        Human Resources
                    </span>
                    <ul className="list-disc pl-16 font-medium text-white text-sm pt-4 pb-8 ">
                        <li>Resume</li>
                        <li>Cover Letters</li>
                        <li>Offer Letters</li>
                        <li>Employees contracts</li>
                        <li>Certificates and training</li>
                        <li>Employees id card</li>
                        <li>Retirement & Pension files</li>
                    </ul>
                </div>
                <div className="w-72 xl:w-96 rounded-3xl bg-primary relative ">
                    <img
                        src="services/legal.jpg"
                        width="400"
                        height="350"
                        className="w-full rounded-3xl h-48 object-cover"
                        alt="Finance Documents"
                    />
                    <span className="relative bg-secondary font-semibold px-12 py-2 rounded-2xl -top-4 -left-4">
                        Legal Documents
                    </span>
                    <ul className="list-disc pl-16 font-medium text-white text-sm pt-4 pb-8 ">
                        <li>Affidavits</li>
                        <li>Declaration</li>
                        <li>Legal Contracts</li>
                        <li>Client Legal Document</li>
                        <li>Real Estate Document</li>
                        <li>Agreement Document</li>
                        <li>Briefs and Contracts </li>
                    </ul>
                </div>
                <div className="w-72 xl:w-96 rounded-3xl bg-primary relative ">
                    <img
                        src="services/medical.jpg"
                        width="400"
                        height="350"
                        className="w-full rounded-3xl h-48 object-cover"
                        alt="Finance Documents"
                    />
                    <span className="relative bg-secondary font-semibold px-12 py-2 rounded-2xl -top-4 -left-4">
                        Medical Documents
                    </span>
                    <ul className="list-disc pl-16 font-medium text-white text-sm pt-4 pb-8 ">
                        <li>Insurance document</li>
                        <li>Demographic</li>
                        <li>Patient file</li>
                        <li>Laboratory and test results</li>
                        <li>Allergies Report</li>
                        <li>Diagnosis</li>
                        <li>Progress note</li>
                    </ul>
                </div>
                <div className="w-72 xl:w-96 rounded-3xl bg-primary relative ">
                    <img
                        src="services/media.jpg"
                        width="400"
                        height="350"
                        className="w-full rounded-3xl h-48 object-cover"
                        alt="Finance Documents"
                    />
                    <span className="relative bg-secondary font-semibold px-12 py-2 rounded-2xl -top-4 -left-4">
                        Media & Publishing
                    </span>
                    <ul className="list-disc pl-16 font-medium text-white text-sm pt-4 pb-8 ">
                        <li>Historic Newspapers</li>
                        <li>Old Newspapers</li>
                        <li>Tabloid</li>
                        <li>Broadsheet</li>
                        <li>Company Binders</li>
                        <li>Fragile book</li>
                        <li>Comic book</li>
                    </ul>
                </div>
                <div className="w-72 xl:w-96 rounded-3xl bg-primary relative ">
                    <img
                        src="services/educational.jpg"
                        width="400"
                        height="350"
                        className="w-full rounded-3xl h-48 object-cover"
                        alt="Finance Documents"
                    />
                    <span className="relative bg-secondary font-semibold px-6 py-2 rounded-2xl -top-4 -left-4">
                        Educational Documents
                    </span>
                    <ul className="list-disc pl-16 font-medium text-white text-sm pt-4 pb-8 ">
                        <li>Student Record</li>
                        <li>Engineering Notebook</li>
                        <li>Laboratory Notebook</li>
                        <li>Research papers</li>
                        <li>Admission Form</li>
                        <li>Text Book</li>
                        <li>Grade Report</li>
                    </ul>
                </div>
                <div className="w-72 xl:w-96 rounded-3xl bg-primary relative ">
                    <img
                        src="services/educational.jpg"
                        width="400"
                        height="350"
                        className="w-full rounded-3xl h-48 object-cover"
                        alt="Finance Documents"
                    />
                    <span className="relative bg-secondary font-semibold px-6 py-2 rounded-2xl -top-4 -left-4">
                        Booklet Scanning
                    </span>
                    <ul className="list-disc pl-16 font-medium text-white text-sm pt-4 pb-8 ">
                        <li>Newsletters</li>
                        <li>Recipe Booklets</li>
                        <li>Instruction Manuals</li>
                        <li>Reference Guides</li>
                        <li>Portfolios</li>
                        <li>Coil/Spiral Binding</li>
                        <li>Saddle Stitched</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

// const Testimonails: React.FC = () => {
//     return (
//         <section id="testimonials" className="my-16">
//             <h3 className="text-3xl xl:text-4xl text-center font-medium">
//                 Our Testimonials
//             </h3>

//             <div
//                 className="mt-16 space-y-12 md:space-y-16 md:mx-20
//             lg:grid grid-rows-2 grid-cols-2 lg:space-y-0 lg:gap-y-16 xl:gap-x-16"
//             >
//                 <Testimonial
//                     author="Nicolus Vengelious, CEO"
//                     text="Publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in infance"
//                 />
//                 <Testimonial
//                     author="Nicolus Vengelious, CEO"
//                     text="Publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in infance"
//                 />
//                 <Testimonial
//                     author="Nicolus Vengelious, CEO"
//                     text="Publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in infance"
//                 />
//                 <Testimonial
//                     author="Nicolus Vengelious, CEO"
//                     text="Publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in infance"
//                 />
//             </div>
//         </section>
//     );
// };

// const Testimonial: React.FC<{
//     author: string;
//     text: string;
// }> = ({ author, text }) => {
//     return (
//         <div className="bg-primary text-white rounded-3xl px-12 py-8 mx-4 text-center relative">
//             <div className="bg-secondary -left-4 md:-left-12 -top-8 px-8 w-5/6 md:w-4/6 py-4 absolute font-semibold text-black rounded-2xl ">
//                 {author}
//             </div>

//             <svg
//                 width="36"
//                 height="36"
//                 viewBox="0 0 36 36"
//                 fill="none"
//                 className="relative top-4 right-8"
//                 xmlns="http://www.w3.org/2000/svg"
//             >
//                 <path
//                     d="M15.555 27.21C15.555 29.34 13.98 31.0799 11.685 31.0799H6.85501C4.72501 31.0799 2.98499 29.34 2.98499 27.21L2.98499 18.51"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//                 <path
//                     d="M3 18.5249H11.7C13.14 18.5249 14.28 19.1999 14.94 20.2349"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//                 <path
//                     d="M3 18.5248C3 9.44984 4.69504 7.94992 9.79504 4.91992"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//                 <path
//                     d="M20.445 18.5249H29.145C31.44 18.5249 33.015 20.2649 33.015 22.3949V27.225C33.015 29.355 31.44 31.0949 29.145 31.0949H24.315C22.185 31.0949 20.445 29.355 20.445 27.225V18.5249"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//                 <path
//                     d="M20.445 18.5248C20.445 9.44984 22.14 7.94992 27.24 4.91992"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//             </svg>

//             <p>{text}</p>
//             <svg
//                 width="36"
//                 height="36"
//                 viewBox="0 0 36 36"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="relative ml-auto -top-4 left-8"
//             >
//                 <path
//                     d="M20.445 8.78976C20.445 6.65976 22.02 4.91983 24.315 4.91983L29.13 4.91983C31.26 4.91983 33 6.65976 33 8.78976L33 17.4897"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//                 <path
//                     d="M33 17.4749L24.3 17.4749C22.86 17.4749 21.72 16.7998 21.06 15.7648"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//                 <path
//                     d="M33 17.4749C33 26.5499 31.305 28.0498 26.205 31.0798"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//                 <path
//                     d="M15.5549 17.4749L6.85495 17.4749C4.55995 17.4749 2.98495 15.7348 2.98495 13.6048L2.98495 8.77478C2.98495 6.64478 4.55995 4.90485 6.85495 4.90485L11.6999 4.90485C13.8299 4.90485 15.5699 6.64478 15.5699 8.77478L15.5699 17.4749"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//                 <path
//                     d="M15.5549 17.4749C15.5549 26.5499 13.8599 28.0498 8.75993 31.0798"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//             </svg>
//         </div>
//     );
// };

const Why: React.FC = () => {
    return (
        <section id="why" className="">
            <h3 className="text-3xl xl:text-4xl text-center font-medium">
                Why us
            </h3>
            <div className="mt-12 space-y-8 lg:grid grid-row-1 grid-cols-3 lg:space-y-0 lg:mx-4 ">
                <div className="bg-primary font-medium text-white flex flex-col items-center text-center px-4 py-8 mx-8 lg:mx-4 md:mx-16 relative space-y-8 rounded-3xl">
                    <p className="bg-secondary w-48 py-2 font-semibold text-black rounded-2xl absolute -top-4 -left-4 ">
                        Secured Scanning
                    </p>
                    <svg
                        width="120"
                        height="120"
                        viewBox="0 0 120 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M34.4 94.4999C32.35 94.4999 30.65 92.7999 30.65 90.7499V80.3999C30.65 78.3499 32.35 76.6499 34.4 76.6499C36.45 76.6499 38.15 78.3499 38.15 80.3999V90.7499C38.15 92.8499 36.45 94.4999 34.4 94.4999Z"
                            fill="white"
                        />
                        <path
                            d="M60 94.5C57.95 94.5 56.25 92.8 56.25 90.75V70C56.25 67.95 57.95 66.25 60 66.25C62.05 66.25 63.75 67.95 63.75 70V90.75C63.75 92.85 62.05 94.5 60 94.5Z"
                            fill="white"
                        />
                        <path
                            d="M85.6 94.4999C83.55 94.4999 81.85 92.7999 81.85 90.7499V59.6499C81.85 57.5999 83.55 55.8999 85.6 55.8999C87.65 55.8999 89.35 57.5999 89.35 59.6499V90.7499C89.35 92.8499 87.7 94.4999 85.6 94.4999Z"
                            fill="white"
                        />
                        <path
                            d="M34.3998 65.9001C32.6998 65.9001 31.1998 64.7501 30.7498 63.0501C30.2498 61.0501 31.4498 59.0001 33.4998 58.5001C51.8998 53.9001 68.0998 43.8501 80.4498 29.5001L82.7498 26.8001C84.0998 25.2501 86.4498 25.0501 88.0498 26.4001C89.5998 27.7501 89.7998 30.1001 88.4498 31.7001L86.1498 34.4001C72.7998 50.0001 55.1998 60.8501 35.2998 65.8001C34.9998 65.9001 34.6998 65.9001 34.3998 65.9001Z"
                            fill="white"
                        />
                        <path
                            d="M85.5997 47.6C83.5497 47.6 81.8497 45.9 81.8497 43.85V33H70.9497C68.8997 33 67.1997 31.3 67.1997 29.25C67.1997 27.2 68.8997 25.5 70.9497 25.5H85.5997C87.6497 25.5 89.3497 27.2 89.3497 29.25V43.9C89.3497 45.95 87.6997 47.6 85.5997 47.6Z"
                            fill="white"
                        />
                        <path
                            d="M75 113.75H45C17.85 113.75 6.25 102.15 6.25 75V45C6.25 17.85 17.85 6.25 45 6.25H75C102.15 6.25 113.75 17.85 113.75 45V75C113.75 102.15 102.15 113.75 75 113.75ZM45 13.75C21.95 13.75 13.75 21.95 13.75 45V75C13.75 98.05 21.95 106.25 45 106.25H75C98.05 106.25 106.25 98.05 106.25 75V45C106.25 21.95 98.05 13.75 75 13.75H45Z"
                            fill="white"
                        />
                    </svg>
                    <p>
                        {`Today's`} world demands defensive and safe methods for
                        their data. We ensure that your documents are scanned in
                        the most secure manner possible!
                    </p>
                </div>
                <div className="bg-primary font-medium text-white flex flex-col items-center text-center px-4 py-8 mx-8 lg:mx-4 md:mx-16 relative space-y-8 rounded-3xl">
                    <p className="bg-secondary w-48 py-2 font-semibold text-black rounded-2xl absolute -top-4 -left-4 ">
                        100% Accuracy
                    </p>
                    <svg
                        width="120"
                        height="120"
                        viewBox="0 0 120 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M65 113.75H45C17.85 113.75 6.25 102.15 6.25 75V45C6.25 17.85 17.85 6.25 45 6.25H75C102.15 6.25 113.75 17.85 113.75 45V65C113.75 67.05 112.05 68.75 110 68.75C107.95 68.75 106.25 67.05 106.25 65V45C106.25 21.95 98.05 13.75 75 13.75H45C21.95 13.75 13.75 21.95 13.75 45V75C13.75 98.05 21.95 106.25 45 106.25H65C67.05 106.25 68.75 107.95 68.75 110C68.75 112.05 67.05 113.75 65 113.75Z"
                            fill="white"
                        />
                        <path
                            d="M36.6505 76.2001C35.8505 76.2001 35.0505 75.95 34.3505 75.4C32.7005 74.15 32.4006 71.8 33.6506 70.15L45.5505 54.7001C47.0005 52.85 49.0505 51.6501 51.4005 51.3501C53.7505 51.0501 56.0505 51.7001 57.9005 53.1501L67.0506 60.3501C67.4006 60.6501 67.7506 60.6 68.0006 60.6C68.2006 60.6 68.5505 60.5001 68.8505 60.1001L80.4005 45.2C81.6505 43.55 84.0006 43.2501 85.6506 44.5501C87.3006 45.8001 87.6006 48.1501 86.3006 49.8001L74.7506 64.7001C73.3006 66.5501 71.2505 67.7501 68.9005 68.0001C66.6005 68.3001 64.2505 67.6501 62.4505 66.2001L53.3006 59.0001C52.9506 58.7001 52.5505 58.7 52.3505 58.75C52.1505 58.75 51.8005 58.8501 51.5005 59.2501L39.6006 74.7001C38.9006 75.7001 37.8005 76.2001 36.6505 76.2001Z"
                            fill="white"
                        />
                        <path
                            d="M101.3 113.75C99.5499 113.75 97.2998 113.2 94.6498 111.6L93.3998 110.85C93.0498 110.65 91.9997 110.65 91.6497 110.85L90.3997 111.6C84.6497 115.05 80.9998 113.6 79.3998 112.4C77.7498 111.2 75.1998 108.2 76.6998 101.6L76.9499 100.55C77.0499 100.15 76.7497 99.2002 76.4997 98.9002L74.7499 97.1501C71.7999 94.1501 70.6497 90.6502 71.6497 87.5002C72.6497 84.4002 75.5999 82.2002 79.7499 81.5002L81.6497 81.2002C81.9997 81.1002 82.6997 80.6002 82.8997 80.2502L84.2997 77.4001C86.2497 73.4501 89.2499 71.2002 92.5499 71.2002C95.8499 71.2002 98.8498 73.4501 100.8 77.4001L102.2 80.2001C102.4 80.5501 103.1 81.0501 103.45 81.1501L105.35 81.4501C109.5 82.1501 112.45 84.3502 113.45 87.4502C114.45 90.5502 113.35 94.0502 110.35 97.1002L108.6 98.8502C108.35 99.1502 108.05 100.1 108.15 100.5L108.4 101.55C109.9 108.15 107.35 111.15 105.7 112.35C104.8 113.05 103.35 113.75 101.3 113.75ZM92.4498 78.7502C92.3998 78.8002 91.6999 79.3001 90.9999 80.7501L89.5999 83.6002C88.3999 86.0502 85.5497 88.1502 82.8997 88.6002L80.9999 88.9002C79.3999 89.1502 78.8499 89.7002 78.7999 89.8002C78.7999 89.9002 78.9498 90.7001 80.0998 91.8501L81.8498 93.6002C83.8998 95.7002 84.9497 99.3001 84.2997 102.15L84.0498 103.2C83.5998 105.15 83.7998 106 83.8998 106.3C84.0498 106.2 84.8998 106.1 86.5498 105.1L87.7998 104.35C90.5498 102.7 94.4999 102.7 97.2499 104.35L98.4999 105.1C100.55 106.35 101.4 106.2 101.45 106.2C101.25 106.2 101.5 105.2 101.05 103.2L100.8 102.15C100.15 99.2501 101.2 95.7002 103.25 93.6002L105 91.8501C106.15 90.7001 106.3 89.9002 106.3 89.7502C106.25 89.6502 105.7 89.1502 104.1 88.8502L102.2 88.5502C99.4998 88.1002 96.6998 86.0002 95.4998 83.5502L94.0998 80.7501C93.2998 79.2501 92.5998 78.8002 92.4498 78.7502Z"
                            fill="white"
                        />
                    </svg>

                    <p>
                        At Dex Data, we leave no room for error. We strive for
                        perfection and our work speaks for itself!
                    </p>
                </div>
                <div className="bg-primary font-medium text-white flex flex-col items-center text-center px-4 py-8 mx-8 lg:mx-4 md:mx-16 relative space-y-8 rounded-3xl">
                    <p className="bg-secondary w-48 py-2 font-semibold text-black rounded-2xl absolute -top-4 -left-4 ">
                        Cost Effective
                    </p>
                    <svg
                        width="120"
                        height="120"
                        viewBox="0 0 120 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M66.9997 87.0999H54.4497C46.2497 87.0999 39.5997 80.1999 39.5997 71.6999C39.5997 69.6499 41.2997 67.9499 43.3497 67.9499C45.3997 67.9499 47.0997 69.6499 47.0997 71.6999C47.0997 76.0499 50.3997 79.5999 54.4497 79.5999H66.9997C70.2497 79.5999 72.9497 76.6999 72.9497 73.1999C72.9497 68.8499 71.3997 67.9999 68.8497 67.0999L48.6997 59.9999C44.7997 58.6499 39.5497 55.7499 39.5497 46.7999C39.5497 39.0999 45.5997 32.8999 52.9997 32.8999H65.5497C73.7497 32.8999 80.3997 39.7999 80.3997 48.2999C80.3997 50.3499 78.6997 52.0499 76.6497 52.0499C74.5997 52.0499 72.8997 50.3499 72.8997 48.2999C72.8997 43.9499 69.5997 40.3999 65.5497 40.3999H52.9997C49.7497 40.3999 47.0497 43.2999 47.0497 46.7999C47.0497 51.1499 48.5997 51.9999 51.1497 52.8999L71.2997 59.9999C75.1997 61.3499 80.4497 64.2499 80.4497 73.1999C80.3997 80.8499 74.3997 87.0999 66.9997 87.0999Z"
                            fill="white"
                        />
                        <path
                            d="M60 93.75C57.95 93.75 56.25 92.05 56.25 90V30C56.25 27.95 57.95 26.25 60 26.25C62.05 26.25 63.75 27.95 63.75 30V90C63.75 92.05 62.05 93.75 60 93.75Z"
                            fill="white"
                        />
                        <path
                            d="M75 113.75H45C17.85 113.75 6.25 102.15 6.25 75V45C6.25 17.85 17.85 6.25 45 6.25H75C102.15 6.25 113.75 17.85 113.75 45V75C113.75 102.15 102.15 113.75 75 113.75ZM45 13.75C21.95 13.75 13.75 21.95 13.75 45V75C13.75 98.05 21.95 106.25 45 106.25H75C98.05 106.25 106.25 98.05 106.25 75V45C106.25 21.95 98.05 13.75 75 13.75H45Z"
                            fill="white"
                        />
                    </svg>

                    <p>
                        Budget Friendly and Proficient are the two qualities we
                        identify ourselves with. We persistently work to provide
                        you with cost effective and optimal solutions for your
                        data needs.
                    </p>
                </div>
            </div>

            <Scanners />
        </section>
    );
};

// 413
// 531

const Teams: React.FC = () => {
    return (
        <section id="team" className="">
            <h3 className="text-3xl xl:text-4xl text-center font-medium">
                Our Team
            </h3>
            <div
                className="mt-8 text-sm xl:text-base grid justify-items-center grid-cols-2 grid-rows-2 px-4 xl:px-12 gap-8 
            md:grid-rows-1 md:grid-cols-4 text-center "
            >
                <div className="w-full bg-secondary   rounded-3xl">
                    <img
                        src="team/dineshUtekar.jpg"
                        alt="Dinesh Utekar"
                        className="rounded-3xl "
                    />
                    <p className="w-max mx-auto font-medium py-2 ">
                        Dinesh Utekar
                        <br /> CEO
                    </p>
                </div>
                <div className="w-full bg-secondary   rounded-3xl">
                    <img
                        src="team/satishSakpal.jpg"
                        alt="Satish Sakpal"
                        className="rounded-3xl "
                    />
                    <p className="w-max mx-auto font-medium py-2 ">
                        Satish Sakpal
                        <br /> MD
                    </p>
                </div>
                <div className="w-full bg-secondary   rounded-3xl">
                    <img
                        src="team/siddeshDhamapurkar.jpg"
                        alt="Siddesh Dhamapurkar"
                        className="rounded-3xl "
                    />
                    <p className="w-max text-[0.8rem] lg:text-sm xl:text-base mx-auto font-medium py-2 ">
                        Siddesh Dhamapurkar
                        <br /> Project Management
                    </p>
                </div>
                <div className="w-full bg-secondary   rounded-3xl">
                    <img
                        src="team/ashishUtekar.jpg"
                        alt="Ashish Utekar"
                        className="rounded-3xl "
                    />
                    <p className="w-max mx-auto font-medium py-2 ">
                        Ashish Utekar
                        <br /> Operations
                    </p>
                </div>
            </div>
        </section>
    );
};

const About: React.FC = () => {
    return (
        <section id="about" className="">
            <h3 className="text-3xl xl:text-4xl text-center font-medium">
                About us
            </h3>

            <div className="bg-primary mt-8 relative text-white text-center rounded-3xl mx-4 md:mx-12 p-8 lg:mx-32 lg:text-xl xl:text-2xl xl:mx-32 ">
                <img
                    className="w-2/4 mx-auto lg:w-2/6 xl:w-3/12"
                    src="logoNamed.png"
                    alt="Dex Data Processing Logo"
                />
                <p>
                    DEX Data is a leading company offering Information
                    Technology services in terms of Data Processing, Data Entry,
                    OCR, Document Digitalization etc. We handle various projects
                    in the Mumbai area. DEX Data is a leader in providing
                    value-added IT services to our customers by creating a
                    successful partnership with them throughout the entire
                    process and have a knack for consistently achieving and
                    fulfilling the market demands. Our pledge is to establish
                    lasting relationships with our customers by exceeding their
                    expectations, gaining their trust through exceptional
                    performance by every member of our team on the assigned
                    projects and maximizing customer satisfaction to the utmost
                    limit.
                </p>
                <p className="bg-secondary px-8 py-2 lg:text-xl absolute text-black font-semibold rounded-2xl right-6 -bottom-5">
                    What do we do ?
                </p>
            </div>
        </section>
    );
};
