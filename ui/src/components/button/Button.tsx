import { IButtonProps } from "../../interface";

const Button: React.FC<IButtonProps> = ({ text, ...props }) => {
    return (
        <>
            <button {...props}>
                {text !== undefined ? text : props.children}
            </button>
        </>
    );
};

export default Button;
