import Navigation from "@/app/_components/Navigation";
import Logo from "./Logo";
import SideNavigation from "./SideNavigation";

function Header() {
  return (
    <header className="bg-primary-50 px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
        <SideNavigation />
      </div>
    </header>
  );
}

export default Header;
