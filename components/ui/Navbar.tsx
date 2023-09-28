import { Link, Spacer } from "@nextui-org/react"
import Image from "next/image"



export const Navbar = () => {

    

  return (
    <div style={{
        display:'flex',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:'0px 20px',
        backgroundColor:'#3f3f46',
        
    }} >
        <Image 
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png'
            alt='icono de la app'
            width={60}
            height={60}
            className='mb-4'
        />
        {/* <h2 style={{color:'white',fontSize:'1.5em'}}>P</h2>
        <h3 style={{color:'white'}}>okemon</h3> */}
        <Link href="/" style={{color:'white',fontSize:'1.5em'}}>P</Link>
        <Link href="/" style={{color:'white'}}>okemon</Link>

        <Spacer className="flex-1"/>
        <Link href="/favorites" style={{color:'white'}}>Favoritos</Link>
    </div>
  )
}
