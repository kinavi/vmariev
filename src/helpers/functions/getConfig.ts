interface IConfig {
  DAO_CORE_API_URL: string;
  DAO_NEGOTIATE_ENABLED: boolean;
}

export const getConfig = async (): Promise<IConfig | null> => {
  try {
    const result = await (await fetch('/config.json')).json();
    return {
      ...result,
      DAO_NEGOTIATE_ENABLED:
        typeof result.DAO_NEGOTIATE_ENABLED === 'string'
          ? result.DAO_NEGOTIATE_ENABLED.toLocaleLowerCase() === 'true'
          : result.DAO_NEGOTIATE_ENABLED,
    };
  } catch (error) {
    return null;
  }
};
