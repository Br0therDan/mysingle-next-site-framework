"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

import { icons } from "lucide-react";
import { SiteConfig } from "@/schemas/siteConfigSchema";

interface SidebarProps {
  config: SiteConfig["sidebar"];
}

const Sidebar: React.FC<SidebarProps> = ({ config }) => {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();

  // 사이드바 너비에 따른 CSS 변수 업데이트
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--sidebar-width", expanded ? "16rem" : "4rem");
  }, [expanded]);

  if (!config.visible) {
    return null;
  }

  return (
    <aside
      className={cn(
        "fixed top-14 bottom-0 bg-white border-r border-gray-200",
        "transition-width duration-300 ease-in-out",
        "flex flex-col",
        expanded ? "w-64" : "w-16"
      )}
    >
      <nav className="flex-1 overflow-hidden p-[5px]">
        <ul className="space-y-3 py-4">
          {config.items.map((item) => {
            const IconComponent =
              item.icon && icons[item.icon as keyof typeof icons];

            return (
              <li key={item.href} className="flex justify-start w-full">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center py-2 px-4 text-sm font-normal rounded-md",
                          pathname === item.href
                            ? "text-blue-600 bg-gray-300"
                            : "hover:text-blue-600 text-accent-foreground"
                        )}
                      >
                        {IconComponent && (
                          <IconComponent
                            className={cn(
                              "h-5 w-5",
                              expanded ? "mr-3" : "mx-auto"
                            )}
                          />
                        )}

                        <span
                          className={cn(
                            "w-40 transition-all duration-300 ease-in-out",
                            expanded
                              ? "flex opacity-100 max-w-full visibility-visible"
                              : "hidden opacity-0 max-w-0 visibility-hidden"
                          )}
                        >
                          {item.label}
                        </span>
                      </Link>
                    </TooltipTrigger>
                    {!expanded && (
                      <TooltipContent side="right">
                        <p>{item.label}</p>
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              </li>
            );
          })}
        </ul>
      </nav>
      <Button
        variant="ghost"
        className="flex w-full h-16 justify-center rounded-none border-t border-gray-200 hover:bg-gray-100"
        size="icon"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? (
          <FiChevronsLeft className="h-5 w-5" />
        ) : (
          <FiChevronsRight className="h-5 w-5" />
        )}
      </Button>
    </aside>
  );
};

export default Sidebar;