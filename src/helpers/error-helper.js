import {showMessage} from 'react-native-flash-message';

export const showRequestError = (
  message = 'Um erro ocorreu, por favor tente mais tarde',
  responseError,
) => {
  console.warn({responseError});

  showMessage({
    message,
    type: 'warning',
  });
};
