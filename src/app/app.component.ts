import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pagina_de_tienda';
  constructor(private api: HttpClient, private accountService: ApiService) {
  }
}
