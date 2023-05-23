import Label from "./Label";

const Input = ({ name, label, type = 'text', value, onChange, id, ...rest }) => {
    console.log('label', label)
    const displayLabel = label === false ? false : true;
    // capitalize the first letter of the label
    if (displayLabel) {
        label ||= name;
        label = label.charAt(0).toUpperCase() + label.slice(1);
    }
    
    return (
        <div>
            {displayLabel && <Label htmlFor={id || name}>{label}</Label>}
            <input
                id={id || name}
                name={name} 
                type={type}
                value={value}
                onChange={onChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                {...rest}
            />
        </div>
    );
};

export default Input;
