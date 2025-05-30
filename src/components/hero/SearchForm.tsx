
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useVehicleFilters } from "@/hooks/useVehicles";

const SearchForm = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"new" | "used">("new");
  const [selectedMake, setSelectedMake] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  
  // For used cars, get all filter options first to populate makes
  const { data: allFilterOptions } = useVehicleFilters({});
  
  // Get filtered options based on selected make for model filtering
  const makeFilter = activeTab === "used" && selectedMake ? { make: selectedMake } : {};
  const { data: filteredOptions } = useVehicleFilters(makeFilter);

  // New car models
  const newCarModels = [
    { value: "ev6", label: "EV6" },
    { value: "ev9", label: "EV9" },
    { value: "niro", label: "Niro EV" },
    { value: "soul", label: "Soul EV" },
    { value: "sportage", label: "Sportage" },
    { value: "ceed", label: "Ceed" },
    { value: "xceed", label: "XCeed" },
    { value: "sorento", label: "Sorento" },
  ];

  // For used cars, use all makes from unfiltered data
  const usedCarMakes = allFilterOptions?.makes || [];
  
  // Get models filtered by selected make
  const getFilteredModels = () => {
    if (!selectedMake || !filteredOptions) return [];
    return filteredOptions.models.map(model => ({ value: model, label: model }));
  };

  // Set Kia as default when component loads or switching to used cars
  useEffect(() => {
    if (activeTab === "used" && !selectedMake && usedCarMakes.includes("Kia")) {
      setSelectedMake("Kia");
    }
  }, [activeTab, usedCarMakes, selectedMake]);

  // Reset model when make changes for used cars
  useEffect(() => {
    if (activeTab === "used") {
      setSelectedModel("");
    }
  }, [selectedMake, activeTab]);

  const handleSearch = () => {
    if (activeTab === "new") {
      // Navigate to new cars page (currently showing coming soon)
      navigate("/new-cars");
    } else {
      // Navigate to used cars page with search parameters
      const params = new URLSearchParams();
      if (selectedMake) params.set('make', selectedMake);
      if (selectedModel) params.set('model', selectedModel);
      
      const queryString = params.toString();
      navigate(`/used-cars${queryString ? `?${queryString}` : ''}`);
    }
  };

  return (
    <div className="animate-fade-in">
      <Card className="p-8 shadow-xl bg-white border-0">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-kia-charcoal mb-2">Find Your Perfect Kia</h2>
          <p className="text-kia-gray-medium">Search thousands of new and used vehicles</p>
        </div>

        {/* Search form */}
        <div className="space-y-4">
          {/* Vehicle type tabs */}
          <div className="grid grid-cols-2 gap-2 p-1 bg-kia-gray-light rounded-lg">
            <Button 
              className={`${activeTab === "new" ? "bg-kia-red hover:bg-kia-red-dark text-white" : "bg-transparent text-kia-charcoal hover:bg-white"}`}
              onClick={() => {
                setActiveTab("new");
                setSelectedMake("");
                setSelectedModel("");
              }}
            >
              New Cars
            </Button>
            <Button 
              className={`${activeTab === "used" ? "bg-kia-red hover:bg-kia-red-dark text-white" : "bg-transparent text-kia-charcoal hover:bg-white"}`}
              onClick={() => {
                setActiveTab("used");
                setSelectedModel("");
                // Set Kia as default for used cars
                if (usedCarMakes.includes("Kia")) {
                  setSelectedMake("Kia");
                }
              }}
            >
              Used Cars
            </Button>
          </div>

          {/* Search fields - New Cars */}
          {activeTab === "new" && (
            <div className="space-y-4">
              <Select value={selectedModel} onValueChange={setSelectedModel}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select Model" />
                </SelectTrigger>
                <SelectContent>
                  {newCarModels.map((model) => (
                    <SelectItem key={model.value} value={model.value}>
                      {model.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Search fields - Used Cars */}
          {activeTab === "used" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select value={selectedMake} onValueChange={(value) => {
                  setSelectedMake(value);
                  setSelectedModel(""); // Reset model when make changes
                }}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select Make" />
                  </SelectTrigger>
                  <SelectContent>
                    {usedCarMakes.map((make) => (
                      <SelectItem key={make} value={make}>
                        {make}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select 
                  value={selectedModel} 
                  onValueChange={setSelectedModel}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder={selectedMake ? "Select Model (Optional)" : "Select Make first"} />
                  </SelectTrigger>
                  <SelectContent>
                    {getFilteredModels().map((model) => (
                      <SelectItem key={model.value} value={model.label}>
                        {model.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <Button 
            className="w-full h-12 bg-kia-red hover:bg-kia-red-dark text-white text-lg font-semibold"
            onClick={handleSearch}
          >
            <Search className="h-5 w-5 mr-2" />
            Search Vehicles
          </Button>

          <p className="text-center text-sm text-kia-gray-medium">
            Over <span className="font-bold text-kia-red">200+</span> Kia vehicles in stock
          </p>
        </div>
      </Card>
    </div>
  );
};

export default SearchForm;
