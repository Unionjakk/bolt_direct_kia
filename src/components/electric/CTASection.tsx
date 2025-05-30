
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-kia-charcoal text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Ready for Your New Car?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Experience the future of driving with a new Kia vehicle. 
          Book your test drive today and discover what makes our cars special.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-kia-red hover:bg-kia-red-dark text-white px-8 py-3">Contact Us</Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
