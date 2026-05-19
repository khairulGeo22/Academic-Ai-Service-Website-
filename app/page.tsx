export default function AcademicAIServiceWebsite() {
  return (
    <div
      id="top"
      className="bg-slate-50 text-slate-800 scroll-smooth selection:bg-emerald-400 selection:text-slate-950"
    >
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-slate-950/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-400 text-slate-950 flex items-center justify-center text-2xl font-black">
              SA
            </div>

            <div>
              <h1 className="text-2xl font-black text-white leading-none">
                SMART ACADEMIC
              </h1>

              <p className="text-emerald-300 font-semibold">
                SUPPORT CENTER
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-white font-semibold">
            <a href="#top" className="hover:text-emerald-400 transition">
              Beranda
            </a>

            <a href="#layanan" className="hover:text-emerald-400 transition">
              Layanan
            </a>

            <a href="#pelatihan" className="hover:text-emerald-400 transition">
              Pelatihan
            </a>

            <a href="#founder" className="hover:text-emerald-400 transition">
              Founder
            </a>

            <a href="#harga" className="hover:text-emerald-400 transition">
              Harga
            </a>

            <a href="#kontak" className="hover:text-emerald-400 transition">
              Kontak
            </a>
          </nav>

          <a
            href="https://wa.me/6285262608383"
            className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 px-5 py-3 rounded-2xl font-bold transition"
          >
            WhatsApp Admin
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1800&auto=format&fit=crop"
            alt="Academic"
            className="w-full h-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-emerald-950/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-3 bg-white/10 border border-white/10 px-5 py-3 rounded-full text-sm font-semibold text-emerald-100 mb-8">
                AI Research • Academic Writing • Publication Support
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-8">
                Solusi Akademik Modern
                <span className="block text-emerald-400">
                  Berbasis AI Premium
                </span>
              </h1>

              <p className="text-xl text-slate-200 leading-relaxed max-w-2xl mb-10">
                Platform bantuan akademik modern untuk mahasiswa,
                dosen, peneliti, guru, dan profesional dengan
                dukungan AI premium dan human editing.
              </p>

              <div className="flex flex-wrap gap-5 mb-10">
                <a
                  href="https://wa.me/6285262608383"
                  className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 px-8 py-4 rounded-2xl font-black text-lg transition hover:scale-105"
                >
                  Konsultasi Gratis
                </a>

                <a
                  href="#layanan"
                  className="border border-white/20 bg-white/5 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-slate-950 transition"
                >
                  Lihat Layanan
                </a>
              </div>

              <div className="flex flex-wrap gap-6 text-slate-300 font-medium">
                <span>✓ Mahasiswa</span>
                <span>✓ Peneliti</span>
                <span>✓ Dosen</span>
                <span>✓ Guru</span>
                <span>✓ Profesional</span>
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl">

                <div className="mb-8">
                  <p className="text-emerald-300 font-semibold mb-3">
                    Pelatihan Gratis Mingguan
                  </p>

                  <h3 className="text-3xl font-black mb-4">
                    Review Artikel Ilmiah
                  </h3>

                  <p className="text-slate-300 leading-relaxed">
                    Belajar review jurnal, AI research,
                    publikasi ilmiah, dan academic writing
                    bersama mentor akademik.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">

                  <div className="bg-black/20 rounded-2xl p-5 text-center">
                    <div className="text-3xl font-black text-emerald-400">
                      24/7
                    </div>

                    <p className="text-sm text-slate-300 mt-2">
                      Support
                    </p>
                  </div>

                  <div className="bg-black/20 rounded-2xl p-5 text-center">
                    <div className="text-3xl font-black text-emerald-400">
                      AI+
                    </div>

                    <p className="text-sm text-slate-300 mt-2">
                      Premium
                    </p>
                  </div>

                  <div className="bg-black/20 rounded-2xl p-5 text-center">
                    <div className="text-3xl font-black text-emerald-400">
                      4.9
                    </div>

                    <p className="text-sm text-slate-300 mt-2">
                      Rating
                    </p>
                  </div>
                </div>

                <a
                  href="https://chat.whatsapp.com/JxLnff35oUrJZhPTXycPrH"
                  className="block text-center bg-emerald-400 hover:bg-emerald-300 text-slate-950 px-6 py-4 rounded-2xl font-black text-lg transition"
                >
                  Ikuti Pelatihan Gratis
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-white py-14 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-slate-50 rounded-3xl p-8 text-center">
              <div className="text-5xl font-black text-emerald-500 mb-3">
                2500+
              </div>

              <p className="text-slate-600">
                Klien Akademik
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 text-center">
              <div className="text-5xl font-black text-emerald-500 mb-3">
                5000+
              </div>

              <p className="text-slate-600">
                Dokumen Selesai
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 text-center">
              <div className="text-5xl font-black text-emerald-500 mb-3">
                100+
              </div>

              <p className="text-slate-600">
                Pelatihan Akademik
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 text-center">
              <div className="text-5xl font-black text-emerald-500 mb-3">
                4.9/5
              </div>

              <p className="text-slate-600">
                Rating Kepuasan
              </p>
            </div>

          </div>
        </div>
      </section>