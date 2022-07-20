import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from "@db-ticket-app/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
