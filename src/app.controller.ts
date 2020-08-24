import { Controller, Get, Query, Param } from '@nestjs/common';
import { AppService } from './app.service';
// import { Request } from 'express';

@Controller('hello')
export class AppController {

  constructor(private readonly appService: AppService) {}

  @Get('world/:id')
  getHello(@Query('hello001') hello001: string, @Param('id') id: string): string {
    return this.appService.getHello() + hello001 + id;
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
