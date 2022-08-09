import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Component({
    selector: 'ngbd-modal-content',
    template: `
        <div class="modal-header">
            <h2 class="modal-title mx-auto" style="color:powderblue;">Message Sent</h2>
            <i class="fa fa-close float-right" style="font-size:32px; color:red; cursor:pointer;" (click)="activeModal.dismiss('Cross click')"></i>
        </div>
        <div class="modal-body p-4">
            <p class="text-center" style="font-size:30px; color:lightgrey; letter-spacing:1px;">Thank you for the message!<br>I will get back to you soon.</p>
        </div>
    `,
    styles: ['']
})

export class NgbdModalContent {
    //   @Input() name: any;
  
    constructor(public activeModal: NgbActiveModal) {}
}

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class Contact {
    @ViewChild('contactMe', { static: false }) contactMe!: ElementRef;
    @Input() showMessage = false;

    // Form state
    loading = false;
    success = false;

    constructor(private modalService: NgbModal, private db: AngularFireDatabase) {}

    contactForm = new FormGroup({
        Name: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]),
        Email: new FormControl('', [Validators.required, Validators.email]),
        Message: new FormControl('', [Validators.required, Validators.maxLength(3000)])
    });

    get Name() {
        return this.contactForm.get('Name');
    }

    get Email() {
        return this.contactForm.get('Email');
    }

    get Message() {
        return this.contactForm.get('Message');
    }

    onSubmit() {
        const ref = this.db.list("messages");
        ref.push(this.contactForm.value).then((response) => {
            (response);
        }).catch((error) => {(error)});
        this.modalService.open(NgbdModalContent);
        this.contactForm.reset();
    }

    triggerMessage() {
        this.showMessage = true;
    }

}