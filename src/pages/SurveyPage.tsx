import { CheckCircle, Shield, Clock, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export function SurveyPage() {
  const features = [
    {
      icon: Clock,
      title: "5-10 minut",
      description: "Ankieta zajmie Ci maksymalnie 10 minut",
    },
    {
      icon: Shield,
      title: "100% anonimowa",
      description: "Nie zbieramy żadnych danych osobowych",
    },
    {
      icon: FileText,
      title: "Ważna dla nauki",
      description: "Twoje odpowiedzi pomogą nam lepiej zrozumieć problem",
    },
  ];

  const topics = [
    "Ile czasu spędzasz w social media?",
    "Jak często sprawdzasz telefon w ciągu dnia?",
    "Czy odczuwasz lęk bez telefonu?",
    "Jak technologia wpływa na Twój sen?",
    "Czy masz problemy z koncentracją?",
    "Jakie są Twoje nawyki cyfrowe?",
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c30406]/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-3 bg-[#c30406]/10 border border-[#c30406]/30 rounded-full text-[#c30406] mb-8">
              Ankieta o uzależnieniu od dopaminy
            </div>
            
            <h1 className="text-5xl lg:text-7xl text-white mb-8 tracking-tight">
              Twój głos ma <span className="text-[#c30406]">znaczenie</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-12">
              Wypełnij anonimową ankietę i pomóż nam lepiej zrozumieć, jak młodzież
              korzysta z technologii i jakie są jej potrzeby.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#ankieta"
                className="px-10 py-5 bg-[#c30406] text-[#faf6ef] rounded-lg hover:bg-[#a50305] transition-all hover:shadow-lg hover:shadow-[#c30406]/20 inline-flex items-center justify-center gap-2"
              >
                Wypełnij teraz
                <span>→</span>
              </a>
              <Link
                to="/postep"
                className="px-10 py-5 bg-white/5 text-white rounded-lg hover:bg-white/10 border border-white/10 transition-all inline-flex items-center justify-center"
              >
                Zobacz wyniki badań
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#152030]/50 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl lg:text-5xl text-white mb-12 text-center">
              Dlaczego warto wziąć udział?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10"
                  >
                    <div className="w-16 h-16 rounded-xl bg-[#c30406]/10 flex items-center justify-center mx-auto mb-6">
                      <Icon className="text-[#c30406]" size={32} />
                    </div>
                    
                    <h3 className="text-2xl text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What We Ask */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl text-white mb-12 text-center">
              O co <span className="text-[#c30406]">pytamy?</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10"
                >
                  <CheckCircle className="text-[#c30406] flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-300 text-lg">{topic}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-400 mt-12">
              ...i wiele innych pytań, które pomogą nam zrozumieć Twoje doświadczenia
            </p>
          </div>
        </div>
      </section>

      {/* Survey Embed */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#152030]/50 to-transparent" id="ankieta">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="p-12 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h2 className="text-3xl lg:text-4xl text-white mb-8 text-center">
                Ankieta badawcza
              </h2>

              {/* Google Forms Placeholder */}
              <div className="aspect-[4/3] bg-white/5 rounded-xl border border-white/10 flex items-center justify-center flex-col gap-4 min-h-[600px]">
                <FileText className="text-[#c30406]" size={64} />
                <div className="text-center">
                  <p className="text-xl text-white mb-2">Formularz Google Forms</p>
                  <p className="text-gray-400 max-w-md">
                    Tutaj zostanie osadzony formularz Google Forms.
                    Wklej link do formularza w kodzie poniżej.
                  </p>
                  <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10 max-w-md mx-auto">
                    <code className="text-sm text-gray-300">
                      {'<iframe src="YOUR_GOOGLE_FORMS_LINK" />'}
                    </code>
                  </div>
                </div>
              </div>

              {/* Uncomment and replace with your actual Google Forms link */}
              {/* <iframe
                src="YOUR_GOOGLE_FORMS_EMBED_LINK"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-xl"
              >
                Ładowanie…
              </iframe> */}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Info */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="p-10 rounded-2xl bg-gradient-to-br from-[#c30406]/10 to-transparent border border-[#c30406]/20">
              <div className="flex items-start gap-6">
                <Shield className="text-[#c30406] flex-shrink-0 mt-1" size={40} />
                <div>
                  <h3 className="text-2xl text-white mb-4">Twoja prywatność jest priorytetem</h3>
                  
                  <div className="space-y-4 text-gray-300">
                    <p>
                      <strong className="text-white">Anonimowość:</strong> Nie zbieramy żadnych danych,
                      które mogłyby Cię zidentyfikować (imię, nazwisko, email, szkoła).
                    </p>
                    
                    <p>
                      <strong className="text-white">Bezpieczeństwo:</strong> Wszystkie odpowiedzi
                      są szyfrowane i przechowywane zgodnie z RODO.
                    </p>
                    
                    <p>
                      <strong className="text-white">Cel badawczy:</strong> Dane wykorzystujemy
                      wyłącznie do celów badawczych i edukacyjnych projektu "Za dużo niczego".
                    </p>
                    
                    <p>
                      <strong className="text-white">Dobrowolność:</strong> Wypełnienie ankiety
                      jest całkowicie dobrowolne. Możesz przerwać w każdej chwili.
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-sm text-gray-400">
                      Masz pytania dotyczące ankiety lub prywatności?{" "}
                      <Link to="/kontakt" className="text-[#c30406] hover:underline">
                        Skontaktuj się z nami
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Message */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#152030]/50 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Dziękujemy za Twój <span className="text-[#c30406]">wkład!</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Każda wypełniona ankieta przybliża nas do lepszego zrozumienia problemu
              i tworzenia skuteczniejszych rozwiązań dla młodzieży.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/o-nas"
                className="px-8 py-4 bg-white/5 text-white rounded-lg hover:bg-white/10 border border-white/10 transition-all"
              >
                Dowiedz się więcej o projekcie
              </Link>
              <Link
                to="/kontakt"
                className="px-8 py-4 bg-white/5 text-white rounded-lg hover:bg-white/10 border border-white/10 transition-all"
              >
                Zaangażuj się
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}