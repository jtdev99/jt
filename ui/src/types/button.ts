export type TButtonRef = HTMLButtonElement;

export type TButtonProps = {
    text?: string;
    loading?: boolean;
    textLoading?: string;
    size?: "xs" | "sm" | "base" | "lg" | "xl";
    rounded?:
        | "none"
        | "sm"
        | "rounded"
        | "md"
        | "lg"
        | "xl"
        | "2xl"
        | "3xl"
        | "full";
    variant: "contained" | "outlined";
};
