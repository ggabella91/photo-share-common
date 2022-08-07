import { Subjects } from './subjects';

export interface ConversationPhotoUpdatedEvent {
  subject: Subjects.ConversationPhotoUpdated;
  data: {
    conversationId: string;
    s3Key: string;
  };
}
