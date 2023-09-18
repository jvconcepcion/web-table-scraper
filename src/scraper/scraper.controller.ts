import { Controller, Get, Query } from '@nestjs/common';
import { ScraperService } from './scraper.service';

import { ScrapeSiteTableProps } from '@src/utils/interface';

@Controller('site')
export class ScraperController {
  constructor(private readonly scraperService: ScraperService) { }

  @Get()
  async scrapeSiteTable(
    @Query('url') url: string,
    @Query('tableRow') tableRow: string,
    @Query('rowData') rowData: string,
  ): Promise<ScrapeSiteTableProps[]> {
    return this.scraperService.scrapeSiteTable(url, tableRow, rowData);
  }
}