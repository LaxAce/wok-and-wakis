import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex-left">
        <p>&copy; 2022 Delo</p>
        <a href="">Terms of Service</a>
        <a href="">Privacy</a>
      </div>
      <div className="flex-right">
        <span>Powered by</span>
        <h1>delo</h1>
      </div>
    </footer>
  );
};

export default Footer;
