import { Hydrator } from 'app/classes/hydrator';
import { FormControl, FormGroup, Validators, } from '@angular/forms';

export class NomeacoesModel {
    id: string;
    date: Date;
    home_teamId: string;
    guest_teamId: string;
    referee_id: string;

    static deserialize(jsonObject: Object): NomeacoesModel {
        if ((jsonObject === undefined || jsonObject === null)) {
            return undefined;
        }

        const mapProps = {
            date: Hydrator.date
        };

        return Object
            .keys(jsonObject)
            .reduce(Hydrator.assign(jsonObject, mapProps), new NomeacoesModel())
        ;
    }

    static createForm (): FormGroup {
        return new FormGroup({
            date: new FormControl( '', Validators.required),
            home_teamId: new FormControl( '', Validators.required),
            guest_teamId: new FormControl( '', Validators.required),
            referee_id: new FormControl( '', Validators.required)
        });
    }

    getEditObject () {
        return {
            date: this.date,
            home_teamId: this.home_teamId,
            guest_teamId: this.guest_teamId,
            referee_id: this.referee_id
        }
    }
}
