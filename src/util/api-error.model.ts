import { ApiProperty } from '@nestjs/swagger';

export class ApiError {
  constructor(code: number, error: string) {
    this.code = code;
    this.error = error;
  }
  @ApiProperty({ type: Number })
  public code: number;

  @ApiProperty({ type: String })
  public error: string;
}
