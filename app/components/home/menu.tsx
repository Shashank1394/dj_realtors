import Link from "next/link";

const Menu = (props: { setIsMenuOpen: (arg0: boolean) => any }) => {
  const closeMenu = () => props.setIsMenuOpen(false);

  return (
    <div className="flex flex-col md:hidden bg-[#F0F0F0] text-black px-5 py-3 gap-4 text-center text-lg min-h-screen w-full">
      <Link href="/dj_realtors" onClick={closeMenu}>
        HOME
      </Link>
      <Link href="/about" onClick={closeMenu}>
        ABOUT US
      </Link>
      <Link href="/categories" onClick={closeMenu}>
        CATEGORIES
      </Link>
      <Link href="/testimonials" onClick={closeMenu}>
        TESTIMONIALS
      </Link>
    </div>
  );
};
export default Menu;
