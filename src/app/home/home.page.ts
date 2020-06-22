import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  currentIndex: number;
  results = [];
  lands = [
    {
      id: 0,
      language: "",
      name: "PlaneDos",
      image: "../../assets/PlaneDos.jpg",
      description: "test",
      visible: true
    },
    {
      id: 1,
      language: "EN",
      name: "Academy at Tolaria West",
      image: "../../assets/Planechase 2009/01_EN_Academy_at_Tolaria_West.jpg",
      description: "test",
      visible: true
    },
    {
      id: 2,
      language: "EN",
      name: "Aether Flues",
      image: "../../assets/Planechase 2009/02_EN_The_Aether_Flues.jpg",
      description: "test",
      visible: true
    },
    {
      id: 3,
      language: "EN",
      name: "Agyrem",
      image: "../../assets/Planechase 2009/03_EN_Agyrem.jpg",
      description: "test",
      visible: true
    },
  ];

  constructor() {
    this.currentIndex = this.lands.length - 1;
    console.log(this.currentIndex);
  }

  swiped(event: any, index: number) {
    console.log(this.lands[index].name + ' swiped ' + event);
    this.lands[index].visible = false;
    this.results.push(this.lands[index].name + ' swiped ' + event);
    this.currentIndex--;
  }


  swipeDown() {
    this.lands[this.currentIndex].visible = false;
    this.results.push(this.lands[this.currentIndex].name + ' swiped false');
    this.currentIndex--;
  }

  swipeUp() {
    this.lands[this.currentIndex].visible = true;
    this.results.push(this.lands[this.currentIndex].name + ' swiped true');
    this.currentIndex++;
  }
}
