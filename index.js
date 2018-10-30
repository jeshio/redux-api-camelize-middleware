import camelizeProps from './camelizeProps';

/**
 * Camelize responses from api-requests
 */
export default () => next => action => {
  const newAction = { ...action };
  if (newAction.type) {
    if (newAction.type.endsWith('_SUCCESS')) {
      newAction.payload = camelizeProps(newAction.payload.data);
    }
    if (newAction.type.endsWith('_FAIL')) {
      newAction.error = camelizeProps(newAction.error);
    }
  }
  return next(newAction);
};

export { camelizeProps };