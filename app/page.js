import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import UploadForm from '@/components/forms/UploadForm'

export default async function Home() {
  const supabase = createServerComponentSupabaseClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <>
      <UploadForm session={session} />
    </>
  )
}