'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link'

import { useSupabase } from "@/app/supabase-provider";

export default function Login() {
  const router = useRouter();
    const { supabase } = useSupabase();
    const [user, setUser] = useState({ email: "", password: "" });

    const handleLogin = async () => {
        // handle sign up
        const { data, error } = await supabase.auth.signInWithPassword(user)
        if (error) {
            console.log(error);
            return;
        }
        // redirect to home page
        router.push("/");
    };

    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <h2 className="mt-10 text-center text-2xl font-normal leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block text-sm font-normal leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-normal leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-normal text-gray-900 hover:text-gray-900">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-normal leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                  Log In
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <Link href="/auth/signup" className="font-normal text-gray-900 hover:text-gray-900 underline">
                Sign up now
                </Link>
            </p>
          </div>
        </div>
      </>
    )
  }
  