import Link from "next/link"
import { NavbarArray, NavbarItemType } from "../utils/NavbarArray"
import CartIcon from "./CartIcon"


const MobileNavbar = () => {
    return (
        <div>
            <div className='w-full bg-gray-200 px-6 py-4 flex justify-center flex-col items-center'>
                <CartIcon />
                {
                    NavbarArray.map((item: NavbarItemType, index: number) => {
                        return (
                            <>
                                <li key={index} className="py-2 px-3 list-none hover:bg-pink-300 rounded-md duration-300">
                                    <Link href={item.href}>{item.label}</Link>
                                </li>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MobileNavbar