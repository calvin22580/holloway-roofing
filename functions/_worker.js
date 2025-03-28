export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Handle assets and existing files
    try {
      // Try to serve the requested file
      return await env.ASSETS.fetch(request);
    } catch (e) {
      // If file doesn't exist, fall back to index.html
      return await env.ASSETS.fetch(`${url.origin}/index.html`);
    }
  }
}; 