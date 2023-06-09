export default function BtnSecondary({ size = 'md', onClick, children }) {
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
        <button
          type="button"
          className={`rounded-md flex items-center justify-center space-x-2 border border-gray-400 bg-white text-gray-900 hover:border-gray-900 transition-all ease-in-out duration-200 ${buttonSizeClass}`}
          onClick={onClick}
        >
          {children}
        </button>
      </>
    );
  }