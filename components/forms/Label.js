'use client'

export default function Label({ children, htmlFor }) {
    return (
        <label htmlFor={htmlFor} className="block text-sm font-normal leading-6 text-gray-900 mb-2">
            {children}
        </label>
    )
}
