import { Container } from "@/Components/Main";
import { MainLayout } from "@/Layouts";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Camera, LogOut, ShieldCheck, Loader } from "lucide-react";
import clsx from "clsx";
import { Modal } from "@/Components/UI";
import { UploadImage } from "@/Components/UI";
import { Link } from "react-router-dom";
import { UpdateInfo } from "@/Components/Main";
const Profile = () => {
  const user = {
    name: "Gift Jackson",
    email: "giftjackson@gmail.com",
    phone: "+2348123456789",
    location: "Lagos",
    address: "123 Main St, Lagos",
    isAdmin: true,
    isActive: true,
    avatar: null,
  };
  const avatar =
    user.avatar ||
    `https://api.dicebear.com/9.x/adventurer/svg?seed=${user.name}`;

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const isUpdating = false;
  const isLoading = false;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    console.log(image);
    if (!image) {
      toast.error("Please select an image");
      return;
    }
    if (image.size > 2 * 1024 * 1024) {
      toast.error("Image size must be less than 2MB");
      return;
    }
    if (image) {
      //  TODO: Update avatar
    }
  };

  const handleCancel = () => {
    setImage(null);
    setPreview(null);
    setIsOpen(false);
  };
  return (
    <>
      <MainLayout title="Profile" subtitle="Edit or add to your profile">
        <Container>
          <div className="flex gap-4 items-center text-center md:text-left md:flex-row flex-col">
            <div
              onClick={toggleModal}
              className="relative h-32 w-32 rounded-full bg-primary"
            >
              <img
                src={avatar}
                alt="avatar"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute bottom-0 right-0 bg-yellow-500 p-2 rounded-full text-sm">
                <Camera size={20} />
              </div>
            </div>

            <div className="space-y-1">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-muted">{user.email}</p>
              <div
                className={clsx(
                  user?.isActive
                    ? "bg-green-500/10 text-green-500"
                    : "bg-red-500/10 text-red-500",
                  "px-6 py-1 inline-flex items-center gap-2 rounded-full"
                )}
              >
                <p className="text-xs font-semibold">
                  {user?.isActive ? "Active" : "Inactive"}
                </p>
              </div>
            </div>
          </div>
        </Container>

      <UpdateInfo userData={user} />


        <Container title="Actions">
          <div className=" flex gap-4">
            <button
              disabled={isLoading}
              className="flex gap-2 items-center bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              {isLoading ? (
                <Loader className="animate-spin" size={20} />
              ) : (
                <LogOut size={20} />
              )}
              <p>{isLoading ? "Logging out..." : "Logout"}</p>
            </button>
            {user?.isAdmin && (
              <Link
                to={"/admin"}
                className="flex gap-2 bg-yellow-500 text-[#222] btn px-4 py-2 rounded-lg"
              >
                <ShieldCheck size={20} />
                <p>Admin Dashboard</p>
              </Link>
            )}
          </div>
        </Container>
      </MainLayout>


      <AnimatePresence>
        {isOpen && (
          <Modal
            title="Profile Image"
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <UploadImage
              onChange={handleChange}
              preview={preview}
              name="Avatar"
              handleUpload={handleUpload}
              cancelUpload={handleCancel}
              isLoading={isUpdating}
            />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Profile;
