import Button from "@/components/ui/atoms/button/Button";
import ActionDTO from "@/core/view/DTO/common/action";
import usePost from "@/hooks/api/usePost";
import React from "react";

interface HeaderActionProps extends ActionDTO { }

const HeaderAction: React.FC<HeaderActionProps> = ({ label, variant, apiRoute, body }) => {
    const { post } = usePost<{}>({ url: apiRoute || "" });

    return (
        <Button
            t={label}
            variant={variant || "primary"}
            size="sm"
            onClick={() => post(body)}
        />
    );
}

export default HeaderAction;