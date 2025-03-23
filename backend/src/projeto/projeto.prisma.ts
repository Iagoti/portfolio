import { Injectable } from '@nestjs/common';
import { Projeto } from '@prisma/client';
import { PrimaProvider } from 'src/db/prima.provider';

@Injectable()
export class ProjetoPrisma {
    constructor( private readonly prisma: PrimaProvider ) {}

    async findProjetos(): Promise<Projeto[]> {
        return this.prisma.projeto.findMany();
    }

    async findProjetoById(id: number): Promise<Projeto | null> {
        return this.prisma.projeto.findUnique({
            where: { id },
            include: { tecnologias: true },
        });
    }
}
