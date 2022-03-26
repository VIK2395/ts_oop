/* eslint-disable @typescript-eslint/no-empty-interface */
export {};

// for client, hide complexity of complex set of classes into simplified intrfaces(methods)
// also we avoid code dublication setting reusable code inside these methods

type VideoFormat = 'mp4' | 'avi';

class Video {
  constructor(public videoname: string, public format: VideoFormat) {}
}

interface ICompressionCodec {}

class MPEG4CompressionCodec implements ICompressionCodec {}

class AVICompressionCodec implements ICompressionCodec {}

class VideoCodec {
  getCompressionCodec(format: VideoFormat) {
    let codec: ICompressionCodec;

    switch (format) {
      case 'mp4':
        codec = new MPEG4CompressionCodec();
        break;
      case 'avi':
        codec = new AVICompressionCodec();
        break; /* not needed, but good practice*/
    }

    return codec;
  }

  extract(videoname: string): VideoCodec {
    return {} as VideoCodec;
  }

  convert(videoname: string, sourceCodec: VideoCodec, targetCodac: ICompressionCodec): Video {
    return {} as Video;
  }
}

// Facade
class VideoConverter {
  convert(videoname: string, format: VideoFormat): Video {
    const videoCodec: VideoCodec = new VideoCodec();

    const sourceCodec: VideoCodec = videoCodec.extract(videoname);
    const targetCodac: ICompressionCodec = videoCodec.getCompressionCodec(format);
    const video: Video = videoCodec.convert(videoname, sourceCodec, targetCodac);

    return video;
  }
}

const videoConvertor = new VideoConverter();
const video = videoConvertor.convert('funny-cats-video.avi', 'mp4');

console.log(video);
