import { useForm } from 'react-hook-form';
import logo from '../../assets/images/tarang_logo.jpg'
import { auth, } from '../../firebase.config';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Container, Card, Button, Form } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
  };

  if(!loading && user)  return <Navigate to="/admin" />

  return (
    <Container className="vh-100 d-flex flex-column justify-content-start align-items-center">
      <div className="mb-4 mt-5">
        <img src={logo} alt="Logo" height="72" />
      </div>

      <Card className="shadow-lg border-0 w-100 mt-4" style={{ maxWidth: '400px' }}>
        <Card.Body>
          <div className="text-center mb-4">
            <h1 className="h3 mb-2 font-weight-normal">Login</h1>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="userEmail" className="mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" {...register('email', { required: true })} className={errors.email && 'is-invalid'} />
              {errors.email && errors.email.type == 'required' && <span className="text-danger">This field is required</span>}
              {errors.email && errors.email.type == 'pattern' && <span className="text-danger">{errors.email.message}</span>}
            </Form.Group>

            <Form.Group controlId="userPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" {...register('password', { required: true })} className={errors.password && 'is-invalid'} />
              {errors.password && <span className="text-danger">This field is required</span>}
            </Form.Group>
            <Button className="w-100" color="primary" type="submit">Login</Button>
          </Form>
          <div className="text-center small m-2">Copyright &copy; Manglam Tarang Society 2023</div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginPage;
