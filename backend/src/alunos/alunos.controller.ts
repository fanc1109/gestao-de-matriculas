import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { Aluno } from './entities/aluno.entity';

@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) {}

  @Post()
  create(@Body() dados:{codigo_matricula:string;nome_completo:string;acompanhamento:string}) {
    return this.alunosService.create(dados.codigo_matricula,dados.nome_completo,dados.acompanhamento);
  }

  @Get()
  findAll() {
    return this.alunosService.findAll();
  }

  @Get(':codigo_matricula')
  findOne(@Param('codigo_matricula') codigo_matricula: string) {
    return this.alunosService.findOne(codigo_matricula);
  }

  @Patch(':codigo_matricula')
  update(@Param('codigo_matricula') codigo_matricula: string, @Body() dados:Partial<Aluno>) {
    return this.alunosService.update(codigo_matricula, dados);
  }

  @Delete(':codigo_matricula')
  remove(@Param('codigo_matricula') codigo_matricula: string) {
    return this.alunosService.remove(codigo_matricula);
  }
}
