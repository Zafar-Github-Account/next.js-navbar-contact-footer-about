"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Contact (){
  const Router2 =useRouter()
    return(
    <>
    <br/>
      <h1>This is cantact page</h1>
      <br/>
      <Link href="/about"><h1>About Link</h1></Link>
      <br/>
      <Link href="/navbar"><h1>Navbar Link</h1></Link>
      <br/>
      <Link href="/footer"><h1>Footer Link</h1></Link>
      <br/>
      <button onClick={()=>Router2.push("/about")}><h1>Botton About</h1></button>
      <br/>
      <button onClick={()=>Router2.push("/navbar")}><h1>Botton Navbar</h1></button>
      <br/>
      <button onClick={()=>Router2.push("/footer")}><h1>Botton footer</h1></button>
 
   </>
    )
    
  }