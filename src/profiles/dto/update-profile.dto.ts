import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class UpdateProfileDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsNumber()
  @IsNotEmpty()
  age!: number;

  @IsString()
  @IsNotEmpty()
  location!: string;
}
