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
  selector: 'app-create-supplier',
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
  templateUrl: './create-supplier.component.html',
  styleUrl: './create-supplier.component.css'
})
export class CreateSupplierComponent {

  createSupplierForm!: FormGroup;

  stockItems!: Observable<any[]>;


  /*ename!: any;
  ecolor!: any;
  eage!: any;
*/
 
  constructor(public dialog: MatDialog,
    private fb: FormBuilder,
    private db: Firestore,
  ) {


    /*this.createSupplierForm = this.fb.group({
      title: [''],
      description: [''],
      // Add other form controls here
    });*/


    this.createSupplierForm = this.fb.group({
      supplierName: new FormControl([]),
      supplierContactNumber: new FormControl([]),
 

    })
  
    
  }

  onSubmit( createSupplierForm:any ) {
    const formData = this.createSupplierForm.value;
    //this.db.collection('tutorials').add(formData);

    console.log('checking st wr', formData)

    const docRef =  addDoc(collection(this.db, 'supplierList'), {
      supplierName: formData.supplierName,
      supplierContactNumber: formData.supplierContactNumber,   
 
    });

    console.log(this.createSupplierForm.value)
    console.log("supplier created")

    localStorage.setItem('suppl', JSON.stringify(formData))

  }

}
