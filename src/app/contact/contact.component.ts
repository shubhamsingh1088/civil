import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  queryForm = new FormGroup({
    name: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });
  
  ngOnInit(){}

  submitQuery() {
    console.log(this.queryForm.value);
  }

}
