import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function Contact() {
  return (
    <div className="pt-16 xl:pt-28  bg-white flex  flex-col xl:flex-row xl:justify-between items-center px-12 xl:px-10  ">
      {/* Logo Side */}
      <div className="xl:flex justify-center item-center w-1/2 hidden">
        <img src="hero22 - Copy.png" alt="Academy Logo" className="w-[70%]" />
      </div>
      <form
        className="flex flex-col gap-x-6 gap-y-5 w-full max-w-2xl bg-text rounded-2xl p-8 shadow-lg text-white  mt-14 mb-14"
        dir="rtl"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-Amiri-Bold text-white text-xl">
            الأسم:
          </label>
          <input
            id="name"
            type="text"
            placeholder="الأسم"
            className="p-3 rounded-lg border-none focus:outline-none  focus:ring-[#C1A561] "
          />
        </div>

        {/* Age */}
        <div className="flex flex-col gap-2">
          <label htmlFor="age" className="font-Amiri-Bold text-White text-xl">
            السن:
          </label>
          <input
            id="age"
            type="number"
            placeholder="السن"
            className="p-3 rounded-lg border-none  focus:outline-none focus:ring-2  "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-Amiri-Bold text-white text-xl">الجنسية:</label>
          <input
            id="nationality"
            type="text"
            placeholder="الجنسية"
            className="p-3 rounded-lg border-none  focus:outline-none focus:ring-2  "
          />
        </div>

        {/* Sex */}
        <div>
          <label className="font-Amiri-Bold text-white text-xl">النوع:</label>
          <div className="flex flex-wrap gap-6 mt-2 text-lg text-white">
            {["أنثي", "رجل", "طفلة", "طفل"].map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="sex"
                  className="accent-[#2D4F2B] cursor-pointer"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Frame Time */}

        {/* Days (Dropdown) */}
        <div>
          <label className="font-Amiri-Bold text-white text-xl">
            عدد أيام الحلقات:
          </label>
          <Menu as="div" className="relative mt-2 w-full">
            <MenuButton className="inline-flex w-full justify-between rounded-lg bg-white px-4 py-3 text-lg font-semibold text-text shadow-md border border-[#C1A561]/40 focus:outline-none focus:ring-2 focus:ring-[#C1A561]">
              الأختيارات
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 text-white"
              />
            </MenuButton>

            <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-lg border-none outline-none">
              {["يوم", "يومين", "ثلات أيام"].map((option) => (
                <MenuItem key={option}>
                  {({ active }) => (
                    <button
                      className={`block w-full px-4 py-2 text-left outline-none border-none text-lg ${
                        active
                          ? "bg-[#708A58FF] text-white"
                          : "text-text bg-white"
                      }`}
                    >
                      {option}
                    </button>
                  )}
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </div>

        {/* Choose Days (Checkboxes) */}
        <div>
          <label className="font-Amiri-Bold text-white text-xl">
            الأيام المراد أختيارها
          </label>
          <div className="flex flex-wrap gap-4 mt-2 text-lg text-white">
            {[
              "الأحد",
              "الأثنين",
              "الثلاثاء",
              "الأربعاء",
              "الخميس",
              "الجمعة",
              "السبت",
            ].map((day) => (
              <label key={day} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-[#2D4F2B] cursor-pointer"
                />
                {day}
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-white text-text font-Amiri-Bold text-xl py-3 rounded-lg hover:bg-hover hover:text-white outline-none border-none w-[30%] transition-all"
        >
          أرسال
        </button>
      </form>
      <div className="flex gap-4 text-2xl py-8 order-3">
        <a
          href="https://www.facebook.com/profile.php?id=61580415567624&rdid=jhFtu0v84Zwty06J&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1B9rvo6x38%2F#"
          target="_blank"
          className="hover:text-text hover:bg-hover text-white bg-text p-3 flex radius-lg rounded-lg"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          target="_blank"
          className="hover:text-text hover:bg-hover text-white bg-text p-3 flex radius-lg rounded-lg"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/201005790867"
          target="_blank"
          className="hover:text-text hover:bg-hover text-white bg-text p-3 flex radius-lg rounded-lg"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}

export default Contact;
