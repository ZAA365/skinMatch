export const validations = {
  isOnlyLetters: (str) => /^[A-Za-z]+$/.test(str),
  
  isValidEmail: (email) => {
    return email.length >= 8 && 
           email.includes('@') && 
           email.includes('.com');
  },
  
  isStrongPassword: (password) => {
    return password.length >= 8 &&
           /[A-Z]/.test(password) &&
           /[a-z]/.test(password) &&
           /[0-9]/.test(password) &&
           /[^A-Za-z0-9]/.test(password);
  },
  
  isValidName: (name) => {
    return name.trim().length > 0 && /^[A-Za-z\s]+$/.test(name);
  }
};