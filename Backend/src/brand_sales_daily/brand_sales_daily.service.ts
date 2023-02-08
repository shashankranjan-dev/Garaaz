import { Injectable } from '@nestjs/common';
import { CreateBrandSalesDailyDto } from './dto/create-brand_sales_daily.dto';
import { UpdateBrandSalesDailyDto } from './dto/update-brand_sales_daily.dto';
import {
  BrandSalesDaily,
  BrandSalesDailyDocument,
} from './schemas/brand_sales_daily.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BrandSalesDailyService {
  constructor(
    @InjectModel(BrandSalesDaily.name)
    private brandSalesDailyModel: Model<BrandSalesDailyDocument>,
  ) {}

  async create(
    createBrandSalesDailyDto: CreateBrandSalesDailyDto,
  ): Promise<BrandSalesDaily> {
    return await (
      await this.brandSalesDailyModel.create(createBrandSalesDailyDto)
    ).save();
  }

  async findAll() {
    return await this.brandSalesDailyModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} brandSalesDaily`;
  }

  update(id: number, updateBrandSalesDailyDto: UpdateBrandSalesDailyDto) {
    return `This action updates a #${id} brandSalesDaily`;
  }

  remove(id: number) {
    return `This action removes a #${id} brandSalesDaily`;
  }
}
