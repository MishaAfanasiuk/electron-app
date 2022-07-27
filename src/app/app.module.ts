import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablesListComponent } from './tables-list/tables-list.component';
import { FilesListComponent } from './files-list/files-list.component';
import { TableComponent } from './table/table.component';

import { NgxElectronModule } from 'ngx-electron';
import {MatListModule} from "@angular/material/list";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { AppRoutingModule } from './app-routing.module';
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    TablesListComponent,
    FilesListComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    NgxElectronModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
