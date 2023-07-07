import React, { useEffect, useState } from "react";

export const useNodeHeight = (ref: React.RefObject<HTMLDivElement>): number => {
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        setHeight(ref.current?.offsetHeight!);
    }, [ref]);

    return height;
};
