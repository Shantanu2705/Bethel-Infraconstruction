import fs from 'fs';
import path from 'path';

export default async function MediaInspector() {
  const mediaDir = path.join(process.cwd(), 'public', 'media', 'raw');
  const files = fs.readdirSync(mediaDir);
  
  const images = files.filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));
  const videos = files.filter(f => f.endsWith('.mp4') || f.endsWith('.webm'));

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Media Inspector</h1>
      
      <h2>Images ({images.length})</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {images.map(img => (
          <div key={img} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <img src={`/media/raw/${img}`} style={{ width: '100%', height: 'auto' }} alt={img} />
            <p style={{ fontSize: '12px', wordBreak: 'break-all' }}>{img}</p>
          </div>
        ))}
      </div>

      <h2>Videos ({videos.length})</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '20px' }}>
        {videos.map(vid => (
          <div key={vid} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <video src={`/media/raw/${vid}`} controls muted style={{ width: '100%', height: 'auto' }} />
            <p style={{ fontSize: '12px', wordBreak: 'break-all' }}>{vid}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
