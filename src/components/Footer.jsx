import { footerLinks } from "../constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
        <div className="info">
            <p>More ways to stop: Find an Apple Store or other retailer near you. Or call +91-9876543210</p>
        </div>

        <hr />

        <div className="links">
            <p>Copyright &copy; {year} Apple. All rights reserved.</p>

            <ul>
                {footerLinks.map(({ label, link }) => (
                    <li key={label}>
                        <a href={link}>{label}</a>
                    </li>
                ))}
            </ul>
        </div>
    </footer>
  )
}
export default Footer