import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const [selectedDays, setSelectedDays] = useState("الأختيارات");
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);
    emailjs
      .sendForm(
        "service_6zp3u3s",
        "template_o5lo6dq",
        form.current,
        "uE105nhzu8mwmZfTE",
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
        setSelectedDays("الأختيارات");
      })
      .catch(() => setStatus("error"));
  };

  return (
    <div className="sm:pt-16 lg:pt-32 sm:pb-10 xl:pt-16 3xl:pt-24 bg-white flex flex-col 3xl:flex-row-reverse xl:justify-between items-center px-4 sm:px-8 xl:px-10">
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-5 w-full sm:max-w-2xl xl:max-w-4xl bg-text rounded-2xl p-5 sm:p-8 shadow-lg text-white mt-8 mb-8 xl:mt-14 xl:mb-14"
        dir="rtl"
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="font-Amiri-Bold text-white text-lg sm:text-xl"
          >
            الأسم:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="الأسم"
            required
            className="w-full p-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#C1A561] text-text"
          />
        </div>

        <div className="flex sm:flex-row  gap-4 w-full">
          <div className="flex flex-col gap-2 w-1/2 lg:w-full">
            <label
              htmlFor="age"
              className="font-Amiri-Bold text-white text-lg sm:text-xl"
            >
              السن:
            </label>
            <input
              id="age"
              name="age"
              type="number"
              placeholder="السن"
              required
              className="w-full p-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#C1A561] text-text"
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2 lg:w-full">
            <label className="font-Amiri-Bold text-white text-lg sm:text-xl">
              الجنسية:
            </label>
            <input
              id="nationality"
              name="nationality"
              type="text"
              placeholder="الجنسية"
              required
              className="w-full p-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#C1A561] text-text"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-Amiri-Bold text-white text-lg sm:text-xl">
            رقم الهاتف:
          </label>
          <input
            dir="rtl"
            name="message"
            type="tel"
            placeholder="رقم الهاتف"
            required
            className="w-full p-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#C1A561] text-text"
          />
        </div>

        <div>
          <label className="font-Amiri-Bold text-white text-lg sm:text-xl">
            النوع:
          </label>
          <div className="flex flex-wrap gap-4 sm:gap-6 mt-2 text-base sm:text-lg text-white">
            {["أنثي", "رجل", "طفلة", "طفل"].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="sex"
                  value={option}
                  className="accent-[#2D4F2B] cursor-pointer"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="font-Amiri-Bold text-white text-lg sm:text-xl">
            عدد أيام الحلقات:
          </label>
          <input type="hidden" name="days_count" value={selectedDays} />
          <Menu as="div" className="relative mt-2 w-full">
            <MenuButton className="inline-flex w-full justify-between rounded-lg bg-white px-4 py-3 text-base sm:text-lg font-semibold text-text shadow-md border border-[#C1A561]/40 focus:outline-none focus:ring-2 focus:ring-[#C1A561]">
              {selectedDays}
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 text-text"
              />
            </MenuButton>
            <MenuItems className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-lg bg-white shadow-lg border-none outline-none">
              {["يوم", "يومين", "ثلات أيام"].map((option) => (
                <MenuItem key={option}>
                  {({ active }) => (
                    <button
                      type="button"
                      onClick={() => setSelectedDays(option)}
                      className={
                        "block w-full px-4 py-2 text-right outline-none border-none text-base sm:text-lg " +
                        (active
                          ? "bg-[#708A58FF] text-white"
                          : "text-text bg-white")
                      }
                    >
                      {option}
                    </button>
                  )}
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </div>

        <div>
          <label className="font-Amiri-Bold text-white text-lg sm:text-xl">
            الأيام المراد أختيارها
          </label>
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-2 text-base sm:text-lg text-white">
            {[
              "الأحد",
              "الأثنين",
              "الثلاثاء",
              "الأربعاء",
              "الخميس",
              "الجمعة",
              "السبت",
            ].map((day) => (
              <label
                key={day}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  name="days_chosen"
                  value={day}
                  className="accent-[#2D4F2B] cursor-pointer"
                />
                {day}
              </label>
            ))}
          </div>
        </div>

        {status === "success" && (
          <p className="text-white bg-green-600 rounded-lg px-4 py-2 text-center text-lg font-Amiri-Bold">
            تم إرسال طلبك بنجاح! سنتواصل معك قريباً.
          </p>
        )}
        {status === "error" && (
          <p className="text-white bg-red-600 rounded-lg px-4 py-2 text-center text-lg font-Amiri-Bold">
            حدث خطأ، يرجى المحاولة مرة أخرى.
          </p>
        )}

        <button
          type="submit"
          className="mt-4 bg-white text-text font-Amiri-Bold text-lg sm:text-xl py-3 rounded-lg hover:bg-hover hover:text-white outline-none border-none w-full xl:w-[30%] transition-all"
        >
          أرسال
        </button>
      </form>

      <div className="flex flex-col gap-y-4">
        <div className="flex justify-center items-center ">
          <img src="hero22 - Copy.png" alt="Academy Logo" className="w-[70%]" />
        </div>
        <div className="flex gap-4 text-2xl pb-8 xl:pb-0 xl:pt-10 justify-center">
          <a
            href="https://www.facebook.com/profile.php?id=61580415567624"
            target="_blank"
            className="hover:bg-hover text-white bg-text p-3 flex rounded-lg"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/albayina_quran_1?igsh=NnEwOTZoYzk2Z3U4"
            target="_blank"
            className="hover:bg-hover text-white bg-text p-3 flex rounded-lg"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/201005790867"
            target="_blank"
            className="hover:bg-hover text-white bg-text p-3 flex rounded-lg"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
