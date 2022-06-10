import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { User } from 'src/app/models/user';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor(private noticiaService: NoticiasService) { }
 
  listaNoticias = [] as Noticia[]
 
  ngOnInit(): void {
    this.carregarNoticias()
  }
  userModel = new User("","")
 
onSubmit(){
  console.log(this.userModel)
}

  carregarNoticias() {
    this.noticiaService.getNoticias().subscribe( (noticiasRecebidas: Noticia[]) => {
      this.listaNoticias = noticiasRecebidas;
      console.log(this.listaNoticias);
    } )
  }
 
}

