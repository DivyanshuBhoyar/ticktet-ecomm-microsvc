import { Publisher, Subjects, TicketUpdatedEvent } from "@db-ticket-app/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
