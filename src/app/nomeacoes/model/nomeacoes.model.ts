import { Hydrator } from 'app/classes/hydrator';
import { FormControl, FormGroup, Validators, } from '@angular/forms';

export class NomeacoesModel {
    id: string;
    date: string;
    hora: string;
    home_teamId: string;
    guest_teamId: string;
    refArray: Array<string>;
    isNomeado: boolean;

    static deserialize(jsonObject: Object): NomeacoesModel {
        if ((jsonObject === undefined || jsonObject === null)) {
            return undefined;
        }
        const instance = new NomeacoesModel();

        // const mapProps = {
        //     date: Hydrator.date
        // };
        Object.keys(jsonObject).forEach(prop =>
            instance[prop] = jsonObject[prop]
        );

        return instance;
    }

    static createForm (): FormGroup {
        return new FormGroup({
            date: new FormControl( '', Validators.required),
            home_teamId: new FormControl( '', Validators.required),
            guest_teamId: new FormControl( '', Validators.required)
        });
    }

    getEditObject () {
        return {
            date: this.date,
            home_teamId: this.home_teamId,
            guest_teamId: this.guest_teamId,
            refArray: this.refArray,
            isNomeado: this.isNomeado
        }
    }
}
