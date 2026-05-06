import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { Aluno } from './entities/aluno.entity';

@Injectable()
export class AlunosService {
  private alunos: Aluno[] = []
  create(codigo_matricula: string, nome_completo: string, acompanhamento: string) {
    const novoAluno = new Aluno();
    novoAluno.codigo_matricula=codigo_matricula;
    novoAluno.nome_completo=nome_completo;
    novoAluno.acompanhamento=acompanhamento;
    this.alunos.push(novoAluno);
    return novoAluno;
  }

  findAll() {
    return this.alunos;
  }

  findOne(codigo_matricula:string) {
 
   
    return  this.alunos.find(aluno => aluno.codigo_matricula===codigo_matricula);
  }

  update(codigo_matricula:string, dados:Partial<Aluno>) {
    const index = this.alunos.findIndex(aluno => aluno.codigo_matricula===codigo_matricula);
    if(index>=0){
      this.alunos[index]={...this.alunos[index],...dados};
      return `A matricula do aluno #${codigo_matricula} foi atualizado com sucesso.`;
    }
    return `A matricula do aluno #${codigo_matricula} não foi atualizada`;
  }

  remove(codigo_matricula: string) {
    const index = this.alunos.findIndex(aluno => aluno.codigo_matricula===codigo_matricula);
    if(index>=0){
      this.alunos.splice(index,1);
      return `A matricula do aluno #${codigo_matricula} foi removido da lista com sucesso.`;
    }
    return `A matricula do aluno #${codigo_matricula} não foi encontrado.`;
  }
}
