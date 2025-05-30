
import HeroContent from "./hero/HeroContent";
import SearchForm from "./hero/SearchForm";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-kia-silver via-white to-kia-gray-light py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <HeroContent />

          {/* Right content - Search Tool */}
          <SearchForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
