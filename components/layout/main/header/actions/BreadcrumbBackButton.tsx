import Button from "@/atoms/button/Button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface BreadcrumbBackButtonProps {
  hrefBack?: string;
}

const BreadcrumbBackButton: React.FC<BreadcrumbBackButtonProps> = ({ hrefBack }) => {
  const router = useRouter();

  return hrefBack && (
    <Button onClick={() => router.push(hrefBack)} size="sm" variant="secondary" rounded="full" className="ml-2 group">
      <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 group-hover:-translate-x-1 transition-all duration-300" />
    </Button>
  );
};

export default BreadcrumbBackButton;