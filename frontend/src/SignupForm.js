// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Form.css';

// const SignupForm = () => {
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       // Send customer creation data to the customers endpoint
//       const customerResponse = await axios.post('http://localhost:5010/api/v1/customers/create', data);
//       alert(customerResponse.data.message || 'Customer created successfully!');

//       // Send customer ID and account type to the accounts endpoint
//       const accountData = {
//         CustomerID: data.CustomerID,
//         AccountType: data.AccountType,
//       };
//       const accountResponse = await axios.post('http://localhost:5010/api/v1/accounts/create', accountData);
//       alert(accountResponse.data.message || 'Account created successfully!');
//     } catch (error) {
//       console.error('Error during signup:', error);
//       alert(error.response?.data?.message || 'Error during signup');
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <label>Customer ID:</label>
//         <input
//           type="text"
//           placeholder="Enter Customer ID"
//           {...register('CustomerID', { required: 'Customer ID is required' })}
//         />
//         {errors.CustomerID && <p className="error">{errors.CustomerID.message}</p>}

//         <label>First Name:</label>
//         <input
//           type="text"
//           placeholder="Enter First Name"
//           {...register('FirstName', { required: 'First Name is required' })}
//         />
//         {errors.FirstName && <p className="error">{errors.FirstName.message}</p>}

//         <label>Last Name:</label>
//         <input
//           type="text"
//           placeholder="Enter Last Name"
//           {...register('LastName', { required: 'Last Name is required' })}
//         />
//         {errors.LastName && <p className="error">{errors.LastName.message}</p>}

//         <label>Address:</label>
//         <input
//           type="text"
//           placeholder="Enter Address"
//           {...register('Address', { required: 'Address is required' })}
//         />
//         {errors.Address && <p className="error">{errors.Address.message}</p>}

//         <label>Email:</label>
//         <input
//           type="email"
//           placeholder="Enter Email"
//           {...register('Email', {
//             required: 'Email is required',
//             pattern: {
//               value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//               message: 'Invalid email address',
//             },
//           })}
//         />
//         {errors.Email && <p className="error">{errors.Email.message}</p>}

//         <label>Phone:</label>
//         <input
//           type="tel"
//           placeholder="Enter Phone Number"
//           {...register('Phone', {
//             required: 'Phone number is required',
//             pattern: {
//               value: /^[0-9]{10,15}$/,
//               message: 'Phone number must be 10-15 digits',
//             },
//           })}
//         />
//         {errors.Phone && <p className="error">{errors.Phone.message}</p>}

//         <label>Branch ID (Optional):</label>
//         <input
//           type="text"
//           placeholder="Enter Branch ID"
//           {...register('BranchID')}
//         />

//         <label>Account Type:</label>
//         <select
//           {...register('AccountType', { required: 'Account type is required' })}
//         >
//           <option value="">Select Account Type</option>
//           <option value="Savings">Savings</option>
//           <option value="Current">Current</option>
//         </select>
//         {errors.AccountType && <p className="error">{errors.AccountType.message}</p>}


//         <label>Password:</label>
//         <input
//           type="password"
//           placeholder="Enter Password"
//           {...register('Password', {
//             required: 'Password is required',
//             pattern: {
//               value: /^(?=.*[A-Z])(?=.*\d).*$/,
//               message: 'Password must include at least one uppercase letter and one number',
//             },
//           })}
//         />
//         {errors.Password && <p className="error">{errors.Password.message}</p>}

//         <button type="submit">Signup</button>
//       </form>
//       <div className="login-redirect">
//         <p>Already have an account?</p>
//         <button className="login-button" onClick={() => navigate('/login')}>
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;

