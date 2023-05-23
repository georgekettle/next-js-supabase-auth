// Convert this to jsx:
// <button
// type="submit"
// className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-normal leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
// >
// Create account
// </button>

export default function SubmitButton({ text }) {
    return (
        <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-normal leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
            {text}
        </button>
    );
}