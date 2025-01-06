import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          User Directory
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
