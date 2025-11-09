import Link from "next/link";

export default function Footer() {
  return (
  <footer className="border-t bg-white">
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p>© <span id="y"></span> ACME. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <Link href="/products" className="hover:text-indigo-600">Products</Link>
          <Link href="/contact" className="hover:text-indigo-600">Contact</Link>
        </nav>
      </div>
    </footer>
  )
}
