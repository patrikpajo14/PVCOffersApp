"use client";
import useAuthStore from "@/app/store/AuthStore";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const { user } = useAuthStore();

  console.log("user", user);

  const sidebarLinks = [
    "/",
    "offers",
    "article-list",
    "administration",
    user?.role === 1 && "users",
  ];
  const sidebarTranslate = [
    "Dashboard",
    "Offers",
    "Articles",
    "Administration",
    user?.role === 1 && "Users",
  ];
  const sidebarIcons = [
    "/assets/icons/ico_dashboard.svg",
    "/assets/icons/ico_offers.svg",
    "/assets/icons/ico_article.svg",
    "/assets/icons/ico_administration.svg",
    user?.role === 1 && "/assets/icons/ico_users.svg",
  ];

  return (
    <div className="sidebar">
      <div className="inner">
        <div className="flex-between px-[17px] py-[5px] md:p-0">
          <Link href="/" className="logo">
            LOGO
          </Link>
          <button
            className="block md:hidden"
            onClick={() => {
              document.body.classList.remove("no-scroll");
              document.body.classList.remove("sidebar-open");
            }}
          >
            <Image
              src={"/assets/icons/ico_close.svg"}
              width="25"
              height="25"
              alt="menu"
            />
          </button>
        </div>
        <ul>
          {sidebarLinks.map((link, index) => {
            const isActive = pathname.endsWith(link);
            console.log("link", link);
            return (
              <>
                {link !== false && (
                  <li className="relative" key={index}>
                    <Link
                      href={`/dashboard/${link}`}
                      onClick={() => {
                        document.body.classList.remove("sidebar-open");
                      }}
                      className={
                        isActive ? "sidebar-link active" : "sidebar-link"
                      }
                    >
                      <Image
                        src={sidebarIcons[index]}
                        alt={sidebarTranslate[index]}
                        width="25"
                        height="25"
                        className={"sidebar-icon"}
                      />
                      {sidebarTranslate[index]}
                    </Link>
                  </li>
                )}
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
