import { Controller, Get } from '@nestjs/common';
import { TecnologiaPrisma } from './tecnologia.prisma';
import { get } from 'http';
import { Tecnologia } from '@prisma/client';

@Controller('tecnologias')
export class TecnologiaController {
    constructor(private readonly repo: TecnologiaPrisma) {}

    @Get()
    async findAll(): Promise<Tecnologia[]> {
        return this.repo.findAll();
    }

    @Get('destaques')
    async findDestaques(): Promise<Tecnologia[]> {
        return this.repo.findDestaques();
    }
}
