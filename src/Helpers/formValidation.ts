export const registrationFormValidation = (
    form: CustomerForm,
    errors: CustomerForm,
    setErrors: (errors: CustomerForm) => void
  ) => {
    if (!form.name) {
      setErrors({ ...errors, name: "Name is required" });
      return false;
    }
    if (!form.email) {
      setErrors({ ...errors, email: "Email is required" });
      return false;
    }
    if (!form.phone) {
      setErrors({ ...errors, phone: "Phone is required" });
      return false;
    }
    if (!form.location) {
      setErrors({ ...errors, location: "Location is required" });
      return false;
    }
  
    if (!form.password) {
      setErrors({ ...errors, password: "Password is required" });
      return false;
    }
    if (form.password.length < 8) {
      setErrors({ ...errors, password: "Password must be at least 8 characters" });
      return false;
    }
    if (!form.role) {
      setErrors({
        ...errors,
        role: "Role is required" as "business" | "individual",
      });
      return false;
    }
    // if (form.role === "business" && !form.regNo) {
    //   setErrors({ ...errors, regNo: "Registration number is required" });
    //   return false;
    // }
    return true;
  };