import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import cheerio from 'cheerio';

import { ScrapeSiteTableProps } from '@src/utils/interface';

@Injectable()
export class ScraperService {
  async scrapeSiteTable(
    url: string,
    tableRow: string,
    rowData: string,
  ): Promise<ScrapeSiteTableProps[]> {
    try {
      const response = await axios.get(url,{
        headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Accept-Encoding': 'gzip, deflate, br'
      }});
      const html = response.data;
      
      const $ = cheerio.load(html);
      const site = [];

      $(tableRow).each((index, element) => {
        const data = $(element).find(rowData)

        const contents = $(data)
          .get()
          .map(res => $(res).text().trim())
        contents.length > 0 && site.push({ contents: contents.length !== 0 && contents });
      });
      return site
    } catch (error) {
      return error
      // throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
