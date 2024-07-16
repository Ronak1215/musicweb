
function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
    <div className="max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
    <div>
      <h2 className="text-white text-xl font-semibold mb-4">About Us</h2>
      <p className="mb-4 text-sm">
        Music School is a premier institution dedicated to teaching the art
        and science of music. We nurture talent from the ground up,
        fostering a vibrant community of musicians.
      </p>
    </div>
    <div>
      <h2 className="text-white text-xl font-semibold mb-4">Quick Links</h2>
      <ul>
        <li>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300 text-sm"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300 text-sm"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300 text-sm"
          >
            Courses
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300 text-sm"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h2 className="text-white text-xl font-semibold mb-4">Follow Us</h2>
      <div className="flex space-x-4">
        <a
          href="#"
          className="hover:text-white transition-colors duration-300 text-sm"
        >
          Facebook
        </a>
        <a
          href="#"
          className="hover:text-white transition-colors duration-300 text-sm"
        >
          Twitter
        </a>
        <a
          href="#"
          className="hover:text-white transition-colors duration-300 text-sm"
        >
          Instagram
        </a>
      </div>
    </div>
    <div>
      <h2 className="text-white text-xl font-semibold mb-4">Contact Us</h2>
      <p className="text-sm">New Delhi, India</p>
      <p className="text-sm">Delhi 10001</p>
      <p className="text-sm">Email: info@musicschool.com</p>
      <p className="text-sm">Phone: (123) 456-7890</p>
    </div>
    </div>
    <p className="text-center text-base pt-12">© 2024 Music School. All rights reserved.</p>
</footer>
  )
}

export default Footer