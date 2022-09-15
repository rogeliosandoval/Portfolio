import { Component, Input } from "@angular/core";

@Component({
    selector: 'projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})

export class Projects {
    @Input() showYthi = false;
    @Input() showMinna = false;
    @Input() showAction = false;
    @Input() showSoundbox = false;
    @Input() showMapbox = false;
    @Input() showTodo = false;
    @Input() showHopper = false;

    
    triggerYthi() {
        this.showYthi = true;
    }
    
    triggerMinna() {
        this.showMinna = true;
    }

    triggerAction() {
        this.showAction = true;
    }

    triggerSoundbox() {
        this.showSoundbox = true;
    }

    triggerMapbox() {
        this.showMapbox = true;
    }

    triggerTodo() {
        this.showTodo = true;
    }

    triggerHopper() {
        this.showHopper = true;
    }

}