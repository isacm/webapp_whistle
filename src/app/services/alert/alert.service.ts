import { Injectable } from '@angular/core';
import { ToastsManager, Toast } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class AlertsService {

    constructor (
        private toastsManager: ToastsManager,
    ) {}

    showGenericCreateSuccess (): Promise<Toast> {
        return this.toastsManager.success('Created with success');
    }

    showGenericUpdateSuccess (): Promise<Toast> {
        return this.toastsManager.success('Updated with success');
    }

    showGenericServerError (): Promise<Toast> {
        return this.toastsManager.error('There was a problem completing your request');
    }

    showActivateSuccess (): Promise<Toast> {
        return this.toastsManager.success('Activated with success');
    }

    showPromotionSuccess (): Promise<Toast> {
        return this.toastsManager.success('Promoted with success');
    }

    showDeleteSuccess (): Promise<Toast> {
        return this.toastsManager.success('Deleted with success');
    }

    showInvalidForm (): Promise<Toast> {
        return this.toastsManager.warning('Form is invalid');
    }

    getInstance (): ToastsManager {
        return this.toastsManager;
    }

    showGenericSentSuccess (): Promise<Toast> {
        return this.toastsManager.success('Sent with success');
    }
    showServerError (err: any): Promise<Toast> {
        return this.toastsManager.error(err);
    }
}
