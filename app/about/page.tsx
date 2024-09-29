"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"


export default function About (){
  const Router1 = useRouter()
    return(
    <>
      <br/>
      <h1>This is About page</h1>
      <br/>
       <Link href="/navbar"><h1>Navbar Link</h1></Link>
       <br/>
       <Link href="/contact"><h1>Contact Link</h1></Link>
       <br/>
       <Link href="/footer"><h1>Footer Link</h1></Link>
       <br/>
       <button onClick={()=>Router1.push("/contact")}><h1>Botton Contact</h1></button>
       <br/>
       <button onClick={()=>Router1.push("/navbar")}><h1>Botton Navbar</h1></button>
       <br/>
       <button onClick={()=>Router1.push("/footer")}><h1>Botton footer</h1></button>
 
 
    </>
    )
    
  }