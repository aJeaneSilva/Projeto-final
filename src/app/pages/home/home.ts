import { Component } from '@angular/core';
import { Header } from "../../header/header";
import { Footer } from "../../footer/footer";

@Component({
  imports: [Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
