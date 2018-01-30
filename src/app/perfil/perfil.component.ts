import { Component, OnInit } from '@angular/core';
import { RefereeService } from 'app/referee/service/referee.service';
import { refereeForm } from 'app/referee/forms/referee.form';
import { FormHelper } from 'app/utils/form/form.helper';
import { Subject, Observable } from 'rxjs';
import * as moment from 'moment';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'perfil.component.html'
})

export class PerfilComponent implements OnInit {
    public newRefereeForm = refereeForm();

    constructor (
        private refereeService: RefereeService
        ) {}
    ngOnInit() {
    }

    criarUser(values, valid) {
        console.log(values);
        values.password = Math.random().toString(36).slice(-8);
        console.log(values.password);
        values.entryDate = '2018-01-30T12:00:48.576Z';
        FormHelper.markFormGroupTouched(this.newRefereeForm);

        if (!valid) {
            console.log('falhou');
        }
        console.log('entrei214214214');

       this.refereeService.create(values);
    }
}
