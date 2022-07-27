import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import {Router} from "@angular/router";

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.scss']
})
export class FilesListComponent implements OnInit {
  files: string[] | undefined | null;

  constructor(
    private electronService: ElectronService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.electronService.isElectronApp) {
      this.getFiles()
        .catch(console.error);
    }
  }

  async getFiles() {
    this.files = await this.electronService.ipcRenderer.invoke('GET_FILES')
  }

  openFile(filename: string) {
    this.router.navigate(['tables'], { queryParams: { filename } })
  }
}
