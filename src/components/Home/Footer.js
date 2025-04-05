
const Footer = () => {
  // Define the links and social media data in arrays
  const links = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" }
  ];

  const socialMediaIcons = [
    { icon: "fa-brands fa-linkedin-in", href: "#" },
    { icon: "fa-brands fa-twitter", href: "#" },
    { icon: "fa-brands fa-dribbble", href: "#" }
  ];

  return (
    <div className="bg-[#1a1e23] text-white p-4 flex justify-between items-center">
      <div className="text-sm text-gray-400">© 2023 SinanTolkmak All rights reserved.</div>

      {/* Render links using map */}
      <div className="flex space-x-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Render social media icons using map */}
      <div className="flex space-x-2">
        {socialMediaIcons.map((social, index) => (
          <a
            key={index}
            href={social.href}
            className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center transform hover:scale-110 transition-transform duration-300"
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </div>

      <div className="text-sm text-gray-400">
        Design By{" "}
        <a
          href="https://johangleen.com"
          className="text-teal-400 hover:underline transition-all duration-300"
        >
          Johangleen
        </a>
      </div>
    </div>
  );
}

export default Footer;
