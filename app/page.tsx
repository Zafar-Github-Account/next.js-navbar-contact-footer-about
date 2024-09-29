"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import Card from "./component/card";

export default function Home (){
  const Router=useRouter()
  return(
 <>
 
 <br/>
 <h1>This is Home Page</h1>
 <br/>
 <Link href="/about"><h1>About Link</h1></Link>
 <br/>
 <Link href="/contact"><h1>Contact Link</h1></Link>
 <br/>
 <Link href="/navbar"><h1>Navbar Link</h1></Link>
 <br/>
 <Link href="/footer"><h1>Footer Link</h1></Link>
 <br/>
 <button onClick={()=>Router.push("/about")}><h1>Botton About</h1></button>
 <br/>
 <button onClick={()=>Router.push("/contact")}><h1>Botton Contact</h1></button>
 <br/>
 <button onClick={()=>Router.push("/navbar")}><h1>Botton Navbar</h1></button>
 <br/>
 <button onClick={()=>Router.push("/footer")}><h1>Botton footer</h1></button>

 <br/>
 <br/>
 <Card Name="Ali" RollNo="33667"/>
 <br/>
 <Card Name="Zafar Sohail" RollNo="99880"/>
 </>
  
  )
}