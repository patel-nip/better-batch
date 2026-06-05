export function getImageUrl(path) {
  if (!path) return '';
  if (import.meta.env.PROD) {
    const filename = path.substring(path.lastIndexOf('/') + 1);
    
    // Explicit override for the BYOB section image
    if (filename === 'Screenshot_20260604_234350_My Files(1)(1).jpg.jpeg') {
      return 'https://cdn.shopify.com/s/files/1/0661/0668/7531/files/Screenshot_20260604_234350_My_Files_1_1__jpg.jpg?';
    }
    
    // Explicit override for Hero slide 2 banner
    if (filename === 'bb_ui_banner_2.png') {
      return 'https://cdn.shopify.com/s/files/1/0661/0668/7531/files/bb_ui_banner_2.png?';
    }
    
    // Explicit override for Hero slide 3 banner
    if (filename === 'bb_ui_banner_3.png') {
      return 'https://cdn.shopify.com/s/files/1/0661/0668/7531/files/bb_ui_banner_3.png?';
    }
    
    const lastDotIdx = filename.lastIndexOf('.');
    if (lastDotIdx === -1) {
      let base = filename.replace(/[^a-zA-Z0-9_]/g, '_');
      if (base.endsWith('_')) {
        base = base.slice(0, -1);
      }
      return `https://cdn.shopify.com/s/files/1/0661/0668/7531/files/${base}?`;
    }
    let base = filename.substring(0, lastDotIdx);
    let ext = filename.substring(lastDotIdx + 1);
    
    // Replace all spaces, brackets, full stops, or other symbols with underscore
    base = base.replace(/[^a-zA-Z0-9_]/g, '_');
    
    // Strip trailing underscore if the base name ends with one (e.g. Gallery(1) becomes Gallery_1_ -> Gallery_1)
    if (base.endsWith('_')) {
      base = base.slice(0, -1);
    }
    
    if (ext.toLowerCase() === 'jpeg') {
      ext = 'jpg';
    }
    
    return `https://cdn.shopify.com/s/files/1/0661/0668/7531/files/${base}.${ext.toLowerCase()}?`;
  }
  return path;
}
