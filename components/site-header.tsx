import { MainNav } from "./main-nav";
import { SiteLogo } from "./site-logo";

export function SiteHeader() {
  return (
    <header className="h-12 border-b items-center flex justify-between p-4 md:p-0">
      <SiteLogo />
      <MainNav />
    </header>
  );
}
