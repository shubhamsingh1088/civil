import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
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
