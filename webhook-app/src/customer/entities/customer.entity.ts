import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('customers')
export class Customer {
  // Primary Key
  @PrimaryColumn({ type: 'varchar', length: 50 })
  id: string;

  @Column({ type: 'varchar', length: 50 })
  tree_id: string;

  @Column({ type: 'text' })
  message: string;

  @Column({ type: 'timestamptz' })
  timestamp: Date;
}
