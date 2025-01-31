"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import { BetaMenuActive } from "@/lib/constants";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight ?? 0;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${position} top-0 z-50 flex h-[10vh] w-full max-w-[1300px] items-center bg-transparent p-4 transition-all duration-300 ease-in-out`}
    >
      <div className="flex h-full w-full items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={164}
            height={55}
            alt="logo"
            className="h-12"
          />
        </Link>
        {!isScrolled && (
          <div className="hidden flex-row items-center justify-center gap-[3.48rem] md:flex">
            <Button
              asChild
              variant="link"
              className="px-0 text-lg uppercase text-accent"
            >
              <Link href="/menu">Order Online</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="px-0 text-lg uppercase text-accent"
            >
              <Link href="/about-us">About</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="px-0 text-lg uppercase text-accent"
            >
              <Link href="/our-story">Our Story</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="px-0 text-lg uppercase text-accent"
            >
              <Link href="/contact">Contact</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="px-0 text-lg uppercase text-accent"
            >
              <Link href="/table-booking">Booking</Link>
            </Button>
            {/* <Button
              asChild
              variant="link"
              className="px-0 uppercase text-accent"
            >
              <Link href="/gift-voucher">Gift Voucher</Link>
            </Button> */}
          </div>
        )}
        {!isScrolled && (
          <div className="hidden items-center justify-center gap-[2.5rem] md:flex">
            {/* <CartSheet>
              <Button
                variant="ghost"
                className="px-1 py-1 hover:bg-transparent"
                disabled={!BetaMenuActive}
              >
                <span className="sr-only">Shopping Cart</span>
                <Icons.shoppingCart />
              </Button>
            </CartSheet> */}
            <Link href="/table-booking">
              <Button
                className="group h-11 items-center gap-[1.19rem] rounded-md bg-[#F5AE52] font-bebas_neue text-lg font-[400] uppercase text-[#282828] hover:bg-primary"
                variant="secondary"
              >
                Book A Table
              </Button>
            </Link>
          </div>
        )}
        {isScrolled ? (
          <Sidebar>
            <Button
              variant="ghost"
              className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
            >
              <span className="sr-only">Menu</span>
              <Icons.menu />
            </Button>
          </Sidebar>
        ) : (
          <Sidebar>
            <Button
              variant="ghost"
              className="px-1 py-1 text-primary hover:bg-transparent hover:text-primary md:hidden"
            >
              <span className="sr-only">Menu</span>
              <Icons.menu />
            </Button>
          </Sidebar>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
