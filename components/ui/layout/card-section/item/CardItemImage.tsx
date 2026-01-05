import { CardItemDTO } from "@/core/view/DTO/list-section/card-list-section";

export interface CardItemImageProps extends Pick<CardItemDTO, "img" | "title"> { }

const CardItemImage: React.FC<CardItemImageProps> = ({ img, title }) => {
    return img && (
        <div className="flex-shrink-0">
            <img
                src={img}
                alt={title || "Card avatar"}
                className="w-16 h-16 rounded-xl object-cover bg-gradient-to-br from-accent-50 to-indigo-50 dark:from-secondary-800 dark:to-secondary-700 p-2 shadow-sm"
            />
        </div>
    );
};

export default CardItemImage;