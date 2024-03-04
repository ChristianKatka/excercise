import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.scss',
})
export class HomeComponent implements OnInit {
  appService = inject(AppService);

  booksSignal = this.appService.getBooks();
  ngOnInit() {}
}
