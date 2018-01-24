import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { RefereeModel } from 'app/referee/model/referee.model';
import { RefereeService } from './service/referee.service';
import { Subject, Observable } from 'rxjs';
import { refereeSearchForm } from './forms/referee-search';
// import { AlertsService } from 'app/services/alert/alert.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    templateUrl: 'referee.component.html'
})

export class RefereeComponent implements OnInit {
    @ViewChild(DatatableComponent) table: DatatableComponent;

    public searchForm = refereeSearchForm();
    public referees: Array<RefereeModel> = [];
    public originalReferees: Array<RefereeModel> = [];

    private updateListSubject = new Subject();

    constructor (
        private refereeService: RefereeService,
        // private alertService: AlertsService
    ) {}

    ngOnInit() {
        this.updateListSubject
            .startWith(null)
            .flatMap(() => this.refereeService.getAll())
            .do(referees => this.originalReferees =  [...referees ])
            .subscribe(referees => this.referees = referees)
        ;

        this.searchForm.valueChanges
        .debounce(() => Observable.timer(300))
        .subscribe(values => this.filterReferees(values))
    ;
    }

    private filterReferees (filter: any) {
        this.referees = Object
            .keys(filter)
            .reduce((result, filterKey) => (
                (result || []).filter(elem => (
                    !filter[filterKey] || elem.filter(filterKey, filter[filterKey])
                ))
            ),
            this.originalReferees
        );
    }
}

