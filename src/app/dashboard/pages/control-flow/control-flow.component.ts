import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export default class ControlFlowComponent {

  public showContent = signal(true);
  public grade = signal("A");
  public frameworks = signal(["Angular", "Vue", "Svelte", "Qwik", "React"]);
  public frameworksEmpty = signal([]);

  public toogleContent(): void {
    this.showContent.update(value => !value);
  }

  public toogleGrade(): void {
    this.grade.set("B")
  }

}
