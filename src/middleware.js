export { default } from "next-auth/middleware"
// export const config = { matcher: ["/resultados"] }
export const config = { matcher: ["/resultados", "/votar/:path*"] }