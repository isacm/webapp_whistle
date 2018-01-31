import { Component, OnInit } from '@angular/core';
import { NomeacoesModel } from 'app/nomeacoes/model/nomeacoes.model';
import { Subject, Observable } from 'rxjs';
import { NomeacoesService } from 'app/nomeacoes/service/nomeacoes.service';
import { RefereeModel } from 'app/referee/model/referee.model';
import { RefereeService } from 'app/referee/service/referee.service';
// import { SelectModule } from 'ng2-select';
import { NgSelectModule } from '@ng-select/ng-select'
import { SelectModule } from 'ng2-select';
import { UserService } from 'app/login/user.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}


@Component({
    selector: 'nomeados',
    moduleId: module.id,
    templateUrl: 'nomeados.component.html'
})


export class NomeadosComponent implements OnInit {
    public nomeacoes: Array<NomeacoesModel> = [];
    public originalNomeacoes: Array<NomeacoesModel> = [];
    public tableData1: TableData;
    public tableData2: TableData;
    public referees: Array<RefereeModel> = [];
    public refereesNames: Array<String> = [];
    public originalReferees: Array<RefereeModel> = [];
    private updateListSubject = new Subject();
    private map: Map<string, Array<String>>;
    constructor (
        private nomeacoesService: NomeacoesService,
        private refereeService: RefereeService,
        private user: UserService
    ) {}

    ngOnInit() {

        this.map = new Map();

        this.tableData1 = {
            headerRow: [ 'ID', 'Data', 'Hora', 'Casa', 'Fora', 'Árbitros'],
            dataRows: [
                [],
                [],
                [],
                []
            ]
        };

        this.updateListSubject
            .startWith(null)
            .flatMap(() => this.refereeService.getAll())
            .do(referees => this.originalReferees =  [...referees ])
            .do(referees => this.referees = referees)
            .subscribe(referees => this.refereesNames = referees.map(a => a.name))
        ;

        this.updateListSubject
            .startWith(null)
            .flatMap(() => this.refereeService.getAll())
            .do(referees => this.originalReferees =  [...referees ])
            .do(referees => this.referees = referees)
            .subscribe(referees => this.refereesNames = referees.map(a => a.name))
        ;

        this.updateListSubject
            .startWith(null)
            .flatMap(() => this.nomeacoesService.getAll())
            .do(nomeacoes => this.originalNomeacoes =  [...nomeacoes ])
            .do(nomeacoes => this.nomeacoes = nomeacoes.filter(a => a.isNomeado))
            .subscribe(() => this.preenche())
        ;
  }

  findName(id) {
    return this.referees.filter( a => a.id === id)[0].name;
  }

  arrayName(list) {
      return list.map(a => this.findName(a)).join(', ');
  }

  preenche() {
    for (let i = 0; i < this.nomeacoes.length; i++) {
        this.tableData1.dataRows[i][0] = this.nomeacoes[i].id
        this.tableData1.dataRows[i][1] = this.nomeacoes[i].date
        this.tableData1.dataRows[i][2] = this.nomeacoes[i].hora
        this.tableData1.dataRows[i][3] = this.nomeacoes[i].home_teamId
        this.tableData1.dataRows[i][4] = this.nomeacoes[i].guest_teamId
        this.tableData1.dataRows[i][5] = this.arrayName(this.nomeacoes[i].refArray)
    }

  }
}
