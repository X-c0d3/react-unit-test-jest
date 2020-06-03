import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  getByLabelText,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import Login from './Login';

//jest.mock('./utils/getRandomQuote');

describe('Loing', () => {
  let inputUserName: any;
  let inputPassword: any;
  let buttonLogin: any;
  let textAlert: any;

  beforeEach(() => {
    const { getByTestId, getByText, container } = render(<Login />);
    // expect(getByText(data[0])).toHaveStyle(`color: ${defaultColor};`)
    //const passwordInput = getByLabelText(container, 'Password')

    inputUserName = getByTestId('input-username');
    inputPassword = getByTestId('input-password');
    buttonLogin = getByTestId('button-login');
    textAlert = getByTestId('text-alert');
  });

  describe('test initial', () => {
    it('userName is null', () => {
      expect(inputUserName.value).toBe('');
    });

    it('password is null', () => {
      expect(inputPassword.value).toBe('');
    });
  });

  describe('Check Form', () => {
    it('check input userName', () => {
      expect(inputUserName.placeholder).toBe('UserName');
    });

    it('check type userName', () => {
      expect(inputUserName.type).toBe('text');
    });

    it('check input password', () => {
      expect(inputPassword.placeholder).toBe('Password');
    });

    it('check type password', () => {
      expect(inputPassword.type).toBe('password');
    });

    it('check button login', () => {
      expect(buttonLogin.type).toBe('button');
    });
  });

  describe('Click Login', () => {
    beforeEach(() => {});

    it('Not fill any input (have alert message)', () => {
      fireEvent.click(buttonLogin);
      expect(textAlert.textContent).toBe('Please enter UserName & Password');
    });

    it('fill input userName  (have alert message)', () => {
      fireEvent.change(inputUserName, { target: { value: 'Unix' } });
      fireEvent.click(buttonLogin);
      expect(textAlert.textContent).toBe('Please enter Password');
    });

    it('fill input passWord  (have alert message)', () => {
      fireEvent.change(inputPassword, { target: { value: '1234' } });
      fireEvent.click(buttonLogin);
      expect(textAlert.textContent).toBe('Please enter UserName');
    });

    it('fill input userName & Password', () => {
      fireEvent.change(inputUserName, { target: { value: 'Unux' } });
      fireEvent.change(inputPassword, { target: { value: '1234' } });
      fireEvent.click(buttonLogin);
      expect(textAlert.textContent).toBe('');
    });
  });
});
