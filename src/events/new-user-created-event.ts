import { Subjects } from './subjects';

export interface NewUserCreatedEvent {
  subject: Subjects.NewUserCreated;
  data: {
    id: string;
    version: number;
    name: string;
    email: string;
  };
}
