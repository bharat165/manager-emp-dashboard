import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';

const commonModules = [CommonModule, 
                       MatToolbarModule,
                       MatButtonModule, 
                       MatCardModule, 
                       MatDialogModule, 
                       MatFormFieldModule, 
                       MatIconModule,
                       MatInputModule,
                       MatSnackBarModule,
                       MatTableModule]


@NgModule({
  declarations: [],
  imports: commonModules,
  exports: commonModules
})
export class MaterialModule { }
