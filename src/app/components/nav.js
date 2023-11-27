import Link from "next/link";
import SigningButton from "./signinButton";

const Nav = () => {
    return (
        <nav className="h-2/5 p-5 flex justify-center items-center content-center space-x-5 md:space-x-20  " >
            <Link href={'/'}>
                <button className=" text-black font-bold py-2 px-3 rounded" >Inicio</button>
            </Link>
            <Link href={'/resultados'}>
                <button className=" text-black font-bold py-2 px-3 rounded" >Votaciones</button>
            </Link>
            <Link href={'/nosotros'}>
                <button className=" text-black font-bold py-2 px-3 rounded" >Sobre</button>
            </Link>
            <SigningButton />


        </nav>
    );
}
export default Nav;