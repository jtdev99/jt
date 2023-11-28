import { forwardRef, useEffect, useMemo, useState } from "react";

import { TButtonRef } from "../../types";
import { IButtonProps } from "../../interface";
import { getRounded, getSize, getVariant } from "../../utils";

const Button: React.FC<IButtonProps> = forwardRef<TButtonRef, IButtonProps>(
    (
        {
            text,
            variant,
            size = "base",
            rounded = "none",
            loading = false,
            textLoading = "loading...",
            className,
            ...props
        },
        ref
    ) => {
        const [styles, setStyles] = useState<[] | string[]>();

        const buttonClassName = useMemo<string>(() => {
            const classNameStr = styles?.join(" ") || "";

            return classNameStr;
        }, [styles]);

        useEffect(() => {
            const variantStr = getVariant(variant, "button");
            const sizeStr = getSize(size);
            const classNameStr = className || "";
            const roundedStr = getRounded(rounded);

            setStyles([variantStr, sizeStr, roundedStr, classNameStr]);
        }, [variant, size, className]);

        return (
            <>
                <button {...props} className={buttonClassName} ref={ref}>
                    {!loading && text !== undefined ? text : props.children}
                    {loading && <span>{textLoading}</span>}
                </button>
            </>
        );
    }
);

export default Button;
