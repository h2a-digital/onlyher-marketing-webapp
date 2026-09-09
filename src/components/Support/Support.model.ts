export type SupportFormState = {
  name: string;
  email: string;
  message: string;
  hp: string; // honeypot
};

export type SupportFieldName = keyof SupportFormState;

export type SupportFieldErrors = Partial<Record<SupportFieldName, string>>;

export type SupportSubmitResult =
  | {
      ok: true;
    }
  | {
      ok: false;
      fieldErrors?: SupportFieldErrors;
    };

export type SupportFormVM = SupportFormState & {
  isSubmitting: boolean;
  hasSubmitted: boolean;
};
