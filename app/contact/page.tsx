

export default function page() {
  return (
     <div className="min-h-screen bg-gray-50 text-gray-900">


    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold">Contact</h1>
        <p className="mt-2 text-gray-600 max-w-prose">
          Fill in the form and we’ll get back to you within one business day.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-3">
        <section className="lg:col-span-2">
          <form
            className="rounded-2xl bg-white p-6 shadow-sm border space-y-4"
          
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="jane@example.com"
              />
            </div>
            <div>
              <label htmlFor="topic" className="block text-sm font-medium">Topic</label>
              <select
                id="topic"
                name="topic"
                className="mt-1 w-full rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option>Question</option>
                <option>Quote</option>
                <option>Support</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="mt-1 w-full rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Tell us how we can help..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center rounded-xl bg-indigo-600 px-5 py-3 text-white font-semibold shadow hover:bg-indigo-700"
            >
              Send
            </button>
          </form>
        </section>

        <aside className="space-y-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm border">
            <h2 className="font-semibold">Company info</h2>
            <ul className="mt-3 space-y-1 text-sm text-gray-700">
              <li>
                <strong>Address:</strong> 123 Fiction Street, 1234 AB, Utrecht
              </li>
              <li><strong>Phone:</strong> +31 10 123 45 67</li>
              <li><strong>Email:</strong> hello@acme.test</li>
              <li><strong>Chamber of Commerce:</strong> 00000000</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm border">
            <h2 className="font-semibold">Opening hours</h2>
            <p className="mt-3 text-sm text-gray-700">
              Mon–Fri: 9:00–17:00 • Sat–Sun: closed
            </p>
          </div>
        </aside>
      </div>
    </main>

    <footer className="border-t bg-white">
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p>© <span id="y3"></span> ACME. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a href="../index.html" className="hover:text-indigo-600">Home</a>
          <a href="./products.html" className="hover:text-indigo-600">Products</a>
          <a href="./contact.html" className="text-indigo-600">Contact</a>
        </nav>
      </div>
    </footer>
    <script>
      document.getElementById("y3").textContent = new Date().getFullYear();
    </script>
  </div>
  )
}
