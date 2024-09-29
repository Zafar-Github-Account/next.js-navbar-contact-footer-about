"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Navbar (){
  const Router4 =useRouter()
    return(
    <>
    <br/>
      <h1>This is Navbar page</h1>
      <br/>
      <Link href="/about"><h1>About Link</h1></Link>
     <br/>
     <Link href="/contact"><h1>Contact Link</h1></Link>
     <br/>
     <Link href="/footer"><h1>Footer Link</h1></Link>
     <br/>
     <button onClick={()=>Router4.push("/about")}><h1>Botton About</h1></button>
     <br/>
     <button onClick={()=>Router4.push("/contact")}><h1>Botton Contact</h1></button>
     <br/>
     <button onClick={()=>Router4.push("/footer")}><h1>Botton footer</h1></button>
 
    </>
    )
    
  }