import { CommonModule } from '@angular/common';

import { appConfig } from '../../../app.config';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { addDoc, collection, provideFirestore } from '@angular/fire/firestore';

import { Component, ChangeDetectionStrategy, model } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Firestore, doc, getFirestore, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { subscribe } from 'diagnostics_channel';






@Component({
  selector: 'app-create-stock-item',
  standalone: true,
  imports: [
    CommonModule, 
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
      MatDatepickerModule,

  ],
  templateUrl: './create-stock-item.component.html',
  styleUrl: './create-stock-item.component.css'
})
export class CreateStockItemComponent {
  createStockItemForm!: FormGroup;

  stockItems!: Observable<any[]>;


  /*ename!: any;
  ecolor!: any;
  eage!: any;
*/
 
  constructor(public dialog: MatDialog,
    private fb: FormBuilder,
    private db: Firestore,
  ) {


    /*this.createStockItemForm = this.fb.group({
      title: [''],
      description: [''],
      // Add other form controls here
    });*/


    this.createStockItemForm = this.fb.group({
      SKU: new FormControl([]),
      description: new FormControl([]),
      unitOfMeasurement: new FormControl([]),
      category: new FormControl([]),

    })
  
    
  }

  onSubmit( createStockItemForm:any ) {
    const formData = this.createStockItemForm.value;
    //this.db.collection('tutorials').add(formData);

    console.log('checking st wr', formData)

    const docRef =  addDoc(collection(this.db, 'stockItems'), {
      SKU: formData.SKU,
      description: formData.description,   
      unitOfMeasurement: formData.unitOfMeasurement,
      onHand: 0,
      initialCost: 0,
      category: formData.category
    });

    console.log(this.createStockItemForm.value)
    console.log("stock created")

    localStorage.setItem('sser', JSON.stringify(formData))

  }


}
