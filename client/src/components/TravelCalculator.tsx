import { useState } from "react";
import { MapPin, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TravelCalculator = () => {
  const [miles, setMiles] = useState("");
  const [activeTab, setActiveTab] = useState("miles");
  const [address, setAddress] = useState("");
  const [travelCost, setTravelCost] = useState(0);
  const [calculatedDistance, setCalculatedDistance] = useState(0);

  const calculateTravelFromMiles = () => {
    const milesNum = parseFloat(miles);
    if (milesNum && milesNum > 0) {
      // $1 per mile both ways, so multiply by 2
      const cost = milesNum * 2;
      setTravelCost(cost);
      setCalculatedDistance(milesNum);
    } else {
      setTravelCost(0);
      setCalculatedDistance(0);
    }
  };

  const calculateTravelFromAddress = () => {
    // Static hosting does not support address lookup, so the UI falls back to manual mileage.
    setActiveTab("miles");
    setTravelCost(0);
    setCalculatedDistance(0);
  };

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <MapPin className="w-6 h-6 text-yellow-600" />
          <h3 className="text-xl font-semibold text-stone-900">Travel Calculator</h3>
        </div>
        
        <p className="text-stone-600 text-sm mb-4">
          Calculate travel costs outside the Orlando area at $1 per mile both ways
        </p>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="address">By Address</TabsTrigger>
            <TabsTrigger value="miles">By Miles</TabsTrigger>
          </TabsList>
          
          <TabsContent value="address" className="space-y-4">
            <div>
              <Label htmlFor="address" className="text-sm font-medium text-stone-700">
                Your Session Address
              </Label>
              <Input
                id="address"
                type="text"
                placeholder="Enter full address (e.g., 123 Main St, Tampa, FL)"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1"
              />
            </div>
            
            <Button 
              onClick={calculateTravelFromAddress}
              className="w-full gold-gradient text-stone-900 font-semibold"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Use Miles Instead
            </Button>
            <p className="text-xs text-stone-500">
              Check the distance in Google Maps, then enter miles.
            </p>
          </TabsContent>
          
          <TabsContent value="miles" className="space-y-4">
            <div>
              <Label htmlFor="miles" className="text-sm font-medium text-stone-700">
                Distance from Orlando (miles)
              </Label>
              <Input
                id="miles"
                type="number"
                placeholder="Enter miles"
                value={miles}
                onChange={(e) => setMiles(e.target.value)}
                className="mt-1"
              />
            </div>
            
            <Button 
              onClick={calculateTravelFromMiles}
              className="w-full gold-gradient text-stone-900 font-semibold"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Calculate Travel Cost
            </Button>
          </TabsContent>
          
          {travelCost > 0 && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">
                  ${travelCost.toFixed(0)}
                </div>
                <div className="text-sm text-stone-600">
                  Travel cost for {calculatedDistance.toFixed(1)} miles both ways
                </div>
              </div>
            </div>
          )}
        </Tabs>
        
        <p className="text-xs text-stone-500 mt-4">
          Travel fee applies to locations outside the greater Orlando area
        </p>
      </div>
    </div>
  );
};

export default TravelCalculator;
