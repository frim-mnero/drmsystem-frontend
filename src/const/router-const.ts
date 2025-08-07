export enum AppRoutes {
  Main = '/',
  Login = '/login',
  Register = '/register',
  Repass = '/repass',
  Confirm = '/confirm/:confirmId',
  NewPassword = '/newpassword/:repassId',
  NotFound = '/notfound',
  Dashboard = '/dashboard',
  Animals = '/animals',
  Accounts = '/accounts'
};

export const APP_START_ROUTE = AppRoutes.Dashboard;

