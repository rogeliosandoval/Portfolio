import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ContactService } from "src/app/contact.service";

@Component({
    selector: 'ngbd-modal-content-error',
    template: `
        <div class="modal-body p-4">
            <div class="d-flex justify-content-center my-3">
                <img style="width:100px;" src="../../../assets/error.png" alt="success">
            </div>
            <p class="text-center" style="font-size:30px; color:lightgrey; letter-spacing:1px;">Something bad happened.<br>Please try again.</p>
        </div>
    `,
    styles: ['']
})

export class NgbdModalContentError {
    //   @Input() name: any;
  
    constructor(public activeModal: NgbActiveModal) {}
}

@Component({
    selector: 'ngbd-modal-content',
    template: `
        <div class="modal-body p-4">
            <div class="d-flex justify-content-center my-3">
                <img style="width:100px;" src="../../../assets/green-check.png" alt="success">
            </div>
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
    showForm = true;
    showLoad = false;
    allButtons = true;

    //Form state
    loading = false;
    success = false;

    constructor(private modalService: NgbModal, private db: AngularFireDatabase, private contact: ContactService) {}

    contactForm = new FormGroup({
        //Access key for Web3Forms to link my personal email
        access_key: new FormControl('12ee3a8d-fb2b-466e-a975-4f6b29a0887d'),
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

    //Firebase Realtime Database
    //--
    // onSubmit() {
    //     const ref = this.db.list("messages");
    //     ref.push(this.contactForm.value).then((response) => {
    //         this.modalService.open(NgbdModalContent);
    //         this.contactForm.reset();
    //         (response);
    //     }).catch((error) => {(error)});
    // }

    //Web3Forms
    onSubmit() {
        this.showLoad = true;
        this.contact.saveMessage(this.contactForm.value).subscribe(response => {
            this.allButtons = false;
            this.modalService.open(NgbdModalContent);
            this.contactForm.reset();
            setTimeout(() => {
                this.showForm = false;
                this.modalService.dismissAll(NgbdModalContent);
            }, 3000)
        },error => {
            this.showLoad = false;
            this.modalService.open(NgbdModalContentError);
            setTimeout(() => {
                this.modalService.dismissAll(NgbdModalContentError);
            }, 3000)
            console.warn(error.responseText);
            console.log({error});
        })
        const ref = this.db.list("messages");
        ref.push(this.contactForm.value);
    }

    //For testing
    onTest() {
        this.showLoad = true;
        setTimeout(() => {
            this.allButtons = false;
            this.modalService.open(NgbdModalContent);
            this.contactForm.reset();
            setTimeout(() => {
                this.showForm = false;
                this.modalService.dismissAll(NgbdModalContent);
            }, 3000)
        },3000)
    }

    //For testing
    onError() {
        this.showLoad = true;
        setTimeout(() => {
            this.showLoad = false;
            this.modalService.open(NgbdModalContentError);
            setTimeout(() => {
                this.modalService.dismissAll(NgbdModalContentError);
            }, 3000)
        },3000)
    }

    triggerMessage() {
        this.showMessage = true;
    }

}