// Helper to centralize the admin base path so it can be hidden behind a secret path.
// Set VITE_ADMIN_PATH in your .env (e.g. VITE_ADMIN_PATH=secret-admin-123) to change it.
export const ADMIN_PATH = (import.meta.env.VITE_ADMIN_PATH ?? 'admin').replace(/^\/+|\/+$/g, '');
export const ADMIN_BASE = `/${ADMIN_PATH}`;

export const adminRoute = (subpath?: string) => {
  if (!subpath || subpath === '') return ADMIN_BASE;
  const cleaned = subpath.replace(/^\/+/, '');
  return `${ADMIN_BASE}/${cleaned}`;
};

export default adminRoute;
