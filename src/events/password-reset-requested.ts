import { Subjects } from './subjects';

export interface PasswordResetRequestedEvent {
  subject: Subjects.PasswordResetRequested;
  data: {
    userId: string;
    passwordResetToken: string;
  };
}
