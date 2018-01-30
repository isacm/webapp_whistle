import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ErrorMessages } from '../input/error-message.model';

@Component({
    selector: 'whst-input-nome',
    templateUrl: './input_nome.component.html'
})
export class InputNomeComponent implements OnInit {
    @Input() type: string;
    @Input() label: string;
    @Input() group: FormGroup;
    @Input() name: string;
    @Input() placeholder = '';
    @Input() maskOptions: Object = { mask: false };
    @Input() errorMessages: ErrorMessages = {};

    constructor () {}

    ngOnInit () {}

    isInvalid () {
        return this.group.controls[this.name].invalid &&
            this.group.controls[this.name].touched
        ;
    }

    isValid () {
        return this.group.controls[this.name].valid &&
        this.group.controls[this.name].touched;
    }

    getErrorMessage () {
        const errors = this.group.controls[this.name].errors;

        if (!errors || !Object.keys(errors).length) {
            return;
        }

        return this.errorMessages[Object.keys(errors)[0]];
    }
}
