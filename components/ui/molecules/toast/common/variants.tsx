import { AlertCircle, CheckCircle, Info } from "lucide-react";

const variants = {
  success: {
    bgColor: "bg-green-100 dark:bg-green-800",
    textColor: "text-green-800 dark:text-green-100",
    borderColor: "border-green-400 dark:border-green-700",
    icon: (
      <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-300" />
    ),
  },
  error: {
    bgColor: "bg-red-100 dark:bg-red-800",
    textColor: "text-red-800 dark:text-red-100",
    borderColor: "border-red-400 dark:border-red-700",
    icon: (
      <AlertCircle className="w-5 h-5 text-red-500 dark:text-red-300" />
    ),
  },
  info: {
    bgColor: "bg-blue-100 dark:bg-blue-800",
    textColor: "text-blue-800 dark:text-blue-100",
    borderColor: "border-blue-400 dark:border-blue-700",
    icon: (
      <Info className="w-5 h-5 text-blue-500 dark:text-blue-300" />
    ),
  },
};

export default variants;