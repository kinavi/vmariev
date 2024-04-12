export const formatUserLinkForPost = (html: string) => {
  return html.replace(
    /<a\shref="(?<type>\w)-(?<id>\d*)".*?>(?<content>.*?)<\/a>/g,
    (match, type, id) => {
      return `@${type}:${id} `;
    }
  );
};
