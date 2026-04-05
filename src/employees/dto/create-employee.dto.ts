import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Role } from '@prisma/client';

export class CreateEmployeeDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ enum: Role, example: Role.ENGINEER })
  @IsEnum(Role)
  role: Role;

  @ApiProperty({ example: 'Backend Developer' })
  @IsString()
  @IsNotEmpty()
  bio: string;
}
