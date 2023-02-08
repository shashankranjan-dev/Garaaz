import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BrandSalesDailyDocument = HydratedDocument<BrandSalesDaily>;

@Schema()
export class BrandSalesDaily {
  @Prop({
    type: Date,
    default: Date.now,
  })
  date: Date;

  @Prop()
  brand: string;

  @Prop()
  transactionType: string;

  @Prop()
  totalOrders: number;

  @Prop()
  totalOrderValue: number;

  @Prop()
  grossMarginPercentage: number;

  @Prop({
    type: Date,
    default: Date.now,
  })
  createdAt: Date;

  @Prop({
    type: Date,
    default: Date.now,
  })
  updatedAt: Date;
}

export const BrandSalesDailySchema =
  SchemaFactory.createForClass(BrandSalesDaily);
