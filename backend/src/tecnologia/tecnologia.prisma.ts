import { Injectable } from '@nestjs/common';
import { Tecnologia } from '@prisma/client';
import { PrimaProvider } from 'src/db/prima.provider';

@Injectable()
export class TecnologiaPrisma {
    constructor( private readonly prisma: PrimaProvider ) {}

        async findAll(): Promise<Tecnologia[]> {
            return this.prisma.tecnologia.findMany();
        }

        async findDestaques(): Promise<Tecnologia[]> {
            return this.prisma.tecnologia.findMany({
                where: {
                    destaque: true
                },
            });
        }
}
