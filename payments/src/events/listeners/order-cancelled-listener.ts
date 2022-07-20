import {
  OrderCancelledEvent,
  Subjects,
  Listener,
  OrderStatus,
} from "@db-ticket-app/common";
import { Message } from "node-nats-streaming";

import { queueGroupName } from "./queue-group-name";
import { Order } from "../../models/order";

export class OrderCancelledListener extends Listener<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCancelledEvent["data"], msg: Message) {
    // find with correct version
    const order = await Order.findOne({
      _id: data.id,
      version: data.version - 1,
    });

    if (!order) {
      throw new Error("Order not found");
    }
    // alter status
    order.set({ status: OrderStatus.Cancelled });
    await order.save();

    msg.ack();
  }
}
