'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useSupabase } from "@/app/supabase-provider";

import Link from 'next/link'
import Form from '@/components/forms/Form'
import Input from '@/components/forms/Input'
import Label from '@/components/forms/Label'
import SubmitButton from '@/components/forms/SubmitButton'
import LinkUnderline from '@/components/links/LinkUnderline'


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
            <Form onSubmit={handleLogin}>
                <div className="space-y-5">
                    
                    <Input name="email"
                        type="email"
                        label="Email address"
                        autoComplete="email"
                        required
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    
                    <div>
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">Password</Label>
                            <LinkUnderline href="/auth/forgotten_password" className="text-sm mb-2">
                                Forgot password?
                            </LinkUnderline>
                        </div>
                        <Input
                            id="password"
                            label={false}
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}/>
                    </div>
                    <SubmitButton text="Log in" />
                </div>
            </Form>
  
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
  