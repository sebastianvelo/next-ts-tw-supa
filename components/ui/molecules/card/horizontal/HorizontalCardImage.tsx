import CardDTO from "@/presentation/view/dto/molecules/card";
import Image from "next/image";

interface HorizontalCardImageProps extends Pick<CardDTO, "img" | "title"> { }

const HorizontalCardImage: React.FC<HorizontalCardImageProps> = ({ img, title }) => {
    return img && (
        <div className="flex-shrink-0">
            <Image
                width={64}
                height={64}
                src={img}
                alt={title || "Card avatar"}
                className="w-16 h-16 rounded-xl object-cover bg-gradient-to-br from-accent-50 to-indigo-50 dark:from-secondary-800 dark:to-secondary-700 p-2 shadow-sm"
            />
        </div>
    );
};

export default HorizontalCardImage;