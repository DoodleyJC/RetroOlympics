import { FormEvent } from 'react'
import { cookies } from 'next/headers'

export default function LoginPage() {
 
  async function handleSubmit(formData: FormData) {
    'use server'
    console.log("hello");
    // const email = formData.get('email');
    // const password = formData.get('password');
 
    // const response = await fetch('/api/auth/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, password }),
    // })
    

    // if (response.ok) {
    //   redirect("/logintest");
    // } else {
    //   // Handle errors
    // }

    cookies().set("isLoggedIn", "1");
  }
 
  return (
    <form action={handleSubmit}>
      <input type="text" name="email" placeholder="Email"/>
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  )
}