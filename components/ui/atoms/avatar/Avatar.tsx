import getStyle from "./styles";
import { AvatarStyleProps } from "./types";

export interface AvatarProps extends AvatarStyleProps {
    src?: string;
    alt?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt = "Avatar", size, rounded, variant }) => (
    <div className={getStyle({ size, rounded, variant })}>
        <img
            src={src || "https://api.dicebear.com/9.x/bottts/svg?seed=undefined"}
            alt={alt}
            className="w-full h-full object-cover"
        />
    </div>
);

export default Avatar;