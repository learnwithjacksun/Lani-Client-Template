import { Input, Modal, Search } from "@/Components/UI";
import { AnimatePresence } from "framer-motion";
import { LOCATIONS } from "@/Constants/dummy";
import {
  User,
  Mail,
  Lock,
  Phone,
  Loader,
  UserRoundPlus,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface IndividualProps {
  form: CustomerForm;
  setForm: (form: CustomerForm) => void;
  errors: CustomerForm;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
}

const Individual = ({
  form,
  errors,
  handleChange,
  loading,
  setForm,
}: IndividualProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");
  const handleLocationSelect = (location: {
    state: string;
    capital: string;
  }) => {
    setForm({ ...form, location: location.capital });
    setIsOpen(false);
  };

  return (
    <>
      <div className="space-y-4">
        <Input
          label="Name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Enter your name"
          icon={<User size={18} />}
          styles="placeholder:normal-case capitalize bg-secondary"
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="Enter your email"
          icon={<Mail size={18} />}
          styles="placeholder:normal-case lowercase bg-secondary"
        />
        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          error={errors.phone}
          placeholder="Enter your phone number"
          icon={<Phone size={18} />}
          styles=" bg-secondary"
        />
        <div onClick={() => setIsOpen(true)} className="cursor-pointer">
          <Input
            label="Location"
            placeholder="Set the city where you operate"
            name="location"
            value={form.location}
            onChange={handleChange}
            error={errors?.location}
            icon={<MapPin size={18} />}
            styles="placeholder:normal-case bg-secondary"
          />
        </div>
        <Input
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
          icon={<Lock size={18} />}
          styles="placeholder:normal-case bg-secondary"
        />
        <div className="space-y-2">
          <p className="text-xs text-sub text-center">
            By signing up, you agree to our{" "}
            <Link to="/terms" className="text-primary">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-primary">
              Privacy Policy
            </Link>
          </p>
          <button
            disabled={loading}
            type="submit"
            className="btn bg-primary text-white w-full h-10 rounded-full"
          >
            {loading ? (
              <Loader size={20} className="animate-spin" />
            ) : (
              "Register"
            )}
          </button>
        </div>
      </div>

      <div className="flex items-center text-sub text-sm center my-6 gap-3">
        <p>Already have an account?</p>
        <Link
          to="/login"
          className="bg-primary/10 text-primary btn px-4 py-2 rounded-full"
        >
          <UserRoundPlus size={18} />
          <span>Login</span>
        </Link>
      </div>

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

export default Individual;
