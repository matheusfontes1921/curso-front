export const insertMaskForPhone = (phone: string) => {
  const noMaskPhone = phone.replace(/\D/g, "");
  const { length } = noMaskPhone;
  if (length <= 11) {
    return noMaskPhone
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(length === 11 ? /(\d{5})(\d)/ : /(\d{4})(\d)/, "$1-$2");
  }
  return phone;
};
