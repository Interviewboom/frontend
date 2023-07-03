export const getNameAndInitial = (userName: string): string => {
    const names: string[] = userName.split(" ");
    const firstName: string = names[0];
    const surnameInitial: string = names[1] ? names[1].charAt(0) : "";

    return `${firstName} ${surnameInitial}.`;
};
