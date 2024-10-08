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
  selector: 'app-create-client-dialog',
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
      MatDatepickerModule,

      
      
      
  ],

  providers: [provideNativeDateAdapter()], 

  
  
  templateUrl: './create-client-dialog.component.html',
  styleUrl: './create-client-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CreateClientDialogComponent {

  createClientForm!: FormGroup;

  clientins!: Observable<any[]>;




 




  constructor(public dialog: MatDialog,
    private fb: FormBuilder,
    private db: Firestore,
  ) {




    
    

    



    this.createClientForm = this.fb.group({
      name: new FormControl([]),
      contact: new FormControl([]),
      birthday: new FormControl([]),

    })
    

    


    
  }

  onSubmit( createClientForm:any ) {
    const formData = this.createClientForm.value;
    //this.db.collection('tutorials').add(formData);

    console.log('checking 12', formData)


   
    const docRef =  addDoc(collection(this.db, 'clients'), {
      name: formData.name,
      contact: formData.contact,   
      birthday: formData.birthday
    });

    


    console.log(this.createClientForm.value)
    console.log("gytf")


  }

}
