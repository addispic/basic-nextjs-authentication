// action
// logout
import { logout } from "@/app/actions/authentications/auth";
export default function LogoutButton() {
  return (
    <form action={logout}>
      <button type="submit" className="px-3 py-0.5 bg-green-500 rounded-full text-sm text-white">
        Logout
      </button>
    </form>
  );
}
