import IdentityColumn from "./components/IdentityColumn";
import About from "./components/About";
import Work from "./components/Work";
import Recognition from "./components/Recognition";
import Leadership from "./components/Leadership";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12 xl:grid-cols-[300px_1fr] xl:gap-16">
        {/* Left column - identity */}
        <div className="mb-8 sm:mb-10 lg:mb-0">
          <IdentityColumn />
        </div>

        {/* Right column - content sections */}
        <main className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14">
          <About />
          <Work />
          <Recognition />
          <Leadership />
          <Skills />
          <Education />
          <Footer />
        </main>
      </div>
    </div>
  );
}

