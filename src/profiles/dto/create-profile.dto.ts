import { IsString, IsNumber, Length } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProfileDto {
  @IsString()
  @Length(3, 100)
  name!: string;
  @IsString()
  @Length(10, 200)
  description!: string;
  @Type(() => Number)
  @IsNumber()
  age!: number;
  @IsString()
  location!: string;
}
