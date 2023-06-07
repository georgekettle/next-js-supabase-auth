'use client'

import { useSupabase } from "@/app/supabase-provider"
import { toast } from "react-hot-toast"

export default function UploadForm({ session }) {
    const { supabase } = useSupabase()
    console.log(supabase)
    const user = session?.user
    console.log(user)

    const uploadFile = async () => {
        // use react-hot-toast to show a loading spinner
        const toastId = toast.loading('Uploading file...')
        // get the file from the input
        const file = document.getElementById('file-upload').files[0]
        // upload the file to supabase
        const { error } = await supabase.storage
            .from('files')
            .upload(`${file.name}`, file)
            
        // if there was an error, show it to the user
        if (error) {
            console.log(error)
            toast.error('There was an error uploading your file', { id: toastId })
            throw error
        }

    }


  return (
    <div className="flex flex-col items-center">
        {/* file input */}
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <div className="flex text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={(e) => uploadFile(e.target.files[0])} />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
        </div>
    </div>
  )
}