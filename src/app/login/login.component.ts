import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient) { };

  account = "";
  password = "";

  getData() {
    let user = {
      account: "Mason",
      password: "bryant850210"
    }
    axios.post('http://localhost:8080/', user).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  ngOnInit(): void {
    this.getData();
  }
}
