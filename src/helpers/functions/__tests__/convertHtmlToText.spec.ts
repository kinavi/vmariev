import { parseHtmlToTextPost } from '../parseHtmlToTextPost';

const TESTS = [
  {
    from: "<p>let's go</p><p>hello</p><p><br></p><p>Gow</p><p>wer</p>",
    to: `let's go\nhello\n\nGow\nwer`,
  },
];

TESTS.map((item) => {
  test(`parseHtmlToTextPost: count - ${item.from}, to - ${item.to}`, () => {
    const result = parseHtmlToTextPost(item.from);
    expect(result).toBe(item.to);
  });
});
