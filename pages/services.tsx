/* eslint-disable @next/next/no-img-element */
import { domAnimation, LazyMotion, m } from "framer-motion";
import { NextPage } from "next";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Scanners from "../components/Scanners";

const Services: NextPage = () => {
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

                    <DexServices />

                    <Contact />
                </main>

                <Footer />
            </m.div>
        </LazyMotion>
    );
};

export default Services;

const Hero: React.FC = () => {
    return (
        <section
            id="home"
            className="flex mx-6 lg:mx-20 xl:mx-32 flex-col-reverse md:flex-row md:justify-evenly items-center "
        >
            <div className="mt-6  lg:w-2/4 ">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium xl:leading-[1.25]">
                    We scan all type of Documents !
                </h1>
                <h2 className="text-xl mt-4 lg:pr-32  ">
                    Fast. Efficient. Secured.
                </h2>
                <div className="flex mt-8 space-x-8 md:text-lg">
                    <a href="#contact">
                        <button className="bg-primary font-medium text-white px-8 py-3 rounded-xl hover:ring ring-primary ring-opacity-50 transition-all active:scale-95">
                            Contact us
                        </button>
                    </a>
                    <a href="#about">
                        <button className="bg-secondary font-medium px-8 py-3 rounded-xl hover:ring ring-secondary ring-opacity-50 transition-all active:scale-95 ">
                            About us
                        </button>
                    </a>
                </div>
            </div>
            <div className="my-6 lg:ml-12 lg:w-2/5">
                <img
                    src="illustrations/servicesHero.svg"
                    alt="Hero Illustration for Data Processing Services"
                />
            </div>
        </section>
    );
};

const DexServices: React.FC = () => {
 
    return (
        <section className="mt-16">
            <h3 className="text-3xl xl:text-4xl text-center font-medium">
                DEX Data Services
            </h3>

            <div>
                <div className="flex flex-col md:flex-row items-center mx-8 space-y-4 mt-8 ">
                    <div className="md:w-2/5  ">
                        <img
                            className="mx-auto"
                            src="services/dataEntry.svg"
                            alt="Data entry and Data processing"
                        />
                    </div>
                    <div className="md:w-3/5 xl:w-2/5 mx-auto bg-primary text-white text-center flex flex-col items-center rounded-3xl space-y-4 px-4 py-8 ">
                        <h4 className="font-medium text-lg">
                            Data Entry & Data Processing
                        </h4>
                        <p>
                            In the wake of advanced technologies, the importance
                            of Data Entry and Data Processing is often
                            overlooked. Data Entry is an efficient and unique
                            skill that enables companies to maintain up-to-date
                            and accurate records from invoices to contracts.
                            Importance of data processing includes increased
                            productivity and profits, better decisions which are
                            more accurate and reliable. We at Dex Data look to
                            constantly upscale your company with our data
                            specialized services!
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse  items-center mx-8 space-y-4 mt-8 ">
                    <div className="md:w-2/5  ">
                        <img
                            className="mx-auto"
                            src="services/invetorization.svg"
                            alt="Data entry and Data processing"
                        />
                    </div>
                    <div className="md:w-3/5 xl:w-2/5 mx-auto mr-8 bg-primary text-white text-center flex flex-col items-center rounded-3xl space-y-4 px-4 py-8 ">
                        <h4 className="font-medium text-lg">
                            Document Inventorization Services
                        </h4>
                        <p>
                            Keeping track of all the documents and creating an
                            inventory for the same is a tedious process. To ease
                            your burden, Dex Data offers document
                            inventorization solutions. Some of the many benefits
                            of document inventorization are time & cost
                            efficiency, centralized structure for documents,
                            optimum information handling and improved security.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center mx-8 space-y-4 mt-8 ">
                    <div className="md:w-2/5  ">
                        <img
                            className="mx-auto"
                            src="services/management.svg"
                            alt="Data entry and Data processing"
                        />
                    </div>
                    <div className="md:w-3/5 xl:w-2/5 mx-auto ml-8 bg-primary text-white text-center flex flex-col items-center rounded-3xl space-y-4 px-4 py-8 ">
                        <h4 className="font-medium text-lg">
                            Mangement Document Processing Services
                        </h4>
                        <p>
                            DEX Managed Document Processing Services(MDPS) is
                            the perfect choice for any organization, wherein
                            high volume of documents/records are generated as
                            part of their business process. We provide an
                            efficient, economical and timebound services to help
                            these organizations.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-3xl xl:text-4xl text-center font-medium mt-14 lg:mt-16">
                    DEX Data Document Scanning Services
                </h3>
                <div
                    className="flex justify-center flex-col items-center mt-8 lg:mt-12 space-y-6
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
                            <li>Clients Files</li>
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
            </div>

            <Scanners />
        </section>
    );
};
