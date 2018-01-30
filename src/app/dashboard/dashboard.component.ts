import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { UserService } from 'app/login/user.service';

declare var $:any;
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  
  public tableData1: TableData;
    
  constructor(private user:UserService) {}

  ngOnInit() {
    this.tableData1 = {
      headerRow: [ 'Jogo', 'Data', 'Hora', 'Escalão', 'Casa', 'Fora'],
      dataRows: [
        ['1', '19/11/17', '15:00', 'Campeonato Distrital Juniores "E"', 'Benfica', 'Viana'],
        ['2', '19/11/17', '16:00', 'Campeonato Distrital Juniores "E"', 'Porto', 'Viana'],
        ['3', '19/11/17', '17:00', 'Campeonato Distrital Juniores "E"', 'Leixões', 'Viana'],
        ['4', '19/11/17', '17:00', 'Campeonato Distrital Juniores "E"', 'Viana', 'Braga'],
        ['5', '20/11/17', '17:00', 'Campeonato Distrital Juniores "E"', 'Viana', 'Barcelos'],
        ['6', '20/11/17', '17:00', 'Campeonato Distrital Juniores "E"', 'Viana', 'Guimarães']
      ]
    };
  }

}
