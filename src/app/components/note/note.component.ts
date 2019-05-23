import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { NotesService, AccountService } from 'src/app/api/services';

import { Note } from 'src/app/api/models';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  note$: Observable<Note>;
  deleteSubscription: Subscription;

  constructor(
    private router: Router,
    private notesService: NotesService,
    public authService: AccountService
  ) { }

  ngOnInit() {
    this.note$ = this.notesService.getSelectedNote();
  }

  public Delete(id: string) {
    this.deleteSubscription = this.notesService.Delete(id).subscribe(
      () => this.router.navigateByUrl(`notes`), 
      () => alert('Not deleted')
    );
  }

}