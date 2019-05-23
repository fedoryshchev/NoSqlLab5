/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable, BehaviorSubject, Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Note } from '../models/note';
import { User } from '../models/user';
import { nodeChildrenAsMap } from '@angular/router/src/utils/tree';
@Injectable({
  providedIn: 'root',
})
class NotesService extends __BaseService {
  static readonly GetPath = '/api/Notes/{includeAll}';
  static readonly PostPath = '/api/Notes';
  static readonly PutPath = '/api/Notes/{id}';
  static readonly DeletePath = '/api/Notes/{id}';

  private selectedNote = new BehaviorSubject(null);

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  public createOrUpdate(note: Note) {
    return note.id ? this.Put({id: note.id, note}) : this.Post(note);
  }

  public selectNote(note: Note) {
    this.selectedNote.next(note);
  }

  public getSelectedNote(): Observable<Note> {
    return this.selectedNote.asObservable();
  }

  /**
   * @param includeAll undefined
   * @return Success
   */
  GetResponse(includeAll: boolean): __Observable<__StrictHttpResponse<Array<Note>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Notes/${includeAll}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Note>>;
      })
    );
  }
  /**
   * @param includeAll undefined
   * @return Success
   */
  Get(includeAll: boolean): __Observable<Array<Note>> {
    return this.GetResponse(includeAll).pipe(
      __map(_r => _r.body as Array<Note>)
    );
  }

  /**
   * @param note undefined
   * @return Success
   */
  PostResponse(note?: Note): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = note;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Notes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * @param note undefined
   * @return Success
   */
  Post(note?: Note): __Observable<User> {
    return this.PostResponse(note).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * @param params The `NotesService.PutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `note`:
   *
   * @return Success
   */
  PutResponse(params: NotesService.PutParams): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.note;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Notes/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * @param params The `NotesService.PutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `note`:
   *
   * @return Success
   */
  Put(params: NotesService.PutParams): __Observable<User> {
    return this.PutResponse(params).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * @param id undefined
   */
  DeleteResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Notes/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  Delete(id: string): __Observable<null> {
    return this.DeleteResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module NotesService {

  /**
   * Parameters for Put
   */
  export interface PutParams {
    id: string;
    note?: Note;
  }
}

export { NotesService }
