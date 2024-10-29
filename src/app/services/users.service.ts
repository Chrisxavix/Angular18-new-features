import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UserResponse, UsersResponse } from '../interfaces/req-response';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject( HttpClient );

  /* El hash de gatito (#) es como poner en private */
  #state = signal<State>({
    loading: true,
    users: []
  })

  public users = computed(() => this.#state().users)
  public loading = computed(() => this.#state().loading)

  constructor() {
    this.http.get<UsersResponse>('https://reqres.in/api/users').pipe(
      delay(3000)
    )
    .subscribe(response => {
      this.#state.set({
        loading: false,
        users: response.data,
      })
    })
  }

  getUserById(id: string) {
    return this.http.get<UserResponse>('https://reqres.in/api/users/' + id).pipe(
      delay(3000),
      map(resp => resp.data)
    )
  }

}
