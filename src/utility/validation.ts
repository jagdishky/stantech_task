export const validateMobileNumber = (number: string) => {
  var mob = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  if (number === '') {
    return {msg: 'Please enter mobile number', success: false};
  } else if (mob.test(number) == false) {
    return {msg: 'Invalid mobile number', success: false};
  }
  return {msg: '', success: true};
};

export const isInputEmpty = (value: string) => {
  if (value === '') {
    return {msg: '', success: false};
  } else {
    return {msg: '', success: true};
  }
};
