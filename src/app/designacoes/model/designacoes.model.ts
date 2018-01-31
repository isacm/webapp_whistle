import { Hydrator } from 'app/classes/hydrator';
import { FormControl, FormGroup, Validators, } from '@angular/forms';

export class DesignacoesModel {
    isAccepted: false;
    justification: string;
    id: string;
    gameId: string;
    refereeId: string;

    static deserialize(jsonObject: Object): DesignacoesModel {
        if ((jsonObject === undefined || jsonObject === null)) {
            return undefined;
        }
        const instance = new DesignacoesModel();

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
            isAccepted: this.isAccepted,
            justification: this.justification,
            gameId: this.gameId,
            refereeId: this.refereeId
        }
    }
}
