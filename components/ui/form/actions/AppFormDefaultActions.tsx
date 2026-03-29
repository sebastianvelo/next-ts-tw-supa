import Button from "@/atoms/button/Button";
import CardFooter from "@/molecules/card/CardFooter";
import { Loader, RotateCcw, SendHorizonal } from "lucide-react";
import { UseFormReset } from "react-hook-form";

interface AppFormDefaultActionsProps<T extends Record<string, any>> {
    isSubmitting: boolean;
    reset: UseFormReset<T>;
}

const AppFormDefaultActions = <T extends Record<string, any>>({ isSubmitting, reset, }: AppFormDefaultActionsProps<T>) => (
    <CardFooter>
        <div className="flex gap-2 justify-end w-full">
            <Button type="button" variant="danger" onClick={() => reset()} disabled={isSubmitting}>
                <RotateCcw />
            </Button>
            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? <Loader /> : <SendHorizonal />}
            </Button>
        </div>
    </CardFooter>
);

export default AppFormDefaultActions;
