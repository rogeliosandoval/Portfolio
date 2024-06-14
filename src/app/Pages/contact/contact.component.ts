import { Component, ViewChild, inject } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss']
})

export class Contact {
  private matSnack = inject(MatSnackBar)
  private http = inject(HttpClient)
  private url = 'https://api.web3forms.com/submit'
  @ViewChild('formRef') formRef: any;
  public sending: boolean = false;
  public contactForm = new FormGroup({
    access_key: new FormControl('12ee3a8d-fb2b-466e-a975-4f6b29a0887d'),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  })

  public sendMessage(): void {
    this.sending = true
    setTimeout(() => {
      this.http.post(this.url, this.contactForm.value).subscribe({
        next: response => {
          this.contactForm.reset()
          this.formRef.resetForm()
          this.sending = false
          this.matSnack.open('Message sent. Thank you!', '👍', {
            duration: 10000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center'
          })
        },
        error: err => {
          this.sending = false
          this.matSnack.open('There was an error. Please try again.', '👍', {
            duration: 10000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center'
          })
          console.log(err)
          throw err
        }
      })
    }, 2000)
  }
}