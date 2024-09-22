import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomMaterialModule } from '../../../cusomma';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-agenda',
  standalone: true,
  imports: [CommonModule, CustomMaterialModule],

  templateUrl: './create-agenda.component.html',
  styleUrl: './create-agenda.component.css'
})
export class CreateAgendaComponent {

  createAgendaForm!: FormGroup;

  agendass!: Observable<any[]>;




 




  constructor(public dialog: MatDialog,
    private fb: FormBuilder,
    private db: Firestore,
  ) {




    
    

    



    this.createAgendaForm = this.fb.group({
      name: new FormControl([]),
      contact: new FormControl([]),
      birthday: new FormControl([]),
      dateCreated: new FormControl([])

    })
    

    


    
  }

  onSubmit( createClientForm:any ) {
    const formData = this.createAgendaForm.value;
    //this.db.collection('tutorials').add(formData);

    console.log('checking 12', formData)


   
    const docRef =  addDoc(collection(this.db, 'adenAgenda'), {
      name: formData.name,
      contact: formData.contact,   
      birthday: formData.birthday,
      dateCreated: "hello"
    });

    


    console.log(this.createAgendaForm.value)
    console.log("gytf")


  }


 

}
