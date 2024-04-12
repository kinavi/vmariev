export const convertHtmlToText = (value: string) =>
  String(value)
    .replace(/<style([\s\S]*?)<\/style>/gi, '')
    .replace(/<script([\s\S]*?)<\/script>/gi, '')
    .replace(/<\/div>/gi, '\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<li>/gi, '  *  ')
    .replace(/<\/ul>/gi, '\n')
    .replace(/<p><br><\/p>|<\/p>/gi, '\n')
    .replace(/<[^>]+>/gi, '')
    .replace(/&nbsp;/gm, ' ')
    .replace(/ {1,}/gm, ' ')
    .trim();
