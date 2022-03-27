export {};

// https://refactoring.guru/design-patterns/proxy
// https://www.youtube.com/watch?v=TS5i-uPXLs8&list=PLlsmxlJgn1HJpa28yHzkBmUY-Ty71ZUGc&index=23

// Заменитель

/*  A proxy controls access to the target object, allowing you to perform something 
either before or after the request gets to the target object. Proxy can act instead of target object =>
The request may not achive the target object. This is the core difference from decorator. */

type VideoFormat = 'mp4' | 'avi' | 'flv';

class Video {
  constructor(public url: string, public format: VideoFormat = 'mp4') {}
}

// servise interface
interface IYouTubeVideoLoader {
  loadVideo(url: string): Video;
}

// real service
class YouTubeVideoLoader implements IYouTubeVideoLoader {
  loadVideo(url: string): Video {
    console.log(`Connectiong to ${url}`);
    console.log('Loading the video\n');
    return new Video(url);
  }
}

// proxy service
class CachedYouTubeVideoLoader implements IYouTubeVideoLoader {
  private cache: Map<string, Video>;
  private service: YouTubeVideoLoader;

  constructor(service: YouTubeVideoLoader) {
    this.cache = new Map();
    this.service = service;
  }

  loadVideo(url: string): Video {
    if (!this.cache.has(url)) {
      const video: Video = this.service.loadVideo(url);
      this.cache.set(url, video);
    }
    return this.cache.get(url);
  }
}

let youTubeVideoLoader: IYouTubeVideoLoader = new YouTubeVideoLoader();
youTubeVideoLoader = new CachedYouTubeVideoLoader(youTubeVideoLoader);

const videoLoad1: Video = youTubeVideoLoader.loadVideo('https://cats.com/video=4568');
console.log(videoLoad1);

const videoLoad2: Video = youTubeVideoLoader.loadVideo('https://cats.com/video=4568');
console.log(videoLoad2);

const videoLoad3: Video = youTubeVideoLoader.loadVideo('https://cats.com/video=4568');
console.log(videoLoad3);
