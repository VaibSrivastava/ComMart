import { useFormik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import * as Yup from 'yup';
import useUserContext from "../UserContext";

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password : Yup.string().required('Password is Required')
});

const Login = () => {

  const { setLoggedIn } = useUserContext();

  // initializing formik
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password : ''
    },

    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);
      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'Login Success!!'
        });

        const data = await res.json();
        sessionStorage.setItem('user', JSON.stringify(data));
        setLoggedIn(true);

      }else if(res.status === 401){
        Swal.fire({
          icon : 'error',
          title : 'Login Failed!!',
          text: 'Email or Password is incorrect'
        })
      }else{
        Swal.fire({
          icon : 'error',
          title : 'Something went wrong!!'
        })
      }

      // submit values to the backend
    },

    validationSchema: loginSchema
  });

  return (
    <section className="vh-100" style={{ backgroundColor: "orange" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{ borderRadius: "1rem" }}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img
                src="https://tse3.mm.bing.net/th/id/OIP.6HNDVvWpdEfv_1m1_u9sHgHaGZ?pid=ImgDet&w=500&h=432&rs=1"
                alt="login form"
                className="img-fluid" 
                style={{ borderRadius: "1rem 0 0 1rem", width:1500, height:510 }}
              />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                <form onSubmit={loginForm.handleSubmit}>
                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i
                      className="fas fa-cubes fa-2x me-3"
                      style={{ color: "#ff6219" }}
                    />
                    <span className="h1 fw-bold mb-0 text-center" >Login Form</span>
                  </div>
                  <h5
                    className="fw-normal mb-3 pb-3"
                    style={{ letterSpacing: 1 }}
                  >
                    Sign into your account
                  </h5>
                  <div className="form-outline mb-4">
                  <p className="error-label">{loginForm.touched.email ? loginForm.errors.email : '' }</p>
                    <input
                      type="email"
                      name="email" onChange={loginForm.handleChange} value={loginForm.values.email}
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form2Example17">
                      Email address
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                  <p className="error-label">{loginForm.touched.password ? loginForm.errors.password : ''  }</p>
                    <input
                      type="password"
                      name="password" onChange={loginForm.handleChange} value={loginForm.values.password}
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form2Example27">
                      Password
                    </label>
                  </div>
                  <div className="pt-1 mb-4">
                    <button
                      className="btn btn-dark btn-lg btn-block"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Login;