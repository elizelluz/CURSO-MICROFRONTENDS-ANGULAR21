import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../../shared/components/header/header.component';
@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.css',
})
export class ShellComponent {

}
