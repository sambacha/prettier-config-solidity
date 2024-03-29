import '@types/prettier';
import 'prettier-config-solidity/src/index.js';

declare const handleComments: any, printComment: any;
declare const massageAstNode: any;
declare const loc: any;
declare const options: any;
declare const parse: any;
declare const print: any;
declare const languages: {
  linguistLanguageId: number;
  name: string;
  type: string;
  color: string;
  aceMode: string;
  tmScope: string;
  extensions: string[];
  parsers: string[];
  vscodeLanguageIds: string[];
}[];
declare const parser: any;
declare const parsers: {
  'solidity-parse': any;
};
declare const canAttachComment: (node: any) => boolean;
declare const printers: {
  'solidity-ast': {
    canAttachComment: (node: any) => boolean;
    handleComments: {
      ownLine: any;
      endOfLine: any;
      remaining: any;
    };
    isBlockComment: any;
    massageAstNode: any;
    print: typeof print;
    printComment: any;
  };
};
declare const defaultOptions: {
  bracketSpacing: boolean;
  tabWidth: number;
};

export {
  languages,
  parser,
  parsers,
  canAttachComment,
  printers,
  defaultOptions,
};
export {
  handleComments,
  massageAstNode,
  loc,
  options,
  parse,
  print,
  printComment,
};
export { print as prettierPrint };

//import 'prettier-plugin-solidity'
export { default as prettier } from 'prettier';
