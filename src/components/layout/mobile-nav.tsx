"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { marketingConfig } from "@/config/marketing";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/shared/icons";

import { ModeToggle } from "./mode-toggle";
import { Button } from "../ui/button";

export function NavMobile() {
  const [open, setOpen] = useState(false);
  const links = marketingConfig.mainNav;

  // prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "fixed right-2 top-2.5 z-50 rounded-full p-2 transition-colors duration-200 hover:bg-muted focus:outline-none active:bg-muted md:hidden",
          open && "hover:bg-muted active:bg-muted",
        )}
      >
        {open ? (
          <X className="size-5 text-muted-foreground" />
        ) : (
          <Menu className="size-5 text-muted-foreground" />
        )}
      </button>

      <nav
        className={cn(
          "fixed inset-0 z-20 hidden w-full overflow-auto bg-background px-5 py-16 lg:hidden",
          open && "block",
        )}
      >
        <ul className="grid divide-y divide-muted">
          {links.map(({ title, href }) => (
            <li key={href} className="py-3">
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="flex w-full font-medium capitalize"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className="mt-5 flex items-center justify-center">
          <Button
            className="gap-2 px-4"
            variant="default"
            size="sm"
            rounded="full"
            onClick={() => setOpen(false)}
          >
            <span>Get a Free Consultation</span>
          </Button>
        </Link>

        <div className="mt-5 flex items-center justify-end space-x-8">
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
          <Link href={siteConfig.links.facebook} target="_blank" rel="noreferrer">
            <Icons.facebook className="size-6" />
            <span className="sr-only">Facebook</span>
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </>
  );
}
