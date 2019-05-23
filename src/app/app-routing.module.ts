import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { NotesComponent } from './components/notes/notes.component';
import { NoteComponent } from './components/note/note.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';

const routes: Routes = [
  {
    path: "signin",
    component: SignInComponent
  },
  {
    path: "signup",
    component: SignUpComponent
  },

  {
    path: "notes",
    component: NotesComponent
  },
  {
    path: "note/create",
    component: EditNoteComponent
  },
  {
    path: "note/edit/:id",
    component: EditNoteComponent
  },
  {
    path: "note/:id",
    component: NoteComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
