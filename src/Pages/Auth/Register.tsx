import { Business, Individual } from "@/Components/Auth";
import { registrationFormValidation } from "@/Helpers/formValidation";
import { AuthLayout } from "@/Layouts";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Register = () => {
  const location = useLocation();
  const { type } = location.state || {};
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [form, setForm] = useState<CustomerForm>({
    name: "",
    email: "",
    phone: "",
    location: "",
    address: "",
    password: "",
    role: type,
    logo: null,
    regNo: "",
  });
  const [errors, setErrors] = useState<CustomerForm>({
    name: "",
    email: "",
    phone: "",
    location: "",
    address: "",
    password: "",
    role: type,
    logo: null,
    regNo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setForm({ ...form, logo: file });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(registrationFormValidation(form, errors, setErrors)){
      console.log("Form is valid");
    }
  };

  const isLoading = false;

  const isPersonal = type === "personal";
  const isBusiness = type === "business";
  return (
    <>
      <AuthLayout
        title={` ${type} Account 🚀 `}
        subtitle="Fill in the form below to continue"
      >
        <form onSubmit={handleSubmit}>
          {isPersonal && (
            <Individual
              form={form}
              setForm={setForm}
              errors={errors}
              handleChange={handleChange}
              loading={isLoading}
            />
          )}

          {isBusiness && (
            <Business
              form={form}
              errors={errors}
              handleChange={handleChange}
              handleImageChange={handleImageChange}
              loading={isLoading}
              imagePreview={imagePreview}
              setForm={setForm}
              setImagePreview={setImagePreview}
            />
          )}
        </form>
      </AuthLayout>
    </>
  );
};

export default Register;