import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Send customer creation data to the customers endpoint
      const customerResponse = await axios.post('http://localhost:5010/api/v1/customers/create', data);
      alert(customerResponse.data.message || 'Customer created successfully!');

      // Send customer ID and account type to the accounts endpoint
      const accountData = {
        CustomerID: data.CustomerID,
        AccountType: data.AccountType,
      };
      const accountResponse = await axios.post('http://localhost:5010/api/v1/accounts/create', accountData);
      alert(accountResponse.data.message || 'Account created successfully!');
    } catch (error) {
      console.error('Error during signup:', error);
      alert(error.response?.data?.message || 'Error during signup');
    }
  };

  return (
    <div className="flex h-screen w-full">
      {/* Left section for image */}
      <div className="w-full sm:w-7/12 h-full overflow-hidden">
        <img
          src="/bank.png"
          alt="Bank Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right section for form */}
      <div className="w-full sm:w-5/12 h-full bg-[#3d2a1d] flex flex-col justify-start items-center p-8 sm:p-10 overflow-y-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl text-white">Sign Up</h1>
          <p className="text-lg text-gray-300">Create your account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full max-w-sm">
          <label className="text-white">Customer ID:</label>
          <input
            type="text"
            placeholder="Enter Customer ID"
            {...register('CustomerID', { required: 'Customer ID is required' })}
            className="p-3 rounded-lg border border-gray-400"
          />
          {errors.CustomerID && <p className="text-red-500">{errors.CustomerID.message}</p>}

          <label className="text-white">First Name:</label>
          <input
            type="text"
            placeholder="Enter First Name"
            {...register('FirstName', { required: 'First Name is required' })}
            className="p-3 rounded-lg border border-gray-400"
          />
          {errors.FirstName && <p className="text-red-500">{errors.FirstName.message}</p>}

          <label className="text-white">Last Name:</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            {...register('LastName', { required: 'Last Name is required' })}
            className="p-3 rounded-lg border border-gray-400"
          />
          {errors.LastName && <p className="text-red-500">{errors.LastName.message}</p>}

          <label className="text-white">Address:</label>
          <input
            type="text"
            placeholder="Enter Address"
            {...register('Address', { required: 'Address is required' })}
            className="p-3 rounded-lg border border-gray-400"
          />
          {errors.Address && <p className="text-red-500">{errors.Address.message}</p>}

          <label className="text-white">Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            {...register('Email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email address',
              },
            })}
            className="p-3 rounded-lg border border-gray-400"
          />
          {errors.Email && <p className="text-red-500">{errors.Email.message}</p>}

          <label className="text-white">Phone:</label>
          <input
            type="tel"
            placeholder="Enter Phone Number"
            {...register('Phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: 'Phone number must be 10-15 digits',
              },
            })}
            className="p-3 rounded-lg border border-gray-400"
          />
          {errors.Phone && <p className="text-red-500">{errors.Phone.message}</p>}

          <label className="text-white">Branch ID (Optional):</label>
          <input
            type="text"
            placeholder="Enter Branch ID"
            {...register('BranchID')}
            className="p-3 rounded-lg border border-gray-400"
          />

          <label className="text-white">Account Type:</label>
          <select
            {...register('AccountType', { required: 'Account type is required' })}
            className="p-3 rounded-lg border border-gray-400"
          >
            <option value="">Select Account Type</option>
            <option value="Savings">Savings</option>
            <option value="Current">Current</option>
          </select>
          {errors.AccountType && <p className="text-red-500">{errors.AccountType.message}</p>}

          <label className="text-white">Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            {...register('Password', {
              required: 'Password is required',
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d).*$/,
                message: 'Password must include at least one uppercase letter and one number',
              },
            })}
            className="p-3 rounded-lg border border-gray-400"
          />
          {errors.Password && <p className="text-red-500">{errors.Password.message}</p>}

          <button
            type="submit"
            className="px-6 py-3 text-xl font-semibold bg-[#a07a39] text-white rounded-lg hover:bg-[#8c6530] transition-colors"
          >
            Sign Up
          </button>
        </form>

        <div className="login-redirect mt-4">
          <p className="text-white">Already have an account?</p>
          <button
            className="login-button mt-2 px-6 py-3 text-white bg-[#a07a39] rounded-lg hover:bg-[#8c6530] transition-colors"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
