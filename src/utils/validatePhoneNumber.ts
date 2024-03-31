export function validatePhoneNumber(phoneNumber: string) {
  const phoneRegex = /^(\+7|8)[-\s]?\(?(9\d{2})\)?[-\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;

  return phoneRegex.test(phoneNumber);
}
