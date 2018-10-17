import camelCase from 'camelcase';

/**
 * Recursive camelize keys of object
 */
const camelizeProps = obj => {
  if (Array.isArray(obj)) {
    return obj.map(v => camelizeProps(v));
  }
  if (obj !== null && obj !== undefined && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [camelCase(key)]: camelizeProps(obj[key]),
      }),
      {}
    );
  }
  return obj;
};

export default camelizeProps;
