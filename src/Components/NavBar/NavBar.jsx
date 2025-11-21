import { useEffect, useState } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
import { IoMenu, IoClose } from "react-icons/io5";
import "./nav.css";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (location.state?.scrollTo && location.pathname === "/") {
      scroller.scrollTo(location.state.scrollTo, {
        smooth: true,
        duration: 500,
        offset: 0,
      });
    }
  }, [location]);

  const handleScrollNav = (to) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: to } });
    }
    setMobileOpen(false);
  };

  const navItems = [
    { name: "عن الأكاديمية", to: "about", type: "scroll" },
    { name: "الفريق", to: "team", type: "scroll" },
    { name: "الآراء", to: "opinions", type: "scroll" },
    { name: "الدورات", to: "courses", type: "scroll" },
    { name: "خطط الأسعار", to: "subscription", type: "scroll" },
    { name: "للتواصل", to: "/contact", type: "route" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0  bg-white z-20 xl:shadow-md w-screen">
      <div className="flex justify-between flex-row-reverse xl:justify-normal xl:flex-row-reverse px-6 pt-2 xl:gap-x-8">
        {/* Logo */}
        <NavLink to="/" className="w-[40%] xl:w-[12%]">
          <img src="hero22.png" alt="Logo" className="w-full" />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex flex-row-reverse gap-x-8 items-center font-Amiri-Bold text-3xl">
          {navItems.map(({ name, to, type }) => (
            <li key={to} className="list-none ">
              {type === "scroll" ? (
                location.pathname === "/" ? (
                  <ScrollLink
                    to={to}
                    smooth={true}
                    duration={500}
                    offset={0}
                    className="no-underline text-text cursor-pointer"
                  >
                    <div className="border-animation py-2">
                      <span className="text-text">{name}</span>
                    </div>
                  </ScrollLink>
                ) : (
                  <span
                    onClick={() => handleScrollNav(to)}
                    className="no-underline text-text cursor-pointer"
                  >
                    <div className="border-animation py-2">
                      <span className="text-text">{name}</span>
                    </div>
                  </span>
                )
              ) : (
                <NavLink
                  to={to}
                  className="no-underline text-text cursor-pointer"
                >
                  <div className="border-animation py-2">
                    <span className="text-text">{name}</span>
                  </div>
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Dropdown */}
        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-text bg-white border-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <IoClose size={48} />
          ) : (
            <IoMenu className="" size={48} />
          )}
        </button>
      </div>
      {mobileOpen && (
        <div className="xl:hidden flex justify-center">
          <div className="bg-white shadow-lg w-[80%] mx-auto rounded-xl ">
            <ul className="flex flex-col items-center  text-3xl font-Amiri-Bold py-2">
              {navItems.map(({ name, to, type }) => (
                <li
                  key={to}
                  className="py-3 border-b border-gray-200 list-none"
                >
                  {type === "scroll" ? (
                    location.pathname === "/" ? (
                      <ScrollLink
                        to={to}
                        smooth={true}
                        duration={500}
                        offset={0}
                        className="cursor-pointer"
                        onClick={() => setMobileOpen(false)}
                      >
                        {name}
                      </ScrollLink>
                    ) : (
                      <span
                        onClick={() => handleScrollNav(to)}
                        className="cursor-pointer"
                      >
                        {name}
                      </span>
                    )
                  ) : (
                    <NavLink
                      to={to}
                      className="cursor-pointer no-underline text-text"
                      onClick={() => setMobileOpen(false)}
                    >
                      {name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
