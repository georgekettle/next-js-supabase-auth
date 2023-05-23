'use client'

import { useSupabase } from '@/app/supabase-provider';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { PlusIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Container from './Container';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const { supabase, session } = useSupabase();
  const router = useRouter();

  async function signOut() {
    await supabase.auth.signOut();
    // redirect to home page
    router.push('/');
  }

  // Separate the logic and conditionally render different JSX elements
  const renderAuthenticatedContent = () => (
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <Link
          href="/chatbots/new"
          className="relative inline-flex items-center gap-x-1.5 rounded-sm bg-gray-900 px-3 py-2 text-sm font-normal text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
          New Chatbot
        </Link>
      </div>
      <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
        {/* Profile dropdown */}
        <Menu as="div" className="relative ml-3">
          <div>
            <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-sm bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => supabase.auth.signOut()}
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700 w-full text-left'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );

  const renderGuestContent = () => (
    <div className="flex items-center">
      <Link
        href="/auth/login"
        className="relative inline-flex items-center gap-x-1.5 rounded-sm bg-gray-900 px-3 py-2 text-sm font-normal text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
      >
        Log In
      </Link>
      <Link
        href="/auth/signup"
        className="relative inline-flex items-center gap-x-1.5 rounded-sm bg-gray-900 px-3 py-2 text-sm font-normal text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
      >
        Sign Up
      </Link>
    </div>
  );

  return (
    <div className="relative bg-white border-b border-gray-300">
      <Container>
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <Image
                  className="block h-4 w-auto lg:hidden"
                  src="/logo_sm.svg"
                  width={100}
                  height={100}
                  alt="Your Company"
                />
                <Image
                  className="hidden h-4 w-auto lg:block"
                  src="/logo.svg"
                  width={100}
                  height={100}
                  alt="Your Company"
                />
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {/* Current: "border-gray-900 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
              <Link
                href="/"
                className="inline-flex items-center border-b border-gray-900 px-1 pt-1 text-sm font-normal text-gray-900"
              >
                Find a Chatbot
              </Link>
            </div>
          </div>

          {/* Conditionally render authenticated or guest content */}
          {session ? renderAuthenticatedContent() : renderGuestContent()}
        </div>
      </Container>
    </div>
  );
}
