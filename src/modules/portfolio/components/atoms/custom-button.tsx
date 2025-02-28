interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "danger" | "default";
    disabled?: boolean;
    className?: string;
  }
  const CustomButton: React.FC<ButtonProps> = ({
    onClick,
    children,
    variant = "primary",
    disabled = false,
    className,
  }) => {
    const variantStyle = {
      primary: "bg-primary shadow-md shadow-blue-300 hover:bg-primary-600",
      secondary: "bg-secondary hover:bg-secondary-600",
      danger: "bg-red-500 shadow-md shadow-red-300 hover:bg-red-600",
      default: "bg-black-500 shadow-sm shadow-pink-500 hover:bg-black-600"
    };
  
    return (
      <button
        className={`${variantStyle[variant]} ${className}`}
        onClick={onClick}
        disabled={disabled}
        p="x-4 y-2"
        text="white"
        font="bold mono"
        border="rounded-full "
        // shadow="md blue-300"
        transition="color"
      >
        {children}
      </button>
    );
  };
  
  export default CustomButton;
  