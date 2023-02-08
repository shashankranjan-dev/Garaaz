import { Module } from '@nestjs/common';
import { BrandSalesDailyService } from './brand_sales_daily.service';
import { BrandSalesDailyController } from './brand_sales_daily.controller';
import {
  BrandSalesDaily,
  BrandSalesDailySchema,
} from './schemas/brand_sales_daily.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BrandSalesDaily.name, schema: BrandSalesDailySchema },
    ]),
  ],
  controllers: [BrandSalesDailyController],
  providers: [BrandSalesDailyService],
})
export class BrandSalesDailyModule {}
