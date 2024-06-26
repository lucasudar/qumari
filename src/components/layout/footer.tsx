import * as React from "react";
import Link from "next/link";

import { footerLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/layout/mode-toggle";

import { Icons } from "../shared/icons";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t", className)}>
      <div className="container grid max-w-6xl grid-cols-2 p-6 py-14 sm:grid-cols-2 md:grid-cols-3">
        {footerLinks.map((section) => (
          <div key={section.title}>
            <span className="text-sm font-medium text-foreground">
              {section.title}
            </span>
            <ul className="mt-4 list-inside space-y-3">
              {section.items?.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col items-end md:col-span-2">
          <div>
            <span className="text-sm font-medium text-foreground">
              Contact us
            </span>
            <ul className="mt-4 list-inside space-y-3">
              <li>
                <Link
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {siteConfig.phone}
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${siteConfig.mailSupport}`}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {siteConfig.mailSupport}
                </Link>
                <p className="text-sm text-muted-foreground hover:text-primary mt-4">{siteConfig.address}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t py-4">
        <div className="container flex max-w-6xl items-center justify-between">
          <span className="text-muted-foreground text-sm">
            Copyright &copy; 2024. All rights reserved.
          </span>
          {/* <p className="text-left text-sm text-muted-foreground">
            Built by{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              lucasudar
            </Link>
            . Hosted on{" "}
            <Link
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </Link>
            .
          </p> */}

          <div className="flex items-center gap-3">
            <Link
              href={`tel:${siteConfig.phone}`}
              className="font-medium underline underline-offset-4"
            >
              <Icons.phone className="size-5" />
            </Link>
            <Link
              href={`mailto:${siteConfig.mailSupport}`}
              className="font-medium underline underline-offset-4"
            >
              <Icons.email className="size-5" />
            </Link>
            <Link
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              <Icons.facebook className="size-5" />
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
