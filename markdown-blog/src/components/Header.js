import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 border-b z-10 bg-white">
      <div className="max-w-4xl mx-auto flex justify-btween item-center h-12" >
        <Link href="/">
          <div>LOGO</div>
        </Link>
        <div className="ml-auto">Link</div>
      </div>
    </header>
  );
};

export default Header;