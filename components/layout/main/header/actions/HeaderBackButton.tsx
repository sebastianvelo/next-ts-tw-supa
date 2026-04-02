import Button from "@/atoms/button/Button";
import PageHeaderDTO from "@/presentation/view/dto/main/header";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export interface HeaderBackButtonProps extends Pick<PageHeaderDTO, "hrefBack"> { }

const HeaderBackButton: React.FC<HeaderBackButtonProps> = ({ hrefBack }) => {
  const router = useRouter();

  return hrefBack && (
    <Button onClick={() => router.push(hrefBack)} variant="primary" className="h-12 group px-2 sm:px-4 py-3 sm:py-0 rounded-none hover:bg-secondary-100/80 dark:hover:bg-black/80 transition-all duration-300">
      <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-secondary-200 dark:text-secondary-200 group-hover:text-primary-400 dark:group-hover:text-primary-600 group-hover:scale-110 group-hover:-translate-x-1 transition-all duration-300" />
    </Button>
  );
};

export default HeaderBackButton;