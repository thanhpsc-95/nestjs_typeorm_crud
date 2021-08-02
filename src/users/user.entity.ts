import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn() //primary column
  id: number;
  @ApiProperty()
  @Column()
  firstName: string;
  @ApiProperty()
  @Column()
  lastName: string;
}
