import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import Skeleton from "@mui/material/Skeleton";

type LoaderType = "spinner" | "linear" | "skeleton";

interface LoaderProps {
  type?: LoaderType;
  size?: number;
  thickness?: number;
  color?: "primary" | "secondary" | "inherit";
  width?: number | string;
  height?: number | string;
  variant?: "text" | "rectangular" | "circular";
  value?: number;
}

const Loader: React.FC<LoaderProps> = ({
  type = "spinner",
  size = 24,
  thickness = 4,
  color = "primary",
  width,
  height,
  variant = "text",
  value,
}) => {
  switch (type) {
    case "linear":
      return (
        <LinearProgress
          color={color}
          value={value}
          variant={value ? "determinate" : "indeterminate"}
        />
      );
    case "skeleton":
      return <Skeleton variant={variant} width={width} height={height} />;
    default:
      return (
        <CircularProgress size={size} thickness={thickness} color={color} />
      );
  }
};

export default Loader;
