export const getGenericErrorMessage = (errors: Boolean[] | Boolean = false): string => {
    const errorMessage = "ups, something went wrong";
    let isFoundError = false;

    if (Array.isArray(errors)) {
        isFoundError = errors.includes(true);
    }

    return isFoundError ? errorMessage : "";
};
