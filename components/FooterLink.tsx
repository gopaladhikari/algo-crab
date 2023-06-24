import { FooterLinkType } from "@/types";
import Link from "next/link";
import { ReactElement } from "react";

function FooterLink({ id, title, links }: FooterLinkType): ReactElement {
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        {title}
      </h2>
      <ul className="text-gray-600 dark:text-gray-400 font-medium">
        {links?.map(({ id, href, title }) => {
          if (typeof href === "string") {
            return (
              <li key={id} className="mb-4">
                <Link href={href} className="hover:underline">
                  {title}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default FooterLink;
