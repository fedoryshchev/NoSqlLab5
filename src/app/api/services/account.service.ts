/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter, tap } from 'rxjs/operators';

import { RegisterDTO } from '../models/register-dto';
import { AuthenticationToken } from '../models/authentication-token';
import { LoginDTO } from '../models/login-dto';
import { tokenGetter } from 'src/app/app.module';
@Injectable({
  providedIn: 'root',
})
class AccountService extends __BaseService {
  static readonly RegisterPath = '/api/Account/Register';
  static readonly LoginPath = '/api/Account/Login';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param dto undefined
   */
  RegisterResponse(dto?: RegisterDTO): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Account/Register`,
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
   * @param dto undefined
   */
  Register(dto?: RegisterDTO): __Observable<null> {
    return this.RegisterResponse(dto).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param dto undefined
   * @return Success
   */
  LoginResponse(dto?: LoginDTO): __Observable<__StrictHttpResponse<AuthenticationToken>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Account/Login`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthenticationToken>;
      })
    );
  }
  /**
   * @param dto undefined
   * @return Success
   */
  Login(dto?: LoginDTO): __Observable<AuthenticationToken> {
    return this.LoginResponse(dto).pipe(
      __map(_r => _r.body as AuthenticationToken),
      tap(token => sessionStorage.setItem('jwt', token.value))
    );
  }

  public isSignedIn(): boolean {
    return !!sessionStorage.getItem('jwt');
  }

  public signOut(): void {
    sessionStorage.removeItem('jwt');
  }
}

module AccountService {
}

export { AccountService }
