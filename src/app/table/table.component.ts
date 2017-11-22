import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;
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
