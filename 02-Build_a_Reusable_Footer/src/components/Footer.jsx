const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-content">
            <ul className="footer-links">
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <ul className="social-links">
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
            <ul className="legal-links">
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
            </ul>
            <p>&copy; 2023 My Company. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;