'use client'

import { useState } from 'react'
import { useSupabase } from "@/app/supabase-provider";

import Form from '@/components/forms/Form';
import Input from '@/components/forms/Input';
import SubmitButton from '@/components/forms/SubmitButton';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import LinkPrimary from '@/components/links/LinkPrimary';


export default function ForgottenPassword() {
    const { supabase } = useSupabase();
    const [user, setUser] = useState({ password: "" });
    const [loading, setLoading] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const updateUserPassword = async () => {
        setLoading(true);
        await supabase.auth.updateUser(user)
        setShowConfirmation(true);
    };

    // conditionally render the form or a success message
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            {showConfirmation ? (
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-8 text-center text-2xl font-normal leading-9 tracking-tight text-gray-900">
                        Your password has been updated
                    </h2>
                    <p className="mt-4 text-center text-sm text-gray-500">
                        You are now logged in with your new password.
                    </p>
                    <div className="mt-6 flex justify-center">
                        <LinkPrimary href="/" size='xl'>Return to home</LinkPrimary>
                    </div>
                </div>
            ) : (
                <>
                    <h2 className="mt-8 text-center text-2xl font-normal leading-9 tracking-tight text-gray-900">
                        Set your new password
                    </h2>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <Form onSubmit={updateUserPassword}>
                            <div className="space-y-5">
                                <Input
                                    id="password"
                                    label="New password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}/>
                                <SubmitButton text="Update password" loading={loading} />
                            </div>
                        </Form>
                    </div>
                </>
            )}

        </div>
      )
  }
  