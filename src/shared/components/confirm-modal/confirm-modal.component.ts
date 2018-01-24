import { Component, OnInit, OnDestroy, Renderer } from '@angular/core';

import { MdDialogRef } from '@angular/material';

@Component({
    templateUrl: 'confirm-modal.component.html'
})
export class ConfirmModalComponent implements OnInit, OnDestroy {
    constructor (
        public dialogRef: MdDialogRef<ConfirmModalComponent>,
        public renderer: Renderer
    ) {}

    ngOnInit () {
        this.renderer.setElementClass(document.documentElement, '-modal-opened', true);
    }

    ngOnDestroy () {
        this.renderer.setElementClass(document.documentElement, '-modal-opened', false);
    }

    onAccept () {
        this.dialogRef.close(true);
    }

    onCloseModal () {
        this.dialogRef.close(false);
    }
}
