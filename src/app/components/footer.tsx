// src/app/components/Footer.tsx  
"use client"; // Menandai file ini sebagai komponen klien  
  
const Footer: React.FC = () => {  
  // Data tautan navigasi  
  const navLinks = [  
    { name: 'Home', path: '/' },  
    { name: 'Blog', path: '/blog' },  
    { name: 'Service', path: '/service' },  
    { name: 'About', path: '/about' },  
    { name: 'Contact', path: '/contact' },  
  ];  
  
  return (  
    <footer className="bg-gray-800 text-white py-8">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">  
          {/* Kolom 1: Informasi Umum */}  
          <div>  
            <h2 className="text-lg font-bold mb-4">Tentang Kami</h2>  
            <p className="text-gray-400">  
              Kami adalah perusahaan yang berkomitmen untuk memberikan layanan terbaik kepada pelanggan kami. Dengan pengalaman bertahun-tahun, kami siap membantu Anda.  
            </p>  
          </div>  
  
          {/* Kolom 2: Tautan Navigasi */}  
          <div>  
            <h2 className="text-lg font-bold mb-4">Navigasi</h2>  
            <ul className="space-y-2">  
              {navLinks.map((link) => (  
                <li key={link.name}>  
                  <a href={link.path} className="text-gray-400 hover:text-white transition duration-200">  
                    {link.name}  
                  </a>  
                </li>  
              ))}  
            </ul>  
          </div>  
  
          {/* Kolom 3: Informasi Kontak */}  
          <div>  
            <h2 className="text-lg font-bold mb-4">Kontak Kami</h2>  
            <p className="text-gray-400">Email: info@company.com</p>  
            <p className="text-gray-400">Telepon: (123) 456-7890</p>  
            <p className="text-gray-400">Alamat: Jl. Contoh No. 123, Jakarta, Indonesia</p>  
          </div>  
        </div>  
      </div>  
  
      {/* Copyright */}  
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">  
        <p className="text-gray-400 text-sm">© 2025 Perusahaan Anda. Semua hak dilindungi.</p>  
      </div>  
    </footer>  
  );  
};  
  
export default Footer;  
