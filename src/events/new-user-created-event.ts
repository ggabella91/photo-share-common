import { Subjects } from './subjects';

export interface NewUserCreatedEvent {
  subject: Subjects.NewUserCreated;
  data: {
    id: string;
    name: string;
    email: string;
    username: string;
  };
}
