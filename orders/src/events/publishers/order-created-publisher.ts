import { Publisher, OrderCreatedEvent, Subjects } from "@db-ticket-app/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
