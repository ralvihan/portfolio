import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");
  const charLimit = 300;

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hv7apbj",     // Ganti dengan ID EmailJS kamu
        "template_c9ul8ws",    // Ganti dengan template ID dari EmailJS
        e.target,
        "SekSDf6RKmueYFZRw"    // Ganti dengan Public Key dari EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong.");
        }
      );

    e.target.reset();
    setMessage(""); // reset karakter juga
  };

  return (
    <div className="pt-28 md:pt-20 lg:pt-[105px] px-4 md:px-8 lg:px-16">
      <div className="max-w-2xl lg:max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-white sm:text-3xl">
            Get in Touch
          </h1>
          <p className="mt-1 text-sm text-white/70">
            Got something in mind or just wanna say hi? Feel free to drop a message!
          </p>
        </div>

        <div className="mt-10 grid items-center lg:grid-cols-1 gap-6">
          <div className="flex flex-col border border-[#832dc1] rounded-xl p-4 sm:p-5 lg:p-6">
            <h2 className="mb-6 text-lg font-medium text-white">Contact form</h2>

            <form onSubmit={sendEmail}>
              <div className="grid gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    required
                    className="py-1.5 px-3 block w-full border rounded-md text-xs focus:outline-none bg-neutral-900 text-neutral-300"
                    style={{ borderColor: '#542269' }}
                  />
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    required
                    className="py-1.5 px-3 block w-full border rounded-md text-xs focus:outline-none bg-neutral-900 text-neutral-300"
                    style={{ borderColor: '#542269' }}
                  />
                </div>

                <input
                  type="email"
                  name="name"
                  placeholder="Email"
                  required
                  className="py-1.5 px-3 block w-full border rounded-md text-xs focus:outline-none bg-neutral-900 text-neutral-300"
                  style={{ borderColor: '#542269' }}
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="py-1.5 px-3 block w-full border rounded-md text-xs focus:outline-none bg-neutral-900 text-neutral-300"
                  style={{ borderColor: '#542269' }}
                />

                <div className="relative">
                  <textarea
                    rows="3"
                    name="message"
                    placeholder="Details (max 300 characters)"
                    maxLength={charLimit}
                    required
                    value={message}
                    onChange={handleMessageChange}
                    className="py-1.5 px-3 block w-full border rounded-md text-xs focus:outline-none bg-neutral-900 text-neutral-300"
                    style={{ borderColor: '#542269' }}
                  ></textarea>
                  {/* <div className="absolute bottom-1 right-2 text-[10px] text-neutral-400 text-gray-400">
                    {message.length}/{charLimit}
                  </div> */}
                </div>
              </div>

              <button
                type="submit"
                className="mt-3 w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-xs font-medium rounded-md bg-[#832dc1] text-white hover:bg-[#532475] focus:outline-none"
              >
                Send Message
              </button>

              <p className="mt-3 text-xs text-center text-neutral-400">
                I'll get back to you within 1 business days
              </p>
            </form>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="text-white py-6">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="flex space-x-4 mb-4 md:mb-0 pt-5">
              <a href="https://github.com/differentlv" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-6 h-6 hover:text-gray-400" />
              </a>
              <a href="https://linkedin.com/in/raihanalviannuryansyah" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-6 h-6 hover:text-gray-400" />
              </a>
              <a href="https://instagram.com/raihanalviann" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-6 h-6 hover:text-gray-400" />
              </a>
            </div>

            <p className="text-sm text-center">&copy; 2025 Raihan Alvian N</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
