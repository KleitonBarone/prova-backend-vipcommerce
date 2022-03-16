import { IsBoolean } from 'class-validator';

export class DeletedModel {
  @IsBoolean()
  deleted: boolean;
}
