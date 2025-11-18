import { footerLinks } from "../constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
        <div className="info">
            <p>More ways to shop: Find an Apple Store or other retailer near you. Or call +91-9876543210</p>
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

        <hr className="opacity-15" />

        <div className="text-sm flex justify-center items-center py-4 text-gray-500 opacity-55">
            Built with ❤️ by &nbsp;
            <a 
                href="https://saksham-agrahari.vercel.app/"
                target="_blank"
                className="text-gray-300 opacity-50 hover:opacity-70 transition-opacity duration-300 underline underline-offset-2"
            >
                Saksham Agrahari
            </a>
        </div>
    </footer>
  )
}
export default Footer