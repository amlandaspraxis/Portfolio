import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 bg-[#0B0B0F]/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">

        {/* Left: Name (gradient) */}
        <Link
          href="/"
          className="text-lg font-semibold bg-gradient-to-r from-[#A5B4FC] to-[#FBCFE8] bg-clip-text text-transparent"
        >
          Amlan
        </Link>

        {/* Center: Menu */}
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/projects" className="hover:text-white transition">Portfolio</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>

        {/* Right: Social + Theme */}
        <div className="flex items-center gap-4 text-gray-400">
          <a
            href="https://www.linkedin.com/in/amlan-das-9bb029291/"
            target="_blank"
            className="hover:text-white transition"
          >
            in
          </a>
          <a
            href="https://github.com/amlandaspraxis"
            target="_blank"
            className="hover:text-white transition"
          >
            GH
          </a>
          <button className="hover:text-white transition">🌙</button>
        </div>

      </div>
    </nav>
  );
}
