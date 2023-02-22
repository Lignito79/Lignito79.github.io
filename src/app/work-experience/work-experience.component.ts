import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {

  workExperience : Array<any> = [];

constructor() { }

ngOnInit(): void {

  let work1 = {
    fecha: "2018-2022",
    ubicacion: "Orizaba, Ver",
    puesto: "CEO",
    empresa: "Waves",
    logros : [
      { descripcion: "Dron autonomo" },
    ]
  };

  let work2 = {
    fecha: "2015-2018",
    ubicacion: "Ixtac, Ver",
    puesto: "CEO",
    empresa: "Kubeet",
    logros : [
      { descripcion: "Cluster hadoop" },
    ]
  };

  this.workExperience.push(work1);
  this.workExperience.push(work2);
}

}
