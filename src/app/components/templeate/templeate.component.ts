import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConuntriesService } from 'src/app/services/conuntries.service';

@Component({
  selector: 'app-templeate',
  templateUrl: './templeate.component.html',
  styleUrls: ['./templeate.component.css']
})
export class TempleateComponent implements OnInit {
  public user: any = {
    name: 'Andres',
    lastName: "Arevalo",
    email: "andresacelas@outlook.com",
    conuntry: 'COL'

  };
  public conuntries: any[];

  constructor(private conuntriesServices: ConuntriesService) { }

  public save(form: NgForm): void {
    const isValid = form.valid;
    if (!isValid) {
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }
    console.log(form.value);
    
  }

  private get() {
    this.conuntriesServices.getConuntries().subscribe((response: any) => {
      console.log(response);
      this.conuntries = response;
    })
  }

  ngOnInit(): void {
    this.get();
  }

}
