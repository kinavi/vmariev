export const formatTagForPost = (html: string) => {
  return html.replace(
    /<a\shref="#(?<tag>\w*)".*?>(?<content>.*?)<\/a>/g,
    (match, tag, content) => {
      return `#${tag} `;
    }
  );
};
