import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { useRef } from "react";
import emailjs from "emailjs-com";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6zp3u3s", // from EmailJS
        "template_o5lo6dq", // from EmailJS
        form.current,
        "uE105nhzu8mwmZfTE" // from EmailJS
      )
      .then(
        () => {
          console.log("تم الإرسال بنجاح!");
          form.current.reset();
        },
        () => {
          console.log("حدث خطأ! حاول مرة أخرى.");
        }
      );
  };
  return (
    <footer className="bg-white text-text pb-12 xl:px-8 ">
      <div className="xl:container xl:mx-auto flex flex-col-reverse justify-center items-center xl:grid xl:grid-cols-3  gap-8 xl:items-start">
        <div className="text-center flex flex-col justify-around h-full order-1">
          <p className="text-2xl xl:text-4xl font-Amiri-Bold">
            © جميع الحقوق محفوظة لأكاديمية البينة
          </p>
          <p className="text-2xl xl:text-4xl text-center font-Amiri-Bold ">
            تصميم وبرمجة{" "}
            <a
              target="_blank"
              href="https://hagersportfolio.netlify.app/"
              className="text-text hover:text-hover "
            >
              هاجر فتحي
            </a>
          </p>
        </div>
        {/* Social + Logo */}
        <div className="flex flex-col items-center justify-center gap-6 xl:pt-10">
          <img
            src="../../../public/hero22.png"
            alt="Logo"
            className="w-[80%]"
          />

          {/* Social Icons */}
          <div className="flex gap-4 text-2xl pt-10 order-3">
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

        <div className="w-[100%] flex justify-center items-center flex-col order-2">
          <h3 className="text-4xl font-Amiri-Bold text-center xl:w-[60%] w-[100%]">
            تواصل معنا
          </h3>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-4 w-[60%]"
            dir="rtl"
          >
            <input
              dir="rtl"
              type="text"
              name="name"
              placeholder="الاسم"
              className="p-3 rounded bg-gray-100 text-white placeholder:text-white placeholder:text-lg bg-text outline-none border-none"
            />
            <input
              dir="rtl"
              type="tel"
              name="message"
              placeholder="رقم الهاتف"
              className="p-3 rounded bg-gray-100 text-white placeholder:text-white placeholder:text-lg bg-text outline-none border-none"
            />
            <button
              type="submit"
              className="bg-text hover:bg-hover hover:text-white transition-colors p-3 rounded text-white w-[40%] text-lg hover:border-white border-white"
            >
              إرسال
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
