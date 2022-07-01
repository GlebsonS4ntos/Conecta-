import { Nota } from './../shared/Nota';
import { NotaService } from './../shared/nota.service';
import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-visualizar-nota',
  templateUrl: './visualizar-nota.component.html',
  styleUrls: ['./visualizar-nota.component.css']
})
export class VisualizarNotaComponent implements OnInit {
  notas: Nota[];
  notasFiltrada: Nota[];
  @ViewChild('tabela', {static: false}) el!: ElementRef;
  constructor(private notaService:NotaService) { }

  ngOnInit(): void {
    this.getNotas();
  }

  public getNotas(): void {
    this.notaService.PegarTodos().subscribe((resultado:any) => {
      (this.notas = resultado.$values.filter((nota: { alunoId: number }) =>
      nota.alunoId == parseInt(localStorage.getItem('idAluno')))
      )
    });
  }
  public gerarPdf(): void{
    let pdf = new jsPDF('l', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) =>{
        pdf.save("Boletin.pdf")
      }
    })
  }


}
