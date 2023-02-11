/* eslint-disable */
function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

const { parsers: typescriptParsers } = _interopDefault(
  require('prettier/parser-typescript')
);

const { parsers: javascriptParsers } = _interopDefault(
  require('prettier/parser-babel')
);

const CWD = process.cwd();

function excludeCWDPath(path) {
  // Absolute path
  if (path[0] === '/' && path.indexOf(CWD) === 0) {
    return path.substr(CWD.length);
  }

  return path;
}

function splitPath(pathString) {
  return pathString.split('/').filter(Boolean);
}

function noRelativePreprocess(code, options) {
  let { filepath } = options;

  filepath = excludeCWDPath(filepath);

  let filepathParts = splitPath(filepath);

  return code.replace(
    /(from ["'])([^"']+)(["'])/g,
    (substring, start, path, end) => {
      path = excludeCWDPath(path);
      const currentPathNames = splitPath(path);

      // If it's not relative path, skip
      if (currentPathNames[0] !== '..') {
        return substring;
      }

      const directories = filepathParts.slice(0, -1); // remove filename from array of parts

      const resultPath = [...directories, ...currentPathNames]
        .reduce((result, part) => {
          if (part === '..') {
            return result.slice(0, -1);
          } else {
            return [...result, part];
          }
        }, [])
        .join('/');

      return `${start}${resultPath}${end}`;
    }
  );
}

// function preprocess(text: string, options: object): string;
const parsers = {
  typescript: {
    ...typescriptParsers.typescript,
    preprocess(text, options) {
      return noRelativePreprocess(text, options);
    },
  },
  babel: {
    ...javascriptParsers.babel,
    preprocess(text, options) {
      return noRelativePreprocess(text, options);
    },
  },
};

module.exports = {
  parsers,
};
