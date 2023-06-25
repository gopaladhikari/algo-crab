import { footerLinks } from "@/constants";
import FooterLink from "./FooterLink";
import Logochanger from "./Logochanger";
import Link from "next/link";

function Footer() {
  const thisYear: number = new Date().getFullYear();
  return (
    <footer data-aos="fade-up" className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Logochanger />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3">
            {footerLinks.map((item) => (
              <FooterLink key={item.id} {...item} />
            ))}
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            &copy; {thisYear}{" "}
            <Link href="/" className="hover:underline">
              Algo Crab
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
