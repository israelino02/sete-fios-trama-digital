// Resolve "/lovable-uploads/<file>" paths to bundled assets so they work
// reliably across preview, publish, and custom-domain deployments.
const modules = import.meta.glob('/src/assets/uploads/*', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const map: Record<string, string> = {};
for (const [key, value] of Object.entries(modules)) {
  const name = key.split('/').pop();
  if (name) map[name] = value;
}

export function resolveUpload(path?: string): string | undefined {
  if (!path) return path;
  const prefix = '/lovable-uploads/';
  if (path.startsWith(prefix)) {
    const name = path.substring(prefix.length);
    return map[name] ?? path;
  }
  return path;
}

export function resolveUploads(paths?: string[]): string[] | undefined {
  if (!paths) return paths;
  return paths.map((p) => resolveUpload(p) ?? p);
}
