import { Component, OnInit } from '@angular/core';
import { NomeacoesModel } from 'app/nomeacoes/model/nomeacoes.model';
import { Subject, Observable } from 'rxjs';
import { NomeacoesService } from './service/nomeacoes.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}


@Component({
    selector: 'nomeacoes',
    moduleId: module.id,
    templateUrl: 'nomeacoes.component.html'
})


export class NomeacoesComponent implements OnInit {
    public nomeacoes: Array<NomeacoesModel> = [];
    public originalNomeacoes: Array<NomeacoesModel> = [];
    public tableData1: TableData;
    public tableData2: TableData;
    private updateListSubject = new Subject();

    constructor (
        private nomeacoesService: NomeacoesService
    ) {}

    ngOnInit() {
        this.updateListSubject
                .startWith(null)
                .flatMap(() => this.nomeacoesService.getAll())
                .do(nomeacoes => this.originalNomeacoes =  [...nomeacoes ])
                .subscribe(nomeacoes => this.nomeacoes = nomeacoes)
            ;
        
            this.tableData1 = {
                headerRow: [ 'ID', 'Date', 'Home', 'Guest', 'Referee'],
                dataRows: [
                    [],
                    [],
                    [],
                    [],
                    [],
                    []
                ]
            };
        
        this.tableData2 = {
            headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
            dataRows: [
                ['1', 'Dakota Rice','$36,738', 'Niger', 'Oud-Turnhout' ],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
            ]
      };

  }

  preenche() {
    console.log(this.nomeacoes)
    for(let i = 0; i < this.nomeacoes.length; i++) { 
        this.tableData1.dataRows[i][0] = this.nomeacoes[i].id
       // this.tableData1.dataRows[i][1] = this.nomeacoes[i].date.toDateString
        this.tableData1.dataRows[i][2] = this.nomeacoes[i].home_teamId
        this.tableData1.dataRows[i][3] = this.nomeacoes[i].guest_teamId
    }
    
  }
}
