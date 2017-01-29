import {Component} from 'angular2/core';
import {Config} from './config.service';
import {PlaylistComponent} from './playlist.component';
import {Video} from './video';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos: Array<Video>;

    constructor(){
        this.videos = [
            new Video(1, "Test video 1", "f8qBeaGe2S4", "somedesc"),
            new Video(2, "Test video 2", "bKWDKmHvF78", "somedesc")
        ]
    }
}
