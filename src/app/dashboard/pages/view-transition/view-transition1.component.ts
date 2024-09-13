import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title titleGeneral="View Transition 1"></app-title>

    <section class="flex justify-start">
      <img
        srcset="http://picsum.photos/id/237/200/300"
        alt="picsum"
        width="200"
        height="300"
        style="view-transition-name: hero1">

      <div class="bg-blue-500 w-56 h-56" style="view-transition-name: hero2">

      </div>
    </section>

  `
})
export default class ViewTransitionComponent {

}
