import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandSalesDailyModule } from './brand_sales_daily/brand_sales_daily.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin123@cluster0.1ritvd1.mongodb.net/?retryWrites=true&w=majority',
    ),
    BrandSalesDailyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
