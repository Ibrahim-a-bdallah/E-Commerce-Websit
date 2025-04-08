import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { singInSchema, SingInType } from "@validation/signInValidation";
import { Form, Row, Col, Alert, Spinner } from "react-bootstrap";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@components/Form";
import { useAppDispatch, useAppSelector } from "@store/hook";
import actSignInAuth from "@store/signInAuth/act/actSignInAuth";
import { resetUI } from "@store/signInAuth/authSlice";
import { useEffect } from "react";

const Login = () => {
  const dispatch = useAppDispatch();

  const { loading, error, accessToken } = useAppSelector((state) => state.auth);

  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SingInType>({
    mode: "all",
    resolver: zodResolver(singInSchema),
  });
  const onSubmit: SubmitHandler<SingInType> = async (data) => {
    dispatch(actSignInAuth(data))
      .unwrap()
      .then(() => navigate("/"));
  };

  useEffect(() => {
    return () => {
      dispatch(resetUI());
    };
  }, [dispatch]);
  if (accessToken) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Row className="h-100 d-flex align-items-center">
        <Col md={{ span: 6, offset: 3 }}>
          {searchParams.get("message") ? (
            <Alert variant="success">{searchParams.get("message")}</Alert>
          ) : (
            ""
          )}
          <Form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-center mb-4">Login</h2>
            <Input
              label="Email"
              register={register}
              name="email"
              error={errors.email?.message}
            />
            <Input
              label="Password"
              type="password"
              register={register}
              name="password"
              error={errors.password?.message}
            />
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                {loading === "pending" ? (
                  <>
                    <Spinner animation="border" size="sm" /> loading
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </div>
            {error && (
              <div className="alert alert-danger mt-2" role="alert">
                {error}
              </div>
            )}
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Login;
