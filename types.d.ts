interface ModalProps{
  title: string,
  children: React.ReactNode,
  toggleModal: ()=> void,
  isOpen: boolean,
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  styles?: string;
  inputRef?: React.Ref<HTMLInputElement>;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  styles?: string;
  options: {
    value: string;
    label: string;
  }[];
}

interface CustomerForm {
  name: string;
  email: string;
  phone: string;
  location: string;
  address?: string;
  password: string;
  role: "business" | "individual";
  logo?: File | null;
  regNo?: string;
}

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
