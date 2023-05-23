import Link from "next/link";

export default function LinkUnderline({ path = '#', children, ...props }) {
  return (
    <>
      <Link href={path} className={`text-gray-900 underline underline-offset-4 transition-all ease-in-out duration-200 ${props.className}`}>
        {children}
      </Link>
    </>
  );
}