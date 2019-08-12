import { AbstractControl } from "@angular/forms";

export const validatewWhiteSpace = (control: AbstractControl) => {
  const isWhitespace = (control.value || "").trim().length === 0;
  const isValidate = !isWhitespace;

  return isValidate ? null : { trimed: true };
};
