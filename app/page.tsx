import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-gray-50 text-gray-900">
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 to-white"
      ></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
            >
              Smart solutions, <span className="text-indigo-600">zero hassle</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-prose">
              ACME is a fictional company that delivers real clarity. Sharp
              products, friendly service, and no fuss. Explore our lineup or get
              in touch.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="./pages/products.html"
                className="inline-flex items-center rounded-xl bg-indigo-600 px-5 py-3 text-white font-semibold shadow hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
                >Browse products</a
              >
              <a
                href="./pages/contact.html"
                className="inline-flex items-center rounded-xl border border-gray-300 px-5 py-3 font-semibold hover:bg-gray-100"
                >Contact us</a
              >
            </div>
          </div>
          <div className="relative">
            <div
              className="aspect-[4/3] w-full rounded-2xl border bg-white shadow-sm grid place-items-center text-9xl"
            >
              ⚙️
            </div>
            <p className="mt-3 text-sm text-gray-500">
              Illustration — ACME stands for reliable, modular building blocks.
            </p>
          </div>
        </div>
      </div>
    </section>

   
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm border">
            <h3 className="text-lg font-semibold">Simple</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Clear solutions that work right away—no thick manuals.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm border">
            <h3 className="text-lg font-semibold">Scalable</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Grow without friction—from startup to enterprise.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm border">
            <h3 className="text-lg font-semibold">Support</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Real people. Real answers. During business hours.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm border">
            <h3 className="text-lg font-semibold">Open</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Transparent pricing and APIs that speak human.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-gray-900 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-white">Ready to get started?</h2>
        <p className="mt-2 text-gray-300">
          Check out our lineup or request a demo.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a
            href="./pages/products.html"
            className="rounded-xl bg-white px-5 py-3 font-semibold shadow hover:bg-gray-100"
            >See products</a
          >
          <a
            href="./pages/contact.html"
            className="rounded-xl border border-gray-700 px-5 py-3 font-semibold text-white hover:bg-gray-800"
            >Ask a question</a
          >
        </div>
      </div>
    </section>

    

    <script>
      document.getElementById("y").textContent = new Date().getFullYear();
    </script>
    </div>
    </>
  );
}
