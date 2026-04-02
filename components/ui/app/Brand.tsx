import ROUTES from "@/routes/view";
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
        <div className="flex group">
            <Link href={ROUTES.USER.ROOT} className="flex items-center">
                <span className={`${commonStyles} duration-200 -rotate-4 group-hover:-rotate-0 text-primary-400 group-hover:text-primary-500 dark:text-primary-400 dark:group-hover:text-primary-300`}>demo</span>
                <span className={`${commonStyles} duration-200 rotate-4 group-hover:rotate-0 text-primary-500 group-hover:text-primary-600 dark:text-primary-500 dark:group-hover:text-primary-400`}>.</span>
                <span className={`${commonStyles} duration-200 rotate-0 group-hover:-rotate-2 text-primary-600 group-hover:text-primary-700 dark:text-primary-600 dark:group-hover:text-primary-500`}>me</span>
            </Link>
        </div>
    );
};

export default Brand;