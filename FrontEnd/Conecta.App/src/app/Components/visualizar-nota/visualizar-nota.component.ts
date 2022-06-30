import { Nota } from './../shared/Nota';
import { NotaService } from './../shared/nota.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizar-nota',
  templateUrl: './visualizar-nota.component.html',
  styleUrls: ['./visualizar-nota.component.css']
})
export class VisualizarNotaComponent implements OnInit {
  notas: Nota[];
  constructor(private notaService:NotaService) { }

  ngOnInit(): void {
    this.getNotas();
  }

  public getNotas(): void {
    this.notaService.PegarTodos().subscribe((resultado) => {
      (this.notas = resultado.filter((nota: { alunoId: number }) =>
      nota.alunoId
        .toString()
        .indexOf(localStorage.getItem('idAluno')) !== -1
      ))
    });
  }
}
