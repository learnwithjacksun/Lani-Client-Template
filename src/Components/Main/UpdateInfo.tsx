import { Locate, MapPin, Phone } from "lucide-react";
import { Input, Modal, Search } from "../UI";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LOCATIONS } from "@/Constants/dummy";
import Box from "./Box";

interface UpdateForm {
  phone: string;
  city: string;
  address?: string;
  latitude?: number;
  longitude?: number;
}

interface UpdateInfoProps {
  userData: {
    phone: string;
    location: string;
    address: string;
  };
}

const UpdateInfo = ({ userData }: UpdateInfoProps) => {
  const [searchLocation, setSearchLocation] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);

  const [form, setForm] = useState<UpdateForm>({
    phone: "",
    city: "",
    address: "",
    latitude: 0,
    longitude: 0,
  });
  const [errors, setErrors] = useState<UpdateForm>({
    phone: "",
    city: "",
    address: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
  const handleLocationSelect = (location: {
    state: string;
    capital: string;
  }) => {
    setForm({ ...form, city: location.capital });
    setIsOpen(false);
  };

  useEffect(() => {
    if (!inputRef.current || autocomplete) return;

    const auto = new google.maps.places.Autocomplete(inputRef.current, {
      fields: ["formatted_address", "geometry"],
      types: ["geocode"], // or ["address"]
    });

    auto.addListener("place_changed", () => {
      const place = auto.getPlace();
      if (place && place.formatted_address && place.geometry?.location) {
        setForm((prev) => ({
          ...prev,
          address: place.formatted_address || "",
          latitude: place.geometry?.location?.lat(),
          longitude: place.geometry?.location?.lng(),
        }));
      }
    });

    setAutocomplete(auto);
  }, [autocomplete]);

  useEffect(() => {
    setForm({
      phone: userData.phone || "",
      city: userData.location || "",
      address: userData.address || "",
      latitude: 0,
      longitude: 0,
    });
  }, [userData]);

  return (
    <>
      <Box title="Update Info">
        <form className="border border-line rounded-lg p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4 ">
            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="+2348123456789"
              value={form.phone}
              onChange={handleChange}
              error={errors.phone}
              icon={<Phone size={18} />}
              styles="placeholder:normal-case bg-secondary"
            />
            <div onClick={() => setIsOpen(true)} className="cursor-pointer">
              <Input
                label="City"
                placeholder="Set the city where you operate"
                name="location"
                value={form.city}
                onChange={handleChange}
                error={errors.city}
                icon={<Locate size={18} />}
                styles="placeholder:normal-case bg-secondary"
              />
            </div>
          </div>
          <Input
            label="Address"
            placeholder="e.g 123 Main St, Anytown"
            name="address"
            value={form.address}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                address: e.target.value,
              }))
            }
            inputRef={inputRef}
            error={errors?.address}
            icon={<MapPin size={18} />}
            styles="placeholder:normal-case bg-secondary"
          />
          <button type="submit" className="h-10 w-full bg-primary rounded-lg">
            Update
          </button>
        </form>
      </Box>

      <AnimatePresence>
        {isOpen && (
          <Modal
            title="Select a city"
            isOpen={isOpen}
            onClose={() => setIsOpen((prev) => !prev)}
          >
            <div>
              <Search
                placeholder="Search for a location"
                search={searchLocation}
                setSearch={setSearchLocation}
              />
              <ul className="mt-4 space-y-2">
                {LOCATIONS.length === 0 && (
                  <p className="text-center text-sm text-sub">
                    No locations found
                  </p>
                )}
                {LOCATIONS.filter(
                  (location) =>
                    location.state
                      .toLowerCase()
                      .includes(searchLocation.toLowerCase()) ||
                    location.capital
                      .toLowerCase()
                      .includes(searchLocation.toLowerCase())
                )
                  .slice(0, 5)
                  .map((location) => (
                    <li
                      key={location.state}
                      onClick={() => handleLocationSelect(location)}
                      className="flex items-center gap-2 py-2 border-b border-line last:border-b-0 cursor-pointer"
                    >
                      <MapPin size={18} className="text-sub" />
                      <p className="text-sm">
                        {location.state} - {location.capital}
                      </p>
                    </li>
                  ))}
              </ul>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default UpdateInfo;
