import { Subjects } from './subjects';

export interface ProfilePhotoUpdatedEvent {
  subject: Subjects.ProfilePhotoUpdated;
  data: {
    userId: string;
    s3Key: string;
  };
}
