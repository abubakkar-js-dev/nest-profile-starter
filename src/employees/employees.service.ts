import { Injectable } from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly databserService: DatabaseService) {}
  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    return await this.databserService.employee.create({
      data: createEmployeeDto,
    });
  }

  async findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return await this.databserService.employee.findMany({
        where: {
          role,
        },
      });
    }
    return await this.databserService.employee.findMany();
  }

  async findOne(id: number) {
    return await this.databserService.employee.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.databserService.employee.update({
      where: {
        id,
      },
      data: updateEmployeeDto,
    });
  }

  async remove(id: number) {
    return this.databserService.employee.delete({
      where: {
        id,
      },
    });
  }
}
