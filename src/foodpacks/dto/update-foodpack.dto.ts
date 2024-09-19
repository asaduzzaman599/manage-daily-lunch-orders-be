import { PartialType } from '@nestjs/mapped-types';
import { CreateFoodpackDto } from './create-foodpack.dto';

export class UpdateFoodpackDto extends PartialType(CreateFoodpackDto) {}
