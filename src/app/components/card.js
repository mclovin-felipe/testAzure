'use client'
import Image from "next/image";
import Foto from "../../assets/resultados.png"
import Foto2 from "../../assets/votacion.png"
import Link from "next/link";
const Card = ({ tipo }) => {
    const Tipos = {
        1: {
            foto: Foto2,
            titulo: "Votar",
            link: '/votar'
        }, 2: {
            foto: Foto,
            titulo: "Resultados",
            link: '/resultados'
        }
    }
    return (
        <Link href={Tipos[tipo].link}>
            <div className="flex 
            flex-col 
            space-y-3 p-3
             hover:bg-gray-300
              bg-gray-50 h-80 w-100 rounded-xl
                justify-center items-center content-center 
                md:w-60
                m-5
                
                " >
                <Image src={Tipos[tipo].foto} width={100} height={100} />
                <h4>{Tipos[tipo].titulo}</h4>
            </div>
        </Link>
    )
}
export default Card;