// SEO READY STRUCTURE
// Recommended Assets:
// public/favicon.ico
// public/manifest.json
// public/og-image.jpg
// public/founder-khairul.jpg
// public/founder-nurul.jpg
// public/kegiatan-1.jpg sampai kegiatan-6.jpg
// Ready for GitHub + Vercel Deployment

export default function AcademicAIServiceWebsite() {
  return (
    <div
      id="top"
      className="min-h-screen bg-slate-50 text-slate-800 scroll-smooth selection:bg-emerald-400 selection:text-slate-950"
    >
      <header className="relative overflow-hidden bg-slate-950 text-white min-h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1800&auto=format&fit=crop"
            alt="Academic Background"
            className="w-full h-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-emerald-950/70"></div>
        </div>

        <div className="relative z-20 border-b border-white/10 backdrop-blur-xl bg-black/20">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-400 flex items-center justify-center text-slate-950 text-3xl font-black shadow-2xl">
                SA
              </div>

              <div>
                <h1 className="text-3xl font-black leading-none">
                  SMART ACADEMIC
                </h1>
                <p className="text-emerald-300 text-lg font-semibold">
                  SUPPORT CENTER
                </p>
                <p className="text-slate-400 text-sm">
                  AI for Research, Academic Writing & Publication
                </p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-200">
              <a href="#top" className="hover:text-emerald-400 transition">
                Beranda
              </a>
              <a href="#layanan" className="hover:text-emerald-400 transition">
                Layanan
              </a>
              <a
                href="#pelatihan"
                className="hover:text-emerald-400 transition"
              >
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
              className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 px-6 py-3 rounded-2xl font-bold shadow-2xl transition"
            >
              WhatsApp Admin
            </a>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
          <div className="mb-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 backdrop-blur-xl overflow-hidden">
            <div className="px-6 py-4 flex flex-wrap items-center justify-between gap-4 animate-pulse">
              <div>
                <p className="text-emerald-300 font-bold text-lg">
                  🎓 Pelatihan Online Review Artikel Ilmiah Gratis
                </p>
                <p className="text-slate-200 text-sm mt-1">
                  Sabtu, 24 Mei 2026 • 09.00 WIB • AI Research • Publikasi •
                  Academic Writing
                </p>
              </div>

              <a
                href="https://chat.whatsapp.com/JxLnff35oUrJZhPTXycPrH"
                target="_blank"
                className="bg-emerald-400 text-slate-950 px-6 py-3 rounded-2xl font-bold hover:scale-105 transition"
              >
                Daftar Gratis Sekarang
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center py-12 lg:py-24">
            <div>
              <div className="inline-flex items-center gap-3 bg-white/10 border border-white/10 backdrop-blur px-5 py-3 rounded-full text-sm font-semibold text-emerald-100 mb-8 shadow-xl">
                Pusat Bantuan Akademik • AI Research • Publikasi Ilmiah
              </div>

              <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-8">
                Solusi Akademik Modern
                <span className="block text-emerald-400">
                  Berbasis AI Premium
                </span>
              </h1>

              <p className="text-xl md:text-2xl leading-relaxed text-slate-200 max-w-3xl mb-10">
                Membantu mahasiswa, dosen, guru, peneliti, dan profesional dalam
                menyelesaikan tugas akademik, penelitian, publikasi ilmiah,
                serta pengembangan karya riset secara cepat, akurat, modern, dan
                etis.
              </p>

              <div className="grid md:grid-cols-3 gap-5 mb-10">
                <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[2rem] p-6 shadow-xl">
                  <div className="text-4xl font-black text-emerald-400 mb-3">
                    24/7
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cepat & Akurat</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Hasil akademik berkualitas dengan AI premium dan human
                    touch.
                  </p>
                </div>

                <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[2rem] p-6 shadow-xl">
                  <div className="text-4xl font-black text-emerald-400 mb-3">
                    100%
                  </div>
                  <h3 className="text-xl font-bold mb-2">Aman & Etis</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Privasi data terjaga dan sesuai etika akademik.
                  </p>
                </div>

                <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[2rem] p-6 shadow-xl">
                  <div className="text-4xl font-black text-emerald-400 mb-3">
                    AI+
                  </div>
                  <h3 className="text-xl font-bold mb-2">Mentor Ahli</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Dibimbing mentor akademik dan peneliti berpengalaman.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-5 mb-10">
                <a
                  href="https://wa.me/6285262608383"
                  className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 px-8 py-4 rounded-2xl text-lg font-black shadow-2xl hover:scale-105 transition"
                >
                  Konsultasi Gratis via WhatsApp
                </a>

                <a
                  href="#layanan"
                  className="border border-white/20 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-slate-950 transition"
                >
                  Lihat Semua Layanan
                </a>
              </div>

              <div className="flex flex-wrap gap-6 text-slate-300 text-sm font-medium">
                <span>✓ Mahasiswa</span>
                <span>✓ Dosen</span>
                <span>✓ Peneliti</span>
                <span>✓ Guru</span>
                <span>✓ Profesional</span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-black/30 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-emerald-300 text-sm font-semibold mb-2">
                      Founder & Academic Mentor
                    </p>
                    <h3 className="text-3xl font-black">
                      Research Mentor Team
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <button className="bg-white/5 hover:bg-white/10 transition border border-white/10 rounded-[2rem] p-5 text-center">
                    <img
                      src="/founder-khairul.jpg"
                      alt="Muhammad Khairul"
                      className="w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 border-emerald-400"
                    />

                    <h3 className="text-xl font-bold leading-snug mb-2">
                      Muhammad Khairul,
                      <br />
                      S.Pd., M.Pd.
                    </h3>

                    <p className="text-emerald-300 text-sm font-semibold mb-3">
                      Google Scholar ↗
                    </p>

                    <p className="text-slate-400 text-xs">
                      Klik untuk melihat profil, karya riset, dan publikasi.
                    </p>
                  </button>

                  <button className="bg-white/5 hover:bg-white/10 transition border border-white/10 rounded-[2rem] p-5 text-center">
                    <img
                      src="/founder-nurul.jpg"
                      alt="Nurul Fajri Saminan"
                      className="w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 border-emerald-400"
                    />

                    <h3 className="text-xl font-bold leading-snug mb-2">
                      Dr. Nurul Fajri Saminan,
                      <br />
                      S.Pd., M.Pd.
                    </h3>

                    <p className="text-emerald-300 text-sm font-semibold mb-3">
                      Google Scholar ↗
                    </p>

                    <p className="text-slate-400 text-xs">
                      Klik untuk melihat profil, karya riset, dan publikasi.
                    </p>
                  </button>
                </div>

                <div className="bg-white rounded-[2rem] p-8 text-slate-900 shadow-2xl">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-black mb-3">
                        Muhammad Khairul, S.Pd., M.Pd.
                      </h3>

                      <p className="text-emerald-700 font-semibold mb-4">
                        Academic Researcher & Educator
                      </p>

                      <div className="space-y-3 text-sm leading-relaxed text-slate-600">
                        <p>• Educational Technology</p>
                        <p>• Academic Writing</p>
                        <p>• Language Learning</p>
                        <p>• AI for Education</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black mb-3">
                        Dr. Nurul Fajri Saminan, S.Pd., M.Pd.
                      </h3>

                      <p className="text-emerald-700 font-semibold mb-4">
                        Research & Publication Advisor
                      </p>

                      <div className="space-y-3 text-sm leading-relaxed text-slate-600">
                        <p>• Linguistic Education</p>
                        <p>• Literacy Research</p>
                        <p>• Academic Publication</p>
                        <p>• Educational Innovation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[2rem] p-6 text-center shadow-xl">
              <div className="text-5xl font-black text-emerald-400 mb-3">
                2500+
              </div>
              <p className="text-slate-300">Klien Akademik</p>
            </div>

            <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[2rem] p-6 text-center shadow-xl">
              <div className="text-5xl font-black text-emerald-400 mb-3">
                4.9/5
              </div>
              <p className="text-slate-300">Rating Kepuasan</p>
            </div>

            <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[2rem] p-6 text-center shadow-xl">
              <div className="text-5xl font-black text-emerald-400 mb-3">
                5000+
              </div>
              <p className="text-slate-300">Dokumen Selesai</p>
            </div>

            <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[2rem] p-6 text-center shadow-xl">
              <div className="text-5xl font-black text-emerald-400 mb-3">
                100+
              </div>
              <p className="text-slate-300">Pelatihan Akademik</p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Dokumentasi Kegiatan Akademik
            </h2>

            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Dokumentasi pelatihan, workshop, seminar, pendampingan penelitian,
              dan kegiatan akademik bersama mahasiswa, guru, dosen, dan
              peneliti.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "/kegiatan-1.jpg",
              "/kegiatan-2.jpg",
              "/kegiatan-3.jpg",
              "/kegiatan-4.jpg",
            ].map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[2rem] shadow-lg border border-slate-100 bg-white"
              >
                <img
                  src={image}
                  alt="Kegiatan Akademik"
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">
                    Kegiatan Akademik {index + 1}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    Workshop, pelatihan, dan pendampingan akademik profesional.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-500 text-sm">
              Foto dapat diganti sendiri melalui GitHub sesuai dokumentasi asli
              kegiatan.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 border-y border-emerald-100">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-emerald-900">
            Bonus Gratis untuk Mahasiswa Banda Aceh
          </h2>

          <p className="text-lg text-emerald-800 leading-relaxed max-w-3xl mx-auto mb-8">
            Untuk mahasiswa dan peneliti di Banda Aceh, tersedia layanan gratis
            berupa konsultasi judul penelitian, pengecekan outline skripsi,
            rekomendasi referensi ilmiah, dan contoh format penulisan akademik.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-100">
              <h3 className="text-2xl font-semibold mb-3 text-emerald-900">
                Konsultasi Judul
              </h3>
              <p className="text-slate-600">
                Gratis konsultasi ide dan judul skripsi atau penelitian.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-100">
              <h3 className="text-2xl font-semibold mb-3 text-emerald-900">
                Cek Outline
              </h3>
              <p className="text-slate-600">
                Gratis pengecekan struktur proposal dan outline penelitian.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-100">
              <h3 className="text-2xl font-semibold mb-3 text-emerald-900">
                Referensi Akademik
              </h3>
              <p className="text-slate-600">
                Gratis rekomendasi jurnal dan referensi penelitian terpercaya.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-2xl font-semibold mb-4">Cepat</h3>
            <p className="text-slate-600 leading-relaxed">
              Proses pengerjaan cepat menggunakan bantuan AI premium dengan
              hasil yang tetap akademik dan rapi.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-2xl font-semibold mb-4">Human Style</h3>
            <p className="text-slate-600 leading-relaxed">
              Hasil tulisan lebih natural, formal, dan sesuai gaya akademik.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-2xl font-semibold mb-4">Rahasia</h3>
            <p className="text-slate-600 leading-relaxed">
              Data penelitian dan dokumen pengguna dijaga privasi dan
              kerahasiaannya.
            </p>
          </div>
        </div>
      </section>

      <section id="layanan" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Layanan Akademik
          </h2>

          <div className="mb-12 bg-slate-900 text-white rounded-[2rem] p-10 shadow-xl">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-5xl font-bold">500+</div>
                <p className="text-slate-300 mt-2">Dokumen Akademik</p>
              </div>

              <div>
                <div className="text-5xl font-bold">24 Jam</div>
                <p className="text-slate-300 mt-2">Fast Response</p>
              </div>

              <div>
                <div className="text-5xl font-bold">100%</div>
                <p className="text-slate-300 mt-2">Privasi Terjaga</p>
              </div>

              <div>
                <div className="text-5xl font-bold">AI+</div>
                <p className="text-slate-300 mt-2">Human Editing</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Editing Skripsi & Tesis",
                desc: "Perbaikan bahasa akademik, struktur, dan kerapian penulisan.",
              },
              {
                title: "Paraphrase Human Style",
                desc: "Parafrase tulisan ilmiah agar lebih natural dan formal.",
              },
              {
                title: "Outline Penelitian",
                desc: "Penyusunan kerangka penelitian dan ide topik akademik.",
              },
              {
                title: "Review Jurnal",
                desc: "Ringkasan jurnal dan analisis literatur penelitian.",
              },
              {
                title: "Daftar Pustaka",
                desc: "Bantuan sitasi APA, Mendeley, Zotero, dan referensi ilmiah.",
              },
              {
                title: "Presentasi Seminar",
                desc: "Pembuatan PPT seminar proposal, hasil, dan sidang.",
              },
              {
                title: "Turnitin & Similarity Check",
                desc: "Pengecekan tingkat similarity dan perbaikan kalimat ilmiah.",
              },
              {
                title: "Pembuatan Instrumen Penelitian",
                desc: "Pembuatan angket, wawancara, observasi, dan validasi instrumen.",
              },
              {
                title: "Analisis Data Penelitian",
                desc: "Bantuan analisis data kuantitatif dan kualitatif.",
              },
              {
                title: "Jurnal & Publikasi",
                desc: "Pendampingan artikel ilmiah menuju publikasi jurnal.",
              },
              {
                title: "Desain Poster & Infografis",
                desc: "Desain poster seminar, penelitian, dan infografis akademik.",
              },
              {
                title: "CV & Beasiswa Akademik",
                desc: "Pembuatan CV akademik dan bantuan esai beasiswa.",
              },
              {
                title: "Template Skripsi Kampus",
                desc: "Template penulisan sesuai format kampus dan fakultas.",
              },
              {
                title: "Bimbingan AI Research",
                desc: "Pelatihan penggunaan AI untuk penelitian dan akademik.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-md transition"
              >
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Usaha Akademik Legal & Profesional
          </h2>

          <p className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed mb-12">
            Smart Academic Support dibangun sebagai layanan bantuan akademik dan
            pendampingan penelitian profesional berbasis teknologi AI premium,
            editing ilmiah, dan konsultasi pendidikan.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4">Legal & Aman</h3>
              <p className="text-emerald-100 leading-relaxed">
                Fokus pada jasa konsultasi, editing, dan pendampingan akademik
                yang aman digunakan mahasiswa dan peneliti.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4">
                Identitas Profesional
              </h3>
              <p className="text-emerald-100 leading-relaxed">
                Cocok dikembangkan menjadi brand jasa akademik untuk wilayah
                Banda Aceh dan Indonesia.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4">Bisa Dikembangkan</h3>
              <p className="text-emerald-100 leading-relaxed">
                Dapat diperluas menjadi jasa publikasi jurnal, kelas riset, dan
                pelatihan akademik digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="pelatihan"
        className="py-20 bg-white border-y border-slate-100"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-bold mb-6">
              Jadwal Pelatihan Akademik Online
            </h2>

            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Program pelatihan online untuk mahasiswa, dosen, guru, peneliti,
              dan profesional yang ingin meningkatkan kemampuan riset,
              publikasi, dan penggunaan AI dalam dunia akademik.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Review Artikel Ilmiah",
                date: "Setiap Sabtu • 20.00 WIB",
                desc: "Belajar teknik review jurnal dan artikel ilmiah internasional.",
              },
              {
                title: "Pelatihan AI untuk Penelitian",
                date: "Setiap Minggu • 19.30 WIB",
                desc: "Pemanfaatan AI premium untuk skripsi, tesis, dan penelitian.",
              },
              {
                title: "Workshop Publikasi Jurnal",
                date: "2 Kali Setiap Bulan",
                desc: "Strategi publikasi jurnal nasional dan internasional.",
              },
              {
                title: "Pelatihan Mendeley & Zotero",
                date: "Setiap Rabu • 20.00 WIB",
                desc: "Manajemen sitasi dan referensi akademik otomatis.",
              },
              {
                title: "Analisis Data Penelitian",
                date: "Setiap Jumat • 20.00 WIB",
                desc: "Belajar analisis data kuantitatif dan kualitatif.",
              },
              {
                title: "Kelas Proposal Skripsi",
                date: "Setiap Senin • 20.00 WIB",
                desc: "Penyusunan proposal penelitian yang sistematis dan akademik.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition"
              >
                <div className="inline-block bg-emerald-100 text-emerald-900 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                  {item.date}
                </div>

                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

                <p className="text-slate-600 leading-relaxed mb-8">
                  {item.desc}
                </p>

                <a
                  href="https://chat.whatsapp.com/JxLnff35oUrJZhPTXycPrH"
                  target="_blank"
                  className="inline-block w-full text-center bg-slate-900 text-white px-6 py-4 rounded-2xl font-semibold hover:bg-emerald-500 hover:text-slate-950 transition"
                >
                  Ikuti Pelatihan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="founder"
        className="py-20 bg-white border-y border-slate-100"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Founder & Academic Mentor
            </h2>

            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Dibimbing oleh mentor akademik dan peneliti aktif dengan rekam
              jejak publikasi ilmiah dan profil akademik yang dapat
              diverifikasi.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-[2rem] p-10 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-emerald-300 text-sm font-semibold mb-2">
                    Founder • Research Mentor
                  </p>

                  <h3 className="text-3xl font-bold">Academic Research Team</h3>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-emerald-400 text-slate-950 flex items-center justify-center text-2xl font-black">
                  GS
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-8">
                Tim akademik aktif dalam penelitian, publikasi ilmiah,
                pengembangan AI research, dan pendampingan mahasiswa.
              </p>

              <div className="space-y-4">
                <a
                  href="https://scholar.google.com/citations?user=l1CSDE0AAAAJ&hl=en"
                  target="_blank"
                  className="block bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl px-6 py-5 transition"
                >
                  <p className="text-emerald-300 font-semibold mb-1">
                    Google Scholar Founder 1
                  </p>
                  <p className="text-slate-300 text-sm">
                    Lihat profil publikasi dan rekam jejak penelitian.
                  </p>
                </a>

                <a
                  href="https://scholar.google.com/citations?user=GVGKf4wAAAAJ&hl=en&oi=ao"
                  target="_blank"
                  className="block bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl px-6 py-5 transition"
                >
                  <p className="text-emerald-300 font-semibold mb-1">
                    Google Scholar Founder 2
                  </p>
                  <p className="text-slate-300 text-sm">
                    Profil akademik dan publikasi ilmiah terverifikasi.
                  </p>
                </a>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100">
                <h3 className="text-2xl font-bold mb-4">
                  Mengapa Gen Z Suka Platform Ini?
                </h3>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>✓ Fast response dan fleksibel online.</p>
                  <p>✓ Bisa konsultasi langsung via WhatsApp.</p>
                  <p>✓ Dibantu AI premium + human editing.</p>
                  <p>✓ Ada komunitas dan pelatihan gratis.</p>
                  <p>✓ Harga ramah mahasiswa.</p>
                  <p>✓ Bisa belajar sekaligus dibimbing.</p>
                </div>
              </div>

              <div className="bg-emerald-500 text-slate-950 rounded-[2rem] p-8 shadow-xl">
                <h3 className="text-3xl font-black mb-4">Free Starter Pack</h3>

                <p className="leading-relaxed mb-6 text-lg">
                  Semua member baru mendapatkan akses bonus gratis berupa:
                </p>

                <div className="grid grid-cols-2 gap-4 font-semibold">
                  <div>✓ Template Skripsi</div>
                  <div>✓ Prompt AI Research</div>
                  <div>✓ E-book Publikasi</div>
                  <div>✓ Grup Konsultasi</div>
                  <div>✓ Checklist Sidang</div>
                  <div>✓ Template PPT Seminar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="harga" className="py-20 bg-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">Daftar Harga</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <ul className="space-y-4 text-lg">
                <li className="flex justify-between">
                  <span>Paraphrase akademik</span>
                  <span>Rp3.000–5.000/halaman</span>
                </li>
                <li className="flex justify-between">
                  <span>Editing BAB skripsi</span>
                  <span>Rp15.000–30.000</span>
                </li>
                <li className="flex justify-between">
                  <span>Review jurnal</span>
                  <span>Rp10.000–25.000</span>
                </li>
                <li className="flex justify-between">
                  <span>Outline penelitian</span>
                  <span>Mulai Rp25.000</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold mb-4">Paket Pendampingan</h3>

              <p className="text-slate-300 leading-relaxed mb-6">
                Cocok untuk mahasiswa skripsi, tesis, dan peneliti yang
                membutuhkan bantuan akademik rutin.
              </p>

              <div className="text-5xl font-bold mb-2">Rp150K</div>
              <p className="text-slate-400 mb-6">per bulan</p>

              <ul className="space-y-3 text-slate-200">
                <li>✓ Konsultasi akademik</li>
                <li>✓ Editing ilmiah</li>
                <li>✓ Bantuan AI premium</li>
                <li>✓ Revisi tulisan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="kontak" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Siap Membantu Penelitian Anda
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Bantuan akademik profesional untuk mahasiswa, peneliti, guru, dan
            dosen dengan dukungan AI premium dan editing ilmiah.
          </p>

          <a
            href="https://wa.me/6285262608383"
            className="inline-block bg-slate-900 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition"
          >
            Konsultasi Sekarang
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Mengapa Memilih Kami?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="text-2xl font-semibold mb-4">Khusus Akademik</h3>
              <p className="text-slate-600 leading-relaxed">
                Fokus pada penelitian, skripsi, tesis, jurnal, dan pendidikan.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="text-2xl font-semibold mb-4">Human Editing</h3>
              <p className="text-slate-600 leading-relaxed">
                Semua hasil diperiksa kembali agar lebih natural dan akademik.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="text-2xl font-semibold mb-4">Harga Mahasiswa</h3>
              <p className="text-slate-600 leading-relaxed">
                Biaya terjangkau untuk mahasiswa dan peneliti pemula.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="text-2xl font-semibold mb-4">Support Online</h3>
              <p className="text-slate-600 leading-relaxed">
                Konsultasi mudah melalui WhatsApp dan media sosial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/6285262608383"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-emerald-400 hover:bg-emerald-300 text-slate-950 px-6 py-4 rounded-full shadow-2xl font-black transition hover:scale-110"
      >
        WhatsApp Admin
      </a>

      <section className="py-24 bg-gradient-to-r from-slate-950 to-emerald-950 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black mb-6">
            Dipercaya Mahasiswa & Akademisi Indonesia
          </h2>

          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-14">
            Smart Academic Support membantu penelitian, publikasi ilmiah,
            academic writing, dan pelatihan AI research modern.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold mb-4">Rating Tinggi</h3>
              <p className="text-slate-300 leading-relaxed">
                Dipercaya mahasiswa, dosen, guru, dan peneliti.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold mb-4">Mentor Akademik</h3>
              <p className="text-slate-300 leading-relaxed">
                Dibimbing mentor aktif dengan rekam jejak publikasi.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">AI Premium</h3>
              <p className="text-slate-300 leading-relaxed">
                Menggunakan AI modern dan human editing profesional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-8 text-center text-sm">
        <p>
          © 2026 Smart Academic Support • Academic Writing & Research Assistance
        </p>
      </footer>
    </div>
  );
}
