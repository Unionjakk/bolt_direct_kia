import VehicleCard from "./VehicleCard";

const VehicleGrid = () => {
  const vehicles = [
    {
      name: "E-Niro",
      description: "Compact crossover with exceptional range and practicality",
      range: "Up to 282 miles",
      chargingTime: "0-80% in 43 mins",
      image: "/images/NIRO-EV.jpg"
    },
    {
      name: "EV3",
      description: "All-new compact SUV designed for urban adventures",
      range: "Up to 372 miles",
      chargingTime: "0-80% in 31 mins",
      image: "/images/EV3.jpg"
    },
    {
      name: "EV4",
      description: "Sleek sedan combining performance with efficiency",
      range: "Up to 390 miles",
      chargingTime: "0-80% in 31 mins",
      image: "/images/EV4.jpg"
    },
    {
      name: "EV5",
      description: "Versatile family SUV with spacious interior",
      range: "Up to 377 miles",
      chargingTime: "0-80% in 27 mins",
      image: "/images/EV5.jpg"
    },
    {
      name: "EV6",
      description: "Revolutionary crossover with ultra-fast charging",
      range: "Up to 328 miles",
      chargingTime: "0-80% in 18 mins",
      image: "/images/EV6.jpg"
    },
    {
      name: "EV9",
      description: "Flagship three-row SUV with premium features",
      range: "Up to 313 miles",
      chargingTime: "0-80% in 24 mins",
      image: "/images/EV9.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-kia-charcoal mb-4">
            Our New Car Range
          </h2>
          <p className="text-lg text-kia-gray-medium max-w-2xl mx-auto">
            Every new Kia combines cutting-edge electric technology, exceptional design, and 
            sustainable performance to deliver an unmatched driving experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.name} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleGrid;
