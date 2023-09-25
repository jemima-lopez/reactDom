import { Navigate, Outlet } from "react-router-dom"

// eslint-disable-next-line react/prop-types, no-unused-vars
export const ProtectedRouter = ({isAllowed, children, redirectTo="/landing"}) => {
  // eslint-disable-next-line no-undef
  if(!isAllowed){
    return <Navigate to={redirectTo} />
  }

  return children ? children :  <Outlet />
}
