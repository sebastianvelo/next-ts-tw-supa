import ROUTES from "@/routes/client/routes";
import Link from "next/link";

type BrandSize = "sm" | "lg" | "xl";

interface BrandProps {
    size?: BrandSize;
}

const textSize = {
    sm: "text-lg",
    lg: "text-xl",
    xl: "text-3xl",
}

const Brand: React.FC<BrandProps> = ({ size = "xl" }) => {
    const commonStyles = `${textSize[size]} tracking-tighter font-black font-brand transition-all`;

    return (
        <div className="flex flex-col group">
            <Link href={ROUTES.USER.ROOT} className="flex items-center">
                <span className={`${commonStyles} duration-200 -rotate-6 group-hover:-rotate-0 text-primary-400 group-hover:text-primary-500 dark:text-primary-400 dark:group-hover:text-primary-300`}>
                    Demo
                </span>
            </Link>
            <div className="px-4 rotate-0 group-hover:-rotate-2">
                <div className="w-0 group-hover:w-full bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-200 dark:to-primary-400 h-px transition-all duration-700 rounded-full"></div>
            </div>
        </div>
    );
};

export default Brand;