import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Note } from 'src/app/api/models';
import { NotesService } from 'src/app/api/services';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  includeAll = false;
  notes$: Observable<Note[]>;

  constructor(
    private noteService: NotesService
  ) { }

  ngOnInit() {
    this.notes$ = this.noteService.Get(this.includeAll);
  }

  public selectNote(note: Note = null): void {
    this.noteService.selectNote(note);
  }

  public toggleIncludeAll() {
    this.includeAll = !this.includeAll;
    this.notes$ = this.noteService.Get(this.includeAll);
  }
}
