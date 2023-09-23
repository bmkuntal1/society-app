import { Container, Card, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useForm } from 'react-hook-form';
import logo from '../../assets/images/tarang_logo.jpg'
import { auth, } from '../../firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';


const LoginPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues:{ email: 'bmkunta1@gmail.com', password: 'Pass@247' }  });

  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(auth, data.email, data.password);
  };

  return (
    <Container className="vh-100 d-flex flex-column justify-content-start align-items-center">
      <div className="mb-4 mt-5">
        <img src={logo} alt="Logo" height="72" />
      </div>

      <Card className="w-100 mt-4" style={{ maxWidth: '400px' }}>
        <CardBody>
          <div className="text-center mb-4">
            <h1 className="h3 mb-2 font-weight-normal">Login</h1>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Enter your email" {...register('email', {
                required: true, pattern: {
                  value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                  message: "Please enter a valid email address"
                }
              })} className={errors.password && 'is-invalid'} />
              {errors.email && errors.email.type == 'required' && <span className="text-danger">This field is required</span>}
              {errors.email && errors.email.type == 'pattern' && <span className="text-danger">{errors.email.message}</span>}
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="Enter your password" {...register('password', { required: true, minLength: 5 })} className={errors.password && "is-invalid"} />
              {errors.password && errors.password.type == 'required' && <span className="text-danger">Password must be at least 5 characters long</span>}
              {errors.password && errors.password.type == 'minLength' && <span className="text-danger">This field is required</span>}
            </FormGroup>
            <Button color="primary" type="submit" block>Login</Button>
          </Form>
          <div className="text-center small m-2">Copyright &copy; Manglam Tarang Society 2023</div>
        </CardBody>
      </Card>
    </Container>
  );
};

export default LoginPage;
