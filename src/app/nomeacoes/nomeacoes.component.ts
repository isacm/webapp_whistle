import { Component, OnInit } from '@angular/core';
import { NomeacoesModel } from 'app/nomeacoes/model/nomeacoes.model';
import { Subject, Observable } from 'rxjs';
import { NomeacoesService } from './service/nomeacoes.service';
import { RefereeModel } from 'app/referee/model/referee.model';
import { RefereeService } from 'app/referee/service/referee.service';
// import { SelectModule } from 'ng2-select';
import {NgSelectModule} from '@ng-select/ng-select'

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
    public referees: Array<RefereeModel> = [];
    public refereesNames: Array<String> = [];
    public originalReferees: Array<RefereeModel> = [];
    private updateListSubject = new Subject();
    private map: Map<string, Array<String>>;
    constructor (
        private nomeacoesService: NomeacoesService,
        private refereeService: RefereeService
    ) {}

    ngOnInit() {

        this.map = new Map();

        this.tableData1 = {
            headerRow: [ 'ID', 'Date', 'Home', 'Guest', 'Referee'],
            dataRows: [
                [],
                [],
                [],
                []
            ]
        };

    this.tableData2 = {
        headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
        dataRows: [
            ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout' ],
            ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
            ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
            ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
            ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
            ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
        ]
  };

        this.updateListSubject
            .startWith(null)
            .flatMap(() => this.nomeacoesService.getAll())
            .do(nomeacoes => this.originalNomeacoes =  [...nomeacoes ])
            .do(nomeacoes => this.nomeacoes = nomeacoes.filter(a => !a.isNomeado))
            .subscribe(() => this.preenche())
        ;

        this.updateListSubject
            .startWith(null)
            .flatMap(() => this.refereeService.getAll())
            .do(referees => this.originalReferees =  [...referees ])
            .do(referees => this.referees = referees)
            .subscribe(referees => this.refereesNames = referees.map(a => a.name))
        ;



  }

  findId(name) {
    return this.referees.filter( a => a.name === name)[0].id;
  }

  arrayId(list) {
      return list.map(a => this.findId(a));
  }

  nomeia(idJogo , idArb) {
      if (!this.map.get(idJogo)) {
        this.map.set(idJogo, [idArb]);
      } else {
          this.map.get(idJogo).push(idArb);
      }
  }

  delete(idJogo, idArb) {
    if (this.map.get(idJogo)) {
        const t = this.map.get(idJogo).filter(book => book !== idArb['value']);
        this.map.delete(idJogo);
        if (t.length) {
            console.log('asfsafkasfn', t)
            this.map.set(idJogo, t);
        }
    }
  }

  save() {
      for (let key of Array.from( this.map.keys()) ) {
          this.nomeacoesService.update(key, this.arrayId(this.map.get(key)));
          this.nomeacoesService.update(key, { isNomeado: true });
      }
      window.location.reload();
  }

  preenche() {
    console.log(this.nomeacoes)
    for (let i = 0; i < this.nomeacoes.length; i++) {
        this.tableData1.dataRows[i][0] = this.nomeacoes[i].id
       // this.tableData1.dataRows[i][1] = this.nomeacoes[i].date.toDateString
        this.tableData1.dataRows[i][2] = this.nomeacoes[i].home_teamId
        this.tableData1.dataRows[i][3] = this.nomeacoes[i].guest_teamId
        this.tableData1.dataRows[i][4] = ''
    }

  }
}
