import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Send } from "lucide-react";
import { useState } from "react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Dziękujemy za wiadomość! Odpowiemy najszybciej jak to możliwe.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "kontakt@zaduzoniczeego.pl",
      link: "mailto:kontakt@zaduzoniczeego.pl",
    },
    {
      icon: Phone,
      title: "Telefon",
      value: "+48 123 456 789",
      link: "tel:+48123456789",
    },
    {
      icon: MapPin,
      title: "Adres",
      value: "ul. Przykładowa 123, 00-001 Warszawa",
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", link: "#" },
    { icon: Facebook, name: "Facebook", link: "#" },
    { icon: Twitter, name: "Twitter", link: "#" },
  ];

  const reasons = [
    "Chcesz zorganizować warsztaty w swojej szkole",
    "Jesteś zainteresowany partnerstwem",
    "Masz pytania o projekt",
    "Chcesz dołączyć do zespołu",
    "Szukasz informacji o ankiecie",
    "Potrzebujesz materiałów edukacyjnych",
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c30406]/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-3 bg-[#c30406]/10 border border-[#c30406]/30 rounded-full text-[#c30406] mb-8">
              Kontakt
            </div>
            
            <h1 className="text-5xl lg:text-7xl text-white mb-8 tracking-tight">
              Porozmawiajmy <span className="text-[#c30406]">o zmianie</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300">
              Masz pytania? Chcesz się zaangażować? A może po prostu chcesz pogadać?
              Jesteśmy tutaj dla Ciebie.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#152030]/50 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div
                    key={index}
                    className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#c30406]/50 transition-all text-center group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#c30406]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#c30406]/20 transition-colors">
                      <Icon className="text-[#c30406]" size={28} />
                    </div>
                    
                    <h3 className="text-xl text-white mb-3">{method.title}</h3>
                    {method.link ? (
                      <a
                        href={method.link}
                        className="text-gray-300 hover:text-[#c30406] transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{method.value}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Reasons */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <div>
                <h2 className="text-4xl lg:text-5xl text-white mb-6">
                  Napisz do <span className="text-[#c30406]">nas</span>
                </h2>
                <p className="text-gray-300 mb-10 text-lg">
                  Wypełnij formularz, a odpowiemy najszybciej jak to możliwe.
                  Zazwyczaj zajmuje nam to 24-48 godzin.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Imię i nazwisko
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#c30406] transition-colors"
                      placeholder="Jan Kowalski"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#c30406] transition-colors"
                      placeholder="jan@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-white mb-2">
                      Temat
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#c30406] transition-colors"
                      placeholder="Warsztaty w mojej szkole"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white mb-2">
                      Wiadomość
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#c30406] transition-colors resize-none"
                      placeholder="Opisz, w czym możemy Ci pomóc..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#c30406] text-[#faf6ef] rounded-lg hover:bg-[#a50305] transition-all hover:shadow-lg hover:shadow-[#c30406]/20 inline-flex items-center justify-center gap-2 group"
                  >
                    Wyślij wiadomość
                    <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                  </button>
                </form>
              </div>

              {/* Reasons & Social */}
              <div className="space-y-12">
                <div>
                  <h3 className="text-3xl text-white mb-6">
                    Dlaczego warto się <span className="text-[#c30406]">skontaktować?</span>
                  </h3>
                  
                  <div className="space-y-4">
                    {reasons.map((reason, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#c30406]/20 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-[#c30406]" />
                        </div>
                        <p className="text-gray-300">{reason}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-[#c30406]/10 to-transparent border border-[#c30406]/20">
                  <h3 className="text-2xl text-white mb-4">Obserwuj nas</h3>
                  <p className="text-gray-300 mb-6">
                    Bądź na bieżąco z naszymi działaniami w social media
                  </p>
                  
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.link}
                          className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#c30406] hover:bg-white/10 transition-all border border-white/10 hover:border-[#c30406]/50"
                          aria-label={social.name}
                        >
                          <Icon size={24} />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Response */}
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-2xl text-white mb-4">Szybka odpowiedź</h3>
                  <p className="text-gray-300 mb-4">
                    Odpowiadamy na większość zapytań w ciągu <span className="text-[#c30406]">24-48 godzin</span>.
                  </p>
                  <p className="text-gray-400 text-sm">
                    W pilnych sprawach dzwoń pod numer +48 123 456 789
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#152030]/50 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-5xl text-white mb-12 text-center">
              Nasza <span className="text-[#c30406]">lokalizacja</span>
            </h2>

            {/* Map Placeholder */}
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-[#c30406] mx-auto mb-4" size={48} />
                <p className="text-xl text-white mb-2">Mapa Google</p>
                <p className="text-gray-400 max-w-md">
                  Tutaj zostanie osadzona mapa Google Maps z lokalizacją biura
                </p>
                <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10 max-w-md mx-auto">
                  <code className="text-sm text-gray-300">
                    {'<iframe src="GOOGLE_MAPS_EMBED_LINK" />'}
                  </code>
                </div>
              </div>
            </div>

            {/* Uncomment and replace with your actual Google Maps embed link */}
            {/* <iframe
              src="YOUR_GOOGLE_MAPS_EMBED_LINK"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            ></iframe> */}

            <div className="mt-8 text-center">
              <p className="text-gray-300">
                ul. Przykładowa 123, 00-001 Warszawa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl text-white mb-12 text-center">
              Najczęściej <span className="text-[#c30406]">zadawane pytania</span>
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "Jak mogę zorganizować warsztaty w mojej szkole?",
                  a: "Skontaktuj się z nami mailowo lub telefonicznie, omówimy szczegóły i dostępne terminy.",
                },
                {
                  q: "Czy warsztaty są płatne?",
                  a: "Dla szkół publicznych oferujemy warsztaty bezpłatnie dzięki wsparciu naszych partnerów.",
                },
                {
                  q: "Dla jakiej grupy wiekowej są warsztaty?",
                  a: "Nasze programy skierowane są do młodzieży w wieku 10-20 lat (szkoły podstawowe i średnie).",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#c30406]/50 transition-all"
                >
                  <summary className="cursor-pointer text-lg text-white list-none flex items-center justify-between">
                    {faq.q}
                    <span className="text-[#c30406] group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="text-gray-300 mt-4 pl-4 border-l-2 border-[#c30406]/30">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}