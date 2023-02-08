import { Test, TestingModule } from '@nestjs/testing';
import { BrandSalesDailyService } from './brand_sales_daily.service';

describe('BrandSalesDailyService', () => {
  let service: BrandSalesDailyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrandSalesDailyService],
    }).compile();

    service = module.get<BrandSalesDailyService>(BrandSalesDailyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
