import { Component, Input } from "@angular/core";

@Component({
    selector: 'projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})

export class Projects {
    @Input() showMinna = false;
    @Input() showYthi = false;
    @Input() showAction = false;
    @Input() showSoundbox = false;
    @Input() showMapbox = false;
    @Input() showTodo = false;
    @Input() showHopper = false;

    triggerMinna() {
        this.showMinna = true;
    }

    triggerYthi() {
        this.showYthi = true;
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