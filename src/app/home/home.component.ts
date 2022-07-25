import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user!: User;

  constructor() { }

  ngOnInit(): void {
  }
  USUARIOS: User[] = [
    {
      id: 1,
      name: 'João',
      email: 'pessoa1@hotmail.com',
      imageUrl: '/assets/img/1.jpg',
    },
    {
      id: 2,
      name: 'Everton',
      email: 'pessoa2@hotmail.com',
      imageUrl: '/assets/img/2.jpg'
    },
    {
      id: 3,
      name: 'Lucas',
      email: 'pessoa3@hotmail.com',
      imageUrl: '/assets/img/3.jpg',
    },
    {
      id: 4,
      name: 'Felipe',
      email: 'pessoa4@hotmail.com',
      imageUrl:'/assets/img/4.jpg',
    },
    {
      id: 5,
      name: 'Andréa Mattos',
      email: 'pessoa5@hotmail.com',
      imageUrl: '/assets/img/5.jpg',
    },
    {
      id: 6,
      name: 'Camila De Souza',
      email: 'pessoa6@hotmail.com',
      imageUrl: '/assets/img/6.jpg',
    }
  ];

}
