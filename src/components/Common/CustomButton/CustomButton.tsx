import Button from "@mui/material/Button";

interface CustomButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick }) => {
  return (
    <Button
      color="primary"
      variant="outlined"
      sx={{
        boxShadow: "0.1rem 0.1rem 0.1rem #c8d0e7, -0.1rem -0.1rem 0.3rem #fff",
        color: "#9baacf",
        border: "none",
        "&:hover": {
          boxShadow: "0.1rem 0.1rem 0.2rem #b0b9d1, -0.1rem -0.1rem 0.4rem #fff",
          backgroundColor: "transparent",
          border: "none",
        },
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
