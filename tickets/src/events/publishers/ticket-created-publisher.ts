import { Publisher, Subjects, TicketCreatedEvent } from "@db-ticket-app/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
