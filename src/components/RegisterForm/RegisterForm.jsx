import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.formContainer}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label>
          Username
          <input type="text" name="name" placeholder="Jacob Mercer" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="name@mail.com" />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </label>
        <button className={css.formBtn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
