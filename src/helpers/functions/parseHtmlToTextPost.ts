import { convertHtmlToText } from './convertHtmlToText';
import { formatUserLinkForPost } from './formatUserLinkForPost';

export const parseHtmlToTextPost = (html: string) => {
  const formatedHtml = formatUserLinkForPost(html);
  const text = convertHtmlToText(formatedHtml);
  return text;
};


