import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
        <div className="bg-teal-50 py-4 mt-4">
        <div className="container mx-auto flex justify-center">
          <a href="https://facebook.com/baloglu" className="mx-2 text-gray-600 hover:text-gray-800">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com/baloglu" className="mx-2 text-gray-600 hover:text-gray-800">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://github.com/baloglu" className="mx-2 text-gray-600 hover:text-gray-800">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/cetinbaloglu/" className="mx-2 text-gray-600 hover:text-gray-800">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="flex w-full text-sm justify-center items-center">
            All rights included. © 2023 Chet Baloglu
        </div>
      </div>
    )
}