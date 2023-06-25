import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { CustomerEntity } from "./customer.model";
//Jimmy Lorente - Israel Miño
//un cliente puede tener varios productos de por muchos clientes 
// pero un producto solo puede ser de un cliente a la vez
@Entity('movies', { schema: 'views' })
export class MovieEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createAt: Date;

    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    UpdateAt: Date;

    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        nullable: true,
    })
    DeleteAt: Date;

    @Column('varchar',{
        name:'title',
        nullable:false,
        comment: 'nombre de la pelicula',
    } )
    title:string;

    @Column('varchar',{
        name:'description',
        nullable:false,
        comment: 'description de la pelicula',
    } )
    description:string;

    @OneToMany(() => CustomerEntity, customer => customer.movie)
    customers: CustomerEntity[];
}


