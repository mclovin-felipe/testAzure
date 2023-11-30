export { default } from "next-auth/middleware"
export const config = { matcher: ["/xd"] }
//para prod
// import { withAuth } from "next-auth/middleware";

// export default withAuth({
//   pages: {
//     signIn: "/auth/signin",
//   },
// });