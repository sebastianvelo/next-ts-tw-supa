import ActionDTO from "@/core/view/DTO/common/action";
import Action from "../action/Action";
import CardFooter from "./CardFooter";

interface CardActionsProps {
    actions?: ActionDTO[];
    className?: string;
}

const CardActions: React.FC<CardActionsProps> = ({ actions, className = "" }) => (
    actions && actions.length > 0 && (
        <CardFooter className={`flex justify-end gap-2 ${className}`}>
            {actions.map((action) => (
                <Action {...action} />
            ))}
        </CardFooter>
    )
);

export default CardActions;