export const formatLineBreakForEditor = (text: string) => {
  return text.replace(/^(?<text>.*)\n?/gm, (match, text) => {
    if (!text) {
      return `<p><br></p>`;
    }
    return `<p>${text}</p>`;
  }); 
};
