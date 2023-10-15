export default function(options = {}) {
  console.log('marked-penrose has been ran')
  return {
    name: 'penrose',
    level: 'block',
    // tokenizer(src, tokens) {
    //   tokens.push("blah")
    // },
    renderer: {
      code(code, infostring, escaped) {
        console.log('found CODE')
      },
      paragraph(src) {
        console.log('paragraph')

        const token = {
          type: 'paragraph',
          raw: src,
          text: 'example html',
          tokens: []
        };

        this.lexer.inline(token.text, token.tokens);

        return token;
      }
    }
     
  };
}
