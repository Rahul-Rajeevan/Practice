const Navigation = ({ links }) => {
    return (
      <nav>
        {links.map((link, index) => (
          <a key={index} href={link.url}>{link.label}</a>
        ))}
      </nav>
    );
  };
  