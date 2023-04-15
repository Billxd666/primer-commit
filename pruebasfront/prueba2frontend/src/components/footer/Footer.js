import { Link } from "react-router-dom";

function Footer() {
  return (
    <div class="flex border-t border-gray-600/50 h-16 ">
      <div class="flex flex-col mr-12 ml-4 my-auto">
        <strong>© 2023–2024</strong>
        <Link to="/">Bill</Link>
      </div>
      <div class="flex flex-col my-auto">
        <strong>Social</strong>
        <a href="https://github.com/Billxd666">GitHub</a>
      </div>
    </div>
  );
}

export default Footer;
