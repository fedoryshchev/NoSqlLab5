import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { NotesService } from 'src/app/api/services';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit, OnDestroy {
  public text = 'text';

  private createOrUpdateSubscription: Subscription;

  public noteForm = this.fb.group({
    id: [''],
    text: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private noteService: NotesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.noteService.getSelectedNote().subscribe(
      note => this.noteForm.patchValue(note)
    );
  }

  public Submit() {
    if (this.noteForm.valid) {
      this.createOrUpdateSubscription = this.noteService.createOrUpdate(
        this.noteForm.value 
      ).subscribe(note => 
        this.router.navigateByUrl(`note/edit/${note.id}`)
      );
    }
  }

  ngOnDestroy(): void {
    if (this.createOrUpdateSubscription)
      this.createOrUpdateSubscription.unsubscribe();
  }
}