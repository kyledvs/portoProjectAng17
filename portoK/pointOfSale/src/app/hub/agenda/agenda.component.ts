import { ChangeDetectionStrategy, Component, inject } from '@angular/core';


import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef, 
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { Router, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { CustomMaterialModule } from '../../cusomma';
import { CommonModule } from '@angular/common';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CreateAgendaComponent } from './create-agenda/create-agenda.component';


export interface adenAgen {
  name: string;
  contact: string;
  birthday: string;
}

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CommonModule, CustomMaterialModule],
  changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {

  firestore: Firestore = inject(Firestore);
  agenda$: Observable<any[]>;

  constructor(public router: Router,
    public dialog: MatDialog
  ) {
    const aCollection = collection(this.firestore, 'adenAgenda')
    this.agenda$ = collectionData(aCollection);
  }


 openCreateAgendaDialog() {
    this.dialog.open(CreateAgendaComponent)
  }
  

}
