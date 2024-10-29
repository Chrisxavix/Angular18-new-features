import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { CommonModule, getLocaleFirstDayOfWeek } from '@angular/common';
import { TitleComponent } from '../../../shared/title/title.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export default class UsersComponent {

  public userService = inject(UsersService)

}
