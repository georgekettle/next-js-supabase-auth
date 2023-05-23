'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useSupabase } from "@/app/supabase-provider";

import Form from '@/components/forms/Form';
import Input from '@/components/forms/Input';
import SubmitButton from '@/components/forms/SubmitButton';
import LinkUnderline from '@/components/links/LinkUnderline';


export default function ForgottenPassword() {
    const router = useRouter();
    const { supabase } = useSupabase();
    const [user, setUser] = useState({ email: "" });
    const [loading, setLoading] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSendResetLink = async () => {
        setLoading(true);
        await supabase.auth.resetPasswordForEmail(user.email, {
            redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/new_password`,
        });
        setShowConfirmation(true);
    };

    // conditionally render the form or a success message
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            {showConfirmation ? (
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-8 text-center text-2xl font-normal leading-9 tracking-tight text-gray-900">
                        Check your email
                    </h2>
                    <p className="mt-6 text-center text-sm text-gray-500">
                        Check your email for a link to reset your password. If it doesn't appear within a few minutes, check your spam folder.
                    </p>
                </div>
            ) : (
                <>
                    <h2 className="mt-8 text-center text-2xl font-normal leading-9 tracking-tight text-gray-900">
                    Reset your password
                    </h2>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <Form onSubmit={handleSendResetLink}>
                        <div className="space-y-5">
                            <Input
                                name="email"
                                type="email"
                                label="Email address"
                                autoComplete="email"
                                required
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                            />
                            <SubmitButton text="Send reset link" loading={loading} />
                        </div>
                    </Form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Back to{' '}
                        <LinkUnderline href="/auth/login" className="text-sm mb-2">
                        Log in
                        </LinkUnderline>
                    </p>
                    </div>
                </>
            )}

        </div>
      )
  }
  