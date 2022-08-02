import { Component, HostListener } from "@angular/core";

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss']
})

export class Home {

    languages = [
        {name:"html", class:"html"},
        {name:"css", class:"css"},
        {name:"javascript", class:"javascript"},
        {name:"scss", class:"scss"},
        {name:"bootstrap", class:"bootstrap"},
        {name:"typescript", class:"typescript"},
        {name:"angular", class:"angular"},
        {name:"tailwind", class:"tailwind"},
        {name:"svelte", class:"svelte"},
        {name:"vscode", class:"vscode"},
        {name:"jquery", class:"jquery"},
        {name:"photoshop", class:"photoshop"}
    ];

}