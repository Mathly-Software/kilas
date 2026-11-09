/**
 * Kilas Terms and Conditions — page content (bilingual).
 *
 * Source of truth: /Kilas_Terms_and_Conditions (1).md in the repo root.
 * Keep both files in sync when the legal text changes.
 *
 * Markup supported in block strings: **bold**, *italic*.
 */

export const TERMS_META = {
  url: 'kilas.my.id',
  supportEmail: 'support@kilas.my.id',
  version: '1.3',
  lastUpdated: '2026-11-10',
  effective: { id: '10 November 2026', en: '10 November 2026' },
};

export type TermsBlock =
  | { p: string }
  | { ul: string[] };

export interface TermsSection {
  id: string;
  number: number;
  title: { id: string; en: string };
  blocks: { id: TermsBlock[]; en: TermsBlock[] };
}

export const TERMS_SECTIONS: TermsSection[] = [
  {
    id: 'conditions-of-use',
    number: 1,
    title: { id: 'Ketentuan Penggunaan', en: 'Conditions of Use' },
    blocks: {
      en: [
        {
          p: 'Kilas (the "Site" or the "Service"), available at kilas.my.id, is offered to you, the user, on the condition that you accept the terms, conditions and notices in this document and any additional terms that apply to a specific page or feature of the Site (together, the "Terms"). By accessing, registering for, or using the Site, you agree to these Terms. If you do not agree, you must stop using the Site immediately.',
        },
        {
          p: 'Kilas is operated by Full Name 1, Full Name 2 and Full Name 3, individuals based in Indonesia ("Kilas", "we", "us", "our"), contactable at support@kilas.my.id.',
        },
      ],
      id: [
        {
          p: 'Kilas ("Situs" atau "Layanan"), yang tersedia di kilas.my.id, ditawarkan kepada Anda, sebagai pengguna, dengan syarat Anda menyetujui syarat, ketentuan, dan pemberitahuan dalam dokumen ini serta ketentuan tambahan yang berlaku untuk halaman atau fitur tertentu di Situs (secara bersama-sama disebut "Ketentuan"). Dengan mengakses, mendaftar, atau menggunakan Situs, Anda menyetujui Ketentuan ini. Jika Anda tidak setuju, Anda harus segera berhenti menggunakan Situs.',
        },
        {
          p: 'Kilas dioperasikan oleh Nama Lengkap 1, Nama Lengkap 2 dan Nama Lengkap 3, perorangan yang berdomisili di Indonesia ("Kilas", "kami"), yang dapat dihubungi melalui support@kilas.my.id.',
        },
      ],
    },
  },
  {
    id: 'service',
    number: 2,
    title: { id: 'Deskripsi Layanan', en: 'Description of the Service' },
    blocks: {
      en: [
        {
          p: 'Kilas is an education platform that uses a spaced repetition system (SRS) to help students learn through flashcards. Users can upload study material (currently PDF files) or type notes, and our AI-assisted feature generates flashcards from that material. Flashcards are then scheduled for review according to the spaced repetition algorithm. We may add new file types and features over time.',
        },
      ],
      id: [
        {
          p: 'Kilas adalah platform pendidikan yang menggunakan sistem pengulangan berjarak (*spaced repetition system*/SRS) untuk membantu pelajar belajar melalui kartu kilas (*flashcard*). Pengguna dapat mengunggah materi belajar (saat ini berupa berkas PDF) atau mengetik catatan, lalu fitur berbantuan AI kami membuat kartu kilas dari materi tersebut. Kartu kilas kemudian dijadwalkan untuk diulang sesuai algoritma pengulangan berjarak. Kami dapat menambahkan jenis berkas dan fitur baru dari waktu ke waktu.',
        },
      ],
    },
  },
  {
    id: 'eligibility',
    number: 3,
    title: { id: 'Kelayakan dan Pengguna di Bawah Umur', en: 'Eligibility and Minors' },
    blocks: {
      en: [
        {
          p: '**3.1** You must be at least 18 years old, or the age of legal majority in your place of residence, to create an account and make purchases on your own.',
        },
        {
          p: '**3.2** If you are under 18, you may use Kilas only with the knowledge, consent and supervision of a parent or legal guardian, who agrees to these Terms on your behalf and is responsible for your use of the Service, including any token purchases.',
        },
        {
          p: '**3.3** We may ask for proof of parental or guardian consent and may suspend an account if we have reason to believe these requirements are not met.',
        },
      ],
      id: [
        {
          p: '**3.1** Anda harus berusia minimal 18 tahun, atau telah mencapai usia dewasa menurut hukum di tempat tinggal Anda, untuk membuat akun dan melakukan pembelian secara mandiri.',
        },
        {
          p: '**3.2** Jika Anda berusia di bawah 18 tahun, Anda hanya boleh menggunakan Kilas dengan sepengetahuan, persetujuan, dan pengawasan orang tua atau wali sah, yang menyetujui Ketentuan ini atas nama Anda dan bertanggung jawab atas penggunaan Layanan oleh Anda, termasuk pembelian token.',
        },
        {
          p: '**3.3** Kami dapat meminta bukti persetujuan orang tua atau wali dan dapat menangguhkan akun jika kami memiliki alasan untuk meyakini persyaratan ini tidak dipenuhi.',
        },
      ],
    },
  },
  {
    id: 'account',
    number: 4,
    title: { id: 'Akun Anda', en: 'Your Account' },
    blocks: {
      en: [
        {
          p: '**4.1** To use the Service you need to sign up and create an account, using the sign-up methods we offer (such as email and password, or a third-party login if available).',
        },
        { p: '**4.2** You must provide accurate and current information and keep it updated.' },
        {
          p: '**4.3** You are solely responsible for keeping your login credentials confidential and for all activity under your account. You must not share, sell or misuse your credentials, impersonate any person or entity, or misrepresent your affiliation with any person or entity.',
        },
        {
          p: '**4.4** Notify us immediately at support@kilas.my.id if you suspect unauthorised access to your account.',
        },
      ],
      id: [
        {
          p: '**4.1** Untuk menggunakan Layanan, Anda perlu mendaftar dan membuat akun dengan metode pendaftaran yang kami sediakan (seperti email dan kata sandi, atau login pihak ketiga jika tersedia).',
        },
        {
          p: '**4.2** Anda harus memberikan informasi yang akurat dan terbaru serta memperbaruinya bila ada perubahan.',
        },
        {
          p: '**4.3** Anda bertanggung jawab penuh untuk menjaga kerahasiaan data login Anda dan atas seluruh aktivitas yang terjadi di akun Anda. Anda tidak boleh membagikan, menjual, atau menyalahgunakan data login Anda, menyamar sebagai orang atau pihak lain, atau menyalahartikan afiliasi Anda dengan orang atau pihak mana pun.',
        },
        {
          p: '**4.4** Segera beri tahu kami melalui support@kilas.my.id jika Anda menduga ada akses tidak sah ke akun Anda.',
        },
      ],
    },
  },
  {
    id: 'ai-content',
    number: 5,
    title: { id: 'Konten Buatan AI dan Keakuratannya', en: 'AI-Generated Content and Accuracy' },
    blocks: {
      en: [
        {
          p: '**5.1** Flashcards are generated by artificial intelligence. AI output may be incomplete, inaccurate, outdated, biased or misleading, and may not exactly reflect your source material.',
        },
        {
          p: '**5.2** You are responsible for reviewing and verifying generated flashcards before relying on them for study, exams or any other purpose. Kilas is a study aid and does not guarantee any academic result, grade or exam outcome.',
        },
        {
          p: '**5.3** Generated output may not be unique. Similar or identical output may be produced for other users.',
        },
        {
          p: '**5.4** The quality of AI output is not a defect in the Service. Tokens are used up when a generation is processed, whatever the result. We do not refund or restore tokens because generated flashcards are inaccurate, incomplete, made-up ("hallucinated"), irrelevant, poorly worded, or different from what you expected. Section 7.2(a) covers technical failures only.',
        },
      ],
      id: [
        {
          p: '**5.1** Kartu kilas dibuat oleh kecerdasan buatan (AI). Hasil AI dapat tidak lengkap, tidak akurat, usang, bias, atau menyesatkan, dan mungkin tidak sepenuhnya mencerminkan materi sumber Anda.',
        },
        {
          p: '**5.2** Anda bertanggung jawab untuk memeriksa dan memverifikasi kartu kilas yang dihasilkan sebelum mengandalkannya untuk belajar, ujian, atau tujuan lain. Kilas adalah alat bantu belajar dan tidak menjamin hasil akademik, nilai, atau hasil ujian apa pun.',
        },
        {
          p: '**5.3** Hasil yang dihasilkan belum tentu unik. Hasil yang mirip atau identik dapat dihasilkan untuk pengguna lain.',
        },
        {
          p: '**5.4** Kualitas hasil AI bukan merupakan cacat pada Layanan. Token terpakai saat proses pembuatan materi dijalankan, apa pun hasilnya. Kami tidak mengembalikan token atau dana karena kartu kilas yang dihasilkan tidak akurat, tidak lengkap, dikarang ("halusinasi"), tidak relevan, kurang baik susunan kalimatnya, atau berbeda dari harapan Anda. Bagian 7.2(a) hanya mencakup kegagalan teknis.',
        },
      ],
    },
  },
  {
    id: 'tokens',
    number: 6,
    title: { id: 'Token, Harga, dan Pembayaran', en: 'Tokens, Pricing and Payment' },
    blocks: {
      en: [
        {
          p: '**6.1 Tokens.** The Service uses tokens to pay for AI flashcard generation. Tokens are purchased in advance and deducted when you generate material.',
        },
        {
          p: '**6.2 Token usage.** Token consumption is based on the amount of material submitted: currently 15 tokens per page of an uploaded PDF, and 15 tokens per approximately 250 words of typed notes. The current rates and token packages are shown on our Pricing page and may change from time to time. Rates shown at the time of generation apply. Tokens already purchased are not affected by later price changes, but the number of tokens a given task consumes may be adjusted.',
        },
        {
          p: '**6.3 Token validity.** Kilas is currently operated for an initial period of thirty (30) days, ending on [launch date + 30 days] (the "Initial Operating Period"). Purchased tokens do not have a separate expiry date. They remain valid until used, for as long as the Service operates and your account remains active and in good standing, and in any case at least until the end of the Initial Operating Period. We intend to continue the Service beyond the Initial Operating Period if our operational goals are met, but we do not promise that it will continue. If the Service continues, your unused tokens remain valid automatically. If the Service ends, Section 14.4 applies. Tokens are also subject to Section 14 (Suspension and Termination). The validity period is shown at checkout before you pay.',
        },
        {
          p: '**6.4 No cash value.** Tokens are a limited licence to use the Service. They have no cash value, cannot be redeemed for money (except as described in Section 14.4), and cannot be sold, transferred, gifted or exchanged between accounts.',
        },
        {
          p: '**6.5 Prices and taxes.** All prices are in Indonesian Rupiah (IDR). Any applicable taxes, including VAT, are shown at checkout.',
        },
        {
          p: '**6.6 Payment processing.** Payments are processed by our payment gateway partner, PT Midtrans, using the payment methods it offers (for example bank transfer, e-wallet, card, or other methods). We do not see or store your full card details. By paying, you also agree to the payment gateway\'s own terms and policies.',
        },
        {
          p: '**6.7 Order refusal and price errors.** If there has been a price or pricing display error, we reserve the right to refuse or cancel the order and refund the amount paid for it.',
        },
        {
          p: '**6.8 Failed or pending payments.** Tokens are credited only after payment is confirmed by the payment gateway. If your payment succeeded but tokens were not credited, contact support@kilas.my.id with your transaction details.',
        },
      ],
      id: [
        {
          p: '**6.1 Token.** Layanan menggunakan token untuk membayar pembuatan kartu kilas oleh AI. Token dibeli di muka dan dikurangi saat Anda membuat materi.',
        },
        {
          p: '**6.2 Penggunaan token.** Pemakaian token didasarkan pada jumlah materi yang dikirim: saat ini 15 token per halaman PDF yang diunggah, dan 15 token per sekitar 250 kata catatan yang diketik. Tarif dan paket token terkini ditampilkan di halaman Harga kami dan dapat berubah dari waktu ke waktu. Tarif yang tertera pada saat pembuatan materi yang berlaku. Token yang telah dibeli tidak terpengaruh oleh perubahan harga di kemudian hari, tetapi jumlah token yang dipakai untuk suatu tugas dapat disesuaikan.',
        },
        {
          p: '**6.3 Masa berlaku token.** Kilas saat ini dioperasikan untuk jangka waktu awal selama tiga puluh (30) hari, berakhir pada [tanggal peluncuran + 30 hari] ("Periode Operasional Awal"). Token yang telah dibeli tidak memiliki tanggal kedaluwarsa tersendiri. Token tetap berlaku sampai digunakan, selama Layanan beroperasi dan akun Anda aktif serta dalam kondisi baik, dan bagaimanapun juga setidaknya sampai Periode Operasional Awal berakhir. Kami bermaksud melanjutkan Layanan setelah Periode Operasional Awal apabila target operasional kami tercapai, tetapi kami tidak menjanjikan bahwa Layanan akan dilanjutkan. Jika Layanan dilanjutkan, token Anda yang belum terpakai tetap berlaku secara otomatis. Jika Layanan berakhir, berlaku Bagian 14.4. Token juga tunduk pada Bagian 14 (Penangguhan dan Penghentian). Masa berlaku token ditampilkan saat pembayaran, sebelum Anda membayar.',
        },
        {
          p: '**6.4 Tanpa nilai tunai.** Token merupakan lisensi terbatas untuk menggunakan Layanan. Token tidak memiliki nilai tunai, tidak dapat ditukar dengan uang (kecuali sebagaimana dijelaskan dalam Bagian 14.4), dan tidak dapat dijual, dipindahtangankan, dihadiahkan, atau ditukar antar akun.',
        },
        {
          p: '**6.5 Harga dan pajak.** Seluruh harga dinyatakan dalam Rupiah (IDR). Pajak yang berlaku, termasuk PPN, ditampilkan saat pembayaran.',
        },
        {
          p: '**6.6 Pemrosesan pembayaran.** Pembayaran diproses oleh mitra payment gateway kami, PT Midtrans, menggunakan metode pembayaran yang disediakannya (misalnya transfer bank, dompet digital, kartu, atau metode lain). Kami tidak melihat atau menyimpan data kartu Anda secara lengkap. Dengan melakukan pembayaran, Anda juga menyetujui ketentuan dan kebijakan payment gateway tersebut.',
        },
        {
          p: '**6.7 Penolakan pesanan dan kesalahan harga.** Jika terjadi kesalahan harga atau kesalahan tampilan harga, kami berhak menolak atau membatalkan pesanan dan mengembalikan dana yang telah dibayarkan untuk pesanan tersebut.',
        },
        {
          p: '**6.8 Pembayaran gagal atau tertunda.** Token hanya ditambahkan setelah pembayaran dikonfirmasi oleh payment gateway. Jika pembayaran Anda berhasil tetapi token belum masuk, hubungi support@kilas.my.id dengan menyertakan rincian transaksi Anda.',
        },
      ],
    },
  },
  {
    id: 'refunds',
    number: 7,
    title: { id: 'Kebijakan Pengembalian Dana', en: 'Refund Policy' },
    blocks: {
      en: [
        {
          p: '**7.1** All token purchases are final and **non-refundable**, including unused tokens, except as stated in Section 7.2.',
        },
        {
          p: '**7.2** We will, as the only exceptions: (a) automatically restore tokens consumed by a Technical Failure, meaning a generation that did not complete or returned no flashcards at all because of a technical error in our systems or our service providers\' systems (for example a system error, timeout or outage); (b) correct or refund duplicate or erroneous charges, upon verification; and (c) refund unused tokens if we end the Service, as set out in Section 14.4.',
        },
        {
          p: '**7.3 What is not a Technical Failure.** A generation that completes and returns flashcards is not a Technical Failure, even if you are unhappy with the content. This includes output that is inaccurate, incomplete, made-up ("hallucinated"), off-topic, badly formatted or not what you expected, and failures caused by your file (for example a corrupted, password-protected, scanned or unreadable PDF, or content we cannot process). We do not restore or refund tokens in these cases. You can review and edit generated flashcards yourself.',
        },
        {
          p: '**7.4** Nothing in this Section limits any right you have under applicable mandatory law, including Indonesian consumer protection law.',
        },
      ],
      id: [
        {
          p: '**7.1** Seluruh pembelian token bersifat final dan **tidak dapat dikembalikan dananya**, termasuk token yang belum digunakan, kecuali sebagaimana diatur dalam Bagian 7.2.',
        },
        {
          p: '**7.2** Satu-satunya pengecualian adalah kami akan: (a) secara otomatis mengembalikan token yang terpakai akibat Kegagalan Teknis, yaitu proses pembuatan materi yang tidak selesai atau tidak menghasilkan kartu kilas sama sekali karena kesalahan teknis pada sistem kami atau sistem penyedia layanan kami (misalnya kesalahan sistem, waktu habis, atau gangguan layanan); (b) mengoreksi atau mengembalikan dana atas penagihan ganda atau keliru, setelah diverifikasi; dan (c) mengembalikan dana atas token yang belum digunakan jika kami menghentikan Layanan, sebagaimana diatur dalam Bagian 14.4.',
        },
        {
          p: '**7.3 Yang Bukan Kegagalan Teknis.** Proses pembuatan materi yang selesai dan menghasilkan kartu kilas bukan merupakan Kegagalan Teknis, meskipun Anda tidak puas dengan isinya. Hal ini mencakup hasil yang tidak akurat, tidak lengkap, dikarang ("halusinasi"), di luar topik, formatnya buruk, atau tidak sesuai harapan Anda, serta kegagalan yang disebabkan oleh berkas Anda (misalnya PDF yang rusak, dilindungi kata sandi, berupa hasil pindaian, atau tidak dapat dibaca, atau konten yang tidak dapat kami proses). Dalam hal-hal tersebut kami tidak mengembalikan token atau dana. Anda dapat memeriksa dan menyunting sendiri kartu kilas yang dihasilkan.',
        },
        {
          p: '**7.4** Tidak ada ketentuan dalam Bagian ini yang membatasi hak Anda berdasarkan hukum yang berlaku dan bersifat wajib, termasuk hukum perlindungan konsumen Indonesia.',
        },
      ],
    },
  },
  {
    id: 'your-content',
    number: 8,
    title: { id: 'Konten dan Unggahan Anda', en: 'Your Content and Uploads' },
    blocks: {
      en: [
        {
          p: '**8.1** "User Content" means the material you upload or type (such as PDFs and notes), the flashcards you create or edit, and any other content you submit to the Site.',
        },
        {
          p: '**8.2** You retain ownership of your User Content. You grant Kilas a limited, non-exclusive, worldwide, royalty-free licence to process, store and display your User Content only as needed to operate the Service for you, including sending it to our AI provider to generate flashcards. If you make a deck public, the licence also covers displaying it to others as described in Section 9.',
        },
        {
          p: '**8.3** You warrant that you own or have the necessary rights and permissions to upload and use the User Content, including any copyright in it, and that it does not infringe the rights of anyone else. Do not upload entire commercial textbooks, copyrighted materials you do not have the right to copy, or other people\'s confidential information.',
        },
        {
          p: '**8.4 Retention and deletion.** Uploaded source files are processed to generate flashcards and are not retained by Kilas after processing. Generated flashcards, decks and study progress are stored in your account until you delete them. You can delete them yourself at any time, and you can request account deletion at support@kilas.my.id. Some records (for example, payment and transaction records) may be kept for as long as the law requires.',
        },
      ],
      id: [
        {
          p: '**8.1** "Konten Pengguna" berarti materi yang Anda unggah atau ketik (seperti PDF dan catatan), kartu kilas yang Anda buat atau ubah, dan konten lain yang Anda kirimkan ke Situs.',
        },
        {
          p: '**8.2** Anda tetap memiliki Konten Pengguna Anda. Anda memberi Kilas lisensi terbatas, non-eksklusif, berlaku di seluruh dunia, dan bebas royalti untuk memproses, menyimpan, dan menampilkan Konten Pengguna Anda hanya sebatas yang diperlukan untuk menjalankan Layanan bagi Anda, termasuk mengirimkannya ke penyedia AI kami untuk membuat kartu kilas. Jika Anda menjadikan sebuah dek publik, lisensi ini juga mencakup penayangannya kepada pihak lain sebagaimana dijelaskan dalam Bagian 9.',
        },
        {
          p: '**8.3** Anda menjamin bahwa Anda memiliki atau memegang hak dan izin yang diperlukan untuk mengunggah dan menggunakan Konten Pengguna, termasuk hak cipta atas konten tersebut, dan bahwa konten tersebut tidak melanggar hak pihak lain. Jangan mengunggah buku teks komersial secara utuh, materi berhak cipta yang tidak berhak Anda salin, atau informasi rahasia milik orang lain.',
        },
        {
          p: '**8.4 Penyimpanan dan penghapusan.** Berkas sumber yang diunggah diproses untuk membuat kartu kilas dan tidak disimpan oleh Kilas setelah pemrosesan selesai. Kartu kilas, dek, dan kemajuan belajar disimpan di akun Anda sampai Anda menghapusnya. Anda dapat menghapusnya sendiri kapan saja, dan Anda dapat meminta penghapusan akun melalui support@kilas.my.id. Beberapa catatan (misalnya catatan pembayaran dan transaksi) dapat disimpan selama jangka waktu yang diwajibkan oleh hukum.',
        },
      ],
    },
  },
  {
    id: 'public-decks',
    number: 9,
    title: { id: 'Dek Publik dan Berbagi', en: 'Public Decks and Sharing' },
    blocks: {
      en: [
        { p: '**9.1** Decks are private by default. A deck is shared publicly only if you switch on the "public" option.' },
        {
          p: '**9.2** Public decks can be viewed, and may be copied or studied, by other users and by anyone with the link or who finds it on the Site. Do not make a deck public if it contains personal data or content you do not want others to see.',
        },
        {
          p: '**9.3** You are fully responsible for the content you make public. You can switch a deck back to private or delete it at any time, but copies already made by others may remain.',
        },
        {
          p: '**9.4** We may remove or restrict public content that violates these Terms or applicable law, or in response to a valid complaint, including a copyright complaint sent to support@kilas.my.id.',
        },
      ],
      id: [
        {
          p: '**9.1** Dek bersifat pribadi secara bawaan. Sebuah dek hanya dibagikan secara publik jika Anda mengaktifkan opsi "publik".',
        },
        {
          p: '**9.2** Dek publik dapat dilihat, dan dapat disalin atau dipelajari, oleh pengguna lain dan oleh siapa pun yang memiliki tautannya atau menemukannya di Situs. Jangan menjadikan dek publik jika berisi data pribadi atau konten yang tidak ingin Anda tampilkan kepada orang lain.',
        },
        {
          p: '**9.3** Anda bertanggung jawab penuh atas konten yang Anda jadikan publik. Anda dapat mengembalikan dek menjadi pribadi atau menghapusnya kapan saja, tetapi salinan yang telah dibuat oleh pihak lain mungkin tetap ada.',
        },
        {
          p: '**9.4** Kami dapat menghapus atau membatasi konten publik yang melanggar Ketentuan ini atau hukum yang berlaku, atau menanggapi pengaduan yang sah, termasuk pengaduan hak cipta yang dikirim ke support@kilas.my.id.',
        },
      ],
    },
  },
  {
    id: 'intellectual-property',
    number: 10,
    title: { id: 'Kekayaan Intelektual', en: 'Intellectual Property' },
    blocks: {
      en: [
        {
          p: '**10.1** The Site, including its software, design, algorithms, logo, name, trademarks and all materials we publish (excluding User Content), is owned by Kilas or its licensors and is protected by the copyright laws of Indonesia and international law.',
        },
        {
          p: '**10.2** Except as expressly allowed, you may not copy, reproduce, modify, republish, upload, transmit, distribute, reverse engineer, decompile or create derivative works from any part of the Site without our prior written permission.',
        },
        {
          p: '**10.3** Subject to these Terms and your rights in your source material, you may use the flashcards generated for you for your own personal, non-commercial educational use.',
        },
      ],
      id: [
        {
          p: '**10.1** Situs, termasuk perangkat lunak, desain, algoritma, logo, nama, merek dagang, dan seluruh materi yang kami terbitkan (di luar Konten Pengguna), dimiliki oleh Kilas atau pemberi lisensinya dan dilindungi oleh hukum hak cipta Indonesia serta hukum internasional.',
        },
        {
          p: '**10.2** Kecuali diizinkan secara tegas, Anda tidak boleh menyalin, memperbanyak, mengubah, menerbitkan ulang, mengunggah, mengirimkan, mendistribusikan, merekayasa balik, mendekompilasi, atau membuat karya turunan dari bagian mana pun dari Situs tanpa izin tertulis dari kami.',
        },
        {
          p: '**10.3** Dengan tunduk pada Ketentuan ini dan hak Anda atas materi sumber Anda, Anda dapat menggunakan kartu kilas yang dibuat untuk Anda untuk keperluan pendidikan pribadi dan nonkomersial.',
        },
      ],
    },
  },
  {
    id: 'acceptable-use',
    number: 11,
    title: { id: 'Penggunaan yang Dapat Diterima', en: 'Acceptable Use' },
    blocks: {
      en: [
        { p: 'You agree not to:' },
        {
          ul: [
            'use the Service for anything unlawful, or to upload content that is unlawful, defamatory, hateful, obscene, pornographic, threatening, harassing, or that infringes any right;',
            'upload viruses, malware or any harmful code;',
            'attempt to access other accounts, our systems or data without permission, or probe, scan or test the security of the Site;',
            'overload, disrupt or interfere with the Site, including by automated scraping, bots or excessive requests;',
            'bypass or abuse token, payment, or usage limits, including exploiting bugs to obtain free tokens, or use stolen payment methods;',
            'attempt to extract, copy or reverse engineer our AI prompts, models or algorithms;',
            'use the Service to cheat in a way that violates the rules of your school or institution, or to generate content that breaks the law.',
          ],
        },
      ],
      id: [
        { p: 'Anda setuju untuk tidak:' },
        {
          ul: [
            'menggunakan Layanan untuk hal yang melanggar hukum, atau mengunggah konten yang melanggar hukum, mencemarkan nama baik, mengandung kebencian, cabul, pornografis, mengancam, melecehkan, atau melanggar hak apa pun;',
            'mengunggah virus, malware, atau kode berbahaya apa pun;',
            'mencoba mengakses akun lain, sistem, atau data kami tanpa izin, atau menyelidiki, memindai, atau menguji keamanan Situs;',
            'membebani, mengganggu, atau mengintervensi Situs, termasuk melalui *scraping* otomatis, bot, atau permintaan berlebihan;',
            'menghindari atau menyalahgunakan batas token, pembayaran, atau penggunaan, termasuk memanfaatkan celah (bug) untuk mendapatkan token gratis, atau menggunakan metode pembayaran hasil curian;',
            'mencoba mengambil, menyalin, atau merekayasa balik prompt, model, atau algoritma AI kami;',
            'menggunakan Layanan untuk berbuat curang dengan cara yang melanggar aturan sekolah atau institusi Anda, atau untuk membuat konten yang melanggar hukum.',
          ],
        },
      ],
    },
  },
  {
    id: 'privacy',
    number: 12,
    title: { id: 'Privasi dan Data Pribadi', en: 'Privacy and Personal Data' },
    blocks: {
      en: [
        {
          p: '**12.1** We collect only the personal data needed to run the Service, such as your name or username, email address, account and login details, your decks and study activity, and payment and transaction records (not full card details).',
        },
        {
          p: '**12.2** We use this data to provide and secure the Service, process payments, provide support, and improve the Service. We do not sell your personal data.',
        },
        {
          p: '**12.3 Third parties.** To provide the Service we share data with service providers who process it on our behalf, including: (a) our AI provider, **DeepSeek**, which receives the text of your uploaded material to generate flashcards, and whose servers may be located outside Indonesia; and (b) our payment gateway, PT Midtrans, for payments. By using the Service you acknowledge that your material may be transferred and processed outside Indonesia.',
        },
        {
          p: '**12.4 Do not upload sensitive information** (such as national ID numbers, health records or financial account details) in your material, because it will be processed by the AI provider.',
        },
        {
          p: '**12.5** We handle personal data in line with Indonesian law, including the Personal Data Protection Law (UU No. 27 of 2022). You may request access to, correction of, or deletion of your personal data, and may withdraw consent, by contacting support@kilas.my.id. A separate Privacy Policy explains this in more detail.',
        },
        {
          p: '**12.6** For users under 18, we process personal data based on the consent of a parent or legal guardian.',
        },
      ],
      id: [
        {
          p: '**12.1** Kami hanya mengumpulkan data pribadi yang diperlukan untuk menjalankan Layanan, seperti nama atau nama pengguna, alamat email, data akun dan login, dek serta aktivitas belajar Anda, dan catatan pembayaran dan transaksi (bukan data kartu lengkap).',
        },
        {
          p: '**12.2** Kami menggunakan data ini untuk menyediakan dan mengamankan Layanan, memproses pembayaran, memberikan dukungan, dan meningkatkan Layanan. Kami tidak menjual data pribadi Anda.',
        },
        {
          p: '**12.3 Pihak ketiga.** Untuk menyediakan Layanan, kami membagikan data kepada penyedia layanan yang memprosesnya atas nama kami, termasuk: (a) penyedia AI kami, **DeepSeek**, yang menerima teks materi yang Anda unggah untuk membuat kartu kilas, dan yang servernya mungkin berada di luar Indonesia; dan (b) payment gateway kami, PT Midtrans, untuk pembayaran. Dengan menggunakan Layanan, Anda mengakui bahwa materi Anda dapat dikirim dan diproses di luar Indonesia.',
        },
        {
          p: '**12.4 Jangan mengunggah informasi sensitif** (seperti nomor identitas nasional, data kesehatan, atau rincian rekening keuangan) dalam materi Anda, karena akan diproses oleh penyedia AI.',
        },
        {
          p: '**12.5** Kami mengelola data pribadi sesuai hukum Indonesia, termasuk Undang-Undang Pelindungan Data Pribadi (UU No. 27 Tahun 2022). Anda dapat meminta akses, perbaikan, atau penghapusan data pribadi Anda, serta menarik persetujuan, dengan menghubungi support@kilas.my.id. Kebijakan Privasi terpisah menjelaskan hal ini secara lebih rinci.',
        },
        {
          p: '**12.6** Untuk pengguna di bawah 18 tahun, kami memproses data pribadi berdasarkan persetujuan orang tua atau wali sah.',
        },
      ],
    },
  },
  {
    id: 'security',
    number: 13,
    title: { id: 'Keamanan', en: 'Security' },
    blocks: {
      en: [
        {
          p: 'We take reasonable technical and organisational measures to protect the Site and your data against unauthorised access, loss or misuse. However, no system is completely secure, and we cannot guarantee absolute security. If we become aware of a data breach that affects your personal data, we will notify you and the authorities as required by law. You are responsible for keeping your own devices and credentials secure.',
        },
      ],
      id: [
        {
          p: 'Kami menerapkan langkah-langkah teknis dan organisasi yang wajar untuk melindungi Situs dan data Anda dari akses tidak sah, kehilangan, atau penyalahgunaan. Namun, tidak ada sistem yang sepenuhnya aman, dan kami tidak dapat menjamin keamanan mutlak. Jika kami mengetahui adanya kebocoran data yang memengaruhi data pribadi Anda, kami akan memberi tahu Anda dan pihak berwenang sebagaimana diwajibkan oleh hukum. Anda bertanggung jawab menjaga keamanan perangkat dan data login Anda sendiri.',
        },
      ],
    },
  },
  {
    id: 'termination',
    number: 14,
    title: { id: 'Penangguhan dan Penghentian', en: 'Suspension and Termination' },
    blocks: {
      en: [
        {
          p: '**14.1** We may suspend or terminate your account or access, with or without notice, if you breach these Terms, if we suspect fraud, abuse, or a security risk, or if required by law.',
        },
        { p: '**14.2** You may stop using the Service and request deletion of your account at any time.' },
        { p: '**14.3** If we terminate your account for your breach, unused tokens may be forfeited.' },
        {
          p: '**14.4 Ending the Service.** We may end the Service, including by not continuing it after the Initial Operating Period. If we do, we will: (a) give you at least 60 days\' notice by email and on the Site; (b) stop selling tokens at least 30 days before the Service ends; (c) keep the Service running during the notice period so you can use your remaining tokens and, where available, export your decks; (d) refund the value of any tokens still unused when the Service ends, at the price per token you paid, to the original payment method or another method we agree with you, if you request it within 90 days after the Service ends; and (e) delete or anonymise your personal data after the Service ends, except records we must keep by law. We may ask you to verify your identity and transaction details first. This refund does not apply to tokens forfeited under Section 14.3 or to tokens obtained through fraud, abuse or free promotions.',
        },
        {
          p: '**14.5** Sections that by their nature should survive termination (including our refund obligation under Section 14.4, intellectual property, disclaimers, limitation of liability, indemnity and governing law) will survive.',
        },
      ],
      id: [
        {
          p: '**14.1** Kami dapat menangguhkan atau menghentikan akun atau akses Anda, dengan atau tanpa pemberitahuan, jika Anda melanggar Ketentuan ini, jika kami mencurigai adanya penipuan, penyalahgunaan, atau risiko keamanan, atau jika diwajibkan oleh hukum.',
        },
        { p: '**14.2** Anda dapat berhenti menggunakan Layanan dan meminta penghapusan akun Anda kapan saja.' },
        { p: '**14.3** Jika kami menghentikan akun Anda karena pelanggaran yang Anda lakukan, token yang belum digunakan dapat hangus.' },
        {
          p: '**14.4 Berakhirnya Layanan.** Kami dapat menghentikan Layanan, termasuk dengan tidak melanjutkannya setelah Periode Operasional Awal. Jika hal itu terjadi, kami akan: (a) memberikan pemberitahuan setidaknya 60 hari melalui email dan di Situs; (b) berhenti menjual token setidaknya 30 hari sebelum Layanan berakhir; (c) tetap menjalankan Layanan selama masa pemberitahuan agar Anda dapat menggunakan sisa token dan, bila tersedia, mengekspor dek Anda; (d) mengembalikan dana atas token yang masih belum terpakai saat Layanan berakhir, sebesar harga per token yang Anda bayarkan, ke metode pembayaran asal atau metode lain yang disepakati, apabila Anda memintanya dalam 90 hari setelah Layanan berakhir; dan (e) menghapus atau menganonimkan data pribadi Anda setelah Layanan berakhir, kecuali catatan yang wajib kami simpan menurut hukum. Kami dapat meminta Anda memverifikasi identitas dan rincian transaksi terlebih dahulu. Pengembalian dana ini tidak berlaku untuk token yang hangus berdasarkan Bagian 14.3 atau token yang diperoleh melalui penipuan, penyalahgunaan, atau promosi gratis.',
        },
        {
          p: '**14.5** Bagian-bagian yang menurut sifatnya harus tetap berlaku setelah penghentian (termasuk kewajiban pengembalian dana dalam Bagian 14.4, kekayaan intelektual, penafian, pembatasan tanggung jawab, ganti rugi, dan hukum yang berlaku) tetap berlaku.',
        },
      ],
    },
  },
  {
    id: 'disclaimer',
    number: 15,
    title: { id: 'Penafian', en: 'Disclaimer' },
    blocks: {
      en: [
        {
          p: 'The Service is provided "as is" and "as available". To the fullest extent permitted by law, we make no warranties, express or implied, including about accuracy, completeness, reliability, fitness for a particular purpose, or uninterrupted or error-free operation. We assume no responsibility for the accuracy, correctness, timeliness or content of AI-generated materials. The Site may be unavailable from time to time because of maintenance, outages or third-party failures.',
        },
      ],
      id: [
        {
          p: 'Layanan disediakan "sebagaimana adanya" dan "sebagaimana tersedia". Sejauh diizinkan oleh hukum, kami tidak memberikan jaminan apa pun, baik tersurat maupun tersirat, termasuk mengenai keakuratan, kelengkapan, keandalan, kesesuaian untuk tujuan tertentu, atau pengoperasian yang tidak terputus atau bebas kesalahan. Kami tidak bertanggung jawab atas keakuratan, kebenaran, ketepatan waktu, atau isi materi yang dibuat oleh AI. Situs dapat tidak tersedia sewaktu-waktu karena pemeliharaan, gangguan, atau kegagalan pihak ketiga.',
        },
      ],
    },
  },
  {
    id: 'liability',
    number: 16,
    title: { id: 'Pembatasan Tanggung Jawab', en: 'Limitation of Liability' },
    blocks: {
      en: [
        {
          p: 'To the fullest extent permitted by law, Kilas and its operators are not liable for indirect, incidental, special or consequential damages, or for loss of data, profits, grades or academic opportunities arising from your use of the Service. Our total liability for any claim relating to the Service is limited to the amount you paid us in the three (3) months before the event giving rise to the claim. Nothing here excludes liability that cannot be excluded under applicable law.',
        },
      ],
      id: [
        {
          p: 'Sejauh diizinkan oleh hukum, Kilas dan para pengelolanya tidak bertanggung jawab atas kerugian tidak langsung, insidental, khusus, atau konsekuensial, atau atas hilangnya data, keuntungan, nilai, atau kesempatan akademik yang timbul dari penggunaan Layanan oleh Anda. Total tanggung jawab kami atas klaim apa pun terkait Layanan dibatasi sebesar jumlah yang Anda bayarkan kepada kami dalam tiga (3) bulan sebelum peristiwa yang menjadi dasar klaim. Tidak ada ketentuan di sini yang mengecualikan tanggung jawab yang tidak dapat dikecualikan menurut hukum yang berlaku.',
        },
      ],
    },
  },
  {
    id: 'indemnity',
    number: 17,
    title: { id: 'Ganti Rugi', en: 'Indemnity' },
    blocks: {
      en: [
        {
          p: 'You agree to indemnify, defend and hold harmless Kilas and its operators from any third-party claims, liabilities, damages, losses or expenses (including reasonable legal fees) arising from your User Content, your breach of these Terms, or your violation of any law or third-party right.',
        },
      ],
      id: [
        {
          p: 'Anda setuju untuk mengganti rugi, membela, dan membebaskan Kilas dan para pengelolanya dari klaim pihak ketiga, tanggung jawab, kerusakan, kerugian, atau biaya (termasuk biaya hukum yang wajar) yang timbul dari Konten Pengguna Anda, pelanggaran Anda terhadap Ketentuan ini, atau pelanggaran Anda terhadap hukum atau hak pihak ketiga mana pun.',
        },
      ],
    },
  },
  {
    id: 'communications',
    number: 18,
    title: { id: 'Komunikasi Elektronik', en: 'Electronic Communications' },
    blocks: {
      en: [
        {
          p: 'You agree that we may send you emails and in-app notices about your account, payments, changes to the Service or these Terms, and security matters. Where we send optional product updates or newsletters, you can unsubscribe at any time using the link in the message or your account settings.',
        },
      ],
      id: [
        {
          p: 'Anda setuju bahwa kami dapat mengirimkan email dan pemberitahuan dalam aplikasi kepada Anda mengenai akun, pembayaran, perubahan Layanan atau Ketentuan ini, dan hal-hal keamanan. Apabila kami mengirimkan pembaruan produk atau buletin yang bersifat opsional, Anda dapat berhenti berlangganan kapan saja melalui tautan dalam pesan atau pengaturan akun Anda.',
        },
      ],
    },
  },
  {
    id: 'changes',
    number: 19,
    title: { id: 'Perubahan Layanan dan Ketentuan', en: 'Changes to the Service and these Terms' },
    blocks: {
      en: [
        {
          p: 'We may change, suspend or discontinue any part of the Service, and may update these Terms and prices from time to time. We will post the updated Terms on the Site with a new "Last updated" date and, for material changes, notify you by email or in the app. Changes will not shorten the validity of tokens you have already purchased, except as described in Section 14.4. Your continued use of the Site after changes take effect means you accept the updated Terms. If you do not agree, you must stop using the Service.',
        },
      ],
      id: [
        {
          p: 'Kami dapat mengubah, menangguhkan, atau menghentikan bagian mana pun dari Layanan, serta memperbarui Ketentuan dan harga dari waktu ke waktu. Kami akan menayangkan Ketentuan terbaru di Situs dengan tanggal "Terakhir diperbarui" yang baru dan, untuk perubahan yang material, memberi tahu Anda melalui email atau dalam aplikasi. Perubahan tidak akan mempersingkat masa berlaku token yang telah Anda beli, kecuali sebagaimana dijelaskan dalam Bagian 14.4. Dengan terus menggunakan Situs setelah perubahan berlaku, Anda dianggap menerima Ketentuan yang diperbarui. Jika Anda tidak setuju, Anda harus berhenti menggunakan Layanan.',
        },
      ],
    },
  },
  {
    id: 'governing-law',
    number: 20,
    title: { id: 'Hukum yang Berlaku dan Penyelesaian Sengketa', en: 'Governing Law and Disputes' },
    blocks: {
      en: [
        {
          p: 'These Terms are governed by the laws of the Republic of Indonesia. We encourage you to contact us first so we can try to resolve any dispute amicably through discussion. If it cannot be resolved this way, the dispute will be submitted to the exclusive jurisdiction of the District Court of Palembang (Pengadilan Negeri Palembang).',
        },
      ],
      id: [
        {
          p: 'Ketentuan ini tunduk pada hukum Republik Indonesia. Kami mengajak Anda menghubungi kami terlebih dahulu agar kami dapat mencoba menyelesaikan sengketa secara musyawarah. Jika tidak dapat diselesaikan dengan cara tersebut, sengketa akan diajukan ke yurisdiksi eksklusif Pengadilan Negeri Palembang.',
        },
      ],
    },
  },
  {
    id: 'language',
    number: 21,
    title: { id: 'Bahasa', en: 'Language' },
    blocks: {
      en: [
        {
          p: 'These Terms are made in English and Bahasa Indonesia. If there is any inconsistency or difference in interpretation between the two versions, the Bahasa Indonesia version prevails to the extent required by Indonesian law.',
        },
      ],
      id: [
        {
          p: 'Ketentuan ini dibuat dalam bahasa Inggris dan Bahasa Indonesia. Apabila terdapat ketidaksesuaian atau perbedaan penafsiran antara kedua versi, versi Bahasa Indonesia yang berlaku sepanjang diwajibkan oleh hukum Indonesia.',
        },
      ],
    },
  },
  {
    id: 'contact',
    number: 22,
    title: { id: 'Pertanyaan dan Masukan', en: 'Questions and Feedback' },
    blocks: {
      en: [
        {
          p: 'We welcome your questions, comments and concerns about these Terms, privacy, or any information we collect from or about you. Please contact us at **support@kilas.my.id**.',
        },
      ],
      id: [
        {
          p: 'Kami menyambut pertanyaan, komentar, dan kekhawatiran Anda mengenai Ketentuan ini, privasi, atau informasi apa pun yang kami kumpulkan dari atau tentang Anda. Silakan hubungi kami di **support@kilas.my.id**.',
        },
      ],
    },
  },
];
