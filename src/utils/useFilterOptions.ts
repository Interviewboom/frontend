import { useState } from "react";

export const useFilterOptions = () => {
    const [showCompletedOnly, setShowCompletedOnly] = useState(false);

    const [showInProgressOnly, setShowInProgressOnly] = useState(false);

    const toggleCompletedOnly = () => {
        setShowCompletedOnly(!showCompletedOnly);
    };

    const toggleInProgressOnly = () => {
        setShowInProgressOnly(!showInProgressOnly);
    };

    return {
        showCompletedOnly,
        showInProgressOnly,
        toggleCompletedOnly,
        toggleInProgressOnly,
    };
};
