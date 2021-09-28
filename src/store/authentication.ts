import { RootState, Authentication } from './../types/store';
import Input from "@/types/Input";
import { GetterTree, Module, MutationTree } from "vuex";

const error = {
    error: false as boolean,
    errorMessage: '' as string
}

export const AuthenticationState: Authentication = {
    email: {
        value: '',
        label: 'Email',
        type: 'email',
        placeholder: 'example@service.com',
        rules: [
            (v: string) => !!v || 'E-mail is required',
            (v: string) => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        ...error
    } as Input,
    password: {
        value: '' as string,
        label: 'Password',
        type: 'password',
        placeholder: '6 characters minimum',
        rules: [
            (v: string) => !!v || 'Password is required',
            (v: string) => v && v.length >= 6 || 'Password must be more than 6 characters',
        ],
        ...error
    } as Input,
    remembered: {
        value: false as boolean,
        label: 'Remembered'
    } as Input,
    retypedPassword: {
        value: '' as string,
        label: 'Retyped your password',
        type: 'password',
        placeholder: 'Must match your inputted password',
        rules: [
            (v: string) => !!v || 'Password is required',
            (v: string) => v && v.length >= 6 || 'Password must be more than 6 characters'
        ],
        ...error
    } as Input,
    username: {
        value: '' as string,
        label: 'Username',
        type: 'text',
        placeholder: 'Hanoi Most Famous Pet Clinic',
        rules: [
            (v: string) => v && v.trim().length >= 2 || 'Username must be more than 2 characters'
        ],
        ...error
    } as Input,
    telephone: {
        value: '' as string,
        label: 'Telephone',
        type: 'tel',
        placeholder: '0123435667',
        ...error
    } as Input,
    type: {
        value: 'Clinic',
        label: 'Type',
        type: 'text',
        placeholder: 'Your store type',
        options: ['Clinic', 'Pet shop', 'Group']
    } as Input,
    workingStart: {
        value: 8,
        label: 'Open',
        type: 'time',
        placeholder: 0,
        appendIcon: '',
        ...error
    } as Input,
    workingEnd: {
        value: 17,
        label: 'Closed',
        type: 'time',
        appendIcon: '',
        ...error
    } as Input,
    address: {
        value: '',
        label: 'Address',
        type: 'selection',
        placeholder: 'Hanoi Most Famous Pet Clinic',
        rules: [
            (v: string) => v && v.trim().length >= 2 || 'Your address is invalid'
        ],
    } as Input
}

type InputTypes = 'email'|
                'password'|
                'retypedPassword'|
                'remembered'|
                'username'|
                'telephone'|
                'type'|
                'workingStart'|
                'workingEnd'|
                'address'
                
export const getters: GetterTree<Authentication, RootState> = {
    signInInputs: (state: Authentication):Input[] => {
        return [state.email, state.password]
    }
}
    
export const mutations: MutationTree<Authentication>= {
    updateInputValue(state, payload: { field: InputTypes, value: string | number | boolean }) {
        const {field, value} = payload
        state[field].value = value
    },
    setError(state, payload: { field: InputTypes, message?: string }) {
        const { field, message } = payload
        if (message) {
            state[field].error = true
            state[field].errorMessage = message
        } else {
            state[field].error = false
            state[field].errorMessage = ''
        }
    }
}

const authenticationStore: Module<Authentication, RootState>= {
    state: AuthenticationState,
    getters: getters,
    mutations: mutations,
    actions: {
    }
}

export default authenticationStore;
