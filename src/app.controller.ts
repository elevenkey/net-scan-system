import { Controller, Get, Query, Param, Injectable } from '@nestjs/common';
import { AppService } from './app.service';

import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
// import { Request } from 'express';

@Controller('hello')
@Injectable()
export class AppController {
  constructor(private readonly appService: AppService, @InjectConnection() private db: Connection) {
  }

  @Get('world/:id')
  async getHello(@Query('hello001') hello001: string, @Param('id') id: string): Promise<string> {
    const user = await this.db.collection('user').find();
    const uu = []
    while(await user.hasNext()){
      // console.log(await user.next())
      uu.push((await user.next()).name)
    }
    
    // user.forEach((u) => {
    //   console.log(u)
    //   uu.push(u)
    // })
    
    if (user) {
     return this.appService.getHello() + hello001 + id + '<br>' + uu.toString();
    } else {
      return '找不到用户'
    }
  }

}

@Controller('hello2')
export class AppController2 {

  constructor(private readonly appService: AppService) {}

  @Get('world/:id')
  getHello(@Query('hello001') hello001: string, @Param('id') id: string): string {
    return this.appService.getHello() + '-----' + hello001 + id + this.constructor.name;
  }
  
}
