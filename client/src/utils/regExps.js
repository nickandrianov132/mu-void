export const loginRegexp = /^[A-Za-z\d]{4,10}$/;
export const nameRegexp = /^[A-Za-z\d]{2,10}$/;
export const passRegexp = /^[A-Za-z\d]{4,12}$/;
export const questionAnswerRegexp = /^[A-Za-z]{1,10}\s?[A-Za-z]{0,10}\s?[A-Za-z]{0,10}\s?[A-Za-z]{1,10}$/;
// export const emailRegexp = /^[\d\w]([A-Za-z0-9]{1,14}[-._]?){1,2}[a-zA-Z0-9]{1,7}?@[A-Za-z0-9]{2,7}\.[\w]{2,3}$/g;
export const emailRegexp =  /^[\d\w][-_.]?[A-Za-z0-9]{0,12}[-_]?\.?[a-zA-Z0-9]{0,7}?[-_]?[A-Za-z0-9]{0,12}?[-_]?\.?[a-zA-Z0-9]{0,7}?[-_]?[a-zA-Z0-9]{0,7}?@[A-Za-z0-9]{2,7}\.[\w]{2,3}$/;

// /[A-Za-z0-9-_]+@[A-Za-z0-9-_]{2,7}\.[\w]{2,3}$/g