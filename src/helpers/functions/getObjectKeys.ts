export const getObjectKeys = <T extends {}>(object: T) => Object.keys(object) as Array<keyof T>;
