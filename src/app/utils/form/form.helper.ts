import _ from 'lodash';
import { AbstractControl, FormControl } from '@angular/forms';

export class FormHelper {
    static markFormGroupTouched (control: AbstractControl) {
        if (control.hasOwnProperty('controls')) {
            control.markAsTouched(true);

            Object.keys((control as any).controls)
                .forEach((
                    (inner) => this.markFormGroupTouched((control as any).controls[inner] as AbstractControl)
                ))
            ;
        } else {
            (<FormControl>(control)).markAsTouched(true);
        }
    }

    /**
     * @name addErrorsToForm
     * @description
     * Method that receives a server error message and tries to match the error with a form field, if no field found
     * the error is added to the form itself.
     * this translations should be added to the pdo-input component based on the field requirements for the error
     * to appear in the field
     *   [errorMessages]="{required: 'common.error_messages.required',
     *      notUnique: 'common.error_messages.notUnique',
     *      minlength: 'common.error_messages.minlength',
     *      maxlength: 'common.error_messages.maxlength',
     *      exactlength: 'common.error_messages.exactlength',
     *      notnumber: 'common.error_messages.notnumber',
     *      invaliddate: 'common.error_messages.invaliddate',
     *      null: 'common.error_messages.null',
     *      blank: 'common.error_messages.blank',
     *      invalid: 'common.error_messages.invalid'
     *  }"
     *
     * @param control
     * @param error
     */
    static addErrorsToForm (control: AbstractControl, error: any) {
        if (control.hasOwnProperty('controls')) {
            const formKeys = Object.keys((control as any).controls);
            const errorKeys = Object.keys((error as any).codes);
            // these are the errors that the server returned from specific fields that are on the webapp form
            const errorFields = _.intersection(formKeys, errorKeys);
            // these are the errors that the server can return from specific fields that are not on the webapp form
            const errorNotOnFields = _.difference(errorKeys, formKeys);

            errorFields.forEach(field => {
                control['controls'][field].setErrors(this.mapErrors(_.head(error.codes[field])));
            });

            if (errorNotOnFields.length) {
                const errorObj = {};

                errorNotOnFields.forEach(errorField => {
                    errorObj[errorField] = this.mapErrors(_.head(error.codes[errorField]));
                });

                control.setErrors(errorObj);
            }
        }
    }

    static mapErrors (errorCode: string) {
        switch (errorCode) {
            case 'presence':
                return { 'required': true};
            case 'absence':
                break;
            case 'length.min':
                return {
                    // this is only to add the error as the server do not return this values
                    'minlength': true
                };
            case 'length.max':
                return {
                    // this is only to add the error as the server do not return this values
                    'maxlength': true
                };
            case 'length.is':
                return {
                    // this is only to add the error as the server do not return this values
                    'exactlength': true
                };
            case 'inclusion':
                return {'invalid': true};
            case 'exclusion':
                return {'invalid': true};
            case 'common.blank':
                return {'blank': true};
            case 'common.null':
                return {'null': true};
            case 'numericality':
                return {'notnumber': true};
            case 'uniqueness':
                return { 'notUnique': true};
            case 'date':
                return {'invaliddate': true};
            default:
                break;
        }
    }
}

