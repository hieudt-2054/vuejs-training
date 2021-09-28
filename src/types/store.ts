import Input from './Input';

export interface RootState {
    app: ''
}

export interface Authentication {
    email: Input,
    password: Input,
    retypedPassword: Input,
    remembered: Input,
    username: Input,
    telephone: Input,
    type: Input,
    workingStart: Input,
    workingEnd: Input,
    address: Input
}