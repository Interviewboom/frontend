import { FC } from "react";
import Image from "next/legacy/image";

interface LogoProps {
    template?: "dark" | "light";
}

export const Logo: FC<LogoProps> = ({ template = "dark" }) => {
    return (
        <div>
            <Image
                alt="Logo"
                src={`/assets/images/logo${template === "light" ? "-light" : ""}.svg`}
                width={293}
                height={30}
            />
        </div>
    );
};
