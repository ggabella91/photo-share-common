import { Subjects } from './subjects';

export interface PasswordResetRequested {
  subject: Subjects.PasswordResetRequested;
  data: {
    name: string;
    email: string;
    resetToken: string;
  };
}
