import { Input, Modal, Search } from "@/Components/UI";
import { LOCATIONS } from "@/Constants/dummy";
import { AnimatePresence } from "framer-motion";
import { User, Mail, Lock, Phone, Loader, X, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface BusinessProps {
  form: CustomerForm;
  errors: CustomerForm;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
  imagePreview: string | null;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setForm: (form: CustomerForm) => void;
  setImagePreview: (imagePreview: string | null) => void;
}
const Business = ({form, errors, handleChange, loading, imagePreview, handleImageChange, setForm, setImagePreview}: BusinessProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");
  const handleLocationSelect = (location: {state: string, capital: string}) => {
    setForm({...form, location: location.capital})
    setIsOpen(false);
  }
  return (
    <>
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm text-sub font-medium">Business Logo/ Face behind the business (Optional)</p>
          {!imagePreview && (
            <label htmlFor="image">
              <input
                type="file"
                id="image"
                accept=".png, .jpg, .jpeg"
                onChange={handleImageChange}
                className="hidden"
              />
              <div className="border-dashed border-2 border-line h-[120px] w-full rounded-xl flex items-center justify-center">
                <div className="center flex-col gap-1">
                  <p className="text-sm text-main">
                    Click to Upload Business Logo
                  </p>
                  <p className="text-sm text-muted">PNG, JPG, JPEG: Max 2MB</p>
                </div>
              </div>
            </label>
          )}
          {imagePreview && (
            <div className="h-[150px] w-[150px] mx-auto relative rounded-xl flex items-center justify-center mt-4">
              <img
                src={imagePreview}
                alt="company logo"
                className="w-full h-full object-cover rounded-xl"
              />
              <button
                type="button"
                className="absolute -top-2 -right-2 bg-primary text-white rounded-full p-2"
                onClick={() => {
                  setForm({ ...form, logo: null });
                  setImagePreview(null);
                }}
              >
                <X size={18} />
              </button>
            </div>
          )}
        </div>
      <Input
        label="Business Name"
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
        error={errors.name}
        placeholder="Enter your business name"
        icon={<User size={18} />}
        styles="placeholder:normal-case capitalize bg-secondary"
      />
      <Input
        label="Business Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="Enter your business email"
        icon={<Mail size={18} />}
        styles="placeholder:normal-case lowercase bg-secondary"
      />
      <Input
        label="Business Reg. No. (If applicable)"
        name="regNo"
        type="text"
        value={form.regNo}
        onChange={handleChange}
        error={errors.regNo}
        placeholder="Enter your business registration no."
        icon={<Mail size={18} />}
        styles="placeholder:normal-case lowercase bg-secondary"
      />
      <Input
        label="Contact Phonenumber"
        name="phone"
        type="tel"
        value={form.phone}
        onChange={handleChange}
        error={errors.phone}
        placeholder="Enter your phone"
        icon={<Phone size={18} />}
         styles="bg-secondary"
      />
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
          <Input
            label="Location of Operation"
            placeholder="Set the city where you operate"
            name="location"
            value={form.location}
            onChange={handleChange}
            error={errors?.location}
            icon={<MapPin size={18}/>}
             styles="bg-secondary"
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
        styles="bg-secondary"
      />
     <div className="space-y-2">
        <p className="text-xs text-sub text-center">By signing up, you agree to our <Link to="/terms" className="text-primary">Terms of Service</Link> and <Link to="/privacy" className="text-primary">Privacy Policy</Link></p>
        <button disabled={loading} type="submit" className="btn bg-primary text-white w-full h-10 rounded-full">
          {loading ? <Loader size={20} className="animate-spin" /> : "Register"}
        </button>
      </div>
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
  )
}

export default Business