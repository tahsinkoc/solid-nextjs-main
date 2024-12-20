"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha';

interface ContactForm {
  fullname: string;
  email: string;
  subject: string;
  phone: string;
  description: string;
}
const Contact = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [pop, setPop] = useState(false);

  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      fullname: e.currentTarget['fullname'].value,
      email: e.currentTarget['email'].value,
      subject: e.currentTarget['subject'].value,
      phone: e.currentTarget['phone'].value,
      description: e.currentTarget['description'].value
    };

    const response = await fetch('https://siteapi.dgtalhat.com/api/offerrequests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    setPop(true)
    console.log(result);
  };

  // function handleSubmit(e: FormEvent<HTMLFormElement>) {
  //   const formData = new FormData(e.currentTarget)
  //   const form = Object.fromEntries(formData);
  //   e.preventDefault()
  //   fetch('https://siteapi.dgtalhat.com/api/offerrequests', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(form)
  //   })
  //     .then(res => res.json())
  //     .then((res) => {
  //       setPop(true)
  //       console.log(res);
  //     })
  // }





  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        {
          pop && <div className="w-full h-screen fixed top-0 left-0 z-[99999999999] flex items-center fade justify-center bg-white/30 backdrop-blur-sm">
            <div className="lg:w-[30rem] w-11/12 p-4 rounded-2xl anima bg-white shadow-lg border">
              <div className="w-full flex items-center justify-end">
                <button onClick={() => { setPop(false), location.reload() }} className="hover:text-red-600 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6  w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <h1 className="w-full text-center text-xl font-bold">
                Talebinizi aldık.
              </h1>
              <p className="text-center mt-2">
                Ekibimiz bizlerle paylaşmış olduğunuz iletişim bilgilerinizden sizinle iletişime geçecektir.
              </p>
              <div className="text-center w-full py-5">
                <button onClick={() => { setPop(false), location.reload() }} className=" rounded-lg bg-zinc-700 hover:bg-zinc-700/70 transition-all duration-500 text-white py-2 px-4">
                  Tamam
                </button>
              </div>
            </div>
          </div>
        }
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Teklif Alın
              </h2>

              <form
                onSubmit={handleSubmit}
              >
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    required
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="İsim & Soyisim"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    required
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Konu"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    required
                    name="phone"
                    id="phone"
                    type="text"
                    placeholder="Telefon Numarası"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="mb-11.5 flex">
                  <textarea
                    required
                    name="description"
                    id="description"
                    placeholder="Mesaj"
                    rows={4}
                    className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  ></textarea>
                </div>

                <div className="flex flex-wrap gap-4 xl:justify-between ">
                  <div className="mb-4 flex md:mb-0">
                    <input
                      required
                      id="default-checkbox"
                      type="checkbox"
                      className="peer sr-only"
                    />
                    <span className="border-gray-300 bg-gray-100 text-blue-600 dark:border-gray-600 dark:bg-gray-700 group mt-2 flex h-5 min-w-[20px] items-center justify-center rounded peer-checked:bg-primary">
                      <svg
                        className="opacity-0 peer-checked:group-[]:opacity-100"
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29304 0.792787C8.48057 0.605316 8.73488 0.5 9.00004 0.5C9.26521 0.5 9.51951 0.605316 9.70704 0.792787Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <label
                      htmlFor="default-checkbox"
                      className="flex max-w-[425px] cursor-pointer select-none pl-5"
                    >
                      Bu işaretçiyi işaretleyerek "Form" kullanım koşullarını ve çerez kullanımını kabul etmiş olursunuz.
                    </label>
                  </div>
                  <ReCAPTCHA
                    sitekey="6Le7GJsqAAAAANpGTcIg6LUkEByTzd8bDLqa7Us8"
                    onChange={(token) => setCaptchaToken(token)}
                  />
                  <button
                    aria-label="send message"
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
                  >
                    Teklif Al
                    <svg
                      className="fill-white"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Bizimle İletişime Geçin
              </h2>

              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Adresimiz
                </h3>
                <p>Meydan İstanbul AVM, Balkan Cd. No:62, 34770 Ümraniye/İstanbul</p>
              </div>
              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Email
                </h3>
                <p>
                  <a href="#">info@dgtalhat.com</a>
                </p>
              </div>
              {/* <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Phone Number
                </h4>
                <p>
                  <a href="#">+009 42334 6343 843</a>
                </p>
              </div> */}
            </motion.div>
          </div>
        </div>
        <script src="https://www.google.com/recaptcha/api.js"></script>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
