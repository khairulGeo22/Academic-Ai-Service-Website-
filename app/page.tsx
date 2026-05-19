"use client";

import { useState } from "react";

export default function AcademicAIServiceWebsite() {
  const [selectedFounder, setSelectedFounder] = useState<string | null>(null);

  return (
    <div className="bg-[#020617] text-white overflow-x-hidden scroll-smooth">

      {/* BACKGROUND */}

      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      </div>

      {/* NAVBAR */}

      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-black/30 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div className="flex items-center gap-5">

            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-black text-5xl font-black shadow-2xl shadow-emerald-500/30">
              SA
            </div>

            <div>
              <h1 className="text-5xl font-black leading-none">
                SMART ACADEMIC
              </h1>

              <h2 className="text-emerald-400 text-3xl font-black">
                SUPPORT CENTER
              </h2>

              <p className="text-slate-400 text-lg mt-1">
                AI for Research, Academic Writing & Publication
              </p>
            </div>

          </div>

          <nav className="hidden lg:flex items-center gap-12 text-xl font-bold">

            <a
              href="#beranda"
              className="hover:text-emerald-400 transition-all duration-700"
            >
              Beranda
            </a>

            <a
              href="#layanan"
              className="hover:text-emerald-400 transition-all duration-700"
            >
              Layanan
            </a>

            <a
              href="#pelatihan"
              className="hover:text-emerald-400 transition-all duration-700"
            >
              Pelatihan
            </a>

            <a
              href="#founder"
              className="hover:text-emerald-400 transition-all duration-700"
            >
              Founder
            </a>

            <a
              href="#harga"
              className="hover:text-emerald-400 transition-all duration-700"
            >
              Harga
            </a>

            <a
              href="#kontak"
              className="hover:text-emerald-400 transition-all duration-700"
            >
              Kontak
            </a>

          </nav>

          <a
            href="https://wa.me/6285262608383"
            target="_blank"
            className="hidden lg:flex bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-black px-10 py-5 rounded-3xl hover:scale-105 transition-all duration-700 shadow-2xl shadow-emerald-500/20"
          >
            WhatsApp Admin
          </a>

        </div>

      </header>

      {/* TRAINING FLASH */}

      <section
        id="pelatihan"
        className="max-w-7xl mx-auto px-6 pt-10"
      >

        <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-white/10 rounded-[2rem] p-8 flex flex-col lg:flex-row items-center justify-between gap-6 backdrop-blur-2xl">

          <div>

            <h3 className="text-4xl font-black text-emerald-400 mb-4">
              🎓 Pelatihan Online Review Artikel Ilmiah Gratis
            </h3>

            <p className="text-slate-300 text-xl">
              Sabtu, 24 Mei 2026 • 09.00 WIB • AI Research • Publikasi • Academic Writing
            </p>

          </div>

          <a
            href="https://chat.whatsapp.com/JxLnff35oUrJZhPTXycPrH"
            target="_blank"
            className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black text-2xl font-black px-10 py-5 rounded-3xl hover:scale-105 transition-all duration-700"
          >
            Daftar Gratis Sekarang
          </a>

        </div>

      </section>

      {/* HERO */}

      <section
        id="beranda"
        className="relative min-h-screen flex items-center"
      >

        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3 mb-10 backdrop-blur-xl">

                <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></span>

                <span className="text-slate-300 text-lg">
                  Academic AI • Research • Publication • Mentoring
                </span>

              </div>

              <h1 className="text-7xl lg:text-8xl font-black leading-[0.95] mb-10">

                <span className="text-white">
                  Solusi Akademik
                </span>

                <br />

                <span className="text-white">
                  Modern
                </span>

                <br />

                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Berbasis AI
                </span>

              </h1>

              <p className="text-slate-300 text-2xl leading-relaxed max-w-3xl mb-12">
                Platform bantuan akademik modern untuk mahasiswa,
                dosen, guru, peneliti, dan profesional dalam
                penyusunan skripsi, publikasi jurnal, AI research,
                pelatihan akademik, dan pengembangan karya ilmiah.
              </p>

              <div className="flex flex-wrap gap-6 mb-16">

                <a
                  href="https://wa.me/6285262608383"
                  target="_blank"
                  className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black text-xl font-black px-12 py-6 rounded-3xl hover:scale-105 transition-all duration-700 shadow-2xl shadow-emerald-500/30"
                >
                  Konsultasi Gratis
                </a>

                <a
                  href="#layanan"
                  className="bg-white/5 border border-white/10 text-white text-xl px-12 py-6 rounded-3xl hover:bg-white/10 transition-all duration-700"
                >
                  Jelajahi Layanan
                </a>

              </div>

              <div className="grid grid-cols-3 gap-6">

                <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl">

                  <div className="text-5xl font-black text-emerald-400 mb-3">
                    24/7
                  </div>

                  <p className="text-slate-400 text-lg">
                    Konsultasi Akademik
                  </p>

                </div>

                <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl">

                  <div className="text-5xl font-black text-cyan-400 mb-3">
                    AI
                  </div>

                  <p className="text-slate-400 text-lg">
                    Research Assistant
                  </p>

                </div>

                <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl">

                  <div className="text-5xl font-black text-emerald-400 mb-3">
                    Human
                  </div>

                  <p className="text-slate-400 text-lg">
                    Academic Editing
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div
              id="founder"
              className="relative"
            >

              <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 backdrop-blur-2xl shadow-2xl">

                <div className="flex items-center justify-between mb-10">

                  <div>

                    <p className="text-emerald-400 text-xl font-bold mb-3">
                      Founder & Academic Mentor
                    </p>

                    <h2 className="text-5xl font-black">
                      Research Mentor Team
                    </h2>

                  </div>

                  <div className="w-5 h-5 rounded-full bg-emerald-400 animate-pulse"></div>

                </div>

                <div className="grid md:grid-cols-2 gap-8">

                  {/* KHARIRUL */}

                  <button
                    onClick={() => setSelectedFounder("khairul")}
                    className="bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 transition-all duration-700 text-left"
                  >

                    <img
                      src="/founder-khairul.jpg"
                      alt="Muhammad Khairul"
                      className="w-32 h-32 rounded-full object-cover border-4 border-emerald-400 mb-6"
                    />

                    <h3 className="text-3xl font-black mb-3">
                      Muhammad Khairul
                    </h3>

                    <p className="text-emerald-400 text-lg mb-5">
                      Academic Research Mentor
                    </p>

                    <p className="text-slate-400 leading-relaxed">
                      Fokus pada penelitian pendidikan,
                      academic writing,
                      AI research,
                      dan publikasi ilmiah.
                    </p>

                  </button>

                  {/* NURUL */}

                  <button
                    onClick={() => setSelectedFounder("nurul")}
                    className="bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 transition-all duration-700 text-left"
                  >

                    <img
                      src="/founder-nurul.jpg"
                      alt="Dr Nurul Fajri"
                      className="w-32 h-32 rounded-full object-cover border-4 border-cyan-400 mb-6"
                    />

                    <h3 className="text-3xl font-black mb-3">
                      Dr. Nurul Fajri
                    </h3>

                    <p className="text-cyan-400 text-lg mb-5">
                      Publication & Research Advisor
                    </p>

                    <p className="text-slate-400 leading-relaxed">
                      Aktif dalam publikasi ilmiah,
                      pelatihan akademik,
                      dan pendampingan penelitian.
                    </p>

                  </button>

                </div>

                <div className="mt-10 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-white/10 rounded-[2rem] p-8">

                  <div className="grid grid-cols-3 gap-8 text-center">

                    <div>

                      <div className="text-5xl font-black text-white mb-3">
                        2500+
                      </div>

                      <p className="text-slate-400">
                        Academic Users
                      </p>

                    </div>

                    <div>

                      <div className="text-5xl font-black text-white mb-3">
                        700+
                      </div>

                      <p className="text-slate-400">
                        Publications
                      </p>

                    </div>

                    <div>

                      <div className="text-5xl font-black text-white mb-3">
                        100+
                      </div>

                      <p className="text-slate-400">
                        Workshops
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section
        id="layanan"
        className="py-28"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="text-emerald-400 text-2xl font-bold mb-5">
              Academic Services
            </p>

            <h2 className="text-6xl font-black mb-8">
              Layanan Akademik Premium
            </h2>

            <p className="text-slate-400 text-2xl max-w-4xl mx-auto">
              Mendukung seluruh kebutuhan penelitian,
              publikasi, dan pengembangan akademik modern.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Skripsi & Tesis",
              "Publikasi Jurnal",
              "AI Research",
              "Editing Akademik",
              "Analisis Data",
              "Pelatihan Akademik",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[2rem] p-10 hover:-translate-y-2 hover:bg-white/10 transition-all duration-700"
              >

                <div className="text-5xl mb-6">
                  🎓
                </div>

                <h3 className="text-3xl font-black mb-5">
                  {item}
                </h3>

                <p className="text-slate-400 leading-relaxed text-lg">
                  Layanan profesional berbasis AI premium
                  dan human mentoring akademik.
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* WHY US */}

      <section className="py-28 bg-white text-slate-900">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="text-emerald-500 text-2xl font-bold mb-5">
              Mengapa Memilih Kami
            </p>

            <h2 className="text-6xl font-black mb-8">
              Academic Support Modern
            </h2>

            <p className="text-slate-600 text-2xl max-w-4xl mx-auto">
              Menggabungkan AI premium,
              mentoring akademik,
              dan human editing profesional.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Fast Response",
              "AI + Human Editing",
              "Mentor Akademik",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-[2rem] p-10 border border-slate-100"
              >

                <div className="text-6xl mb-6">
                  ⚡
                </div>

                <h3 className="text-3xl font-black mb-5">
                  {item}
                </h3>

                <p className="text-slate-600 text-lg leading-relaxed">
                  Pendampingan akademik modern,
                  profesional,
                  dan terpercaya.
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PRICING */}

      <section
        id="harga"
        className="py-28"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="text-emerald-400 text-2xl font-bold mb-5">
              Paket Layanan
            </p>

            <h2 className="text-6xl font-black mb-8">
              Harga Profesional
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Basic",
                price: "50K",
              },
              {
                title: "Professional",
                price: "150K",
              },
              {
                title: "Premium",
                price: "300K",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[2rem] p-10 text-center"
              >

                <h3 className="text-4xl font-black mb-6">
                  {item.title}
                </h3>

                <div className="text-7xl font-black text-emerald-400 mb-8">
                  {item.price}
                </div>

                <p className="text-slate-400 text-lg mb-10">
                  Konsultasi • Editing • AI Research
                </p>

                <a
                  href="https://wa.me/6285262608383"
                  target="_blank"
                  className="inline-block bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-black px-10 py-5 rounded-2xl"
                >
                  Konsultasi
                </a>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="kontak"
        className="py-28"
      >

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-6xl font-black mb-10">
            Konsultasi Sekarang
          </h2>

          <p className="text-slate-400 text-2xl mb-14">
            Hubungi admin untuk konsultasi,
            pelatihan,
            dan layanan akademik.
          </p>

          <a
            href="https://wa.me/6285262608383"
            target="_blank"
            className="inline-block bg-gradient-to-r from-emerald-400 to-cyan-400 text-black text-2xl font-black px-16 py-7 rounded-[2rem] hover:scale-105 transition-all duration-700"
          >
            WhatsApp Admin
          </a>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bg-black border-t border-white/10 py-14 text-center text-slate-500">

        <div className="max-w-7xl mx-auto px-6">

          <h3 className="text-4xl font-black text-white mb-5">
            Smart Academic Support Center
          </h3>

          <p className="text-xl mb-8">
            Platform bantuan akademik modern berbasis AI premium.
          </p>

          <div className="flex justify-center gap-8 mb-10 text-lg">

            <a href="#beranda">Beranda</a>
            <a href="#layanan">Layanan</a>
            <a href="#pelatihan">Pelatihan</a>
            <a href="#kontak">Kontak</a>

          </div>

          <div className="border-t border-white/10 pt-8">
            © 2026 Smart Academic Support Center.
            All rights reserved.
          </div>

        </div>

      </footer>

      {/* POPUP */}

      {selectedFounder && (

        <div className="fixed inset-0 bg-black/70 backdrop-blur-xl z-50 flex items-center justify-center p-6">

          <div className="bg-[#07111f] border border-white/10 rounded-[3rem] max-w-3xl w-full p-10 relative">

            <button
              onClick={() => setSelectedFounder(null)}
              className="absolute top-6 right-6 text-3xl"
            >
              ✕
            </button>

            {selectedFounder === "khairul" && (
              <div>

                <img
                  src="/founder-khairul.jpg"
                  className="w-40 h-40 rounded-full object-cover border-4 border-emerald-400 mb-8"
                />

                <h2 className="text-5xl font-black mb-4">
                  Muhammad Khairul
                </h2>

                <p className="text-emerald-400 text-2xl mb-8">
                  Academic Research Mentor
                </p>

                <p className="text-slate-300 text-xl leading-relaxed">
                  Fokus pada penelitian pendidikan,
                  academic writing,
                  AI research,
                  dan pengembangan publikasi ilmiah modern.
                </p>

              </div>
            )}

            {selectedFounder === "nurul" && (
              <div>

                <img
                  src="/founder-nurul.jpg"
                  className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400 mb-8"
                />

                <h2 className="text-5xl font-black mb-4">
                  Dr. Nurul Fajri
                </h2>

                <p className="text-cyan-400 text-2xl mb-8">
                  Publication & Research Advisor
                </p>

                <p className="text-slate-300 text-xl leading-relaxed">
                  Aktif dalam publikasi ilmiah,
                  pelatihan akademik,
                  dan pendampingan penelitian mahasiswa.
                </p>

              </div>
            )}

          </div>

        </div>

      )}

    </div>
  );
}