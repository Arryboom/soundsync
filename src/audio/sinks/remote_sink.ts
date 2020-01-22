import { AudioSink } from './audio_sink';
import { AudioSource } from '../sources/audio_source';
import { RemoteSinkDescriptor } from './sink_type';
import { WebrtcPeer } from '../../communication/wrtc_peer';

export class RemoteSink extends AudioSink {
  type: 'remote' = 'remote';
  local: false = false;

  async linkSource(source: AudioSource) {
    this.peer.sendControllerMessage({
      type: 'createPipe',
      sourceUuid: source.uuid,
      sinkUuid: this.uuid,
    });
  }
  _startSink(source: AudioSource) {
  }
  _stopSink() {
  }

}
