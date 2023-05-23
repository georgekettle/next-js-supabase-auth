import Link from "next/link";

export default function LinkUnderline({ href = '#', children, ...props }) {
  return (
    <>
      <Link href={href} className={`text-gray-900 underline underline-offset-4 transition-all ease-in-out duration-200 ${props.className}`}>
        {children}
      </Link>
    </>
  );
}