'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useSupabase } from "@/app/supabase-provider";

import Form from '@/components/forms/Form';
import Input from '@/components/forms/Input';
import SubmitButton from '@/components/forms/SubmitButton';
import Label from '@/components/forms/Label';
import LinkUnderline from '@/components/links/LinkUnderline';


export default function SignUp() {
    const router = useRouter();
    const { supabase } = useSupabase();
    const [user, setUser] = useState({ email: "", password: "" });

    const handleSignUp = async () => {
        // handle sign up
        const { data, error } = await supabase.auth.signUp(user);
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

            <h2 className="mt-8 text-center text-2xl font-normal leading-9 tracking-tight text-gray-900">
                Sign up today
            </h2>
  
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <Form onSubmit={handleSignUp}>
                    <div className="space-y-5">
                        
                        <Input name="email"
                            type="email"
                            label="Email address"
                            autoComplete="email"
                            required
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })} />
                        
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}/>
                        <SubmitButton text="Create account" />
                    </div>
                </Form>
    
                <p className="mt-10 text-center text-sm text-gray-500">
                    Or{' '}
                    <LinkUnderline path="/auth/login" className="text-sm mb-2">
                        Log in to your account
                    </LinkUnderline>
                </p>
            </div>
        </div>
      </>
    )
  }
  