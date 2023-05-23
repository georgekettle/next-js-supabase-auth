import Spinner from '@/components/loaders/Spinner';

export default function SubmitButton({ text, loading = false }) {
    return (
        <button
            type="submit"
            disabled={loading}
            className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-normal leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
            {loading ? (
                <>
                    <Spinner size={24} className="text-white" />
                </>
            ) : ( 
                <span>{text}</span>
            )}
        </button>
    );
}