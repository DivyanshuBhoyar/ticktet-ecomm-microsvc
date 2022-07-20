import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@db-ticket-app/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
