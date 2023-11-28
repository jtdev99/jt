import { TComponent, TRounded, TSize } from "../types";
import { BUTTON_VARIANT_CLASS } from "../constants";

export const getVariant = (variant: string, component: TComponent): string => {
    let variantClass: string = "";

    if (component === "button") {
        variantClass = BUTTON_VARIANT_CLASS[variant] || "";
    }

    return variantClass;
};

export const getSize = (size: TSize): string => {
    let sizeClass: string = "";

    switch (size) {
        case "xs":
            sizeClass = "text-xs";
            break;
        case "sm":
            sizeClass = "text-sm";
            break;
        case "base":
            sizeClass = "text-base";
            break;
        case "lg":
            sizeClass = "text-lg";
            break;
        case "xl":
            sizeClass = "text-xl";
            break;
        default:
            sizeClass = "text-base";
            break;
    }

    return sizeClass;
};

export const getRounded = (rounded: TRounded): string => {
    let roundedClass: string = "";

    switch (rounded) {
        case "none":
            roundedClass = "rounded-none";
            break;
        case "sm":
            roundedClass = "rounded-sm";
            break;
        case "rounded":
            roundedClass = "rounded";
            break;
        case "md":
            roundedClass = "rounded-md";
            break;
        case "lg":
            roundedClass = "rounded-lg";
            break;
        case "xl":
            roundedClass = "rounded-xl";
            break;
        case "2xl":
            roundedClass = "rounded-2xl";
            break;
        case "3xl":
            roundedClass = "rounded-3xl";
            break;
        case "full":
            roundedClass = "rounded-full";
            break;
        default:
            roundedClass = "rounded-none";
            break;
    }

    return roundedClass;
};
