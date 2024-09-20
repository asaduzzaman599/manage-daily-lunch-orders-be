import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'src/prisma.service';
import { LoginEmployeeDto } from './dto/login-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) {}
  async create(createEmployeeDto: CreateEmployeeDto) {
    const employee = await this.prisma.employee.create({
      data: createEmployeeDto,
    });
    const { password, ...data } = employee;
    return data;
  }

  async login({ phone, password }: LoginEmployeeDto) {
    const employee = await this.prisma.employee.findUnique({
      where: { phone },
    });
    if (!employee) throw new Error('Invalid Phone Number');

    if (employee.password !== password)
      throw new Error('Email or Password not match!');
    const { password: ignore, ...user } = employee;
    return { user, status: true, message: 'Logged In' };
  }

  findAll() {
    return this.prisma.employee.findMany({
      include: { votes: true },
    });
  }

  findOne(id: string) {
    return this.prisma.employee.findUnique({ where: { id } });
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
