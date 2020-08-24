import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  sex: number;

  @Prop()
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);