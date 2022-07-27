import { Component, OnInit } from '@angular/core';
import {ElectronService} from "ngx-electron";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {TableComponent} from "../table/table.component";

export interface Table {
  title: string,
  rows: number,
  columns: number,
  notes: number
}

@Component({
  selector: 'app-tables-list',
  templateUrl: './tables-list.component.html',
  styleUrls: ['./tables-list.component.scss']
})
export class TablesListComponent implements OnInit {
  filename: string | undefined;
  tables: Table[] | undefined | null;

  constructor(
    private electronService: ElectronService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.getTables(params['filename'])
        .catch(console.error);
    });
  }

  async getTables(filename: string | undefined) {
    this.tables = await this.electronService.ipcRenderer.invoke('GET_TABLES', filename || '')
  }

  openTableDialog(table: Table) {
    this.dialog.open(TableComponent, {
      width: '400px',
      data: table,
    });
  }

  onBackClick() {
    this.router.navigate(['..'])
  }
}
