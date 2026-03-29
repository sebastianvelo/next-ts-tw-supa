import CardDTO from "@/presentation/view/dto/molecules/card";
import Image from "next/image";

interface VerticalCardImageProps extends Pick<CardDTO, "img" | "title"> { }

const VerticalCardImage: React.FC<VerticalCardImageProps> = ({ img, title }) => {
    return img && (
        <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-t-2xl">
            <Image
                fill
                src={img}
                alt={title || "Card cover"}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
    );
};

export default VerticalCardImage;
