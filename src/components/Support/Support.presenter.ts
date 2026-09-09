import ContactService from '@/services/contact/contact';
import ToastRepository from '@/repositories/toast/toast';
import { Analytics, EVT } from '@/utils/analytics';
import type {
  SupportFieldErrors,
  SupportFieldName,
  SupportFormState,
  SupportSubmitResult,
} from './Support.model';

function extractFieldErrors(cause: unknown): SupportFieldErrors | undefined {
  if (!cause || typeof cause !== 'object') return undefined;

  const fieldErrors = (cause as { fieldErrors?: Record<string, unknown> }).fieldErrors;
  if (!fieldErrors || typeof fieldErrors !== 'object') return undefined;

  const errors: SupportFieldErrors = {};

  for (const [field, messages] of Object.entries(fieldErrors)) {
    if (typeof messages === 'string') {
      errors[field as SupportFieldName] = messages;
      continue;
    }

    if (Array.isArray(messages) && messages.length > 0) {
      const firstMessage = messages.find((message) => typeof message === 'string');
      if (firstMessage) {
        errors[field as SupportFieldName] = firstMessage;
      }
    }
  }

  return Object.keys(errors).length > 0 ? errors : undefined;
}

export default class SupportPresenter {
  private contactService = ContactService.instance;
  private toastRepo = ToastRepository.instance;

  async submitForm(form: SupportFormState): Promise<SupportSubmitResult> {
    // Track form submission attempt
    Analytics.instance.capture(EVT.SUPPORT_FORM_SUBMITTED, {
      name_length: form.name.length,
      email_domain: form.email.split('@')[1],
      message_length: form.message.length,
    });

    const result = await this.contactService.sendEmail({
      name: form.name,
      email: form.email,
      message: form.message,
      hp: form.hp,
    });

    if (result.ok) {
      this.toastRepo.success({
        title: 'Message Sent!',
        description: "Thanks for reaching out. We'll get back to you soon.",
      });

      // Track successful submission
      Analytics.instance.capture(EVT.SUPPORT_FORM_SUCCESS);

      return { ok: true };
    } else {
      const fieldErrors = extractFieldErrors(result.error.cause);
      const validationMessage =
        result.error.kind === 'Validation' && fieldErrors
          ? 'Please fix the highlighted field(s) and try again.'
          : result.error.message || 'Please try again or email us directly.';

      this.toastRepo.error({
        title: 'Failed to Send',
        description: validationMessage,
      });

      // Track submission error
      Analytics.instance.capture(EVT.SUPPORT_FORM_ERROR, {
        error_kind: result.error.kind,
      });

      return {
        ok: false,
        fieldErrors,
      };
    }
  }
}
