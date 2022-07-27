import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TablesListComponent} from "./tables-list/tables-list.component";
import {FilesListComponent} from "./files-list/files-list.component";

const routes: Routes = [
  { path: '', component: FilesListComponent },
  { path: 'tables', component: TablesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
