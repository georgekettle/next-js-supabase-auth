import Link from "next/link";

export default function BtnPrimary({ size = 'md', path = '#', children }) {
    let buttonSizeClass;
  
    switch (size) {
      case 'xs':
        buttonSizeClass = 'text-xs px-2 py-1';
        break;
      case 'sm':
        buttonSizeClass = 'text-sm px-2 py-1';
        break;
      case 'md':
        buttonSizeClass = 'text-sm px-2.5 py-1.5';
        break;
      case 'lg':
        buttonSizeClass = 'text-sm px-3 py-2';
        break;
      case 'xl':
        buttonSizeClass = 'text-sm px-3.5 py-2.5';
        break;
      default:
        buttonSizeClass = 'text-sm px-2.5 py-1.5';
    }
  
    return (
      <>
        {/* Convert button to link */}
        <Link href={path} className={`rounded-md flex items-center justify-center space-x-2 bg-gray-900 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-all ease-in-out duration-200 ${buttonSizeClass}`}>
            {children}
        </Link>
      </>
    );
}
  