import { useForm, SubmitHandler } from "react-hook-form";
import { singUpSchema, SingUpType } from "@validation/signUpValidation";
import { Form, Row, Col, Spinner } from "react-bootstrap";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@components/Form";
import useCheckEmailAvailability from "@hooks/useCheckEmailAvailability";
import { useAppDispatch, useAppSelector } from "@store/hook";
import actSignUpAuth from "@store/signInAuth/act/actSignUpAuth";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Register = () => {
  const dispatch = useAppDispatch();
  const { loading, error, accessToken } = useAppSelector((state) => state.auth);
  const [disable, setdisable] = useState(false);

  const navigated = useNavigate();
  const {
    register,
    handleSubmit,
    getFieldState,
    trigger,
    formState: { errors },
  } = useForm<SingUpType>({
    mode: "all",
    resolver: zodResolver(singUpSchema),
  });
  const {
    emailStatus,
    preveEmail,
    setEmailStatus,
    checkEmailAvailability,
    resetCheckEmailAvailability,
  } = useCheckEmailAvailability();

  const emailOnBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    await trigger("email");
    const enteredEmail = e.target.value;
    const { isDirty, invalid } = getFieldState("email");
    if (isDirty && !invalid && enteredEmail !== preveEmail) {
      setEmailStatus("checking");
      await checkEmailAvailability(enteredEmail);
    }
    if (isDirty && invalid && enteredEmail) {
      resetCheckEmailAvailability();
    }
  };
  useEffect(() => {
    if (error || emailStatus === "notAvailable") {
      setdisable(true);
    } else {
      setdisable(false);
    }
  }, [error, emailStatus]);
  const onSubmit: SubmitHandler<SingUpType> = (data) => {
    if (!disable) {
      const { firstName, lastName, email, password } = data;
      dispatch(actSignUpAuth({ firstName, lastName, email, password }))
        .unwrap()
        .then(() => navigated("/login?message=Now you can login"));
    }
  };
  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Row className="h-100 d-flex align-items-center">
        <Col md={{ span: 6, offset: 3 }}>
          <Form className="form" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="First Name"
              register={register}
              name="firstName"
              error={errors.firstName?.message}
            />
            <Input
              label="Last Name"
              register={register}
              name="lastName"
              error={errors.lastName?.message}
            />
            <Input
              label="Email"
              register={register}
              name="email"
              onBlur={emailOnBlurHandler}
              onChange={emailOnBlurHandler}
              error={
                errors.email?.message
                  ? errors.email?.message
                  : emailStatus === "notAvailable"
                  ? "This email is already in use."
                  : emailStatus === "failed"
                  ? "Error from the server."
                  : ""
              }
              sucsses={emailStatus === "available"}
              checking={emailStatus === "checking"}
              disabled={emailStatus === "checking"}
            />

            <Input
              label="Password"
              type="password"
              register={register}
              name="password"
              error={errors.password?.message}
            />
            <Input
              label="Confirm Password"
              type="password"
              register={register}
              name="confirmPassword"
              error={errors.confirmPassword?.message}
            />
            <button
              onClick={() => disable}
              type="submit"
              className={`btn ${disable ? "btn-secondary" : "btn-primary"}`}
            >
              {loading === "pending" ? (
                <>
                  <Spinner animation="border" size="sm" /> loading
                </>
              ) : (
                "Register"
              )}
            </button>
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

export default Register;
