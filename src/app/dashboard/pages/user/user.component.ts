import { Component, computed, inject, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export default class UserComponent {

  public title = signal<string>('');
  private route = inject(ActivatedRoute);
  private userService = inject(UsersService);
  /* public user = signal<User | undefined>(undefined) */
  public user = toSignal(
    this.route.params.pipe().pipe(
      switchMap(({id}) => this.userService.getUserById(id))
    )
  )

  public titleBrou = computed( () => {
    if(this.user()){
      return `Información del usuario: ${this.user()?.first_name} ${this.user()?.last_name}`;
    }
    return "Información del usuario:"
  })
}

