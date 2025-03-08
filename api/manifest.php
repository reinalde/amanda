{
  "name": "Meu PWA",
  "short_name": "MeuApp",
  "description": "Meu site como um app!",
  "start_url": "<?php echo $_SERVER['HTTP_REFERER'] ?>",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#ffffff",
  "icons": [
    {
      "src": "/192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}