import { Controller, Get, Param } from '@nestjs/common';
import { Projeto } from '@prisma/client';
import { ProjetoPrisma } from './projeto.prisma';

@Controller('projetos')
export class ProjetoController {

    constructor(private readonly repo: ProjetoPrisma) {}

    @Get()
    async findProjetos(): Promise<any> {
        return this.repo.findProjetos();
    }

    @Get(":id")
    async findProjetoById(@Param("id") id: string): Promise<Projeto | null> {
        return this.repo.findProjetoById(Number(id));
    }
}
