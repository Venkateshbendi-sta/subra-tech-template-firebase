import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sc-video',
  templateUrl: './sc-video.component.html',
  styleUrl: './sc-video.component.scss',
})
export class ScVideoComponent {
  @Input() autoplay = false;
  @Input() muted = false;
  @Input() controls = false;
  @Input() url: string = '';
  @Input() posterUrl!: string;
  
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  isPlay = false;
  showControlsFlag: boolean = true;

  palayOrPauseVieo() {
    this.isPlay = !this.isPlay;
    if (this.isPlay) {
      this.playVideo();
    } else {
      this.pauseVideo();
    }
  }
  playVideo() {

    this.videoPlayer.nativeElement.play();

  }

  pauseVideo() {
    this.videoPlayer.nativeElement.pause();
  }
  showControls() {
    this.showControlsFlag = true;
  }

  hideControls() {
    this.showControlsFlag = false;
  }
  toggleControls(status:boolean){
    this.controls = status;
  }
 
}
