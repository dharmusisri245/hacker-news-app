

// import { Link } from "react-router-dom";

// import { Menu } from "lucide-react";

// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
// } from "../components/ui/sheet";

// import { Button } from "../components/ui/button";

// import { useAuth } from "../hooks/useAuth";

// const Navbar = () => {
//   const { user, logout } = useAuth();

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-2xl font-bold tracking-tight"
//         >
//           Hacker News
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-6">
//           <Link
//             to="/"
//             className="text-sm font-medium hover:text-blue-600 transition-colors"
//           >
//             Home
//           </Link>

//           {user && (
//             <Link
//               to="/bookmarks"
//               className="text-sm font-medium hover:text-blue-600 transition-colors"
//             >
//               Bookmarks
//             </Link>
//           )}

//           {!user ? (
//             <div className="flex items-center gap-3">
//               <Link to="/login">
//                 <Button
//                   variant="outline"
//                   className="rounded-xl"
//                 >
//                   Login
//                 </Button>
//               </Link>

//               <Link to="/register">
//                 <Button className="rounded-xl">
//                   Register
//                 </Button>
//               </Link>
//             </div>
//           ) : (
//             <Button
//               onClick={logout}
//               className="rounded-xl"
//             >
//               Logout
//             </Button>
            
//           )}
//         </div>

//         {/* Mobile Menu */}
//         <div className="md:hidden">
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="rounded-xl"
//               >
//                 <Menu className="w-5 h-5" />
//               </Button>
//             </SheetTrigger>

//             <SheetContent side="right">
//               <div className="flex flex-col gap-5 mt-10">
                
//                 <Link
//                   to="/"
//                   className="text-base font-medium"
//                 >
//                   Home
//                 </Link>

//                 {user && (
//                   <Link
//                     to="/bookmarks"
//                     className="text-base font-medium"
//                   >
//                     Bookmarks
//                   </Link>
//                 )}

//                 {!user ? (
//                   <>
//                     <Link to="/login">
//                       <Button
//                         variant="outline"
//                         className="w-full rounded-xl"
//                       >
//                         Login
//                       </Button>
//                     </Link>

//                     <Link to="/register">
//                       <Button className="w-full rounded-xl">
//                         Register
//                       </Button>
//                     </Link>
//                   </>
//                 ) : (
//                   <Button
//                     onClick={logout}
//                     className="rounded-xl"
//                   >
//                     Logout
//                   </Button>
//                 )}
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;



import { Link, useNavigate } from "react-router-dom";

import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../components/ui/sheet";

import { Button } from "../components/ui/button";

import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

     toast.success(
      "Logout successfully!"
    );

    navigate("/login");
    
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight"
        >
          Hacker News
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            Home
          </Link>

          {user && (
            <Link
              to="/bookmarks"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Bookmarks
            </Link>
          )}

          {!user ? (
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="rounded-xl"
                >
                  Login
                </Button>
              </Link>

              <Link to="/register">
                <Button className="rounded-xl">
                  Register
                </Button>
              </Link>
            </div>
          ) : (
            <Button
              onClick={handleLogout}
              className="rounded-xl"
            >
              Logout
            </Button>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-xl"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <div className="flex flex-col gap-5 mt-10">
                
                <Link
                  to="/"
                  className="text-base font-medium"
                >
                  Home
                </Link>

                {user && (
                  <Link
                    to="/bookmarks"
                    className="text-base font-medium"
                  >
                    Bookmarks
                  </Link>
                )}

                {!user ? (
                  <>
                    <Link to="/login">
                      <Button
                        variant="outline"
                        className="w-full rounded-xl"
                      >
                        Login
                      </Button>
                    </Link>

                    <Link to="/register">
                      <Button className="w-full rounded-xl">
                        Register
                      </Button>
                    </Link>
                  </>
                ) : (
                  <Button
                    onClick={handleLogout}
                    className="rounded-xl"
                  >
                    Logout
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;