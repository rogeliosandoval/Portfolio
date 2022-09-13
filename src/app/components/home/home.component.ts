import { Component, ElementRef, HostListener, ViewChild } from "@angular/core";

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss']
})

export class Home {
    @ViewChild('projectSection', { static: false }) projectSection!: ElementRef;
    @ViewChild('projectSectionMobile', { static: false }) projectSectionMobile!: ElementRef;

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
        {name:"firebase", class:"firebase"},
        {name:"photoshop", class:"photoshop"}
    ];

    @HostListener('window:scroll', ['$event']) onViewPortScroll() {
        //mobile show mission statement
        if (window.pageYOffset > 240) {
            this.two = true;
        }
        //mobile show skills
        if (window.pageYOffset > 785) {
            this.skills = true;
        }
    }

}