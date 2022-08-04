import { Component, HostListener } from "@angular/core";

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss']
})

export class Home {
    two = false;
    skills = false;

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

    @HostListener('window:scroll', ['$event']) onViewPortScroll() {
        console.log(window.pageYOffset);
        if (window.pageYOffset > 25) {
            this.two = true;
        }
        if (window.pageYOffset > 700) {
            this.skills = true;
        }
    }

}