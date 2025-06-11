// import { useState } from "react";
// import { Button } from "@/components/ui/button";

// const LoginPage = () => {
//   const [isSignUp, setIsSignUp] = useState(false);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
//           {isSignUp ? "Create an Account" : "Welcome Back"}
//         </h2>

//         <form className="space-y-4">
//           {isSignUp && (
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full px-4 py-2 border rounded-md"
//             />
//           )}
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full px-4 py-2 border rounded-md"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full px-4 py-2 border rounded-md"
//           />

//           <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
//             {isSignUp ? "Sign Up" : "Login"}
//           </Button>
//         </form>

//         <p className="text-sm text-center mt-4 text-gray-600">
//           {isSignUp
//             ? "Already have an account?"
//             : "Don't have an account?"}
//           <button
//             onClick={() => setIsSignUp(!isSignUp)}
//             className="text-blue-600 hover:underline ml-1"
//           >
//             {isSignUp ? "Login" : "Sign Up"}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import { useState } from 'react';

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignUp ? 'Create an Account' : 'Login to Your Account'}
        </h2>

        <form className="space-y-4">
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <p className="text-sm mt-4 text-center">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-600 hover:underline font-medium"
          >
            {isSignUp ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
