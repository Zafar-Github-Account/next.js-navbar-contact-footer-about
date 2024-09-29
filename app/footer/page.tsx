"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Footer (){
  const Router3 = useRouter()
    return(
    <>
    <br/>
      <h1>This is Footer page</h1>
      <br/>
     <Link href="/about"><h1>About Link</h1></Link>
     <br/>
     <Link href="/contact"><h1>Contact Link</h1></Link>
     <br/>
     <Link href="/navbar"><h1>Navbar Link</h1></Link>
     <br/>
     <button onClick={()=>Router3.push("/about")}><h1>Botton About</h1></button>
     <br/>
     <button onClick={()=>Router3.push("/contact")}><h1>Botton Contact</h1></button>
     <br/>
     <button onClick={()=>Router3.push("/navbar")}><h1>Botton Navbar</h1></button>
 
    
 
    </>
    )
    
  }