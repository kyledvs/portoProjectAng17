import { Component } from '@angular/core';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef, 
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { CreateClientDialogComponent } from './create-client-dialog/create-client-dialog.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../../cusomma';

@Component({
  selector: 'app-client-page',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CustomMaterialModule],
  templateUrl: './client-page.component.html',
  styleUrl: './client-page.component.css'
})
export class ClientPageComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(CreateClientDialogComponent)
  }


}
