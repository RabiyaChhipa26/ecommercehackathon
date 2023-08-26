
import Image from "next/image";
import { IoLogoTwitter } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { TiSocialLinkedin } from "react-icons/ti";
import Wrapper from "../shared/Wrapper";
import Link from "next/link";


const Footer = () => {
    return (
        <>
            <Wrapper>
                <div className="flex flex-col md:flex-row justify-between lg:mt-14  ">
                    {/* Box 1 */}
                    <div className="md:px-2  w-2/4 ">
                        <Link href={"/"}>
                            <Image src={'/Logo.png'} alt="Logo" width={150} height={150} />
                        </Link>
                        <p className="text-gray-600  mt-8 text-sm">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                        <div className="flex mt-9 space-x-6 rounded-full  items-center ">
                            <IoLogoTwitter className="h-8 w-8 p-1 rounded-lg bg-slate-300 " />
                            <GrFacebookOption className="h-8 w-8 bg-slate-300 rounded-lg" />
                            <TiSocialLinkedin className="h-8 w-8 rounded-lg bg-slate-300" />
                        </div>
                    </div>
                    {/* Box 2 */}
                    <div className="w-1/4 text-gray-600 font-bold text-md pl-10 mt-2">Company
                        <ul className=" font-normal mt-4 text-sm  ">
                            <li>About</li>
                            <li>Terms of use</li>
                            <li> Privacy Policy</li>
                            <li>How it Works</li>
                            <li>Contact Us</li>
                        </ul>
                    </div >
                    {/* Box 3  */}
                    <div className="text-gray-600 font-bold text-md pl-10 w-1/4 mt-2">
                        Support
                        <ul className=" font-normal mt-4 text-sm  ">
                            <li>Support Career</li>
                            <li>24h Service</li>
                            <li> Quick Chat</li>
                        </ul>
                    </div>
                    {/* Box 4 */}
                    <div className="text-gray-600 font-bold text-md pl-10 w-1/4 mt-2 "> Contact
                        <ul className=" font-normal mt-4 text-sm ">
                            <li>Whatsapp</li>
                            <li>Support  24h</li>
                        </ul>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default Footer