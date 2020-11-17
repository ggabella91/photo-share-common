import { Subjects } from './subjects';

export interface PasswordResetRequestedEvent {
  subject: Subjects.PasswordResetRequested;
  data: {
    name: string;
    email: string;
    resetToken: string;
  };
}
