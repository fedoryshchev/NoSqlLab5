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
  descending = 0;
  name = "";
  text = "";
  notes$: Observable<Note[]>;

  constructor(
    private noteService: NotesService
  ) { }

  ngOnInit() {
    this.notes$ = this.noteService.Get(false);
  }

  public selectNote(note: Note = null): void {
    this.noteService.selectNote(note);
  }

  public updateNotes() {
    this.notes$ = this.noteService.GetSpecific(
      {
        filteringParams: {
          name: this.name,
          text: this.text
        },
        pagination: {
          pageNumber: 0,
          pageSize: 10
        },
        sorting: {
          order: this.descending,
          sortBy: "Name"
        }
      }
    );
  }

  public toggleSortOrder() {
    if (this.descending == 1)
      this.descending = 0;
    else
      this.descending = 1; 
  }
}
