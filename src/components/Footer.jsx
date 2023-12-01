const Footer = () => {
  const links = [
    {
      name: "Buger King",
      url: "https://www.bk.com.co/"
    },
    {
      name: "Little Caesars",
      url: "https://co.littlecaesars.com/es-co/"
    }
  ];

  return (
    <footer className="container border-t py-5 text-left">
      <p>&copy; FlashFood.</p>
      <p>Imagenes tomadas de:</p>
      <ul className="list-disc ml-5">
        {links.map((link) => (
          <li>
            <a
              href={link.url}
              className="link"
              rel="noopener noreferrer"
              target="_blank"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
