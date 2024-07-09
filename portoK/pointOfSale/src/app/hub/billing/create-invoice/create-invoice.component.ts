import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogActions, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-invoice',
  standalone: true,
  imports: [CommonModule, 
    ReactiveFormsModule,
     MatFormFieldModule, 
     MatInputModule, 
     MatSelectModule,
      MatDialogActions, 
      MatDialogContent, 
      MatDialogTitle,
      MatIconModule,
      MatButtonModule,
      MatDividerModule,
      MatDatepickerModule,],
  templateUrl: './create-invoice.component.html',
  styleUrl: './create-invoice.component.css'
})
export class CreateInvoiceComponent {

  searchForm!: FormGroup;

  clientins!: Observable<any[]>;




 




  constructor(public dialog: MatDialog,
    private fb: FormBuilder,
    private db: Firestore,
  ) {




    
    

    



    this.searchForm = this.fb.group({
      searchName: new FormControl([]),

    })
    

    


    
  }

  onSubmit( searchForm:any ) {
    const formData = this.searchForm.value;
    //this.db.collection('tutorials').add(formData);

    console.log('checking 12', formData)


   

    


    console.log(this.searchForm.value)
    console.log("gytf")


  }

}
