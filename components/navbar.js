import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex justify-center space-x-16 mt-10 bg-blue-300 h-10 items-center font-bold font-sans">
      <Link href="/">
        <div>Home</div>
      </Link>
      <Link href="/about">
        <div>About</div>
      </Link>
      <Link href="/contact">
        <div>Contact</div>
      </Link>
      <Link href="/service">
        <div>Service</div>
      </Link>
      <Link href="/login">
        <div>Login</div>
      </Link>
    </nav>
  );
};
