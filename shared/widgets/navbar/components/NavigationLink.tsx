"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/shared/libs/shadcn/ui/navigation-menu";
import Link from "next/link";

const NavigationLink = () => {
  return (
    <div className="pl-10">
      <NavigationMenu viewport={false}>
        <NavigationMenuList className="flex-wrap">
          <NavigationMenuItem key={1}>
            <NavigationMenuLink asChild>
              <Link href="/season" className="text-sm">
                Season
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem key={2}>
            <NavigationMenuLink asChild>
              <Link href="/genres" className="text-sm">
                Genres
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem key={3}>
            <NavigationMenuLink asChild>
              <Link href="/trending" className="text-sm">
                Trending
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem key={4}>
            <NavigationMenuTrigger className="font-normal">
              Media
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-50 gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/release/finished" className="text-sm">
                      TV
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/release/onair" className="text-sm">
                      Movie
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/release/upcoming" className="text-sm">
                      OVA
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem key={5}>
            <NavigationMenuTrigger className="font-normal">
              Release
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-50 gap-0">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/release/finished" className="text-sm">
                      Finished
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/release/onair" className="text-sm">
                      On Air
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/release/upcoming" className="text-sm">
                      Upcoming
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavigationLink;
